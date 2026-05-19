import { FaGithub, FaLinkedin, FaInstagram, FaReact, FaHeart } from 'react-icons/fa';
import '../assets/css/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>Parish<span className="gradient-text">.</span></h2>
            <p>Frontend Developer crafting beautiful and responsive web experiences.</p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h3>Follow Me</h3>
            <div className="social-icons">
               <Link to="https://github.com/parishgadhiya" className="social-btn" aria-label="GitHub"><FaGithub /></Link>
              <Link to=" https://www.linkedin.com/in/parish-gadhiya" className="social-btn" aria-label="LinkedIn"><FaLinkedin /></Link>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Parish Gadhiya. All Rights Reserved.</p>
          <p className="made-with">
            Made with <FaHeart className="heart-icon" /> and <FaReact className="react-icon" /> React.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
