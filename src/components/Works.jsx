import React from "react";

const Works = () => {
    return [
        <div className="Works"><h1>My Works</h1>
            <div className="WorksPlaceholder">
                <a href="https://google.com" className="Card">
                    <img src="mouse.png" alt="MouseIcon"/>
                    <div className="CardContainer">
                        <h3><b>Mousewheel Checker</b></h3>
                        <h4>My broken computer mouse made me develop it - the app to check if the wheel is moving correctly</h4>
                     </div>
                </a>
                <a href="https://google.com" className="Card">
                    <img src="calories.png" alt="CaloriesIcon"/>
                    <div className="CardContainer">
                        <h3><b>Calories Counter</b></h3>
                        <h4>My attempts to live healthier life and count the energy that goes inside.</h4>
                     </div>
                </a>
                <a href="https://google.com" className="Card">
                    <img src="paw.png" alt="PawIcon" width="150px" />
                    <div className="CardContainer">
                        <h3><b>Animal Gallery</b></h3>
                        <h4>Check these beautiful pictures of cats, dogs and other creatures</h4>
                     </div>
                </a>
                <a href="https://google.com" className="Card">
                    <img src="chicken.png" alt="ChickenIcon" width="150px" />
                    <div className="CardContainer">
                        <h3><b>Petushok</b></h3>
                        <h4>Ko ko ko Roxik ti gde? Prihodi bistrei!</h4>

                     </div>
                </a>
            </div>
        </div>
    ];
};

const WorksPlaceholder = () => {

}

export default Works;