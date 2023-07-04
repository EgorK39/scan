import * as React from "react";
import "../../styles/resultPage/resultMainPageThirdSectionMainInfo.scss";
import {connect} from "react-redux";
import axios from "axios";
import {lazy, useEffect} from "react";
import {ThreeDots} from 'react-loader-spinner';
import {Link, useNavigate} from "react-router-dom";

const ResultMainPageThirdSectionMainInfo = lazy(() => import('./ResultMainPageThirdSectionMainInfo'));


function ResultObjectSearch(props) {

    const [load, setLoad] = React.useState(false);
    const [, startTransition] = React.useTransition();
    const [isClicked, setIsClicked] = React.useState(false)

    const [posts1_10, setPosts1_10] = React.useState([])
    const [isLoaded, setIsLoaded] = React.useState(false)
    const baseUrl = 'https://gateway.scan-interfax.ru'

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('loginData'))
        const posts = JSON.parse(localStorage.getItem('encodedId'))
        const timer = setTimeout(() => {
            if (items.accessToken && posts) {
                console.log('3')
                console.log('4 props.reduxStorage.objectSearch', props.reduxStorage.objectSearch)
                console.log('5 posts', posts)

                for (let index = 0; index < 10; index++) {
                    axios.post(baseUrl + '/api/v1/documents',
                        {
                            "ids": [posts[index].encodedId
                            ]
                        },
                        {
                            headers: {
                                'Authorization': `Bearer ${items.accessToken}`,
                                'Content-Type': 'application/json-patch+json'
                            }

                        })
                        .then(res => {
                            setPosts1_10(posts1_10 => [...posts1_10, res.data[0]])
                            setResCount(resCount += 1)
                            return res.data
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }
            }
        }, 1000)
    }, [])


    /* refresh page */

    // const navigate = useNavigate();
    let [resCount, setResCount] = React.useState(0)

    useEffect(() => {

        console.log('1')
        const timer = setInterval(() => {
            console.log('2')
            if (resCount == 10) {
                console.log('resCount', resCount)
                clearInterval(timer)

            } else {
                console.log('resCount', resCount)
                window.location.reload()
            }
        }, 3000)

    }, [])


    useEffect(() => {
        if (posts1_10.length === 10) {
            console.log('posts1_10 49', posts1_10)
            console.log('posts1_10[0] 49', posts1_10[0])
            console.log('posts1_10[0].ok 49', posts1_10[0].ok)
            setIsLoaded(true)
        }
    }, [posts1_10])


    return (
        <>
            {isLoaded ?

                <div className={'allPosts'}>
                    {posts1_10.map((el, i) =>
                        <div key={el.ok.id} className={'post'}>
                            <div className={'postMargin'}>
                                <div className={'postHeader'}>
                                    <ul className={'postHeaderUl'}>
                                        <li>{el.ok.issueDate.substring(0, 10)}</li>
                                        <li className={'liLi'}>{el.ok.source.name}</li>
                                    </ul>
                                </div>
                                <div className={'nextPostHeader'}>
                                    <p>{el.ok.title.text}</p>
                                    <span>{el.ok.attributes.isTechNews === true ? 'технические новости' :
                                        el.ok.attributes.isAnnouncement === true ? 'анонсы и события' :
                                            el.ok.attributes.isDigest === true ? 'сводки новостей' : 'общие новости'
                                    }</span>
                                </div>
                                <div className={'postArticle'}>
                                    <img src={require("./images/Снимок экрана 2022-09-24 в 20.20 1.svg")}/>
                                    <article>
                                        {el.ok.title.markup}
                                    </article>
                                </div>
                                <div className={'postFooter'}>
                                    {el.ok.url ? <Link target={'_blank'} to={`${el.ok.url}`}>
                                        <button className={'postFooterBtn'}>Читать в источнике</button>
                                    </Link> : ''}


                                    <span>Количество слов {el.ok.attributes.wordCount}</span>
                                </div>
                            </div>

                        </div>
                    )}

                </div>

                :
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
            {load && (
                <ResultMainPageThirdSectionMainInfo/>
            )}
            {isClicked ? '' :
                <button onClick={event => {
                    startTransition(() => {
                        setLoad(true)
                        setIsClicked(true)

                    })
                }
                } className={'thirdSectionShowMore'}>Показать больше
                </button>
            }

        </>

    )
}

export default connect(state => ({
        reduxStorage: state,
    }),
    dispatch => ({})
)(ResultObjectSearch);