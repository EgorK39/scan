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

function App(props) {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Header/>}>
                    <Route index element={<Main/>}/>
                    <Route path={'auth/*'} element={<Login/>}>
                        <Route path={'login'} element={<FormAuthMain/>}/>
                        <Route path={'register'} element={<FormRegister/>}/>
                    </Route>
                    <Route path={'search'} element={<MainSearchPage/>}/>
                    <Route path={'result'} element={<ResultMainPage/>}/>
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