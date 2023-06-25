import '../../styles/login/login.scss';
import * as React from 'react';
import FormAuth from "./FormAuth";
import {useMediaQuery} from "react-responsive";


function Login() {
    const isMobile = useMediaQuery({
        query: '(max-width: 699px)'
    })
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 700px)'
    })
    return (
        <section className={isDesktopOrLaptop ? 'sectionAuth' : 'sectionAuthMobile'}>
            {isDesktopOrLaptop && (
                <>
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
                </>)}
            {isMobile && (

                <div>
                    <div className={'mainAuthTextMobile'}>
                        <h1 className={'font-ferry'}>
                            Для оформления подписки<br/>
                            на тариф, необходимо<br/>
                            авторизоваться.
                        </h1>
                    </div>
                    <FormAuth/>
                    <div className={'mainAuthImgMobile'}>
                        <img src={require('./authImg/Characters.svg')}/>
                    </div>
                </div>


            )}

        </section>
    )
}

export default Login;
