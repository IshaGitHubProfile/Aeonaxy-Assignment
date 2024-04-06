import React from "react";
import './levelStyle.css'; 
import {Link} from "react-router-dom";

function Level({ text1, text2, text3, next}) {
    return (
        <div className="main-div">
            <div className="level">
            <Link to={next} className="my-link">
            <div className="level-text">
                <p>{text1}</p>
                <p className="text2bold">{text2}</p>
                <p>{text3}</p>
            </div>
        </Link>
        </div>
        </div>
    )
}
export default Level;
