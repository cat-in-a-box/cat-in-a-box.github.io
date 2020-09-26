import React from "react";

const Works = () => {
    return (
        <div className="Works"><h1>Небольшие поделки</h1>
            <div className="WorksPlaceholder">
                <a href={"mousewheelchecker/"} rel="noopener noreferrer" className="Card">
                    <img src={require('./files/pics/mouse.png')} alt="MouseIcon"/>
                    <img src={require('./files/pics/mouse2.png')} alt="MouseIcon2"/>
                    <div className="CardText">
                        <h3><b>Mousewheel Check</b></h3>
                        <h4>Диагностика колеса мышки</h4>
                        <h4>(часто ломается)</h4>
                    </div>
                </a>
                <a href={"calculator/"} rel="noopener noreferrer" className="Card">
                    <img src={require('./files/pics/calculator.png')} alt="CaloriesIcon"/>
                    <img src={require('./files/pics/calculator2.png')} alt="CaloriesIcon2"/>
                    <div className="CardText">
                        <h3><b>Calculator</b></h3>
                        <h4>Нажимай кнопки</h4>
                        <h4>Считай цифры</h4>
                    </div>
                </a>
                <a href={"gallery/"} rel="noopener noreferrer" className="Card">
                    <img src={require('./files/pics/paw.png')} alt="PawIcon" width="150px"/>
                    <img src={require('./files/pics/paw2.png')} alt="PawIcon2" width="150px"/>
                    <div className="CardText">
                        <h3><b>Gallery</b></h3>
                        <h4>Кто не любит котов?</h4>
                        <h4>Все любят котов</h4>
                    </div>
                </a>
                <a href={"snake/"} rel="noopener noreferrer" className="Card">
                    <img src={require('./files/pics/snake.png')} alt="ChickenIcon" width="180px"/>
                    <img src={require('./files/pics/snake2.png')} alt="ChickenIcon2" width="180px"/>
                    <div className="CardText">
                        <h3><b>Snake</b></h3>
                        <h4>Двигай змею по полю</h4>
                        <h4>Ешь квадратные колбаски</h4>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Works;