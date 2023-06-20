import * as React from "react";
import "../../styles/SearchPage/MainSearchPage.scss";
import PictureSearchPage from "./PictureSearchPage";
import SearchPage from "./SearchPage";

const MainSearchPage = (props) => {
    return (
        <div className={'mainSearchPage font-inter'}>
            <SearchPage/>
            <PictureSearchPage/>
        </div>


    )
}
export default MainSearchPage;