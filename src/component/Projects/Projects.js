import React from 'react';
import apartment from '../../images/projectImage/Apartment-Hunt.PNG';
import creative from '../../images/projectImage/Creative-Agency.PNG';
import doctors from '../../images/projectImage/Doctor-Portal.PNG';
import emajohn from '../../images/projectImage/Ema-John.PNG';
import foodDelivery from '../../images/projectImage/Food-Delivery.jpg';
import tesla from '../../images/projectImage/Tesla-clone.jpg';
import drive from '../../images/projectImage/V2-Drive.PNG';
import Project from './Project';
import './Projects.css';

const Projects = () => {

    const allProjects = [
      {
        id: "01",
        img: "" + drive,
        title: "HrridoyV2-Drive",
        description: "Google Drive Clone",
        gitHub: "https://github.com/HrridoyV2/HrridoyV2-Drive",
        liveLink: "https://hridoyv2-drive.web.app",
      },
      {
        id: "02",
        img: "" + emajohn,
        title: "Ema-john",
        description: "A Mern Stack e-commerce Website.",
        gitHub: "https://github.com/HrridoyV2/Ema-John-client",
        liveLink: "https://fir-ba4c3.web.app",
      },

      {
        id: "03",
        img: "" + doctors,
        title: "Doctors Portal",
        description: "A Mern Stack Health Service Website.",
        gitHub: "https://github.com/HrridoyV2/doctor-portal-client",
        liveLink: "https://doctors-portal-a3f87.web.app",
      },
      {
        id: "04",
        img: "" + apartment,
        title: "Apartment Hunt",
        description: "A Mern Stack Apartment Provider Website.",
        gitHub: "https://github.com/HrridoyV2/Apartment-Hunt-client",
        liveLink: "https://apartment-hunt-49.web.app",
      },
      {
        id: "05",
        img: "" + creative,
        title: "Creative Agency",
        description: "A Mern Stack Service Provider Website.",
        gitHub: "https://github.com/HrridoyV2/Creative-Agency-client",
        liveLink: "https://assignment-11-ac534.web.app",
      },
      {
        id: "06",
        img: "" + tesla,
        title: "Tesla Clone",
        description: "React-Native app",
        gitHub: "https://github.com/HrridoyV2/teslaClone-react-native",
        liveLink: "https://expo.io/@hrridoyv2/projects/teslaClone",
      },
      {
        id: "07",
        img: "" + foodDelivery,
        title: "Food-Delivery",
        description: "React-Native app",
        gitHub: "https://github.com/HrridoyV2/food-delivery-native",
        liveLink: "https://expo.io/@hrridoyv2/projects/food-delivery",
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