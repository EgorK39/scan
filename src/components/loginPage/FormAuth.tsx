import '../../styles/login/FormAuth.scss';
import * as React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import FormAuthMain from "./FormAuthMain";
import FormRegister from "./FormRegister";
import {connect} from "react-redux";


function FormAuth(props) {
    return (
        <section className={'authForm font-inter'}>
            <div className={'authBtns'}>
                <Link to={'/login'}
                      className={'btn-auth-one'}>
                    Войти
                </Link>
                <Link to={'/register'} className={'btn-auth-two'}>
                    Зарегистрироваться
                </Link>
            </div>
            <Routes>
                <Route path={'/register'} element={<FormRegister/>}/>
                <Route path={'/login'} element={<FormAuthMain/>}/>
            </Routes>
            <img className={'lock'} src={require('./authImg/Group 1171274237.svg')}/>
        </section>
    )
}

export default connect(state => ({
        reduxStorage: state,
    }),
    dispatch => ({}))(FormAuth);