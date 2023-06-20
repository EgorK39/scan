import * as React from "react";
import "../../styles/SearchPage/SearchPage.scss";
import TableSearchPage from "./tableSearchPage";


export default function SearchPage() {
    const [toggle, setToggle] = React.useState(false)

    const [innError, setInnError] = React.useState('Введите корректные данные')
    const [inn, setInn] = React.useState(false);

    const [numberInput, setNumberInput] = React.useState(false);
    const [numberInputError, setNumberInputError] = React.useState('Обязательное поле')
    const [num, setNum] = React.useState('');


    const [innData, setInnData] = React.useState('');

    const [liData, setLiData] = React.useState('Любая');


    const normalizeNumber = (value) => {
        return value.replace(/\s/g, "").match(/.{1,4}/g)?.join(" ").substring(0, 14) || ""
    }

    function func(value) {
        setInnData(value.replace(/\s/g, ""))
        if (/\D/.test(value.replace(/\s/g, ""))) {
            console.log('=========', value)
            setInn(true)
            setInnError('Введите корректные данные')
        } else {
            console.log('----------', value)
            setInnError('')
            setInn(false)

        }
    }

    function blurHandler(event) {
        switch (event.target.name) {
            case 'innInput':
                setInn(true)
                break;
            case 'numInput':
                setNumberInput(true)
                break;

        }
    }

    const ulClicked = (target) => {
        console.log('*****', target)
        setLiData(target.textContent)

    }

    function changeNum(value) {
        setNum(value.slice(0, 4));
        if (value > 0 && value < 1001) {
            setNumberInputError('')
        } else {
            setNum('1000')
        }
    }


    return (
        <div className={'searchPage'}>
            <div>
                <h1 className={'font-ferry'}>
                    Найдите необходимые<br/>
                    данные в пару кликов.
                </h1>
                <p>
                    Задайте параметры поиска.<br/>
                    Чем больше заполните, тем точнее поиск
                </p>
            </div>
            <div className={'searchForm'}>
                <div className={'searchFormSectionOne'}>
                    <div>
                        <p className={'innCompany'}>ИНН компании</p>
                        <input onChange={event => {
                            const {value} = event.target
                            event.target.value = normalizeNumber(value)
                            func(event.target.value)
                        }
                        } maxLength={14}
                               name={'innInput'}
                               placeholder={'7713 0000 3800'}
                               onBlur={event => blurHandler(event)}/>
                        {(inn && innError) &&
                            <p style={{
                                color: '#FF5959',
                                textAlign: "center",
                                margin: '5px 0'
                            }}>{innError}</p>}
                    </div>
                    <div className={'tonality'}>
                        <p>Тональность</p>
                        <input disabled={true} value={liData}/>
                        <img onClick={() => setToggle(!toggle)}
                             src={require("./images/Rectangle 32.svg")}/>
                        {toggle && (
                            <ul onClick={event => {
                                ulClicked(event.target)
                            }} className={"searchUl"}>
                                <li>Любая</li>
                                <li>Позитивная</li>
                                <li>Негативная</li>
                            </ul>
                        )}
                    </div>
                    <div>
                        <p className={'countOfDocs'}>Количество документов в выдаче</p>
                        <input className={'myNumInput'} name={'numInput'}
                               onBlur={event => blurHandler(event)}
                               onChange={event => {
                                   changeNum(event.target.value)
                               }}

                               type={"number"} placeholder={'От 1 до 1000'}
                               min={"0"} max={"1000"}
                               value={num}/>
                        {(numberInput && numberInputError) && (
                            <p style={{
                                color: '#FF5959',
                                textAlign: "center",
                                margin: '5px 0'
                            }}>{numberInputError}</p>
                        )}
                    </div>
                    <div>
                        <p className={'rangeOfSearch'}>Диапазон поиска</p>
                        <input type={"date"}/>
                        <input type={"date"}/>
                    </div>


                </div>
                <TableSearchPage/>

            </div>
        </div>
    )
}