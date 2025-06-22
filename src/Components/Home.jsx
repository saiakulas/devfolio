import { motion } from "framer-motion";
import { FiMail, FiCalendar, FiCode, FiTarget, FiTrendingUp } from "react-icons/fi";
import { FaReact, FaNodeJs, FaFigma, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
        : 'bg-gradient-to-br from-slate-50 via-white to-slate-100'
    }`}>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <div className={`inline-flex items-center px-4 py-2 rounded-full mb-6 border ${
                isDark 
                  ? 'bg-slate-800/50 border-slate-700 backdrop-blur-sm' 
                  : 'bg-white/80 border-slate-200 backdrop-blur-sm shadow-sm'
              }`}>
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className={`font-medium text-sm ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>Available for opportunities</span>
              </div>
              
              <h2 className={`text-5xl lg:text-7xl font-bold mb-6 leading-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Sai Akula
              </h2>
              
              <div className={`text-xl mb-8 ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                <span className="font-semibold">Full Stack Developer</span> & <span className="font-semibold">CS Student</span>
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className={`text-2xl lg:text-3xl font-bold bg-clip-text text-transparent mb-8 leading-relaxed ${
                isDark 
                  ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400' 
                  : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'
              }`}
            >
              Building innovative web solutions with modern technologies and user-centric design.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isDark 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                }`}
              >
                <FiCalendar className="mr-2" size={18} />
                Schedule a Call
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center px-8 py-4 rounded-xl font-semibold border transition-all duration-300 ${
                  isDark 
                    ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 text-slate-300 backdrop-blur-sm' 
                    : 'bg-white/80 border-slate-300 hover:bg-slate-50 text-slate-700 backdrop-blur-sm shadow-sm'
                }`}
              >
                <FiMail className="mr-2" size={18} />
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            {/* Floating elements */}
            <div className={`absolute -top-10 -left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob ${
              isDark ? 'bg-blue-500' : 'bg-blue-200'
            }`}></div>
            <div className={`absolute -bottom-10 -right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 ${
              isDark ? 'bg-purple-500' : 'bg-purple-200'
            }`}></div>
            <div className={`absolute -top-10 -right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000 ${
              isDark ? 'bg-pink-500' : 'bg-pink-200'
            }`}></div>
            
            <div className={`relative rounded-2xl p-8 shadow-2xl overflow-hidden border backdrop-blur-sm ${
              isDark 
                ? 'bg-slate-800/80 border-slate-700' 
                : 'bg-white/90 border-slate-200'
            }`}>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className={`font-mono text-sm ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>profile.tsx</div>
              </div>
              
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">const</span>
                  <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>developer</span>
                  <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>=</span>
                  <span className="text-emerald-500"></span>
                </div>
                
                <div className="pl-6 space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-400">name:</span>
                    <span className="text-orange-400">"Sai Akula"</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-400">education:</span>
                    <span className="text-orange-400">"B.Tech in Computer Science"</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-400">focus:</span>
                    <span className="text-orange-400">"Full Stack Development"</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-400">skills:</span>
                    <span className="text-yellow-400">[</span>
                  </div>
                  
                  <div className="pl-6 space-y-2">
                    <div className="flex items-center space-x-2">
                      <FaReact className="text-cyan-400" size={16} />
                      <span className="text-orange-400">"React.js"</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaNodeJs className="text-green-500" size={16} />
                      <span className="text-orange-400">"Node.js"</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiTailwindcss className="text-teal-400" size={16} />
                      <span className="text-orange-400">"Tailwind CSS"</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiTypescript className="text-blue-500" size={16} />
                      <span className="text-orange-400">"TypeScript"</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaFigma className="text-purple-500" size={16} />
                      <span className="text-orange-400">"UI/UX Design"</span>
                    </div>
                  </div>
                  
                  <div className="text-yellow-400">]</div>
                </div>
                
                <div className="text-emerald-500">};</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className={`inline-flex items-center px-6 py-3 rounded-full mb-6 border ${
            isDark 
              ? 'bg-slate-800/50 border-slate-700 backdrop-blur-sm' 
              : 'bg-white/80 border-slate-200 backdrop-blur-sm shadow-sm'
          }`}>
            <span className={`font-semibold text-sm tracking-wider ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>ABOUT ME</span>
          </div>
          
          <h2 className={`text-4xl lg:text-6xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Who Am I?
          </h2>
          
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            A passionate 4th year Computer Science student specializing in full-stack web development with experience in building modern web applications.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`p-8 rounded-2xl border backdrop-blur-sm ${
              isDark 
                ? 'bg-slate-800/80 border-slate-700' 
                : 'bg-white/90 border-slate-200'
            }`}
          >
            <h3 className={`text-2xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              My Journey
            </h3>
            
            <p className={`mb-6 leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              I'm currently pursuing my B.Tech in Computer Science with a focus on web technologies. Over the past few years, I've developed multiple projects using React, Node.js, and other modern web technologies.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className={`p-2 rounded-lg mr-4 ${
                  isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                }`}>
                  <FiCode size={20} />
                </div>
                <div>
                  <h4 className={`font-semibold mb-1 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    Full Stack Development
                  </h4>
                  <p className={`text-sm ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    Experience building complete web applications from frontend to backend.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`p-2 rounded-lg mr-4 ${
                  isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'
                }`}>
                  <FiTarget size={20} />
                </div>
                <div>
                  <h4 className={`font-semibold mb-1 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    Problem Solving
                  </h4>
                  <p className={`text-sm ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    Strong analytical skills to create efficient and scalable solutions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`p-2 rounded-lg mr-4 ${
                  isDark ? 'bg-pink-500/20 text-pink-400' : 'bg-pink-100 text-pink-600'
                }`}>
                  <FiTrendingUp size={20} />
                </div>
                <div>
                  <h4 className={`font-semibold mb-1 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    Continuous Learning
                  </h4>
                  <p className={`text-sm ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    Always exploring new technologies and best practices in web development.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: <FaReact size={24} />, name: "React", color: "text-cyan-400" },
              { icon: <FaNodeJs size={24} />, name: "Node.js", color: "text-green-500" },
              { icon: <SiTailwindcss size={24} />, name: "Tailwind", color: "text-teal-400" },
              { icon: <SiTypescript size={24} />, name: "TypeScript", color: "text-blue-500" },
              { icon: <FaFigma size={24} />, name: "Figma", color: "text-purple-500" },
              { icon: <FaGithub size={24} />, name: "Git", color: "text-gray-400" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl border backdrop-blur-sm text-center ${
                  isDark 
                    ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-800/80' 
                    : 'bg-white/80 border-slate-200 hover:bg-white shadow-sm hover:shadow-md'
                }`}
              >
                <div className={`text-4xl mb-3 ${tech.color}`}>
                  {tech.icon}
                </div>
                <div className={`font-medium ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;