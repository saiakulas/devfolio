import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { SiPostman, SiExpress, SiMongodb, SiVercel } from "react-icons/si";
import { FaPython, FaReact, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap } from "react-icons/fa";
import { DiJavascript1, DiNodejs } from "react-icons/di";

const Skills = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const skills = [
    { icon: <FaPython size={28} />, name: "Python", color: "text-blue-400" },
    { icon: <DiJavascript1 size={28} />, name: "JavaScript", color: "text-yellow-400" },
    { icon: <FaReact size={28} />, name: "React", color: "text-cyan-400" },
    { icon: <DiNodejs size={28} />, name: "Node.js", color: "text-green-500" },
    { icon: <SiExpress size={28} />, name: "Express", color: "text-gray-300" },
    { icon: <SiMongodb size={28} />, name: "MongoDB", color: "text-green-600" },
    { icon: <FaGitAlt size={28} />, name: "Git", color: "text-orange-500" },
    { icon: <FaGithub size={28} />, name: "GitHub", color: "text-gray-200" },
    { icon: <FaNpm size={28} />, name: "NPM", color: "text-red-500" },
    { icon: <FaFigma size={28} />, name: "Figma", color: "text-purple-500" },
    { icon: <FaBootstrap size={28} />, name: "Bootstrap", color: "text-purple-400" },
    { icon: <SiPostman size={28} />, name: "Postman", color: "text-orange-400" },
    { icon: <SiVercel size={28} />, name: "Vercel", color: "text-white" },
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
          className="text-center mb-20"
        >
          <div className={`inline-flex items-center px-4 py-2 rounded-full mb-6 border ${
            isDark 
              ? 'bg-slate-800/50 border-slate-700 backdrop-blur-sm' 
              : 'bg-white/80 border-slate-200 backdrop-blur-sm shadow-sm'
          }`}>
            <span className={`font-medium text-sm ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>TECHNICAL EXPERTISE</span>
          </div>
          
          <h2 className={`text-5xl lg:text-7xl font-bold mb-6 leading-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            My Toolkit
          </h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`text-2xl lg:text-3xl font-bold bg-clip-text text-transparent mb-8 leading-relaxed max-w-4xl mx-auto ${
              isDark 
                ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400' 
                : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'
            }`}
          >
            Technologies I use to build exceptional digital experiences
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
            className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 z-10"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className={`p-6 rounded-2xl border backdrop-blur-sm text-center transition-all duration-300 ${
                  isDark 
                    ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-700/60' 
                    : 'bg-white/80 border-slate-200 hover:bg-white shadow-sm hover:shadow-md'
                }`}
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className={`text-5xl mb-4 ${skill.color}`}
                >
                  {skill.icon}
                </motion.div>
                <div className={`font-semibold ${
                  isDark ? 'text-slate-200' : 'text-slate-800'
                }`}>
                  {skill.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack Breakdown */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className={`mt-24 p-8 rounded-2xl border backdrop-blur-sm ${
            isDark 
              ? 'bg-slate-800/80 border-slate-700' 
              : 'bg-white/90 border-slate-200 shadow-sm'
          }`}
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className={`text-3xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                <span className={`bg-clip-text text-transparent ${
                  isDark 
                    ? 'bg-gradient-to-r from-blue-400 to-cyan-400' 
                    : 'bg-gradient-to-r from-blue-600 to-cyan-600'
                }`}>
                  Development
                </span> Stack
              </h3>
              
              <div className={`space-y-6 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg mr-4 ${
                    isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                  }`}>
                    <FaReact size={20} />
                  </div>
                  <div>
                    <h4 className={`font-semibold text-lg mb-2 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      Frontend
                    </h4>
                    <p className="text-sm leading-relaxed">
                      React, JavaScript/ES6+, HTML5, CSS3, Tailwind, Bootstrap
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg mr-4 ${
                    isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'
                  }`}>
                    <DiNodejs size={20} />
                  </div>
                  <div>
                    <h4 className={`font-semibold text-lg mb-2 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      Backend
                    </h4>
                    <p className="text-sm leading-relaxed">
                      Node.js, Express, MongoDB, REST APIs, Authentication
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h3 className={`text-3xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                <span className={`bg-clip-text text-transparent ${
                  isDark 
                    ? 'bg-gradient-to-r from-purple-400 to-pink-400' 
                    : 'bg-gradient-to-r from-purple-600 to-pink-600'
                }`}>
                  Tools
                </span> & Workflow
              </h3>
              
              <div className={`space-y-6 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg mr-4 ${
                    isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'
                  }`}>
                    <FaGitAlt size={20} />
                  </div>
                  <div>
                    <h4 className={`font-semibold text-lg mb-2 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      Version Control
                    </h4>
                    <p className="text-sm leading-relaxed">
                      Git, GitHub, CI/CD workflows, Vercel deployments
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg mr-4 ${
                    isDark ? 'bg-pink-500/20 text-pink-400' : 'bg-pink-100 text-pink-600'
                  }`}>
                    <FaFigma size={20} />
                  </div>
                  <div>
                    <h4 className={`font-semibold text-lg mb-2 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      Design & Testing
                    </h4>
                    <p className="text-sm leading-relaxed">
                      Figma, Postman, Chrome DevTools, Responsive Design
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;