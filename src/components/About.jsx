import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';
import '../assets/css/About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="about">
      <div className="about-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-text glass-panel"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              Hi, I'm Parish Gadhiya, a passionate and detail-oriented <strong>Frontend Developer</strong>. 
              My journey in tech revolves around creating intuitive, dynamic, and user-friendly web applications.
            </p>
            <p>
              I specialize in <strong>React.js</strong> and <strong>JavaScript</strong>, building modern Single Page Applications (SPAs). 
              I also have hands-on experience with backend integration using <strong>Firebase</strong>, enabling real-time databases and authentication. 
              My focus extends to <strong>UI Design</strong>, ensuring that the applications I build are not just functional, but visually stunning and responsive across all devices.
            </p>
            <p>
              Whether it's building complex e-commerce frontends like ShopSphere or interactive platforms like PetPal, 
              I thrive on turning complex problems into elegant solutions.
            </p>
          </motion.div>

          <motion.div 
            className="about-stats"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="stat-card glass-panel" variants={itemVariants}>
              <div className="stat-icon"><FaRocket /></div>
              <h3>10+</h3>
              <p>Projects Completed</p>
            </motion.div>
            
            <motion.div className="stat-card glass-panel" variants={itemVariants}>
              <div className="stat-icon"><FaCode /></div>
              <h3>15+</h3>
              <p>Technologies Known</p>
            </motion.div>

            <motion.div className="stat-card glass-panel" variants={itemVariants}>
              <div className="stat-icon"><FaLaptopCode /></div>
              <h3>1+ Year</h3>
              <p>Learning Journey</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
