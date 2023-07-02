import * as React from "react";
import "../../styles/resultPage/resultMainPageThirdSectionMainInfo.scss";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import {ThreeDots} from "react-loader-spinner";

const ResultMainPageThirdSectionMainInfo = (props) => {



    const [load, setLoad] = React.useState(false);
    const [, startTransition] = React.useTransition();
    const [isClicked, setIsClicked] = React.useState(false)

    const [posts10_20, setPosts10_20] = React.useState([])
    const [isLoaded, setIsLoaded] = React.useState(false)
    const baseUrl = 'https://gateway.scan-interfax.ru'

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('loginData'))
        const posts = JSON.parse(localStorage.getItem('encodedId'))
        console.log('1')

        if (items.accessToken && posts) {
            console.log('3')
            console.log('5 posts', posts)

            for (let index = 10; index < 20; index++) {
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
                        setPosts10_20(posts10_20 => [...posts10_20, res.data[0]])
                        return res.data
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }


    }, [])

    useEffect(() => {
        if (posts10_20.length === 10) {
            console.log('posts10_20 49', posts10_20)
            console.log('posts10_20[0] 49', posts10_20[0])
            console.log('posts10_20[0].ok 49', posts10_20[0].ok)
            setIsLoaded(true)


        }


    }, [posts10_20])
    return (
        <>
            {isLoaded ?

                <div className={'allPosts'}>
                    {posts10_20.map((el, i) =>
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


export default ResultMainPageThirdSectionMainInfo;