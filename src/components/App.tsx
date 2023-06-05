import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from "./Main";
import '../styles/Main/App.scss';
import {
    Route, Routes
} from "react-router-dom";
import Login from "./loginPage/Login";
import {connect} from "react-redux";

function App(props) {


    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/login'}
                       element={<Login/>}/>
                <Route path={'*'}
                       element={<Main/>}/>
            </Routes>
            <Footer/>
        </>
    );

}

export default connect(
    state => ({
        reduxStorage: state,
    }),
    dispatch => ({})
)(App);