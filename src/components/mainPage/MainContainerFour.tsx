import '../../styles/MainPages/MainContainerFour.scss';
import * as React from "react";
import {connect} from "react-redux";
import MainContainerFourButton from "./MainContainerFourButton";

function MainContainerFour(props) {
    const firstRef = React.useRef(null);
    const secondRef = React.useRef(null);
    const thirdRef = React.useRef(null);

    let [disabled, setDisabledByBtn] = React.useState(true)


    const rmListener = (refNameOne, refNameTwo) => {
        refNameOne.current.classList.remove('hereAnother')
        refNameTwo.current.classList.remove('hereAnother')
    }

    function func(index) {
        if (index === 0) {
            rmListener(secondRef, thirdRef)
            firstRef.current.classList.add('hereAnother')
            console.log('MainContainerFour ref and index', firstRef, index);
            setDisabledByBtn(disabled = false)
        } else if (index === 1) {
            rmListener(firstRef, thirdRef)
            secondRef.current.classList.add('hereAnother')
            console.log('MainContainerFour ref and index', secondRef, index);
            setDisabledByBtn(disabled = false)

        } else {
            rmListener(firstRef, secondRef)
            thirdRef.current.classList.add('hereAnother')
            console.log('MainContainerFour ref and index', thirdRef, index);
            setDisabledByBtn(disabled = false)

        }


    }

    console.log('MainContainerFour props.reduxStorage', props.reduxStorage)
    return (
        <section className="lastSection font-inter">
            <h1 className={'font-ferry'}>наши тарифы</h1>
            <div className={'lastDivDiv'}>
                {props.reduxStorage.changeTariffs.tariffs ? props.reduxStorage.changeTariffs.tariffs.map((element, index) =>
                        <div key={element.id}
                             className={element.id === 1 ? 'mapIdElOne' :
                                 element.id === 2 ? 'mapIdElTwo' :
                                     'mapIdElThree'} onClick={(event) => {
                            console.log('MainContainerFour index', index);
                            console.log('MainContainerFour event', event);
                            const {target} = event
                            console.log('target', target);
                            func(index)
                        }}>
                            <div>
                                <div className="head">
                                    <h2>{element.tariff}</h2>
                                    <p>{element.description}</p>
                                    <img src={`./images/${element.img}`}/>
                                </div>
                                <div className="main">
                                    <div className={'here'} ref={element.id === 1 ? firstRef :
                                        element.id === 2 ? secondRef :
                                            thirdRef}>
                                        <p>Текущий тариф
                                        </p>
                                    </div>
                                    <div>
                                        <div className="price"><p></p></div>
                                        <div><p className={'mainPrice'}>{element.price} ₽</p></div>
                                        <div><p
                                            className={'secondPrice'}>{element.id === 1 ? '1 200 ₽' : element.id === 2 ? '2 600 ₽' : '3 700 ₽'}</p>
                                        </div>
                                        <div><p className={'prDes'}>{element.priceDescription}</p></div>
                                        <div className="tariff">
                                            <h2>{element.inclusive}</h2>
                                            <ul>
                                                <li>
                                                    <img src="../images/icons8-галочка-96%201.svg"/>
                                                    <p>{element.one}</p>
                                                </li>
                                                <li>
                                                    <img src="../images/icons8-галочка-96%201.svg"/>
                                                    <p>{element.two}</p>
                                                </li>
                                                <li>
                                                    <img src="../images/icons8-галочка-96%201.svg"/>
                                                    <p>{element.three}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <MainContainerFourButton disabledSeting={disabled} indexForMainBtn={index}/>
                                </div>
                            </div>
                        </div>
                    )
                    : <h2>('NO')</h2>}

            </div>
        </section>
    )
}

export default connect(
    state => ({
        reduxStorage: state,
    }),
    dispatch => ({})
)(MainContainerFour);