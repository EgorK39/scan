import * as React from "react";
import "../../styles/resultPage/resultMainPageFirstSection.scss";
import {useMediaQuery} from "react-responsive";


export default function ResultMainPageFirstSection() {
    const isMobile = useMediaQuery({
        query: '(max-width: 699px)'
    })
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 700px)'
    })
    return (
        <div className={'resultMainPageFirstSection'}>
            <div>
                <h1 className={'font-ferry'}>Ищем. Скоро<br/>
                    будут результаты</h1>
                <p className={'resultPageP'}>Поиск может занять некоторое время,<br/>
                    просим сохранять терпение.</p>
            </div>
            <div className={'resultPageImg'}>
                <img src={require('./images/Group 1171274267.svg')}/>
            </div>
        </div>
    )
}