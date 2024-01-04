import React from "react";
import "../css/Second.css";
import New from '../assets/rupesh.png'


const SecondSection = () => {
  return (
    <>
      <div className="second">
        <div className="about">
          <h1 className="me">ABOUT ME</h1>
          <h2 className="ee">ABOUT ME</h2>
        </div>

        <div   className="section">
          <div className="iam">
            <img src={New} alt="" />
          </div>

          <div  className="from">
            <h2>Hi There! I'm Rupesh Choudhary</h2>
            <p>Full Stack Developer</p>
            <h5>
              I am a Full Stack Developer with a strong focus on digital
              branding. Visul <br /> design seeks to attract, inspire, create
              desires and motivate people to <br /> respond to messages, with a
              view to making a favorable impact.
            </h5>
            <ul className="phone">
              <li>
                <span>Phone</span>" : " <span>9009585819</span>
              </li>
              <li>Email : rupeshchoudhary@1212gmail.com</li>
              <li>Language : English , Hindi </li>
              <li>Freelance : Availlabe </li>
            </ul>
            <button className="cv"   ><a href="src/assets/Rupesh Choudhary Fresher mern stack deveper.pdf" download >Dawnload CV</a></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondSection;
