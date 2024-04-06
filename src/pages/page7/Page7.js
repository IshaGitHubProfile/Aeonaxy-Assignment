import React from "react";
import "./index.css";
import course1 from "../../assets/course1.jpg";
import course2 from "../../assets/course2.avif";

const Page7 = () => {
    return (
        <div className="pg5">
            <h1 className="heading">Learning paths based on your answers</h1>
            <p className="para">Choose one to get started. You can switch anytime.</p>
            <div className="square">
                <div className="box2">
                    <div className="box-cont">
                        <h4>Foundational Math</h4>
                        <p>Build your foundational skills in algebra, geometry and probability.</p>
                    </div>
                    <div className="img-size">
                        <img src={course1} />
                    </div>
                </div>
                <div className="box2">
                    <div className="box-cont">
                        <h4>Mathematical Thinking</h4>
                        <p>Build your foundational skills in algebra, geometry and probability.</p>
                    </div>
                    <div className="img-size">
                        <img src={course2} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page7;