import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaFileDownload, FaEye } from 'react-icons/fa';
import '../assets/css/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* Left Side: Text */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="hero-greeting">Hello there! 👋</h2>
          <h1 className="hero-title">
            I'm <span className="gradient-text">Parish Gadhiya</span>
          </h1>
          <h3 className="hero-subtitle">
            <Typewriter
              words={['Frontend Developer', 'React.js Developer', 'UI/UX Enthusiast']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>
          <p className="hero-description">
            I specialize in building exceptional digital experiences. Currently, I'm focused on 
            building responsive, accessible, and highly interactive frontend applications.
          </p>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <FaEye className="btn-icon" /> View Projects
            </a>
            <a href="/Parish_Gadhiya_Resume.pdf" download="Parish_Gadhiya_Resume.pdf" className="btn btn-secondary glass-panel neon-glow">
              <FaFileDownload className="btn-icon" /> Download CV
            </a>
          </div>
        </motion.div>

        {/* Right Side: Image/Illustration */}
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-image-blob glass-panel">
            {/* Using a local profile picture. 
                Place your actual photo named 'profile.png' or 'profile.jpg' in the public folder */}
            <img 
              src="/profile.jpg" 
              alt="Parish Gadhiya" 
              className="hero-image"
              onError={(e) => {
                // Fallback to avatar if local photo is not yet uploaded
                e.target.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Parish&backgroundColor=e0e7ff,c0aede,d1d4f9";
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
