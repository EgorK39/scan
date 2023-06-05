import '../styles/MainPages/Main.scss';
import * as React from "react";
import MainContainerOne from './mainPage/MainContainerOne';
import MainContainerTwo from './mainPage/MainContainerTwo';
import MainContainerTree from './mainPage/MainContainerTree';
import MainContainerFour from './mainPage/MainContainerFour';

function Main() {
    return (
        <>
            <MainContainerOne/>
            <MainContainerTwo/>
            <MainContainerTree/>
            <MainContainerFour/>
        </>
    );
}

export default Main;