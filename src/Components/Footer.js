import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by sai akula</h4>
      <h4>Copyright &copy; 2024 AS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/saiakulas" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/akula-sai-2843b8280/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:saiakula79989@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer