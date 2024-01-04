import React from 'react'
import Navbar from './components/Navbar'
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

import './css/project.css'
import Home from './pages/Home';
import Pro from './pages/Pro';

import Skill from './pages/Skill';
import Blog from './pages/Blog';
import ContactPage from './pages/ContactPage';
import EduSection from './components/EduSection';

const App = () => {

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine)
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  return (
    <>
    <>
        <></>
    </>
     <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background:{opacity:2},
                fpsLimit: 80,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        // onHover: {
                        //     enable: true,
                        //     mode: "repulse",
                        // },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 2,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.2,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ebe2cd",
                        
                    },
                    // links: {
                    //     color: "#ffffff",
                    //     distance: 150,
                    //     enable: true,
                    //     opacity: 0.1,
                    //     width: 2,
                    // },
                    // collisions: {
                    //     enable: true,
                    // },
                    move: {
                        // direction: "none",
                        enable: true,
                        // outModes: {
                        //     default: "bounce",
                        // },
                        random: false,
                        speed: 0.1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.2,
                    },
                    // shape: {
                    //     type: "circle",
                    // },
                    // size: {
                    //     value: { min: 1, max: 5 },
                    // },
                },
                // detectRetina: true,
            }}
        />
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pro' element={<Pro/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/skill' element={<Skill/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/education' element={<EduSection/>}/>
      </Routes>

    </Router>

    
    </>
  )
}

export default App
