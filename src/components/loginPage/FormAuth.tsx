import '../../styles/login/FormAuth.scss';
import * as React from 'react';
import {Link, Outlet} from "react-router-dom";
import {connect} from "react-redux";


function FormAuth(props) {
    return (
        <section className={'authForm font-inter'}>
            <div className={'authBtns'}>
                <Link to={'login'} className={'btn-auth-one'}>
                    Войти
                </Link>
                <Link to={'register'} className={'btn-auth-two'}>
                    Зарегистрироваться
                </Link>
            </div>
            <Outlet/>
            <img className={'lock'} src={require('./authImg/Group 1171274237.svg')}/>
        </section>
    )
}

export default connect(state => ({
        reduxStorage: state,
    }),
    dispatch => ({}))(FormAuth);