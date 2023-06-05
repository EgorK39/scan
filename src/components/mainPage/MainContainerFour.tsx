import '../../styles/MainPages/MainContainerFour.scss';
import * as React from "react";
import {connect} from "react-redux";
import changeUrls from "../../redux/MyUlrs";
import changeTariffs from "../../redux/Tariffs";


function MainContainerFour(props) {
    let ref = React.useRef(null);

    function func(index) {
        ref.current.classList.add('hereAnother')
        console.log('MainContainerFour ref and index', ref, index);
        // if (index === 0) {
        //     ref.current.classList.add('hereAnother');
        //     console.log('hello', ref);
        //
        // } else if (index === 1) {
        //     ref.current.classList.add('hereAnother');
        //     console.log('hello', ref);
        //
        //
        // } else {
        //     ref.current.classList.add('hereAnother');
        //     console.log('hello', ref);
        //
        // }
    }


    console.log('MainContainerFour props.reduxStorage', props.reduxStorage)
    return (
        <section className="lastSection font-inter">
            <h1 className={'font-ferry'}> наши тарифы</h1>
            <div className={'lastDivDiv'}>
                {props.reduxStorage.changeTariffs.tariffs ? props.reduxStorage.changeTariffs.tariffs.map((element, index) =>
                        <div key={element.id}
                             className={element.id === 1 ? 'mapIdElOne' :
                                 element.id === 2 ? 'mapIdElTwo' :
                                     'mapIdElThree'} onClick={(event) => {
                            console.log('MainContainerFour index', index);
                            console.log('MainContainerFour event', event);
                            func(index)
                        }}>
                            <div>
                                <div className="head">
                                    <h2>{element.tariff}</h2>
                                    <p>{element.description}</p>
                                    <img src={`./images/${element.img}`}/>
                                </div>
                                <div className="main">
                                    {element.id === 1 ? <div className={'hereOne'} ref={ref}>
                                        <p>Текущий тариф
                                        </p>
                                    </div> : element.id === 2 ? <div className={'hereTwo'} ref={ref}>
                                        <p>Текущий тариф
                                        </p>
                                    </div> : <div className={'hereThree'} ref={ref}>
                                        <p>Текущий тариф
                                        </p>
                                    </div>}
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
                                                    <img src="./images/icons8-галочка-96%201.svg"/>
                                                    <p>{element.one}</p>
                                                </li>
                                                <li>
                                                    <img src="./images/icons8-галочка-96%201.svg"/>
                                                    <p>{element.two}</p>
                                                </li>
                                                <li>
                                                    <img src="./images/icons8-галочка-96%201.svg"/>
                                                    <p>{element.three}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button className={'mainBtn'}>
                                        <p>Подробнее</p>
                                    </button>
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