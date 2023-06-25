import * as React from "react";
import "../../styles/resultPage/resultMainPageSecondSection.scss";
import {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";

const ResultMainPageSecondSection = (props) => {
    const [count, setCount] = useState(0)
    const ref = React.useRef(null);
    const isMobile = useMediaQuery({
        query: '(max-width: 699px)'
    })
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 700px)'
    })

    useEffect(() => {
        console.log('myRef', ref)
    }, [])

    function myOnClickFunction(e) {
        console.log('778999999', e)
        console.log('778999999target', e.target)
        switch (e.target.className) {
            case 'imgBtnLeft':
                if (count === (ref.current.offsetWidth - 810)) {
                    setCount(0)
                } else {
                    setCount(count + 135)
                }
                break;
            case 'imgBtnRight':
                if (count === 0) {
                    setCount(ref.current.offsetWidth - 810)
                } else {
                    setCount(count - 135)
                }
                break;

        }

    }

    return (
        <div className={'resultMainPageSecondSection'}>
            <div className={'generalInformation'}>
                <h1>Общая сводка</h1>
                <span>Найдено 4 221 вариантов</span>
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
                                <tbody>
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
                            <table className={'secondBlockСarouselTable'}>
                                <tbody>
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
                                <tbody>
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
                                <tbody>
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
                                <tbody>
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
                                <tbody>
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
                                <tbody>
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
                                <tbody>
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
                                <tbody>
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
                                <tbody>
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
                                <tbody>
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
                                <tbody>
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
                                <tbody>
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

export default ResultMainPageSecondSection;