import React from 'react';
import './Header.css';
import logo from '../../images/Logo.png';
import CV from '../../images/CV/resume.pdf';


const Header = () => {

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg sticky-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="S M AL RABBI" />
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
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
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
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li>
            </ul>

            <a
              href="https://l.facebook.com/l.php?u=https%3A%2F%2Fdrive.google.com%2Fuc%3Fexport%3Ddownload%26amp%253Bid%3D1XbaoImYrWTc0DJar3Z6LN8ql2znr95ev%26fbclid%3DIwAR28U8zykhIQ6Gcd2KX2CWmZe0yTf4LHHbb9M1E-W-rWFog_fdmISiU61js&h=AT1VVg2vjMWBbfFwMlkkBjPVdeWkydCmJ0bXY5KSbIlJAR3UIPM34TfnvXeTPF3zSk5ZvI6Rv_V2RIXfG0QHGw04j8pR7NCQmP7F_8RzQPucfFWjstDBeXwyJhRDHSBiuME1&__tn__=R"
              download="Al Rabbi CV"
            >
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