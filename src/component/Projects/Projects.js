import React from 'react';
import './Projects.css';
import creative from '../../images/projectImage/creative.png';
import travel from '../../images/projectImage/Voluanter.png';
import volunteer from '../../images/projectImage/travel.png';
import hotGadgets from '../../images/projectImage/hotGadgets.JPG';
import pandaCommerce from '../../images/projectImage/pandaCommerce.JPG';
import Project from './Project';

const Projects = () => {

    const allProjects = [
      {
        id: "01",
        img: "" + creative,
        title: "Ema-john",
        description: "A Mern Stack e-commerce Website.",
        gitHub: "https://github.com/HrridoyV2/Ema-John-client",
        liveLink: "https://fir-ba4c3.web.app",
      },

      {
        id: "02",
        img: "" + volunteer,
        title: "Doctors Portal",
        description: "A Mern Stack Health Service Website.",
        gitHub: "https://github.com/HrridoyV2/doctor-portal-client",
        liveLink: "https://doctors-portal-a3f87.web.app",
      },

      {
        id: "03",
        img: "" + travel,
        title: "Creative Agency",
        description: "A Mern Stack Service Provider Website.",
        gitHub: "https://github.com/HrridoyV2/Creative-Agency-client",
        liveLink: "https://assignment-11-ac534.web.app",
      },
      
    ];


    return (
        <div id="project-section" className="container skill">
            <div  className="back-line d-flex align-items-center skill-title">
                <div className="front-box d-flex align-items-center">
                    <p className="d-flex align-items-center">Projects</p>
                </div>
            </div>

            <div className="row">
                {
                    allProjects.map(project=><Project key={project.id} project={project} ></Project>)
                }
            </div>

        </div>
    );
};

export default Projects;