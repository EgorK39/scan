import * as React from "react";
import "../../styles/SearchPage/tableSearchPage.scss";
import {connect} from "react-redux";
import {useEffect} from "react";
import BtnSearchPage from "./btnSearchPage";


const TableSearchPage = (props) => {
    console.log('77777777777777', props.reduxStorage)
    const refOne = React.useRef(null)
    const refTwo = React.useRef(null)
    const refThree = React.useRef(null)
    const refFour = React.useRef(null)
    const refFive = React.useRef(null)
    const refSix = React.useRef(null)
    const refSeven = React.useRef(null)


    const naming = (index) => {
        switch (index) {
            case 1:
                return refOne
            case 2:
                return refTwo
            case 3:
                return refThree
            case 4:
                return refFour
            case 5:
                return refFive
            case 6:
                return refSix
            case 7:
                return refSeven

        }

    }

    useEffect(() => {
        refFour.current.classList.add('label')
        refFive.current.classList.add('label')
        refSeven.current.classList.add('label')
    }, [])

    return (
        <div className={'searchFormSectionTwo'}>
            <table>
                <tbody>
                {props.reduxStorage.searchParameters.parameters ?
                    props.reduxStorage.searchParameters.parameters.map((element, index) =>
                        <tr key={element.id}>
                            <td>
                                <label ref={naming(element.id)}>
                                    <input className={'checkbox'} type={"checkbox"}/>
                                    <span className={'fake'}></span>
                                    <span className={'textEl'}>{element.description}</span>
                                </label>
                            </td>
                        </tr>
                    ) : <tr>
                        <td>
                            <label>
                                <input className={'checkbox'} type={"checkbox"}/>
                                <span className={'fake'}></span>
                                <span>Параметров нет</span>
                            </label>
                        </td>
                    </tr>}
                </tbody>
            </table>
            <BtnSearchPage/>
        </div>
    )
}

export default connect(
    state => ({
        reduxStorage: state,
    }),
    dispatch => ({})
)(TableSearchPage);