import React from "react";

const Skills = () => {
    return (
        <div className="Skills"><h1>Мои навыки</h1>
            <div className="SkillsIconPlaceHolder">
                <div className="SkillsIcon">
                    <img src={require('./files/pics/code.png')} alt="HTML и CSS" width="50px"/>
                    <div className="Popup">HTML и CSS</div>
                </div>
                <div className="SkillsIcon">
                    <img src={require('./files/pics/javascript.png')} alt="JavaScript" width="50px"/>
                    <div className="Popup">JavaScript</div>
                </div>
                <div className="SkillsIcon">
                    <img src={require('./files/pics/react.png')} alt="React" width="50px"/>
                    <div className="Popup">React</div>
                </div>
                <div className="SkillsIcon">
                    <img src={require('./files/pics/responsive.png')} alt="Адаптивность" width="50px"/>
                    <div className="Popup">Адаптивность</div>
                </div>
            </div>
        </div>
    );
};

export default Skills;