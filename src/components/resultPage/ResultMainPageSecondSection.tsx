import * as React from "react";
import "../../styles/resultPage/resultMainPageSecondSection.scss";
import {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";
import {connect} from "react-redux";
import * as moment from "moment";


const ResultMainPageSecondSection = (props) => {
    const [count, setCount] = useState(0)

    const [foundVariants, setFoundVariants] = useState(0)


    const ref = React.useRef(null);


    const isMobile = useMediaQuery({
        query: '(max-width: 699px)'
    })
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 700px)'
    })
    useEffect(() => {
        // const totalDocuments = props.reduxStorage.HistogramsData.totalDocuments[0]
        // const riskFactors = props.reduxStorage.HistogramsData.riskFactors[0]


        if (props.reduxStorage.HistogramsData.totalDocuments[0] && props.reduxStorage.HistogramsData.riskFactors[0]) {
            localStorage.setItem('TotalDocuments', JSON.stringify(props.reduxStorage.HistogramsData.totalDocuments[0]))
            localStorage.setItem('riskFactors', JSON.stringify(props.reduxStorage.HistogramsData.riskFactors[0]))
        } else {
            console.log('empty')
        }

        // console.log('props.reduxStorage.HistogramsData', props.reduxStorage.HistogramsData)
        // console.log('props.reduxStorage.HistogramsData.totalDocuments', props.reduxStorage.HistogramsData.totalDocuments)
        // console.log('props.reduxStorage.HistogramsData.riskFactors', props.reduxStorage.HistogramsData.riskFactors)
        // console.log('props.reduxStorage.HistogramsData.totalDocuments[0]', totalDocuments)
        // console.log('props.reduxStorage.HistogramsData.riskFactors[0]', riskFactors)
        // console.log('props.reduxStorage.HistogramsData.totalDocuments[0].length', props.reduxStorage.HistogramsData.totalDocuments[0].length)

        // console.log('props.reduxStorage.HistogramsData.totalDocuments', props.reduxStorage.HistogramsData.totalDocuments[0].map(el => {
        //     console.log(el)
        // }))

        // if (totalDocuments && riskFactors) {
        //     let firsti = 0
        //     let secondi = 0
        //     for (let i = 0; i < totalDocuments.length; i++) {
        //         firsti += totalDocuments[i].value
        //         secondi += riskFactors[i].value
        //     }
        //     setFoundVariants(firsti + secondi)
        // } else {
        //     console.log('в другой раз')
        // }

    }, [])

    useEffect(() => {
        const totalDocuments = JSON.parse(localStorage.getItem('TotalDocuments'))
        const riskFactors = JSON.parse(localStorage.getItem('riskFactors'))

        if (totalDocuments && riskFactors) {
            let firsti = 0
            let secondi = 0
            for (let i = 0; i < totalDocuments.length; i++) {
                firsti += totalDocuments[i].value
                secondi += riskFactors[i].value
            }
            setFoundVariants(firsti + secondi)
        } else {
            console.log('в другой раз')
        }
    }, [])

    useEffect(() => {
        // console.log('myRef', ref)
        setCount(0)
    }, [isDesktopOrLaptop, isMobile])

    function myOnClickFunction(e) {
        // console.log('778999999', e)
        // console.log('778999999target', e.target)
        // console.log('ref.current.children.length', ref.current.children.length)

        switch (e.target.className) {
            case 'imgBtnLeft':
                if (isDesktopOrLaptop) {
                    if (count === (ref.current.offsetWidth - 810)) {
                        setCount(0)
                    } else {
                        setCount(count + 135)
                    }
                } else if (isMobile) {
                    if (count === ref.current.children[0].clientWidth * (ref.current.children.length - 1)) {
                        setCount(0)
                    } else {
                        setCount(count + ref.current.children[0].clientWidth)
                    }
                }
                break;
            case 'imgBtnRight':
                if (isDesktopOrLaptop) {
                    if (count === 0) {
                        setCount(ref.current.offsetWidth - 810)
                    } else {
                        setCount(count - 135)
                    }
                } else if (isMobile) {
                    if (count === 0) {
                        setCount(ref.current.children[0].clientWidth * (ref.current.children.length - 1))
                    } else {
                        setCount(count - ref.current.children[0].clientWidth)
                    }
                }
                break;

        }

    }

    return (
        <div className={'resultMainPageSecondSection'}>
            <div className={'generalInformation'}>
                <h1>Общая сводка</h1>
                <span>Найдено {foundVariants} вариантов</span>
            </div>
            <div className={'resultPageContainer'}>
                <div className={'resultPageContainerTwo'}>
                    <img onClick={event => {
                        myOnClickFunction(event)
                    }} className={'imgBtnLeft'}
                         src={require('./images/icons8-шеврон-вправо-90 1.svg')}/>
                    <div className={'resultPageСarousel'}>
                        <div className={'firstBlockСarousel'}>
                            <table className={'firstBlockСarouselTable font-inter'}>
                                <tbody className={'myTbody'}>
                                <tr>
                                    <td>Период</td>
                                </tr>
                                <tr>
                                    <td>Всего</td>
                                </tr>
                                <tr>
                                    <td>Риски</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div ref={ref} style={{transform: `translateX(-${count}px)`}}
                             className={'mainBlockСarousel font-inter'}>
                            {JSON.parse(localStorage.getItem('TotalDocuments')) ?
                                JSON.parse(localStorage.getItem('TotalDocuments')).map((element, index) =>
                                    <table key={element.date} className={'secondBlockСarouselTable'}>
                                        <tbody className={'myTbody'}>
                                        <tr>
                                            <td>
                                                {moment(element.date.substring(0, 10)).format('L')}</td>
                                        </tr>
                                        <tr>
                                            <td>{element.value}</td>
                                        </tr>
                                        <tr>
                                            <td>{JSON.parse(localStorage.getItem('riskFactors'))[index].value}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                )
                                :
                                <>
                                    <table className={'secondBlockСarouselTable'}>
                                        <tbody className={'myTbody'}>
                                        <tr>
                                            <td>10.09.2021</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>0</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table className={'secondBlockСarouselTable'}>
                                        <tbody className={'myTbody'}>
                                        <tr>
                                            <td>10.09.2021</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>0</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table className={'secondBlockСarouselTable'}>
                                        <tbody className={'myTbody'}>
                                        <tr>
                                            <td>10.09.2021</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>0</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table className={'secondBlockСarouselTable'}>
                                        <tbody className={'myTbody'}>
                                        <tr>
                                            <td>10.09.2021</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>0</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table className={'secondBlockСarouselTable'}>
                                        <tbody className={'myTbody'}>
                                        <tr>
                                            <td>10.09.2021</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>0</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table className={'secondBlockСarouselTable'}>
                                        <tbody className={'myTbody'}>
                                        <tr>
                                            <td>10.09.2021</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>0</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table className={'secondBlockСarouselTable'}>
                                        <tbody className={'myTbody'}>
                                        <tr>
                                            <td>10.09.2021</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>0</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table className={'secondBlockСarouselTable'}>
                                        <tbody className={'myTbody'}>
                                        <tr>
                                            <td>10.09.2021</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>0</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table className={'secondBlockСarouselTable'}>
                                        <tbody className={'myTbody'}>
                                        <tr>
                                            <td>10.09.2021</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>0</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table className={'secondBlockСarouselTable'}>
                                        <tbody className={'myTbody'}>
                                        <tr>
                                            <td>10.09.2021</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>0</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table className={'secondBlockСarouselTable'}>
                                        <tbody className={'myTbody'}>
                                        <tr>
                                            <td>10.09.2021</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>0</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table className={'secondBlockСarouselTable'}>
                                        <tbody className={'myTbody'}>
                                        <tr>
                                            <td>10.09.2021</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>0</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </>
                            }

                        </div>
                    </div>

                    <img onClick={event => {
                        myOnClickFunction(event)
                    }}
                         className={'imgBtnRight'} src={require('./images/icons8-шеврон-вправо-90 2.svg')}/>
                </div>

            </div>
        </div>
    )
}

export default connect(
    state => ({
        reduxStorage: state,
    }),
    dispatch => ({})
)(ResultMainPageSecondSection);


// {props.reduxStorage.HistogramsData.riskFactors[0][(index - 1)].value}