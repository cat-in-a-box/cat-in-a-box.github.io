import React from "react";

const Face = () => {
    return (
        <div className="Face">
            <h1>Привет!</h1>
            <h1>Меня зовут Александр Тимощук</h1>
            <h2>Front End разработчик</h2>
            <img className="reactIcon" src={require('./files/pics/react-icon.png')} alt="React Icon" height="64"
                 width="64"/>
        </div>
    )
};

export default Face;
