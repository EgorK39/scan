import * as React from "react";
import "../../styles/resultPage/resultMainPageThirdSection.scss";
// import ResultMainPageThirdSectionMainInfo from "./ResultMainPageThirdSectionMainInfo";
import {lazy} from "react";

const ResultMainPageThirdSectionMainInfo = lazy(() => import('./ResultMainPageThirdSectionMainInfo'));

const ResultMainPageThirdSection = (props) => {
    const [load, setLoad] = React.useState(false);
    const [, startTransition] = React.useTransition();


    return (
        <div className={'resultMainPageThirdSection'}>
            <h1>Список документов</h1>
            {load && (
                <ResultMainPageThirdSectionMainInfo/>
            )}
            <button onClick={event => {
                startTransition(() => {
                    setLoad(true)
                })
            }
            } className={'thirdSectionShowMore'}>Показать больше
            </button>
        </div>
    )
}

export default ResultMainPageThirdSection;