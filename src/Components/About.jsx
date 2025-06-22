// src/Components/About.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  FiUser, 
  FiCode, 
  FiTarget, 
  FiTrendingUp, 
  FiHeart,
  FiChevronDown,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiCalendar,
  FiAward
} from "react-icons/fi";
import { 
  FaReact, 
  FaNodeJs, 
  FaPython,
  FaDatabase,
  FaFigma,
  FaGitAlt
} from "react-icons/fa";
import { 
  SiMongodb, 
  SiExpress, 
  SiFirebase, 
  SiFlask,
  SiJavascript,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeQuestion, setActiveQuestion] = useState(0);

  const qnaData = [
    {
      question: "Who is Sai Akula?",
      answer: "Hi! I'm Sai Akula, a passionate and detail-oriented 4th year B.Tech student in Computer Science, with a strong interest in full-stack web development and building meaningful digital solutions.",
      icon: <FiUser />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      question: "What technologies do I work with?",
      answer: "Over the past few years, I've worked extensively with modern technologies like React.js, Node.js, Express, MongoDB, Firebase, and Flask, developing multiple projects that reflect both technical skills and design thinking.",
      icon: <FiCode />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      question: "What's my development philosophy?",
      answer: "My goal is to create responsive, scalable, and user-friendly applications that solve real-world problems. I believe in writing clean, maintainable code and designing intuitive user experiences.",
      icon: <FiTarget />,
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      question: "What's my professional experience?",
      answer: "I've completed internships where I collaborated with teams, integrated APIs, optimized UI/UX, and contributed to real-time data visualizations. Each experience has strengthened my problem-solving abilities.",
      icon: <FiTrendingUp />,
      gradient: "from-orange-500 to-red-500"
    },
    {
      question: "What do I do beyond coding?",
      answer: "When I'm not coding, I enjoy exploring new tech trends, contributing to open source projects, and continuously learning. I believe in staying curious and adapting to the ever-evolving tech landscape.",
      icon: <FiHeart />,
      gradient: "from-violet-500 to-purple-500"
    }
  ];


  const stats = [
    { label: "Years of Experience", value: "1+", icon: <FiCalendar /> },
    { label: "Projects Completed", value: "10+", icon: <FiCode /> },
    { label: "Technologies Mastered", value: "12+", icon: <FiTarget /> },
    { label: "Internship Experience months", value: "3", icon: <FiAward /> }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
        : 'bg-gradient-to-br from-slate-50 via-white to-slate-100'
    }`}>
      <div className="container mx-auto px-6 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className={`inline-flex items-center px-6 py-3 rounded-full mb-6 border ${
            isDark 
              ? 'bg-slate-800/50 border-slate-700 backdrop-blur-sm' 
              : 'bg-white/80 border-slate-200 backdrop-blur-sm shadow-sm'
          }`}>
            <FiUser className={`mr-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            <span className={`font-semibold text-sm tracking-wider ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>GET TO KNOW ME</span>
          </div>
          
          <h1 className={`text-5xl lg:text-7xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            About Me
          </h1>
          
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Discover my journey, passion, and the story behind the code
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className={`text-center p-6 rounded-2xl border backdrop-blur-sm ${
                isDark 
                  ? 'bg-slate-800/50 border-slate-700' 
                  : 'bg-white/80 border-slate-200 shadow-sm'
              }`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
              }`}>
                {stat.icon}
              </div>
              <div className={`text-3xl font-bold mb-2 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {stat.value}
              </div>
              <div className={`text-sm font-medium ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Q&A Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Questions */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className={`text-3xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {qnaData.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveQuestion(index)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                    activeQuestion === index
                      ? isDark 
                        ? 'bg-slate-800 border-slate-600 shadow-lg' 
                        : 'bg-white border-slate-300 shadow-lg'
                      : isDark
                        ? 'bg-slate-800/30 border-slate-700 hover:bg-slate-800/50'
                        : 'bg-white/50 border-slate-200 hover:bg-white/80'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient} text-white`}>
                        {item.icon}
                      </div>
                      <span className={`font-semibold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        {item.question}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: activeQuestion === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={isDark ? 'text-slate-400' : 'text-slate-600'}
                    >
                      <FiChevronDown />
                    </motion.div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Answers */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:sticky lg:top-8"
          >
            <div className={`p-8 rounded-2xl border backdrop-blur-sm min-h-[400px] ${
              isDark 
                ? 'bg-slate-800/80 border-slate-700' 
                : 'bg-white/90 border-slate-200 shadow-lg'
            }`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeQuestion}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${qnaData[activeQuestion].gradient} text-white mb-6 inline-flex`}>
                    {qnaData[activeQuestion].icon}
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {qnaData[activeQuestion].question}
                  </h3>
                  
                  <p className={`text-lg leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    {qnaData[activeQuestion].answer}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`text-center p-12 rounded-2xl border backdrop-blur-sm ${
            isDark 
              ? 'bg-slate-800/80 border-slate-700' 
              : 'bg-white/90 border-slate-200 shadow-lg'
          }`}
        >
          <h2 className={`text-3xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Ready to Build Something Amazing?
          </h2>
          
          <p className={`text-lg mb-8 ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            I'm actively looking for exciting opportunities to grow as a developer and contribute to impactful products.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${
                isDark 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
              }`}
            >
              <FiMail className="mr-2" />
              Get In Touch
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
              <FiGithub className="mr-2" />
              View Portfolio
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;