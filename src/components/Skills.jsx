import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaBootstrap, 
  FaGithub, 
  FaMobileAlt 
} from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si';
import '../assets/css/Skills.css';

const skillsData = [
  { name: 'HTML5', icon: <FaHtml5 color="#E34F26" />, level: 90 },
  { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" />, level: 85 },
  { name: 'JavaScript', icon: <FaJs color="#F7DF1E" />, level: 80 },
  { name: 'React.js', icon: <FaReact color="#61DAFB" />, level: 85 },
  { name: 'Firebase', icon: <SiFirebase color="#FFCA28" />, level: 75 },
  { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" />, level: 80 },
  { name: 'Git & GitHub', icon: <FaGithub color="#181717" />, level: 85 },
  { name: 'Responsive Design', icon: <FaMobileAlt color="#4CAF50" />, level: 95 },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="skills">
      <div className="skills-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((skill, index) => (
            <motion.div key={index} className="skill-card glass-panel" variants={cardVariants}>
              <div className="skill-icon-wrapper">
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-progress-bar">
                <motion.div 
                  className="skill-progress"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              <span className="skill-percent">{skill.level}%</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
