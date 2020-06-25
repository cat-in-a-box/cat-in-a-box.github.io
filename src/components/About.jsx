import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';

const About = () => {
    return (
        <ScrollableAnchor id={'section2'}>
            <div className="About">
                <h1>Коротко обо мне</h1>
                <p>
                    Продолжительное время жил и учился в Финляндии, где получил диплом инженера по специальности Environmental Engineering.
                </p>
                <p>
                    Отлично владею английским языком на уровне С1, без проблем способен читать техническую документацию, литературу, говорить с носителями и так далее.
                </p>
                <p>
                    Привык решать сложные технические задачи, а также быстро понимать, что от меня требуют.
                </p>
            </div>
        </ScrollableAnchor>
    );
};

export default About;
