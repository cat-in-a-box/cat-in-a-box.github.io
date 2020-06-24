import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor'; // якоря для движения по странице

const Works = () => {
    return [
        <ScrollableAnchor id={'section3'}>
            <div className="Works"><h1>Мои работы</h1>
                <div className="WorksPlaceholder">
                    <a href="https://cat-in-a-box.github.io/mousewheel-checker/" className="Card">
                        <img src={"pics/mouse.png"} alt="MouseIcon"/>
                        <img src={"pics/mouse2.png"} alt="MouseIcon2"/>
                        <div className="CardContainer">
                            <h3><b>Mousewheel Check</b></h3>
                            <h4>Диагностика колеса мышки (часто ломается)</h4>
                        </div>
                    </a>
                    <a href="https://cat-in-a-box.github.io/calculator" className="Card">
                        <img src={"pics/calculator.png"} alt="CaloriesIcon"/>
                        <img src={"pics/calculator2.png"} alt="CaloriesIcon2"/>
                        <div className="CardContainer">
                            <h3><b>Calculator</b></h3>
                            <h4>Нажимай кнопки</h4>
                            <h4>Считай цифры</h4>
                        </div>
                    </a>
                    <a href="https://cat-in-a-box.github.io/gallery-react/" className="Card">
                        <img src={"pics/paw.png"} alt="PawIcon" width="150px"/>
                        <img src={"pics/paw2.png"} alt="PawIcon2" width="150px"/>
                        <div className="CardContainer">
                            <h3><b>Gallery</b></h3>
                            <h4>Кто не любит котов?</h4>
                            <h4>Все любят котов</h4>
                        </div>
                    </a>
                    <a href="https://cat-in-a-box.github.io/snake-game/" className="Card">
                        <img src={"pics/snake.png"} alt="ChickenIcon" width="180px"/>
                        <img src={"pics/snake2.png"} alt="ChickenIcon2" width="180px"/>
                        <div className="CardContainer">
                            <h3><b>Snake</b></h3>
                            <h4>Двигай змею по полю</h4>
                            <h4>Ешь квадратные колбаски</h4>
                        </div>
                    </a>
                </div>
            </div>
        </ScrollableAnchor>
    ];
};

export default Works;