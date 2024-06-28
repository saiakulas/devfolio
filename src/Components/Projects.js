import React from 'react';
import ProjectBox from './ProjectBox';
import eco from '../images/eco.png'
import cafe from '../images/cafe.png'
import quiz from '../images/quiz.png'
const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={eco} projectName="online shopping-redux" />
        <ProjectBox projectPhoto={cafe} projectName="digital cafe info" />
        <ProjectBox projectPhoto={quiz} projectName="quizo" />
      </div>

    </div>
  )
}

export default Projects