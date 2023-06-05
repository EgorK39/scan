import * as React from 'react';
import '../../styles/MainPages/MainContainerTwo.scss';

function MainContainerTwo() {
    let ref = React.useRef(null);
    let [count, setCount] = React.useState(0);
    let [stepCounter, setStepCounter] = React.useState(0);

    const animate = () => {
        ref.current.classList.add('animate');
    }


    function handleClickRight() {
        console.log('count', count);
        console.log('ref', ref);
        console.log('stepCounter', stepCounter);
        console.log('ref.current.children[0].clientWidth', ref.current.children[0].clientWidth);
        animate()
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

    }

    function handleClickLeft() {
        console.log('count', count);
        console.log('ref', ref);
        console.log('stepCounter', stepCounter);
        console.log('ref.current.children[0].clientWidth', ref.current.children[0].clientWidth);

        animate()
        if (stepCounter <= 0) {
            setCount(count = (ref.current.children[0].clientWidth + 30) * (ref.current.childElementCount - 4));
            setStepCounter(stepCounter = ref.current.childElementCount - 4);
        } else {
            setCount(count = (ref.current.children[0].clientWidth + 30) * (stepCounter - 1));
            setStepCounter(stepCounter -= 1);
        }
    }

    const stepTimer = setTimeout(handleClickRight, 3000);

    return (
        <div className='wrapper'>
            <h1 className={'font-ferry'}>
                Почему именно мы
            </h1>
            <div onMouseOver={event => {
                {
                    event ? clearTimeout(stepTimer) : stepTimer
                }
            }
            }  className='carousel'>
                <div className='btn-carousel'>
                    <button onClick={handleClickLeft} className='left'><img src='./images/links.svg'/></button>
                </div>
                <div className='carousel-container font-inter'>
                    <div ref={ref} className='carousel-slider' style={{transform: `translateX(-${count}px)`}}>
                        <div>
                            <img src="./images/icons8-бетман-старый-96.png"/>
                            <p>Высокая и оперативная скорость обработки заявки</p>
                        </div>
                        <div>
                            <img src="./images/icons8-единорог-96.png"/>
                            <p>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</p>
                        </div>
                        <div>
                            <img src="./images/icons8-облачко-с-мыслями-96.png"/>
                            <p>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному
                                законодательству</p>
                        </div>
                        <div>
                            <img src="./images/icons8-бетман-старый-96.png"/>
                            <p>Высокая и оперативная скорость обработки заявки</p>
                        </div>
                        <div>
                            <img src="./images/icons8-единорог-96.png"/>
                            <p>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</p>
                        </div>
                        <div>
                            <img src="./images/icons8-облачко-с-мыслями-96.png"/>
                            <p>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному
                                законодательству</p>
                        </div>
                        <div>
                            <img src="./images/icons8-бетман-старый-96.png"/>
                            <p>Высокая и оперативная скорость обработки заявки</p>
                        </div>
                        <div>
                            <img src="./images/icons8-единорог-96.png"/>
                            <p>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</p>
                        </div>
                        <div>
                            <img src="./images/icons8-облачко-с-мыслями-96.png"/>
                            <p>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному
                                законодательству</p>
                        </div>
                    </div>
                </div>
                <div className='btn-carousel'>
                    <button onClick={handleClickRight} className='right'><img src='./images/rechts.svg'/></button>
                </div>
            </div>

        </div>
    )
}

export default MainContainerTwo;