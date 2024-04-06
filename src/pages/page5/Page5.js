import React from "react";
import Button from "../../components/button/Button";
import pg5 from "../../assets/pg5.jpg";
import "./index.css"
const Page5 = () => {
    return (
        <div className="page5">
            <div className="pg2-cont">
                <div className="left2">
                    <img className="person" src={pg5} />
                </div>
                <div className="right2">
                   <h1 className="heading">You're on your way!</h1>
                   <div className="para">"Through its engaging and well-structures courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations."</div>
                   <div className="para">- Jacob S.</div>
                </div>
            </div>
            <div className="btnn">
            <Button link="/page6" />
            </div>
        </div>
    )
};
export default Page5;