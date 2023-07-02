import * as React from 'react';
import '../../styles/login/FormAuthMain.scss';
import {Link, useNavigate} from "react-router-dom";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import {useEffect} from "react";
import {connect} from "react-redux";
import axios from "axios";

function FormAuthMain(props) {
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');


    const [placeholder, setPlaceholder] = React.useState('myDiploma')
    const [type, setType] = React.useState('');

    const [loginFalseOrTrue, setLoginFalseOrTrue] = React.useState(false);
    const [passwordFalseOrTrue, setPasswordFalseOrTrue] = React.useState(false);

    const [loginError, setLoginError] = React.useState('Введите корректные данные')
    const [passwordError, setPasswordError] = React.useState('Неправильный пароль');

    const refLog = React.useRef(null);
    const refPass = React.useRef(null);
    const [formValid, setFormValid] = React.useState(false)

    const baseUlr = 'https://gateway.scan-interfax.ru';

    useEffect(() => {
        if (loginError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }

    }, [loginError, passwordError])

    function funcLogin(value) {
        setLogin(value.replace(/\s/g, ""))
        if (login.length < 4) {
            setLoginFalseOrTrue(true)
            setLoginError('Введите корректные данные')
            myRefLog('error', loginFalseOrTrue)
        } else {
            if (login[0] === '+') {
                setPlaceholder('+79097880981')
                setType('tel')
                if (/\D/.test(login.slice(1))) {
                    console.log('login', login)
                    console.log('login.slice(1)', login.slice(1))
                    setLoginFalseOrTrue(true)
                    setLoginError('Введите корректные данные')
                    myRefLog('error', loginFalseOrTrue)
                } else {
                    console.log('login', login)
                    setLoginError('')
                    myRefLog('', loginFalseOrTrue)
                    setLoginFalseOrTrue(false)

                }

            } else {
                setPlaceholder('myDiploma')
                setType('text')
                if (login.length < 3 && login.length > 16) {
                    setLoginFalseOrTrue(true)
                    setLoginError('Введите корректные данные')
                    myRefLog('error', loginFalseOrTrue)
                } else {
                    setLoginError('')
                    myRefLog('', loginFalseOrTrue)
                    setLoginFalseOrTrue(false)

                }
            }
        }

    }

    const passwordHandler = (e) => {
        setPassword(e.target.value.replace(/\s/g, ''))
        if (password.length < 3) {
            setPasswordFalseOrTrue(true)
            setPasswordError('Неправильный пароль')
            myRefPassword('error', passwordFalseOrTrue)
        } else {
            if (password.length < 3 || password.length > 15) {
                if (!password) {
                    setPasswordFalseOrTrue(true)
                    setPasswordError('Неправильный пароль')
                    myRefPassword('error', passwordFalseOrTrue)
                }
            } else {
                console.log('ok', password)
                setPasswordFalseOrTrue(false)
                setPasswordError('')
                myRefPassword('', passwordFalseOrTrue)

            }
        }


    }

    function myRefLog(error, bool) {
        if (error && bool) {
            refLog.current.classList.add('bc')

        } else {
            refLog.current.classList.remove('bc')

        }
    }

    function myRefPassword(error, bool) {
        if (error && bool) {
            refPass.current.classList.add('bc')

        } else {
            refPass.current.classList.remove('bc')

        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'loginOrTel':
                setLoginFalseOrTrue(true)
                myRefLog(loginError, true)
                break;
            case 'password':
                setPasswordFalseOrTrue(true)
                myRefPassword(passwordError, true)
                break;


        }

    }

    /* LOGIN content*/
    /*login: 'sf_student4', password: 'Br1+tbG' */
    // "login": String(login), "password": String(password),
    const navigate = useNavigate();
    const [status, setStatus] = React.useState(false)
    const [resData, setResData] = React.useState(
        {
            accessToken: '',
            expire: ''
        })
    const myFunc = (res) => {
        localStorage.removeItem('loginData')
        setResData({
            accessToken: res.data.accessToken,
            expire: res.data.expire
        })
        if (res.status === 200) {
            setStatus(true)
        } else {
            console.log('res.status', res.status)
        }
        // console.log('data', res)
        // console.log('data typeof', typeof res)
        // console.log('accessToken', res.data.accessToken)
        // console.log('expire', res.data.expire)
        // console.log('loginData', JSON.stringify(resData))


    }
    useEffect(() => {
        if (localStorage.getItem('loginData')) {
        } else {
            localStorage.setItem('loginData', JSON.stringify(resData))
            localStorage.setItem('encodedId',JSON.stringify(''))
        }

    }, [resData])

    useEffect(() => {
        if (resData.accessToken && status) {
            localStorage.setItem('userLogin', JSON.stringify(login))
            navigate('/search');
        }
    }, [resData, status])
    const sendRequest = (event) => {
        const response = axios.post(`${baseUlr}/api/v1/account/login`, JSON.stringify({
            "login": String(login), "password": String(password),
        }), {
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => {
                myFunc(res)
                return res;
            })

            .catch(err => {
                console.log('err', err)
            })
        console.log('response', response)


    }
    /* LOGIN content END*/

    return (
        <>
            <div className={'login-and-password'}>
                <form method={"POST"} action={'/#'}>
                    <div className={'login'}>
                        <p>Логин или номер телефона:</p>
                        <div>
                            <input onBlur={event => blurHandler(event)} name={'loginOrTel'} required value={login}
                                   maxLength={12}
                                   placeholder={placeholder} type={type}
                                   onChange={e => funcLogin(e.target.value)}
                                   ref={refLog}/>
                            {(loginFalseOrTrue && loginError) &&
                                <p style={{
                                    color: '#FF5959',
                                    textAlign: "center",
                                    margin: '5px 0'
                                }}>{loginError}</p>}
                        </div>
                    </div>

                    <div className={'password'}>
                        <p> Пароль:</p>
                        <div>
                            <input onBlur={event => blurHandler(event)} onChange={e => passwordHandler(e)}
                                   name={'password'} type={"password"} value={password}
                                   ref={refPass} placeholder={'Введите Ваш пароль'} maxLength={16} required/>
                            {(passwordFalseOrTrue && passwordError) &&
                                <p style={{
                                    color: '#FF5959',
                                    textAlign: "center",
                                    margin: '5px 0'
                                }}>{passwordError}</p>}
                        </div>
                    </div>
                </form>

            </div>
            <div className={'entryBtn'}>
                <button disabled={!formValid} onClick={event => sendRequest(event)}>
                    Войти
                </button>

                <Link to={'/#'} className={'rebornPassword'}>Восстановить пароль</Link>
            </div>
            <div className={'entryByWhat'}>
                <p>Войти через:</p>
                <div className={'entryByWhatMobile'}>
                    <button><img src={require('./authImg/google-2015.svg')}/></button>
                    <button><img src={require('./authImg/facebook-5.svg')}/></button>
                    <button><img src={require('./authImg/yandex-logo-2021-russian-2.svg')}/></button>

                </div>
            </div>
        </>
    )
}

export default connect(
    state => ({
        reduxStorage: state,
    }),
    dispatch => ({
        setToReduxLogin: (element) => {
            dispatch({
                type: 'setSuccessLogin',
                payload: element
            })
        }
    })
)(FormAuthMain);