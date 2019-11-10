import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';

const Works = () => {
    return [
        <ScrollableAnchor id={'section3'}>
            <div className="Works"><h1>My Works</h1>
                <div className="WorksPlaceholder">
                    <a href="https://cat-in-a-box.github.io/mousewheel_checker/" className="Card">
                        <img src="mouse.png" alt="MouseIcon" />
                        <img src="mouse2.png" alt="MouseIcon2" />
                        <div className="CardContainer">
                            <h3><b>Mousewheel Checker</b></h3>
                            <h4>My broken computer mouse made me develop it - the app to check if the wheel is moving correctly</h4>
                        </div>
                    </a>
                    <a href="https://google.com" className="Card">
                        <img src="calories.png" alt="CaloriesIcon" />
                        <img src="calories2.png" alt="CaloriesIcon2" />
                        <div className="CardContainer">
                            <h3><b>Calories Counter</b></h3>
                            <h4>My attempts to live healthier life and count the energy that goes inside.</h4>
                        </div>
                    </a>
                    <a href="https://cat-in-a-box.github.io/gallery-react/" className="Card">
                        <img src="paw.png" alt="PawIcon" width="150px" />
                        <img src="paw2.png" alt="PawIcon2" width="150px" />
                        <div className="CardContainer">
                            <h3><b>Animal Gallery</b></h3>
                            <h4>Check these beautiful pictures of cats, dogs and other creatures</h4>
                        </div>
                    </a>
                    <a href="https://google.com" className="Card">
                        <img src="chicken.png" alt="ChickenIcon" width="180px" />
                        <img src="chicken2.png" alt="ChickenIcon2" width="180px" />
                        <div className="CardContainer">
                            <h3><b>Petushok</b></h3>
                            <h4>Ko ko ko Roxik ti gde? Prihodi bistrei!</h4>

                        </div>
                    </a>
                </div>
            </div>
        </ScrollableAnchor>
    ];
};

export default Works;