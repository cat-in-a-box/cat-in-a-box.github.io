import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';

const Projects = () => {
    return (
        <ScrollableAnchor id={'section3'}>
            <div className="Works"><h1>Мои проекты</h1>
                <div className="WorksPlaceholder">
                    <a href="https://profdela.ru" target="_blank" rel="noopener noreferrer" className="ProjectCard">
                        <img src={require('./files/pics/profdela.png')} alt="ProfdelaIcon"/>
                        <img src={require('./files/pics/profdela2.png')} alt="ProfdelaIcon2"/>
                        <div className="CardText">
                            <h3><b>Профдела</b></h3>
                            <h4>Сайт для продажи товаров</h4>
                        </div>
                    </a>
                </div>
            </div>
        </ScrollableAnchor>
    );
};

export default Projects;