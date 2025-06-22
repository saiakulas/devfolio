import { motion } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Skills', 'Projects'];

  return (
    <nav className={`sticky top-0 z-50 w-full py-6 backdrop-blur-sm transition-colors duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
        : 'bg-white/80 border-b border-slate-200 shadow-sm'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`text-2xl font-bold bg-clip-text text-transparent ${
            isDark 
              ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400' 
              : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'
          }`}
        >
          Sai Akula
        </motion.h1>
        
        <div className="flex items-center space-x-4 md:space-x-6">
          <motion.ul 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex space-x-8"
          >
            {navItems.map((item) => (
              <li key={item}>
                <a 
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={`font-medium transition-all duration-300 hover:scale-105 px-3 py-2 ${
                    isDark 
                      ? 'text-slate-300 hover:text-blue-400' 
                      : 'text-slate-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </motion.ul>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={`p-3 rounded-xl transition-all duration-300 ${
              isDark 
                ? 'text-slate-300 hover:bg-slate-700/50 hover:text-blue-400' 
                : 'text-slate-700 hover:bg-slate-200/80 hover:text-blue-600'
            }`}
            aria-label="Toggle dark mode"
          >
            {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`hidden md:block px-8 py-3 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 ${
              isDark 
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
            }`}
          >
            Contact Me
          </motion.button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FiX size={24} className={isDark ? "text-slate-300" : "text-slate-700"} />
            ) : (
              <FiMenu size={24} className={isDark ? "text-slate-300" : "text-slate-700"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden w-full overflow-hidden ${
            isDark ? "bg-slate-800" : "bg-white"
          }`}
        >
          <ul className="flex flex-col space-y-4 p-6">
            {navItems.map((item) => (
              <li key={item}>
                <a 
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={`block font-medium transition-all duration-300 py-3 px-4 rounded-lg ${
                    isDark 
                      ? 'text-slate-300 hover:bg-slate-700 hover:text-blue-400' 
                      : 'text-slate-700 hover:bg-slate-100 hover:text-blue-600'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <button
                className={`w-full py-3 px-4 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 ${
                  isDark 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600'
                }`}
              >
                Contact Me
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;