import { motion } from "framer-motion";
import { FiMail, FiSend, FiUser, FiMessageCircle } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const form = useRef();
  
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Replace these with your EmailJS credentials
    emailjs
      .sendForm(
        'service_z4idlaq',     // Replace with your service ID
        'template_5n5yqdo',    // Replace with your template ID
        form.current,
        'Ti3P1nV3kRG9UaHxP'      // Replace with your public key
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setSubmitStatus('success');
          setFormData({ user_name: '', user_email: '', message: '' });
          setIsSubmitting(false);
        },
        (error) => {
          console.error('Email send failed:', error.text);
          setSubmitStatus('error');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <footer className={`w-full py-16 transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
        : 'bg-white/80 border-t border-slate-200'
    }`}>
      <div className="container mx-auto px-6">
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <motion.h2 
              className={`text-4xl font-bold mb-4 bg-clip-text text-transparent ${
                isDark 
                  ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400' 
                  : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'
              }`}
            >
              Contact Me
            </motion.h2>
            <p className={`text-lg ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Please fill the form below to discuss any work opportunities
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              whileHover={{ y: -5 }}
              className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                isDark 
                  ? 'bg-slate-800/50 border-slate-700/50 shadow-2xl shadow-slate-900/20' 
                  : 'bg-white/70 border-slate-200/50 shadow-xl shadow-slate-200/20'
              }`}
            >
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <FiUser className={`absolute left-4 top-4 ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`} />
                    <input
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className={`w-full pl-12 pr-4 py-4 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 ${
                        isDark 
                          ? 'bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:ring-blue-400/50 focus:border-blue-400' 
                          : 'bg-white/80 border-slate-300 text-slate-900 placeholder-slate-500 focus:ring-blue-500/50 focus:border-blue-500'
                      }`}
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <FiMail className={`absolute left-4 top-4 ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`} />
                    <input
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      required
                      className={`w-full pl-12 pr-4 py-4 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 ${
                        isDark 
                          ? 'bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:ring-blue-400/50 focus:border-blue-400' 
                          : 'bg-white/80 border-slate-300 text-slate-900 placeholder-slate-500 focus:ring-blue-500/50 focus:border-blue-500'
                      }`}
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <FiMessageCircle className={`absolute left-4 top-4 ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`} />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    required
                    rows="5"
                    className={`w-full pl-12 pr-4 py-4 rounded-xl border resize-none transition-all duration-300 focus:outline-none focus:ring-2 ${
                      isDark 
                        ? 'bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:ring-blue-400/50 focus:border-blue-400' 
                        : 'bg-white/80 border-slate-300 text-slate-900 placeholder-slate-500 focus:ring-blue-500/50 focus:border-blue-500'
                    }`}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 px-8 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                    isDark 
                      ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 shadow-lg shadow-blue-500/25' 
                      : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-lg shadow-blue-500/25'
                  } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <FiSend className="w-5 h-5" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center p-4 rounded-xl ${
                      isDark 
                        ? 'bg-green-900/30 text-green-400 border border-green-700/30' 
                        : 'bg-green-100 text-green-700 border border-green-200'
                    }`}
                  >
                    ✅ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center p-4 rounded-xl ${
                      isDark 
                        ? 'bg-red-900/30 text-red-400 border border-red-700/30' 
                        : 'bg-red-100 text-red-700 border border-red-200'
                    }`}
                  >
                    ❌ Failed to send message. Please try again later.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>

        {/* Social Links */}
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
              { 
                name: 'GitHub', 
                icon: FaGithub, 
                color: isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-900', 
                href: 'https://github.com/yourusername' 
              },
              { 
                name: 'LinkedIn', 
                icon: FaLinkedin, 
                color: isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700', 
                href: 'https://linkedin.com/in/yourusername' 
              },
              { 
                name: 'Twitter', 
                icon: FaTwitter, 
                color: isDark ? 'text-sky-400 hover:text-sky-300' : 'text-sky-600 hover:text-sky-700', 
                href: 'https://twitter.com/yourusername' 
              },
              { 
                name: 'Email', 
                icon: FiMail, 
                color: isDark ? 'text-pink-400 hover:text-pink-300' : 'text-pink-600 hover:text-pink-700', 
                href: 'mailto:your-email@example.com' 
              }
            ].map((social) => (
              <motion.a 
                key={social.name}
                whileHover={{ y: -3, scale: 1.1 }}
                className={`p-3 rounded-xl transition-all duration-300 ${social.color} ${
                  isDark 
                    ? 'hover:bg-slate-700/50 backdrop-blur-sm' 
                    : 'hover:bg-slate-100/80 backdrop-blur-sm'
                }`}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
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