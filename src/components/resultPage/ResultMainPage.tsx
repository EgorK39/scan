import * as React from "react";
import "../../styles/resultPage/resultMainPage.scss";
import ResultMainPageFirstSection from "./ResultMainPageFirstSection";
import ResultMainPageSecondSection from "./ResultMainPageSecondSection";

const ResultMainPage = () => {
    return (
        <section className={'resultMainPage font-inter'}>
            <ResultMainPageFirstSection/>
            <ResultMainPageSecondSection/>
        </section>
    )
}
export default ResultMainPage;