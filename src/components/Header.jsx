import React from "react";

const Header = () => {
    return (
        <div className={"Header"}>
            <div className={"HeaderButton"}><a href={"#section1"}>Главная</a></div>
            <div className={"HeaderButton"}><a href={"#section2"}>Обо мне</a></div>
            <div className={"HeaderButton"}><a href={"#section3"}>Проекты</a></div>
            <div className={"HeaderButton"}><a href={"#section4"}>Контакты</a></div>
            <div className={"HeaderButton"}><a href={"https://github.com/cat-in-a-box"} target={"blank"}>GitHub</a></div>
        </div>
    )
};

export default Header;
