// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './Components/Home';
import About from './Components/About';
import Navigation from './Components/Nav';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import Projects from './Components/projects';

const App = () => {
  return (
    <ThemeProvider>
      <Navigation />
      <div className={`min-h-screen transition-all duration-500 ${
        'bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900 ' + 
        'dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 dark:text-slate-50'
      }`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default App;