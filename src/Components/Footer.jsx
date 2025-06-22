import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className={`w-full py-16 transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
        : 'bg-white/80 border-t border-slate-200'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className={`text-2xl font-bold bg-clip-text text-transparent ${
              isDark 
                ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400' 
                : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'
            }`}
          >
            Sai Akula
          </motion.div>
          
          <div className="flex items-center space-x-6">
            {[
              { name: 'GitHub', icon: FaGithub, color: isDark ? 'text-slate-300' : 'text-slate-700' },
              { name: 'LinkedIn', icon: FaLinkedin, color: isDark ? 'text-blue-400' : 'text-blue-600' },
              { name: 'Twitter', icon: FaTwitter, color: isDark ? 'text-sky-400' : 'text-sky-600' },
              { name: 'Email', icon: FiMail, color: isDark ? 'text-pink-400' : 'text-pink-600' }
            ].map((social) => (
              <motion.a 
                key={social.name}
                whileHover={{ y: -3, scale: 1.1 }}
                className={`p-3 rounded-xl transition-all duration-300 ${social.color} ${
                  isDark 
                    ? 'hover:bg-slate-700/50 backdrop-blur-sm' 
                    : 'hover:bg-slate-100/80 backdrop-blur-sm'
                }`}
                href="#"
                aria-label={social.name}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className={`mt-12 pt-8 border-t text-center ${
          isDark 
            ? 'border-slate-700 text-slate-400' 
            : 'border-slate-200 text-slate-600'
        }`}>
          <p>© {new Date().getFullYear()} Sai Akula. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;