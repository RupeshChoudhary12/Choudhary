import React, { useEffect } from "react";
import "../css/hero.css";
import "../main.js"
import'aos/dist/aos.css'
import Aos from "aos";
import New from "../assets/rupesh.png"
import { Form } from "react-router-dom";


const HeroSection = () => {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <div  className="hero">
        <div className="herosection">
          <div  
            className="text">
            <p>Hello ,I'M</p>
            <h1>
              Rupesh <br/>
              Choudhary
            </h1>
            <h4>Full Stack Developer</h4>
            <button  className="hire">Hire Me</button>
          </div>
        </div>
        <div className="img">
          <img src={New} alt="" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
