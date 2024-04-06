import React from "react";
import "./index.css";
import Button from "../../components/button/Button"
const Page6 = () => {
    return (
        <div>
            <div className="spinner-container">
               <div className="spinner"></div>
            </div>
            <h1 className="main-heading">Finding learning path recommendations for you based on your responses</h1>
            <Button link="/page7" />
        </div>
    )
}
export default Page6;