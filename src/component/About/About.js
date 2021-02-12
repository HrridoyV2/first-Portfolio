import React, { useEffect } from 'react';
import './About.css';
import MyImg from '../../images/MyImg.jpg';
import Aos from "aos";
import "aos/dist/aos.css";
import Resume from '../../images/CV/resume.pdf';


const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
      <div id="about-section" className="container about">
        <div className="back-line d-flex align-items-center">
          <div className="front-box d-flex align-items-center">
            <p className="d-flex align-items-center">About Me</p>
          </div>
        </div>
        <div className="row">
          <div data-aos="flip-down" className="col-md-4 img-size">
            <img src={MyImg} alt="Hridoy" />
          </div>
          <div data-aos="flip-up" className="col-md-8 about-mySelf">
            <p>
              Curious about computer programming. Always try to make myself
              skilled in field of programming. Following my passion, I have
              learn many technical skills. My core skill is based on javascript.
              I am available for any opportunity.
            </p>
            <a href={Resume} download="Resume of Hridoy" target="_blank">
              <button className="btn btn-success my-2 my-sm-0 btn-style">
                Get Resume
              </button>
            </a>
            <a href="#skill-section">
              <button className="btn btn-outline-success my-2 my-sm-0 btn-style">
                My Skills
              </button>
            </a>
          </div>
        </div>
      </div>
    );
};

export default About;