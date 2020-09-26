import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';

const About = () => {
    return (
        <ScrollableAnchor id={'section2'}>
            <div className="About">
                <h1>Коротко обо мне</h1>
                <p>
                    Простой парень, который родился на Камчатке, а последние семь лет жил и учился в Финляндии.
                    Там, помимо диплома инженера, получил отличные навыки английского языка, а также четкое стремление
                    переехать в Санкт-Петербург и заняться web разработкой, двигаться и развиваться именно в этом
                    направлении.
                </p>
                <p>
                    Без проблем способен читать английскую техническую документацию, литературу, говорить с носителями и
                    так далее.
                </p>
                <p>
                    Привык решать сложные технические задачи, а также быстро понимать, что от меня требуют.
                </p>
            </div>
        </ScrollableAnchor>
    );
};

export default About;