import '../../styles/MainPages/MainContainerOne.scss';
import * as React from 'react';

function MainContainerOne() {
    return (
        <div className="flex-container">
            <div>
                <h1 className={'font-ferry'}>
                    сервис по поиску<br/>
                    публикаций<br/>
                    о компании<br/>
                    по его ИНН
                </h1>
                <p className={'komplexP'}>
                    Комплексный анализ публикаций, получение данных<br/>
                    в формате PDF на электронную почту.
                </p>
                <div className={'answerDiv'}>
                    <button className={'answerButton'}>Запросить данные</button>
                </div>
            </div>
            <div>
                <img className="rectangle" src="./images/Rectangle 13.svg"/>
                <img src="./images/2398%201.svg"/>
            </div>
        </div>
    )
}

export default MainContainerOne;