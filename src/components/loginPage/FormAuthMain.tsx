import * as React from 'react';
import '../../styles/login/FormAuthMain.scss';
import {Link} from "react-router-dom";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import {useEffect} from "react";

export default function FormAuthMain() {
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


    useEffect(() => {
        if (loginError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }

    }, [loginError, passwordError])

    function funcLogin(value) {
        setLogin(value)
        if (login[0] === '+') {
            setPlaceholder('+79097880981')
            setType('tel')
            if (/\D/.test(value.slice(1))) {
                console.log('value', value)
                console.log('value.slice(1)', value.slice(1))
                setLoginFalseOrTrue(true)
                setLoginError('Введите корректные данные')
                myRefLog('error', loginFalseOrTrue)
            } else {
                setLoginError('')
                myRefLog('', loginFalseOrTrue)
                setLoginFalseOrTrue(false)

            }

        } else {
            setPlaceholder('myDiploma')
            setType('text')
            if (value.length < 1 && value.length > 16) {
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

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 15) {
            if (!e.target.value) {
                setPasswordFalseOrTrue(true)
                setPasswordError('Неправильный пароль')
                myRefPassword('error', passwordFalseOrTrue)
            }
        } else {
            console.log('ok')
            setPasswordFalseOrTrue(false)
            setPasswordError('')
            myRefPassword('', passwordFalseOrTrue)

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
                                   name={'password'} type={"password"}
                                   ref={refPass} placeholder={'Введите Ваш пароль'} required/>
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
                <button disabled={!formValid}>
                    Войти
                </button>
                <Link to={'/#'} className={'rebornPassword'}>Восстановить пароль</Link>
            </div>
            <div className={'entryByWhat'}>
                <p>Войти через:</p>
                <button><img src={require('./authImg/google-2015.svg')}/></button>
                <button><img src={require('./authImg/facebook-5.svg')}/></button>
                <button><img src={require('./authImg/yandex-logo-2021-russian-2.svg')}/></button>
            </div>
        </>
    )
}