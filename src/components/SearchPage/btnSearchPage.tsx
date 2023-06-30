import * as React from "react";
import "../../styles/SearchPage/btnSearchPage.scss";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import {connect} from "react-redux";

function BtnSearchPage(props) {

    const navigate = useNavigate()
    /* POST /api/v1/objectsearch/histograms */

    const [tokenInSearch, setTokenInSearch] = React.useState('')
    const baseUrl = 'https://gateway.scan-interfax.ru'


    useEffect(() => {
        const log = JSON.parse(localStorage.getItem('loginData'))
        const today = new Date;
        if (log.accessToken && !(Date.parse(log.expire) <= Date.parse(today.toISOString()))) {
            setTokenInSearch(log.accessToken)
        } else {
            console.log('Не в этот раз)')
        }
    }, [])

    const redirectFunc = (data) => {
        // console.log('!!!!!!!', data.data[0].data)
        // console.log('!!!!!!!', data.data[1].data)
        props.setToRedux(data.data[0].data, data.data[1].data)
        props.setToReduxTwo(
            [props.innData, props.numFromSearch,
                props.startDateFromSearch, props.endDateFromSearch])
        navigate('/result')
    }

    const sendRequestToHistograms = async () => {
        // console.log('props.innData', props.innData)
        // console.log('props.numFromSearch', props.numFromSearch)
        // console.log('props.anyData', props.anyData)
        // console.log('props.startDateFromSearch', props.startDateFromSearch)
        // console.log('props.endDateFromSearch', props.endDateFromSearch)

        const response = await axios.post(baseUrl + '/api/v1/objectsearch/histograms',
            {
                "issueDateInterval": {
                    "startDate": String(props.startDateFromSearch),
                    "endDate": String(props.endDateFromSearch)
                },
                "searchContext": {
                    "targetSearchEntitiesContext": {
                        "targetSearchEntities": [
                            {
                                "type": "company",
                                "sparkId": null,
                                "entityId": null,
                                "inn": Number(props.innData),
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
                "limit": Number(props.numFromSearch),
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
                    'Authorization': `Bearer ${tokenInSearch}`,
                    'Content-Type': 'application/json-patch+json'
                }
            }
        )
            .then(res => {
                console.log('resDATA', res.data)
                redirectFunc(res.data)
                return res.data
            })
            .catch(error => {
                console.log('error', error)
            })
    }

    /* END */


    return (
        <div className={'searchFormSectionThree'}>
            <Link to={'/#'}>
                <button onClick={event => sendRequestToHistograms()} disabled={!props.btnToBtn}>
                    Поиск
                </button>
            </Link>
            <span className={'inputField'}>* Обязательные к заполнению поля</span>
        </div>
    )
}

export default connect(
    state => ({
        reduxStorage: state,
    }),
    dispatch => ({
        setToRedux: (firstElement, secondElement) => {
            dispatch({
                type: 'HISTOGRAMS',
                payload: {
                    totalDocuments: [firstElement],
                    riskFactors: [secondElement]
                }
            })
        },
        setToReduxTwo: element => {
            dispatch({
                type: "SEARCHDATA",
                payload: element

            })
        }
    })
)(BtnSearchPage);