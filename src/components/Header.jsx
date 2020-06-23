import React from "react";

const Header = () => {
    return (
        <div className="Header">
            <div className="HeaderButton"><a href={"#section1"}>Главная</a></div>
            <div className="HeaderButton"><a href={"#section2"}>Обо мне</a></div>
            <div className="HeaderButton"><a href={"#section3"}>Мои работы</a></div>
            <div className="HeaderButton"><a href={"#section4"}>Контакт</a></div>
        </div>
    )
};

export default Header;
