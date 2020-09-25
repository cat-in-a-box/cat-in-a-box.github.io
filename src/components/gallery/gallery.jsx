import React from "react";
import HeaderGoBack from "../HeaderGoBack.jsx";
import GalleryComponent from "./components/GalleryComponent";

function Gallery() {
    return (
        <div className="App">
            <HeaderGoBack/>
            <GalleryComponent/>
        </div>
    );
}

export default Gallery;
