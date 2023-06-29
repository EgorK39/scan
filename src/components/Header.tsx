import * as React from 'react';
import '../styles/Main/Header.scss';
import {Link, useLocation, Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {connect} from "react-redux";
import Footer from "./Footer";
import {useMediaQuery} from 'react-responsive';
import HeaderTable from "./Header/HeaderTable";


function Header(props) {
    const [active, setActive] = React.useState(false)
    const [isAuthenticatedByHeader, setIsAuthenticatedByHeader] = React.useState(true)

    const [loginDataState, setLoginDataState] = React.useState('')
    const [userLoginState, setUserLoginState] = React.useState('')

    const navigate = useNavigate();
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

    useEffect(() => {
        const loginData = JSON.parse(localStorage.getItem('loginData'))
        const userLogin = JSON.parse(localStorage.getItem('userLogin'))
        const today = new Date;
        if (loginData.accessToken && !(Date.parse(loginData.expire) <= Date.parse(today.toISOString()))) {
            setLoginDataState(loginData)
            setUserLoginState(userLogin)
        } else {
            const interval = setInterval(() => {
                const itemsLogin = JSON.parse(localStorage.getItem('loginData'));
                const userLogin = JSON.parse(localStorage.getItem('userLogin'))
                if (itemsLogin.accessToken && !(Date.parse(itemsLogin.expire) <= Date.parse(today.toISOString()))) {
                    setLoginDataState(itemsLogin)
                    setUserLoginState(userLogin)
                    clearInterval(interval)
                }
            }, 1500)
        }

    }, []);
    const exitFunc = () => {
        if (loginDataState && userLoginState) {
            localStorage.setItem('loginData', JSON.stringify(''))
            localStorage.setItem('userLogin', JSON.stringify(''))
            setLoginDataState('')
            setUserLoginState('')
            navigate('/');
            window.location.reload();
        } else {
            console.log('lD, uL', loginDataState, userLoginState)
        }
    }

    useEffect(() => {
        if (loginDataState && userLoginState) {
            console.log('alles ist okay')
        } else {
            setIsAuthenticatedByHeader(false)
        }
    }, [loginDataState, userLoginState])

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
                        {(props.isAuthenticated || isAuthenticatedByHeader) && (
                            <HeaderTable/>
                        )}
                        {(props.isAuthenticated || isAuthenticatedByHeader) ?
                            <div className={'sectionTwoAuthenticated'}>
                                <ul className={'ulHeaderAuthenticated'}>
                                    <li className={'liHeaderAuthOne'}>{JSON.parse(localStorage.getItem('userLogin'))}</li>
                                    <li onClick={event => {
                                        exitFunc()
                                    }} className={'liHeaderAuthTwo'}>Выйти
                                    </li>
                                </ul>
                                <img alt={'foto users'} className={'imgHeaderAuthenticated'}
                                     src={'./images/default.jpeg'}/>
                            </div> :
                            <ul className={'sectionTwo'}>
                                <li className={'btn-border-right section-hovered'}>
                                    <Link className={'btn-opacity'} to={'auth/register'}>Зарегистрироваться</Link>
                                </li>
                                <li className={'btn-change-color'}>
                                    <Link to={'auth/login'}>Войти</Link>
                                </li>
                            </ul>}

                    </>
                )}
                {isMobile && (props.isAuthenticated || isAuthenticatedByHeader) && (
                    <HeaderTable/>
                )
                }
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
                            {(props.isAuthenticated || isAuthenticatedByHeader) ?
                                <ul className={'sectionTwoMobile'}>
                                    <li onClick={event => {
                                        exitFunc()
                                    }} className={'btn-change-colorMobile'}>Выйти
                                    </li>
                                </ul>
                                :
                                <ul className={'sectionTwoMobile'}>
                                    <li className={'section-hoveredMobile'}>
                                        <Link to={'auth/register'}
                                              className="btn-opacityMobile">Зарегистрироваться</Link>
                                    </li>
                                    <li className={'btn-change-colorMobile'}>
                                        <Link to={'auth/login'}>Войти</Link>
                                    </li>
                                </ul>
                            }
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
            dispatch({
                type: "SETURLTOREDUX",
                payload: element
            })
        }
    })
)(Header);