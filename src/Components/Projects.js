import React from 'react';
import ProjectBox from './ProjectBox';
import eco from '../images/eco.png';
import cafe from '../images/cafe.png';
import quiz from '../images/quiz.png';
import finance from '../images/finance.png';
import task from '../images/task.png';

const Projects = () => {
  const projectData = [
    {
      projectPhoto: eco,
      projectName: "online shopping-redux",
      projectDesc: "An online shopping application built with Redux for state management.",
      projectGithub: "https://github.com/saiakulas/ecommerce-store.git"
    },
    {
      projectPhoto: cafe,
      projectName: "digital cafe info",
      projectDesc: "A digital information system for cafes, providing menus and more.",
      projectGithub: "https://github.com/saiakulas/coeffe-project.git"
    },
    {
      projectPhoto: quiz,
      projectName: "quizo",
      projectDesc: "A quiz application to test your knowledge on various topics.",
      projectGithub: "https://github.com/saiakulas/quiz-mern.git"
    },
    {
      projectPhoto: finance,
      projectName: "Vehicle finance management",
      projectDesc: "A management system for vehicle financing.",
      projectGithub: "https://github.com/saiakulas/Finance-app.git"
    },
    {
      projectPhoto: task,
      projectName: "Personalized Task Remainder",
      projectDesc: "A task management app with personalized reminders.",
      projectGithub: "https://github.com/saiakulas/Task-Remainder.git"
    },
  ];

  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        {projectData.map((project, index) => (
          <ProjectBox
            key={index}
            projectPhoto={project.projectPhoto}
            projectName={project.projectName}
            projectDesc={project.projectDesc}
            projectGithub={project.projectGithub}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
