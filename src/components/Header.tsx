import * as React from 'react';
import '../styles/Main/Header.scss';
import {Link, useLocation, Outlet} from "react-router-dom";
import {useEffect} from "react";
import {connect} from "react-redux";
import Footer from "./Footer";

function Header(props) {
    const location = useLocation();

    const setToRedux = () => {
        props.addElement(location)
    }

    useEffect(() => {
        console.log('location', location);
        setToRedux()
    }, [])

    console.log('props.changeUrls', props.reduxStorage.changeUrls)
    console.log('props.changeTariffs', props.reduxStorage.changeTariffs)

    return (
        <>
            <div className={'header font-inter'}>
                <div>
                    <img src={require('../images/SGN_09_24_2022_1663968217400 1.svg')} alt='logo'/>
                </div>
                <ul className={'sectionOne'}>
                    <li className={'section-hovered'}>
                        <Link to={'/'}>Главная</Link>
                    </li>
                    <li className={'section-hovered'}>
                        <a href={'/#'}>Тарифы</a>
                    </li>
                    <li className={'section-hovered'}>
                        <a href={'/#'}>FAQ</a>
                    </li>
                </ul>
                <ul className={'sectionTwo'}>
                    <li className={'btn-border-right section-hovered'}>
                        <Link to={'auth/register'} className="btn-opacity">Зарегистрироваться</Link>
                    </li>
                    <li className={'btn-change-color'}>
                        <Link to={'auth/login'}>Войти</Link>
                    </li>
                </ul>
            </div>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default connect(
    state => ({
        reduxStorage: state,

    }),
    dispatch => ({
        addElement: (element) => {
            dispatch({type: "SETURLTOREDUX", payload: element})
        }
    })
)(Header);