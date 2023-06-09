import * as React from "react";
import "../../styles/SearchPage/SearchPage.scss";
import TableSearchPage from "./tableSearchPage";
import {useEffect} from "react";
import {useMediaQuery} from "react-responsive";
import BtnSearchPage from "./btnSearchPage";
import {connect} from "react-redux";
import loginData from "../../redux/Login";


function SearchPage(props) {
    const [toggle, setToggle] = React.useState(false)

    const [innError, setInnError] = React.useState('Введите корректные данные')
    const [inn, setInn] = React.useState(false);

    const [numberInput, setNumberInput] = React.useState(false);
    const [numberInputError, setNumberInputError] = React.useState('Обязательное поле')
    const [num, setNum] = React.useState('');


    const [innData, setInnData] = React.useState('');

    const [liData, setLiData] = React.useState('Любая');


    const [startDate, setStartDate] = React.useState('')
    const [endDate, setEndDate] = React.useState('')
    const [today, setToday] = React.useState('')

    const [dateError, setDateError] = React.useState('Введите корректные данные')
    const [formDate, setFormDate] = React.useState(false)
    const [dateErrorEnd, setDateErrorEnd] = React.useState('Введите корректные данные')
    const [formDateEnd, setFormDateEnd] = React.useState(false)


    const [formValid, setFormValid] = React.useState(false)


    const normalizeNumber = (value) => {
        return value.replace(/\s/g, "").match(/.{1,4}/g)?.join(" ").substring(0, 14) || ""
    }

    function func(value) {
        setInnData(value.replace(/\s/g, ""))
        if (/\D/.test(value.replace(/\s/g, ""))) {
            setInn(true)
            setInnError('Введите корректные данные')
        } else {
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
            case 'startDateInput':
                setFormDate(true)
                break;
            case 'endDateInput':
                // setFormDate(true)
                setFormDateEnd(true)
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


    useEffect(() => {
        setToday(new Date().toISOString().substring(0, 10))
        console.log('reduxStorage', props.reduxStorage.loginData)
    }, [])


    /* добавил dateErrorEnd */
    useEffect(() => {
        if (innError || numberInputError || dateError || dateErrorEnd) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [innError, numberInputError, dateError, dateErrorEnd])

    function changeDate(event) {

        switch (event.target.name) {
            case 'startDateInput':
                if (!event.target.value) {
                    setDateError('Введите корректные данные')
                } else {
                    if (Date.parse(event.target.value) > Date.parse(today)) {
                        setDateError('Введите корректные данные')
                    } else {
                        if (Date.parse(event.target.value) > Date.parse(endDate)) {
                            setDateError('Введите корректные данные')
                        } else {
                            setDateError('')
                            setStartDate(event.target.value)
                            console.log('endDate', endDate)
                            console.log('today', today)
                            console.log('event.target.value.length', event.target.value.length)
                        }
                    }
                }
                break;
            case 'endDateInput':
                if (!event.target.value) {
                    setDateErrorEnd('Введите корректные данные')
                } else {
                    if (Date.parse(event.target.value) > Date.parse(today)) {
                        setDateErrorEnd('Введите корректные данные')
                    } else {
                        if (Date.parse(event.target.value) < Date.parse(startDate)) {
                            setDateErrorEnd('Введите корректные данные')
                        } else {
                            setDateErrorEnd('')
                            setEndDate(event.target.value)
                            console.log('endDate', startDate)
                            console.log('today', today)
                        }
                    }
                }
                break;
        }


    }

    const isMobile = useMediaQuery({
        query: '(max-width: 699px)'
    })
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 700px)'
    })
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('loginData'));
        localStorage.setItem('encodedId', JSON.stringify(''))
        localStorage.setItem('loaded', JSON.stringify(''))

        if (items) {
            console.log('items', items);
        }
    }, []);


    return (
        <div className={'searchPage'}>
            <div className={'h1AndP'}>
                {isDesktopOrLaptop && (<h1 className={'font-ferry'}>
                    Найдите необходимые<br/>
                    данные в пару кликов.
                </h1>)}
                {isMobile && (<h1 className={'font-ferry'}>
                    Найдите<br/> необходимые<br/>
                    данные в пару<br/> кликов.
                </h1>)}

                {isDesktopOrLaptop && (<p>
                    Задайте параметры поиска.<br/>
                    Чем больше заполните, тем точнее поиск
                </p>)}
                {isMobile && (<><p>
                    Задайте параметры поиска.<br/>
                    Чем больше заполните,<br/>
                    тем точнее поиск
                </p>
                    <img className={'pictureOne'} src={require('./images/Document.svg')}/></>)}

            </div>
            <div className={'searchForm'}>
                <div className={'searchFormSectionOne'}>
                    <div className={'enterInn'}>
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
                    <div className={'enterDocs'}>
                        <p className={'countOfDocs'}>Количество документов в выдаче</p>
                        <input className={'myNumInput'} name={'numInput'} autoComplete={'off'}
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
                    <div className={'rangeOfSearchMobile'}>
                        <p className={'rangeOfSearch'}>Диапазон поиска</p>
                        <input name={'startDateInput'} value={startDate} onChange={event => changeDate(event)}
                               onBlur={event => blurHandler(event)}
                               type={"date"}/>
                        <input name={'endDateInput'} value={endDate} onChange={event => changeDate(event)}
                               onBlur={event => blurHandler(event)}
                               type={"date"}/>
                        {((formDate && dateError) || (formDateEnd && dateErrorEnd)) && (
                            <p style={{
                                color: '#FF5959',
                                textAlign: "center",
                                margin: '5px 0'
                            }}>{dateError}</p>
                        )}
                    </div>


                </div>
                {isDesktopOrLaptop && (
                    <TableSearchPage
                        btnToTable={formValid}
                        innData={innData}
                        numFromSearch={num}
                        anyData={liData}
                        startDateFromSearch={startDate}
                        endDateFromSearch={endDate}
                    />

                )}
                {isMobile && (
                    <BtnSearchPage
                        btnToBtn={formValid}
                        innData={innData}
                        numFromSearch={num}
                        anyData={liData}
                        startDateFromSearch={startDate}
                        endDateFromSearch={endDate}
                    />
                )}
            </div>
        </div>
    )
}

export default connect(
    state => ({
        reduxStorage: state,
    }),
    dispatch => ({})
)(SearchPage);