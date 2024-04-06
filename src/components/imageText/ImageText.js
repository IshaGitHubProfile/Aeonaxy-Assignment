import React from "react";
import './index.css'; 
import {Link} from "react-router-dom";

function ImageText({ imageUrl, text, next}) {
    return (
        <Link to={next} className="my-link">
            <div className="image-text-container">
            <div className="image-container"> 
                <img src={imageUrl} alt="Image" />
            </div>
            <div className="text-container">
                <p>{text}</p>
            </div>
            </div>
        </Link>
    )
}
export default ImageText;
