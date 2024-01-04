import React from "react";
import "../css/skill.css";
import Aos from "aos";
import { useEffect } from "react";



const MySkills = () => {
  useEffect(() => {
    Aos.init()
  },[])

  // useEffect(() => {
  //   Aos.init();
  // }, [])


  return (
    <>
      <div className="that">
        <div className="myskils">
          <div className="about" data-aos="fade-up">
            <h1 className="me">MY SKILLS</h1>
            <h2 className="ee">MY SKILLS</h2>
          </div>
        </div>

        <div className="work">
          <div className="have">
            <h2>
              All the skills that I have in that <br /> field of work are
              mentioned.
            </h2>
            <span>
              <p>
                Front-end development: This focuses on the client-side of web
                development, which means <br /> creating the user interface and
                visual elements that users interact with. Front-end <br />{" "}
                developers use HTML (Hypertext Markup Language) for structure,
                CSS (Cascading <br /> Style Sheets) for styling and layout, and
                JavaScript for adding interactivity to web pages.
              </p>
              <p>
                Back-end development: This deals with the server-side of web
                development, which involves <br /> managing the website's data,
                handling user authentication, and processing requests. Back{" "}
                <br />
                -end developers use programming languages like Python, PHP,
                Ruby, or JavaScript (with <br /> frameworks like Node.js) to
                build the server-side logic and connect it to a database.
              </p>
            </span>
          </div>
          {/* <div className="progress">
            
          </div> */}
        </div>
      </div>
    </>
  );
};

export default MySkills;
