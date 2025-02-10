import React from 'react';
import ProjectBox from './ProjectBox';
import eco from '../images/eco.png';
import cafe from '../images/cafe.png';
import quiz from '../images/quiz.png';
import finance from '../images/finance.png';
import task from '../images/task.png';
import freshnz from '../images/freshnz.png';
import booksaver from '../images/booksaver.png';

const Projects = () => {
  const projectData = [
    {
      projectPhoto: task,
      projectName: "Personalized Task Remainder",
      projectDesc: "A task management app with personalized reminders.",
      projectGithub: "https://github.com/saiakulas/Task-Remainder.git"
    },
    {
      projectPhoto: freshnz,
      projectName: "Freshnz",
      projectDesc: "An e-commerce platform to sell organic natural products, developed with React, Node.js, MongoDB, and Chakra UI.",
      projectGithub: "https://github.com/saiakulas/Freshnz.git"
    },
    {
      projectPhoto: booksaver,
      projectName: "Digital Books Saver",
      projectDesc: "A platform to save books and maintain a personal collection, built with Flask, MongoDB, and React.",
      projectGithub: "https://github.com/saiakulas/Digital-Books-Saver.git"
    },
    {
      projectPhoto: eco,
      projectName: "online shopping-redux",
      projectDesc: "An online shopping application built with Redux for state management.",
      projectGithub: "https://github.com/saiakulas/ecommerce-store.git"
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