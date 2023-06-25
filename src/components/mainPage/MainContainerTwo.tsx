import * as React from 'react';
import '../../styles/MainPages/MainContainerTwo.scss';
import {useMediaQuery} from "react-responsive";

function MainContainerTwo() {
    let ref = React.useRef(null);
    let [count, setCount] = React.useState(0);
    let [stepCounter, setStepCounter] = React.useState(0);
    const carouselItems = [{img: 'icons8-бетман-старый-96', p: 'Высокая и оперативная скорость обработки заявки'},
        {img: 'icons8-единорог-96', p: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос'},
        {
            img: 'icons8-облачко-с-мыслями-96',
            p: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству'
        },
        {img: 'icons8-бетман-старый-96', p: 'Высокая и оперативная скорость обработки заявки'},
        {img: 'icons8-единорог-96', p: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос'},
        {
            img: 'icons8-облачко-с-мыслями-96',
            p: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству'
        }
    ]

    const isMobile = useMediaQuery({
        query: '(max-width: 699px)'
    })
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 700px)'
    })
    console.log('isMobile', isMobile)
    console.log('isDesktopOrLaptop', isDesktopOrLaptop)
    const animate = () => {
        ref.current.classList.add('animate');
    }


    function handleClickRight() {
        animate()
        console.log('ref.current.children[0].clientWidth', ref.current.children[0].clientWidth);
        if (isDesktopOrLaptop) {
            if (stepCounter < ref.current.childElementCount - 3)
                if (count === 3080) {
                    setCount(count = 0);
                    setStepCounter(stepCounter = 0);
                } else {
                    setCount(count += ref.current.children[0].clientWidth + 30);
                    setStepCounter(stepCounter += 1);
                } else {
                setCount(count = 0);
                setStepCounter(stepCounter = 0);
            }
        } else {
            if (count === (ref.current.children[0].clientWidth + 20) * (ref.current.childElementCount - 1)) {
                setCount(0)
            } else {
                setCount(count += (ref.current.children[0].clientWidth + 20))
            }
        }


    }

    function handleClickLeft() {

        animate()
        if (isDesktopOrLaptop) {
            if (stepCounter <= 0) {
                setCount(count = (ref.current.children[0].clientWidth + 30) * (ref.current.childElementCount - 4));
                setStepCounter(stepCounter = ref.current.childElementCount - 4);
            } else {
                setCount(count = (ref.current.children[0].clientWidth + 30) * (stepCounter - 1));
                setStepCounter(stepCounter -= 1);
            }
        } else {
            if (count === 0) {
                setCount((ref.current.children[0].clientWidth + 20) * (ref.current.childElementCount - 1))
            } else {
                setCount(count -= (ref.current.children[0].clientWidth + 20))
            }
        }

    }

    return (
        <div className='wrapper'>
            <h1 className={'font-ferry'}>
                Почему именно мы
            </h1>
            <div className='carousel'>
                <div className='btn-carousel'>
                    <button onClick={handleClickLeft} className='left'><img src='../images/links.svg'/></button>
                </div>
                <div className='carousel-container font-inter'>
                    <div ref={ref} className='carousel-slider' style={{transform: `translateX(-${count}px)`}}>
                        {carouselItems ? carouselItems.map((item, index) =>
                            <div key={index}>
                                <img src={`../images/${item.img}.png`}/>
                                <p>{item.p}</p>
                            </div>
                        ) : 'no'}
                    </div>
                </div>
                <div className='btn-carousel'>
                    <button onClick={handleClickRight} className='right'><img src='../images/rechts.svg'/></button>
                </div>
            </div>

        </div>
    )
}

export default MainContainerTwo;