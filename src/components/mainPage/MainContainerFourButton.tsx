import "../../styles/MainPages/MainContainerFourButton.scss";
import * as React from "react";
import {Link} from "react-router-dom";


const MainContainerFourButton = (props) => {
    const firstReffirst = React.useRef(null);
    const secondRefsecond = React.useRef(null);
    const thirdRefthird = React.useRef(null);

    console.log('indexForMainBtn', props.indexForMainBtn)

    function newUlrForMainBtn(index, disabled) {
        console.log('indexForMainBtn', index)
        console.log('props.disabledSeting', disabled)
        if (index === 0) {
            console.log('!!!!', firstReffirst.current)
            // firstReffirst.current.innerText = 'Перейти в личный кабинет'
        } else if (index === 1) {
            console.log('!!!!', secondRefsecond.current)
            // secondRefsecond.current.innerText = 'Перейти в личный кабинет'

        } else {
            console.log('!!!!', thirdRefthird.current)
            // thirdRefthird.current.innerText = 'Перейти в личный кабинет'


        }
    }


    return (
        <Link to={'/#'}>
            <button onClick={(event) => {
                newUlrForMainBtn(props.indexForMainBtn, props.disabledSeting)
            }} disabled={props.disabledSeting} className={'mainBtn'} ref={props.indexForMainBtn === 0 ? firstReffirst :
                props.indexForMainBtn === 1 ? secondRefsecond :
                    thirdRefthird}>{props.disabledSeting ? "Подробнее" : "Перейти в личный кабинет"}

            </button>
        </Link>
    );
}

export default MainContainerFourButton;