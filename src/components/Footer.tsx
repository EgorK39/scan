import * as React from 'react';
import '../styles/Main/Footer.scss';

function Footer() {
    console.log('hi from footer');
    return (
        <footer className={'footer font-inter'}>
            <div>
                <img src="./images/eqw%201.svg"/>
            </div>
            <div className={'footerDiv'}>
                <ul>
                    <li><p>г. Москва, Цветной б-р, 40</p></li>
                    <li><p>+7 495 771 21 11</p></li>
                    <li><p>info@skan.ru</p></li>
                </ul>
                <ul>
                    <li><p>Copyright. 2023</p></li>
                </ul>

            </div>
        </footer>
    );
}

export default Footer;