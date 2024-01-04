import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navlinks">
        <nav class="navbar navbar-expand-lg h-10px">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <div className="navbar">
                <h1>
                  <span>Ru</span>pesh
                </h1>
              </div>
            </a>
            <div className="navlink">
              <ul className="nav">
                <Link to={'/'}>Home</Link>
                <Link to={'/pro'}>Project</Link>
                <Link to={'/skill'}>Skills</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/blog'}>Blog</Link>
                <Link to={'/education'}>Education</Link>
              </ul>
            </div>
          <li className="num">
              <i class="bi bi-telephone-fill"></i>
              <span>91 9009585819</span>
            </li>
            <div className="navitem">
              <nav class="navbar navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                  <h1>
                    <span>Ru</span>pesh
                  </h1>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasDarkNavbar"
                    aria-controls="offcanvasDarkNavbar"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div
                    class="offcanvas offcanvas-end text-bg-dark"
                    tabindex="-1"
                    id="offcanvasDarkNavbar"
                    aria-labelledby="offcanvasDarkNavbarLabel"
                  >
                    <div class="offcanvas-header">
                      <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
                        {" "}
                        <h1>
                          <span>Ru</span>pesh
                        </h1>
                      </h5>
                      <button
                        type="button"
                        class="btn-close btn-close-white"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="offcanvas-body">
                      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                      <Link to={'/'}>Home</Link>
                <Link to={'/pro'}>Project</Link>
                <Link to={'/skill'}>Skills</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/blog'}>Blog</Link>
                <Link to={'/education'}>Education</Link>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
