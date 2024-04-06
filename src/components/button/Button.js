import React from "react";
import './index.css';
import { Link } from "react-router-dom";

function Button({link}) {
    return (
        <div className="btn-cont">
            <Link to={link} style={{ textDecoration: "none" }}>
            <button className="btn">Continue</button>
            </Link>
        </div>
    )
}
export default Button;