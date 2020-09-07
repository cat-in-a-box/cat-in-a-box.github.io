import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor'; // якоря для движения по странице

const Technologies = () => {
    return (
        <ScrollableAnchor id={'section3'}>
            <div className="Technologies"><h1>Мои навыки</h1>
                    <div className="TechnologiesIconPlaceHolder">
                        <div className="TechnologiesIcon">
                            <img src={"pics/code.png"} alt="React" width="50px"/>
                            <div className="Popup">HTML и CSS</div>
                        </div>
                        <div className="TechnologiesIcon">
                            <img src={"pics/javascript.png"} alt="React" width="50px"/>
                            <div className="Popup">JavaScript</div>
                        </div>
                        <div className="TechnologiesIcon">
                            <img src={"pics/react.png"} alt="React" width="50px"/>
                            <div className="Popup">React</div>
                        </div>
                        <div className="TechnologiesIcon">
                            <img src={"pics/responsive.png"} alt="React" width="50px"/>
                            <div className="Popup">Адаптивность</div>
                        </div>
                    </div>
                </div>
        </ScrollableAnchor>
    );
};

export default Technologies;