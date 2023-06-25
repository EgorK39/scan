import * as React from "react";
import "../../styles/resultPage/resultMainPage.scss";
import ResultMainPageFirstSection from "./ResultMainPageFirstSection";
import ResultMainPageSecondSection from "./ResultMainPageSecondSection";
import ResultMainPageThirdSection from "./ResultMainPageThirdSection";

const ResultMainPage = () => {
    return (
        <section className={'resultMainPage font-inter'}>
            <ResultMainPageFirstSection/>
            <ResultMainPageSecondSection/>
            <ResultMainPageThirdSection/>
        </section>
    )
}
export default ResultMainPage;