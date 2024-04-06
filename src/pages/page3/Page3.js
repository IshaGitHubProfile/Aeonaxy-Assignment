import React from "react";
import Button from "../../components/button/Button";
import pulley from '../../assets/pulley.jpg';
import "./index.css"
const Page3 = () => {
    return (
        <div className="page3">
            <div className="pg2-cont">
               <div className="left2">
                   <img className="pulley" src={pulley} />
               </div>
               <div className="right2">
                   <h1 className="heading">You're in the right place</h1>
                   <p className="para">Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math,science and computer science.</p>
                </div>
            </div>
            <div>
                <Button  link="/page4" />
            </div>
        </div>
    )
}
export default Page3;