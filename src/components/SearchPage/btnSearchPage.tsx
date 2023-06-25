import * as React from "react";
import "../../styles/SearchPage/btnSearchPage.scss";
import {Link} from "react-router-dom";

export default function BtnSearchPage(props) {

    return (
        <div className={'searchFormSectionThree'}>
            <Link to={'/#'}>
                <button disabled={!props.btnToBtn}>
                    Поиск
                </button>
            </Link>
            <span className={'inputField'}>* Обязательные к заполнению поля</span>
        </div>
    )
}