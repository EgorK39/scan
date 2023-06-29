import * as React from 'react';
import Header from './Header';
import Main from "./Main";
import '../styles/Main/App.scss';
import {
    Route, Routes
} from "react-router-dom";
import Login from "./loginPage/Login";
import {connect} from "react-redux";
import FormRegister from "./loginPage/FormRegister";
import FormAuthMain from "./loginPage/FormAuthMain";
import MainSearchPage from "./SearchPage/MainSearchPage";
import ResultMainPage from "./resultPage/ResultMainPage";
import {useEffect} from "react";

function App(props) {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false)
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('loginData'));
        const today = new Date;
        if (items.accessToken && !(Date.parse(items.expire) <= Date.parse(today.toISOString()))) {
            setIsAuthenticated(true)
            console.log('items', items);
            console.log('Date.parse(items.expire)', Date.parse(items.expire))
            console.log('today', today)
            console.log('Datetoday', Date.parse(today.toISOString()))
            console.log('000today000', Date.parse(items.expire) - Date.parse(today.toISOString()))
            console.log('MinorMaxtoday', Date.parse(items.expire) <= Date.parse(today.toISOString()))
        } else {
            setIsAuthenticated(false)
            const interval = setInterval(() => {
                const items = JSON.parse(localStorage.getItem('loginData'));
                if (items.accessToken && !(Date.parse(items.expire) <= Date.parse(today.toISOString()))) {
                    setIsAuthenticated(true)
                    clearInterval(interval)
                }
            }, 1500)
        }

    }, []);

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Header isAuthenticated={isAuthenticated}/>}>
                    <Route index element={<Main/>}/>
                    <Route path={'auth/*'} element={<Login/>}>
                        <Route path={'login'} element={<FormAuthMain/>}/>
                        <Route path={'register'} element={<FormRegister/>}/>
                    </Route>
                    {isAuthenticated && (
                        <>
                            <Route path={'search'} element={<MainSearchPage/>}/>
                            <Route path={'result'} element={<ResultMainPage/>}/>
                        </>
                    )}

                </Route>
            </Routes>
        </>
    );

}

export default connect(
    state => ({
        reduxStorage: state,
    }),
    dispatch => ({})
)(App);