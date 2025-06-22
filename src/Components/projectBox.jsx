import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const ProjectBox = ({ projectPhoto, projectName, projectDesc, projectGithub, tags, buttonGradient, isDark }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="overflow-hidden">
        <motion.img 
          src={projectPhoto} 
          alt={projectName}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className={`text-xl font-bold mb-3 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          {projectName}
        </h3>
        
        <p className={`text-sm mb-4 flex-1 ${
          isDark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {projectDesc}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className={`text-xs px-3 py-1 rounded-full ${
                isDark 
                  ? 'bg-slate-700/50 text-slate-200' 
                  : 'bg-slate-100 text-slate-700'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <motion.a
          href={projectGithub}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium ${buttonGradient} text-white hover:shadow-md`}
        >
          <FaGithub className="mr-2" />
          View Code
        </motion.a>
      </div>
    </div>
  );
};

export default ProjectBox;