import React from "react";
import "./index.css";
import Button from "../../components/button/Button";
import Level from "../../components/level/Level";

const Page4 = () => {
    return (
        <div className="pg4">
            <h1 className="heading">What is your math comfort level?</h1>
            <p className="para">Choose the highest level you feel confident in - you can always adjust later.</p>
            <div className="equations">
                <Level className="eq-block" text1="5 × 4 = ?" text2="Arithmetic" text3="Introductory" next="/page5" />
                <Level text1="3x + 5 = 4" text2="Basic Algebra" text3="Foundational" next="/page5" />
                <Level text1="ax2 + bx = -c" text2="Intermediate Algebra" text3="Intermediate" next="/page5" />
                <Level text1="∫ ex dx = ex + C" text2="Calculas" text3="Advanced" next="/page5" />
            </div>
            <Button link="/page5" />
        </div>
    )
}
export default Page4;