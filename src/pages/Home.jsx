import React from "react";
import HeroSection from "../components/HeroSection";
import SecondSection from "../components/SecondSection";
import ServiceSection from "../components/ServiceSection";
import Progress from "../components/Progress";
import MySkills from "../components/MySkills";
import BlogSection from "../components/BlogSection";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SecondSection />
      <ServiceSection />
      <MySkills />
      <Progress />
      <div className="rupesh">
        <div className="myskils">
          <div className="about">
            <h1 className="me">MY PROJECT</h1>
            <h2 className="ee">MY PROJECT</h2>
          </div>
        </div>

        <div className="h">
          <h1>HTML PROJECT</h1>
        </div>

        <div className="project">
          <div className="procard">
            <div className="pro">
              <span>
                <button className="codee">
                  <a href="https://github.com/RupeshChoudhary12/apple.git" target="_blank"
                  rel="noopener noreferrer" >
                    CLICK CODE
                  </a>
                </button>
                <button className="clickk">
                  <a
                    href="https://rupeshchoudhary12.github.io/apple/
"target="_blank"
rel="noopener noreferrer" 
                  >
                    CLICK LIVE
                  </a>
                </button>
              </span>
            </div>
          </div>
          <div className="procarda">
            <div className="pro">
              <span>
                <button className="codee">
                  <a href="https://github.com/RupeshChoudhary12/Amzone-prime-video.git"target="_blank"
                  rel="noopener noreferrer" >
                    CLICK CODE
                  </a>
                </button>
                <button className="clickk">
                  <a href="https://rupeshchoudhary12.github.io/Amzone-prime-video/"target="_blank"
                  rel="noopener noreferrer" >
                    CLICK LIVE
                  </a>
                </button>
              </span>
            </div>
          </div>
          <div className="procardb">
            <div className="pro">
              <span>
                <button className="codee">CLICK CODE</button>
                <button className="clickk">CLCIK LIVE</button>
              </span>
            </div>
          </div>
        </div>

        {/* ///JAVASCRIPT PROJECT */}
        <div className="h">
          <h1>JAVASCRIPT PROJECT</h1>
        </div>

        <div className="project">
          <div className="procardc">
            <div className="pro">
              <span>
                <button className="codee">
                  <a href="https://github.com/RupeshChoudhary12/qr-code.git"target="_blank"
                  rel="noopener noreferrer" >
                    CLICK CODE
                  </a>
                </button>
                <button className="clickk">
                  <a href="https://rupeshchoudhary12.github.io/qr-code/" target="_blank"
                  rel="noopener noreferrer" >
                    CLICK LIVE
                  </a>
                </button>
              </span>
            </div>
          </div>
          <div className="procardd">
            <div className="pro">
              <span>
                <button className="codee">
                  <a href="https://github.com/RupeshChoudhary12/qoute.git"target="_blank"
                  rel="noopener noreferrer" >
                    CLICK CODE
                  </a>
                </button>
                <button className="clickk">
                  <a href=" https://rupeshchoudhary12.github.io/qoute/" target="_blank"
                  rel="noopener noreferrer" >
                    CLICK LIVE
                  </a>
                </button>
              </span>
            </div>
          </div>
          <div className="procarde">
            <div className="pro">
              <span>
                <button className="codee">
                  <a href="https://github.com/RupeshChoudhary12/wether.git">
                    CLICK CODE
                  </a>
                </button>
                <button className="clickk">
                  <a
                    href="https://rupeshchoudhary12.github.io/wether/ 
"target="_blank"
rel="noopener noreferrer" 
                  >
                    CLICK LIVE
                  </a>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <BlogSection />
      <Contact />
    </>
  );
};

export default Home;
