import * as React from 'react';
import '../styles/Main/Footer.scss';

function Footer() {
    return (
        <>
            <footer className={'footer font-inter'}>
                <div>
                    <img src={require('../images/eqw 1.svg')}/>
                </div>
                <div className={'footerDiv'}>
                    <ul className={'firstFooterUl'}>
                        <li><p className={'nowrap'}>г. Москва, Цветной б-р, 40</p></li>
                        <li><p>+7 495 771 21 11</p></li>
                        <li><p>info@skan.ru</p></li>
                    </ul>
                    <ul className={'secondFooterUl'}>
                        <li><p>Copyright. 2023</p></li>
                    </ul>

                </div>
            </footer>
        </>
    );
}

export default Footer;