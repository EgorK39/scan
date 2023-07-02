import * as React from "react";
import "../../styles/Main/HeaderTable.scss";
import axios from "axios";
import {useEffect} from "react";
import {ThreeDots} from 'react-loader-spinner';

const HeaderTable = (props) => {
    const [usedCompanies, setUsedCompanies] = React.useState('')
    const [limitCompanies, setLimitCompanies] = React.useState('')
    const [log, setLog] = React.useState('')
    const [showForm, setShowForm] = React.useState(true)

    const baseUlr = 'https://gateway.scan-interfax.ru';

    useEffect(() => {
        localStorage.setItem('encodedId', JSON.stringify(''))
        localStorage.setItem('userLogin', JSON.stringify(''))
        localStorage.setItem('loginData', JSON.stringify(''))
    }, [])

    function eventFiltersInfoFunc(res) {
        console.log('hereisRES', res.data)
        setUsedCompanies(res.data.eventFiltersInfo.companyLimit)
        setLimitCompanies(res.data.eventFiltersInfo.usedCompanyCount)
        setShowForm(false)

    }

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('loginData'));
        if (items.accessToken) {
            setLog(items.accessToken)
            console.log('items.log', log)
        } else {
            const interval = setInterval(() => {
                const items = JSON.parse(localStorage.getItem('loginData'));
                if (items.accessToken) {
                    console.log('items.accessToken', items.accessToken)
                    setLog(items.accessToken)
                    console.log('items.log', log)
                    clearInterval(interval)
                }
            }, 1500)
        }
    }, [])
    useEffect(() => {
        if (log) {
            eventFiltersInfo()
        }
    }, [log])
    const eventFiltersInfo = () => {
        console.log('log', log)
        axios.get(`${baseUlr}/api/v1/account/info`, {
            headers: {'Authorization': `Bearer ${log}`}
        })
            .then(res => {
                eventFiltersInfoFunc(res)
                return res;
            })
            .catch(err => {
                console.log('err', err)
            })
    }
    return (
        <div className={'headerTable'}>
            {!showForm ?
                <>
                    <div className={'headerTableOne'}>
                        <span>Использовано компаний</span>
                        <span>Лимит по компаниям</span>
                    </div>
                    <div className={'headerTableTwo'}>
                        <p className={'pOne'}>{usedCompanies}</p>
                        <p className={'pTwo'}>{limitCompanies}</p>
                    </div>
                </> :
                <ThreeDots
                    height="70"
                    width="45"
                    radius="9"
                    color="#029491"
                    ariaLabel="three-dots-loading"
                    visible={true}
                    wrapperStyle={{justifyContent: 'center'}}
                />
            }

        </div>
    )
}
export default HeaderTable;