import * as React from "react";
import "../../styles/resultPage/resultMainPageThirdSection.scss";
// import ResultMainPageThirdSectionMainInfo from "./ResultMainPageThirdSectionMainInfo";
import {lazy, useEffect} from "react";
import {connect} from "react-redux";
import axios from "axios";
import objectSearch from "../../redux/ObjectSearch";

const ResultMainPageThirdSectionMainInfo = lazy(() => import('./ResultMainPageThirdSectionMainInfo'));

const ResultMainPageThirdSection = (props) => {
    const [load, setLoad] = React.useState(false);
    const [, startTransition] = React.useTransition();
    const [isLoaded, setIsLoaded] = React.useState(false)


    useEffect(() => {
        const baseUrl = 'https://gateway.scan-interfax.ru'

        console.log('99999', props.reduxStorage.SearchingData)
        if (props.tokenFromMainPage) {
            axios.post(baseUrl + '/api/v1/objectsearch',
                {

                    "issueDateInterval": {
                        "startDate": String(props.reduxStorage.SearchingData.startDateFromSearch),
                        "endDate": String(props.reduxStorage.SearchingData.endDateFromSearch)
                    },
                    "searchContext": {
                        "targetSearchEntitiesContext": {
                            "targetSearchEntities": [
                                {
                                    "type": "company",
                                    "sparkId": null,
                                    "entityId": null,
                                    "inn": Number(props.reduxStorage.SearchingData.innData),
                                    "maxFullness": true,
                                    "inBusinessNews": null
                                }
                            ],
                            "onlyMainRole": true,
                            "tonality": "any",
                            "onlyWithRiskFactors": false,
                            "riskFactors": {
                                "and": [],
                                "or": [],
                                "not": []
                            },
                            "themes": {
                                "and": [],
                                "or": [],
                                "not": []
                            }
                        },
                        "themesFilter": {
                            "and": [],
                            "or": [],
                            "not": []
                        }
                    },
                    "searchArea": {
                        "includedSources": [],
                        "excludedSources": [],
                        "includedSourceGroups": [],
                        "excludedSourceGroups": []
                    },
                    "attributeFilters": {
                        "excludeTechNews": true,
                        "excludeAnnouncements": true,
                        "excludeDigests": true
                    },
                    "similarMode": "duplicates",
                    "limit": Number(props.reduxStorage.SearchingData.numFromSearch),
                    "sortType": "sourceInfluence",
                    "sortDirectionType": "desc",
                    "intervalType": "month",
                    "histogramTypes": [
                        "totalDocuments",
                        "riskFactors"
                    ]
                },
                {
                    headers: {
                        'Authorization': `Bearer ${props.tokenFromMainPage}`,
                        'Content-Type': 'application/json-patch+json'
                    }
                },
            ).then(res => {
                objectSearchFunc(res.data)
                return res.data
            }).catch(err => {
                console.log('response Error', err)
            })
        } else {
            console.log('token empty', props.tokenFromMainPage)
        }

    }, [props.tokenFromMainPage])

    const objectSearchFunc = (data) => {
        console.log('objectsearch', data)
        console.log('objectsearch.items', data.items)
        props.setToRedux(data.items)
        setIsLoaded(true)

    }
    useEffect(() => {
        if (isLoaded) {
            console.log('props.reduxStorage.objectSearch', props.reduxStorage.objectSearch)
        }
    }, [isLoaded])
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

export default connect(state => ({
        reduxStorage: state,
    }),
    dispatch => ({
        setToRedux: element => {
            dispatch({
                type: 'SETOBJECT',
                payload: element
            })
        }
    })
)(ResultMainPageThirdSection);