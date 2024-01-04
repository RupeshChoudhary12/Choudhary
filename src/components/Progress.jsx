import React from 'react'
import '../css/progress.css'
import Aos from 'aos'
import { useEffect } from 'react'


const Progress = () => {


    useEffect(() => {
        Aos.init()
    },[])


  return (
    <>
       <div className="myskils">
          <div className="about" data-aos="fade-up">
            <h1 className="me">MY SKILLS</h1>
            <h2 className="ee">MY SKILLS</h2>
          </div>
        </div>
   <section className='experince-section' id='about'>
    <div className='progress'>
        {/* <div className='section-title center'>
            <p>Why Choose me</p>
            <h2>My Experince Area</h2>
        </div> */}
        <div className="experience-items">

            <div className="experience-item">
                <div className="experience-info">
                    <p>HTML</p>
                    <p>90%</p>
                </div>
                <div className="progress-line" data-percent="90%">
                   <span style={{width : "90%"}}></span>
                </div>
            </div>

            <div className="experience-item">
                <div className="experience-info">
                    <p>CSS</p>
                    <p>85%</p>
                </div>
                <div className="progress-line" data-percent="90%">
                   <span style={{width : "85%"}}></span>
                </div>
            </div>

            <div className="experience-item">
                <div className="experience-info">
                    <p>JAVASCRIPT</p>
                    <p>80%</p>
                </div>
                <div className="progress-line" data-percent="90%">
                   <span style={{width : "80%"}}></span>
                </div>
            </div>

            <div className="experience-item">
                <div className="experience-info">
                    <p>REACT</p>
                    <p>85%</p>
                </div>
                <div className="progress-line" data-percent="90%">
                   <span style={{width : "85%"}}></span>
                </div>
            </div>
            <div className="experience-item">
                <div className="experience-info">
                    <p>BOOTSRTAP</p>
                    <p>85%</p>
                </div>
                <div className="progress-line" data-percent="90%">
                   <span style={{width : "85%"}}></span>
                </div>
            </div>
            <div className="experience-item">
                <div className="experience-info">
                    <p>MUI</p>
                    <p>85%</p>
                </div>
                <div className="progress-line" data-percent="90%">
                   <span style={{width : "85%"}}></span>
                </div>
            </div>
            <div className="experience-item">
                <div className="experience-info">
                    <p>REDUX</p>
                    <p>80%</p>
                </div>
                <div className="progress-line" data-percent="90%">
                   <span style={{width : "80%"}}></span>
                </div>
            </div>
            <div className="experience-item">
                <div className="experience-info">
                    <p>SWIPER</p>
                    <p>70%</p>
                </div>
                <div className="progress-line" data-percent="90%">
                   <span style={{width : "70%"}}></span>
                </div>
            </div>
            <div className="experience-item">
                <div className="experience-info">
                    <p>MONOGODB</p>
                    <p>65%</p>
                </div>
                <div className="progress-line" data-percent="90%">
                   <span style={{width : "65%"}}></span>
                </div>
            </div>
        </div>
    </div>
    <div className='blob'></div>
   </section>
   </>
  )
}

export default Progress
