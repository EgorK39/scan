import * as React from "react";
import "../../styles/resultPage/resultMainPageFirstSection.scss";


export default function ResultMainPageFirstSection() {
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