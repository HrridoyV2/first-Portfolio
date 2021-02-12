import React from 'react';
import './Header.css';
import logo from '../../images/Logo.png';
import CV from '../../images/CV/resume.pdf';


const Header = () => {

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg sticky-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Hrridoy" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbarTogglerDemo02" className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#about-section">
                  About<span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skill-section">
                  Skill
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#project-section">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-section">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://hrridoyv2.medium.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li>
            </ul>

            <a href={CV} download="Resume of Hridoy">
              <button className="btn btn-outline-success my-2 my-sm-0">
                Get Resume
              </button>
            </a>
          </div>
        </div>
      </nav>
    );
};

export default Header;