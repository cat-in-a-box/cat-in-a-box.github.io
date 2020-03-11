import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor'; // якоря для движения по странице

const Works = () => {
    return [
        <ScrollableAnchor id={'section3'}>
            <div className="Works"><h1>My Works</h1>
                <div className="WorksPlaceholder">
                    <a href="https://cat-in-a-box.github.io/mousewheel_checker/" className="Card">
                        <img src={"mouse.png"} alt="MouseIcon"/>
                        <img src={"mouse2.png"} alt="MouseIcon2"/>
                        <div className="CardContainer">
                            <h3><b>Mousewheel Checker</b></h3>
                            <h4>The app to check your mouse wheel</h4>
                        </div>
                    </a>
                    <a href="https://cat-in-a-box.github.io/calculator" className="Card">
                        <img src={"calculator.png"} alt="CaloriesIcon"/>
                        <img src={"calculator2.png"} alt="CaloriesIcon2"/>
                        <div className="CardContainer">
                            <h3><b>Calculator</b></h3>
                            <h4>Just a simple calculator to do your math</h4>
                        </div>
                    </a>
                    <a href="https://cat-in-a-box.github.io/gallery-react/" className="Card">
                        <img src={"paw.png"} alt="PawIcon" width="150px"/>
                        <img src={"paw2.png"} alt="PawIcon2" width="150px"/>
                        <div className="CardContainer">
                            <h3><b>Animal Gallery</b></h3>
                            <h4>Check these beautiful pictures of animals</h4>
                        </div>
                    </a>
                    <a href="https://cat-in-a-box.github.io/snake-game/" className="Card">
                        <img src={"chicken.png"} alt="ChickenIcon" width="180px"/>
                        <img src={"chicken2.png"} alt="ChickenIcon2" width="180px"/>
                        <div className="CardContainer">
                            <h3><b>Snake!!!</b></h3>
                            <h4>Super Zmeika!!! Just move it and eat food</h4>
                        </div>
                    </a>
                </div>
            </div>
        </ScrollableAnchor>
    ];
};

export default Works;