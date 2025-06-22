import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import ProjectBox from "./projectBox";
import eco from '../images/eco.png';
import cafe from '../images/cafe.png';
import quiz from '../images/quiz.png';
import finance from '../images/finance.png';
import task from '../images/task.png';
import freshnz from '../images/freshnz.png';
import booksaver from '../images/booksaver.png';

const Projects = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Define the unified gradient colors
  const unifiedGradient = isDark 
    ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400'
    : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600';

  const projectData = [
    {
      projectPhoto: task,
      projectName: "Personalized Task Remainder",
      projectDesc: "A task management app with personalized reminders using React, Node.js, and MongoDB.",
      projectGithub: "https://github.com/saiakulas/Task-Remainder.git",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      projectPhoto: freshnz,
      projectName: "Freshnz",
      projectDesc: "An e-commerce platform for organic products with cart functionality and user authentication.",
      projectGithub: "https://github.com/saiakulas/Freshnz.git",
      tags: ["React", "Node.js", "MongoDB", "Chakra UI"],
    },
    {
      projectPhoto: booksaver,
      projectName: "Digital Books Saver",
      projectDesc: "A platform to save and organize your digital book collection with search functionality.",
      projectGithub: "https://github.com/saiakulas/Digital-Books-Saver.git",
      tags: ["Flask", "MongoDB", "React"],
    },
    {
      projectPhoto: eco,
      projectName: "Foreign University Fee Predictor",
      projectDesc: "AI-powered fee prediction tool for international students with interactive visualizations.",
      projectGithub: "https://github.com/saiakulas/Abroad-ai",
      tags: ["Flask", "React", "Tailwind", "AI"],
    },    
    {
      projectPhoto: quiz,
      projectName: "Quizzo",
      projectDesc: "Interactive quiz application with multiple categories and score tracking.",
      projectGithub: "https://github.com/saiakulas/quiz-mern.git",
      tags: ["MERN Stack", "JWT Auth"],
    },
    {
      projectPhoto: finance,
      projectName: "Vehicle Finance Management",
      projectDesc: "Comprehensive system for managing vehicle loans and financial calculations.",
      projectGithub: "https://github.com/saiakulas/Finance-app.git",
      tags: ["React", "Node.js", "Express"],
    },
  ];

  return (
    <section className={`py-20 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
        : 'bg-gradient-to-br from-slate-50 via-white to-slate-100'
    }`}>
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className={`inline-flex items-center px-4 py-2 rounded-full mb-6 border ${
            isDark 
              ? 'bg-slate-800/50 border-slate-700 backdrop-blur-sm' 
              : 'bg-white/80 border-slate-200 backdrop-blur-sm shadow-sm'
          }`}>
            <span className={`font-medium text-sm ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>PORTFOLIO SHOWCASE</span>
          </div>
          
          <h2 className={`text-5xl lg:text-7xl font-bold mb-6 leading-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            My <span className={`bg-clip-text text-transparent ${unifiedGradient}`}>Projects</span>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`text-xl lg:text-2xl max-w-3xl mx-auto ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            A collection of my work showcasing full-stack development, problem-solving, and creative solutions.
          </motion.p>
        </motion.div>

        {/* Floating background elements */}
        <div className="relative">
          <div className={`absolute -top-20 -left-20 w-64 h-64 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob ${
            isDark ? 'bg-blue-500' : 'bg-blue-200'
          }`}></div>
          <div className={`absolute -bottom-20 -right-20 w-64 h-64 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 ${
            isDark ? 'bg-purple-500' : 'bg-purple-200'
          }`}></div>
          <div className={`absolute top-1/3 right-1/4 w-64 h-64 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 ${
            isDark ? 'bg-pink-500' : 'bg-pink-200'
          }`}></div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10"
          >
            {projectData.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`rounded-2xl overflow-hidden border backdrop-blur-sm transition-all duration-300 ${
                  isDark 
                    ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-700/60' 
                    : 'bg-white/80 border-slate-200 hover:bg-white shadow-sm hover:shadow-md'
                }`}
              >
                <ProjectBox
                  projectPhoto={project.projectPhoto}
                  projectName={project.projectName}
                  projectDesc={project.projectDesc}
                  projectGithub={project.projectGithub}
                  tags={project.tags}
                  buttonGradient={unifiedGradient}
                  isDark={isDark}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className={`mt-24 p-8 rounded-2xl border backdrop-blur-sm text-center ${
            isDark 
              ? 'bg-slate-800/80 border-slate-700' 
              : 'bg-white/90 border-slate-200 shadow-sm'
          }`}
        >
          <h3 className={`text-3xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            <span className={`bg-clip-text text-transparent ${unifiedGradient}`}>
              Want to see more?
            </span>
          </h3>
          
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Check out my GitHub profile for additional projects, contributions, and code samples.
          </p>
          
          <motion.a
            href="https://github.com/saiakulas"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center px-8 py-4 rounded-full font-semibold text-lg transition-all ${unifiedGradient} text-white hover:shadow-lg ${
              isDark ? 'hover:shadow-blue-500/20' : 'hover:shadow-purple-400/30'
            }`}
          >
            Visit My GitHub
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;