import * as React from 'react';
import '../styles/Main/Header.scss';
import {Link, useLocation, Outlet} from "react-router-dom";
import {useEffect} from "react";
import {connect} from "react-redux";
import Footer from "./Footer";
import {useMediaQuery} from 'react-responsive';

function Header(props) {
    const location = useLocation();
    const isMobile = useMediaQuery({
        query: '(max-width: 699px)'
    })
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 700px)'
    })

    const setToRedux = () => {
        props.addElement(location)
    }

    useEffect(() => {
        console.log('location', location);
        setToRedux()
    }, [])

    useEffect(() => {
        setActive(false)
    }, [isDesktopOrLaptop, isMobile, location])

    console.log('props.changeUrls', props.reduxStorage.changeUrls)
    console.log('props.changeTariffs', props.reduxStorage.changeTariffs)
    const [active, setActive] = React.useState(false)
    return (
        <>
            <div className={'header font-inter'}>
                <div>{active ?
                    <img className={'logoHeader'} src={require('./images/eqw 1.svg')}
                         alt='logo'/> :
                    <img className={'logoHeader'} src={require('../images/SGN_09_24_2022_1663968217400 1.svg')}
                         alt='logo'/>}

                </div>
                {isDesktopOrLaptop && (
                    <>
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
                                <Link className={'btn-opacity'} to={'auth/register'}>Зарегистрироваться</Link>
                            </li>
                            <li className={'btn-change-color'}>
                                <Link to={'auth/login'}>Войти</Link>
                            </li>
                        </ul>
                    </>
                )}
                {isMobile && (
                    <>
                        {active ? <img onClick={event => {
                                setActive(!active)
                            }} className={'MobileImg'} src={require("./images/Group 6.svg")}/> :
                            <img onClick={event => {
                                setActive(!active)
                            }} className={'MobileImg'} src={require("./images/Group 4.svg")}/>}
                        <div className={active ? 'MobileBar' : 'disabledBar'}>
                            <ul className={'sectionOneMobile'}>
                                <li className={'section-hoveredMobile'}>
                                    <Link to={'/'}>Главная</Link>
                                </li>
                                <li className={'section-hoveredMobile'}>
                                    <a href={'/#'}>Тарифы</a>
                                </li>
                                <li className={'section-hoveredMobile'}>
                                    <a href={'/#'}>FAQ</a>
                                </li>
                            </ul>
                            <ul className={'sectionTwoMobile'}>
                                <li className={'section-hoveredMobile'}>
                                    <Link to={'auth/register'} className="btn-opacityMobile">Зарегистрироваться</Link>
                                </li>
                                <li className={'btn-change-colorMobile'}>
                                    <Link to={'auth/login'}>Войти</Link>
                                </li>
                            </ul>
                        </div>
                    </>
                )}

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