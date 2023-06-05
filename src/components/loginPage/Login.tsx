import '../../styles/login/login.scss';
import * as React from 'react';
import FormAuth from "./FormAuth";


function Login() {
    return (
        <section className={'sectionAuth'}>
            <div>
                <div className={'mainAuthText'}>
                    <h1 className={'font-ferry'}>
                        Для оформления подписки<br/>
                        на тариф, необходимо<br/>
                        авторизоваться.
                    </h1>
                </div>
                <div className={'mainAuthImg'}>
                    <img src={require('./authImg/Characters.svg')}/>
                </div>
            </div>
            <FormAuth/>
        </section>
    )
}

export default Login;
