import * as React from "react";
import "../../styles/resultPage/resultMainPageThirdSection.scss";
import {useEffect} from "react";
import {connect} from "react-redux";
import axios from "axios";
import ResultObjectSearch from "./ResultObjectSearch";


const ResultMainPageThirdSection = (props) => {

    const [isLoaded, setIsLoaded] = React.useState(false)


    useEffect(() => {
        const baseUrl = 'https://gateway.scan-interfax.ru'

        console.log('search data', props.reduxStorage.SearchingData)
        console.log('token from props', props.tokenFromMainPage)
        const token = JSON.parse(localStorage.getItem('loginData'))
        console.log('token from localStorage', token.accessToken)


        if (token.accessToken && props.reduxStorage.SearchingData.innData) {
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
                        'Authorization': `Bearer ${token.accessToken}`,
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
            console.log('token and inn are empty', token.accessToken)
        }

    }, [])


    const objectSearchFunc = (data) => {
        if (data) {
            console.log('objectsearch', data)
            console.log('objectsearch.items', data.items)
            props.setToRedux(data.items)
            localStorage.setItem('encodedId', JSON.stringify(data.items))
            setIsLoaded(true)
        } else {
            console.log('данных нет')
        }


    }

    useEffect(() => {
        if (isLoaded) {
            console.log('props.reduxStorage.objectSearch', props.reduxStorage.objectSearch)
        }
    }, [isLoaded])


    // const getAnimalsContent = (objectSearch) => {
    //     let content = [];
    //     for (let i = 1; i === animals.length; i++) {
    //         const item = animals[i];
    //         content.push(<li key={item.id}>{item.animal}</li>);
    //     }
    //     return content;
    // };

    return (
        <div className={'resultMainPageThirdSection'}>
            <h1>Список документов</h1>
            <ResultObjectSearch
                tokenFromThird={props.tokenFromMainPage}/>

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