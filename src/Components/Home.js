import React from 'react';
import Lottie from  "lottie-react";
import dev from "../LottieFiles/dev.json";
import Typed from "./Typed.js";


const Home = () => {
  return (
    <div >
      <div className='HomePage'>
        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>SAI AKULA</b></h1>
          <Typed/>   
        </div>
        <Lottie 
          className="illustration" 
          animationData={dev} 
          loop={true} 
        />       
      </div>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
          <p>
  I am passionate about transforming raw ideas into impactful websites and products. 
  My work challenges me to grow as a developer and create things I can be proud of.
  <br /><br />
  Proficient in <b>Python</b>, I am currently honing my skills on various 
  projects using the <b>MERN</b> stack. I thrive on innovation and the 
  satisfaction of seeing my creations come to life.
  <br />
</p>

         </p>
        </div>
      </div>
    </div>
  )
}

export default Home