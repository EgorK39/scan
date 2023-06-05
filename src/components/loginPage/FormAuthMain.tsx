import * as React from 'react';
import '../../styles/login/FormAuthMain.scss';

export default function FormAuthMain() {
    return (
        <>
            <div className={'login-and-password'}>
                <div className={'login'}>
                    <p>Логин или номер телефона:</p>
                    <div>
                        <input/>
                    </div>
                </div>
                <div className={'password'}>
                    <p> Пароль:</p>
                    <div>
                        <input/>
                    </div>
                </div>

            </div>
            <div className={'entryBtn'}>
                <button>
                    Войти
                </button>
                <p className={'rebornPassword'}>Восстановить пароль
                </p>
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