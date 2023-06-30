import * as React from "react";
import "../../styles/resultPage/resultMainPage.scss";
import ResultMainPageFirstSection from "./ResultMainPageFirstSection";
import ResultMainPageSecondSection from "./ResultMainPageSecondSection";
import ResultMainPageThirdSection from "./ResultMainPageThirdSection";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";


const ResultMainPage = () => {
    const [tokenInSearch, setTokenInSearch] = React.useState('')

    useEffect(() => {
        const log = JSON.parse(localStorage.getItem('loginData'))
        const today = new Date;
        if (log.accessToken && !(Date.parse(log.expire) <= Date.parse(today.toISOString()))) {
            setTokenInSearch(log.accessToken)
        } else {
            console.log('в другой раз)')
        }
    }, [])

    return (
        <section className={'resultMainPage font-inter'}>
            <ResultMainPageFirstSection/>
            <ResultMainPageSecondSection/>
            <ResultMainPageThirdSection tokenFromMainPage={tokenInSearch}/>
        </section>
    )
}
export default ResultMainPage;