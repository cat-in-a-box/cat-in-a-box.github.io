import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';

const Projects = () => {
    return (
        <ScrollableAnchor id={'section3'}>
            <div className={"Works"}><h1>Мои работы</h1>
                <div className={"WorksPlaceholder"}>
                    <a href={"https://profdela.ru"} target={"_blank"} rel={"noopener noreferrer"} className={"ProjectCard"}>
                        <img src={require('./files/pics/profdela.png')} alt={"ProfdelaIcon"}/>
                        <div className={"CardText"}>
                            <h3><b>Профдела</b></h3>
                            <h4>Интернет - магазин</h4>
                        </div>
                    </a>
                    <a href={"https://rick-morty-for-nethouse.netlify.app/"} target="_blank" rel={"noopener noreferrer"} className={"ProjectCard"}>
                        <img src={require('./files/pics/rick-morty.png')} alt={"Rick-MortyIcon"}/>
                        <div className={"CardText"}>
                            <h3><b>Персонажи Rick and Morty</b></h3>
                            <h4>Работа с REST API на React и Axios</h4>
                        </div>
                    </a>
                </div>
            </div>
        </ScrollableAnchor>
    );
};

export default Projects;