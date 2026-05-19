import { motion } from 'framer-motion';
import { FaFileDownload, FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';
import '../assets/css/Resume.css';

const Resume = () => {
  return (
    <section className="resume" id="resume">
      <div className="resume-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Professional <span className="gradient-text">Journey</span>
        </motion.h2>

        <div className="resume-content">
          <motion.div 
            className="resume-card premium-glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="resume-header">
              <div className="resume-header-text">
                <h3>Parish Gadhiya</h3>
                <p className="gradient-text">Frontend React Developer</p>
              </div>
              <a href={`/Parish_Gadhiya_Resume.pdf?v=${new Date().getTime()}`} download="Parish_Gadhiya_Resume.pdf" className="btn btn-primary download-btn neon-glow">
                <FaFileDownload className="btn-icon" /> Download CV
              </a>
            </div>

            <div className="resume-grid">
              {/* Experience Column */}
              <div className="resume-column">
                <h4 className="column-title">
                  <div className="icon-wrapper">
                    <FaBriefcase />
                  </div>
                  Experience
                </h4>
                
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h5>Personal Projects</h5>
                        <span className="badge">2026 - Present</span>
                      </div>
                      <h6 className="company">Frontend Web Developer</h6>
                      <p className="description">
                        Architected and developed full-stack web applications. Built <strong>PetPal</strong>-Pet Adoption System a comprehensive platform featuring a bidirectional real-time chat system for pet adoption. Also developed <strong>ShopSphere</strong>, an e-commerce platform with Razorpay integration and real-time Firebase syncing.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h5>Web Development Intern</h5>
                        <span className="badge">4 Months</span>
                      </div>
                      <h6 className="company">Venom Technologies</h6>
                      <p className="description">
                        Completed a 4-month intensive internship focused on modern web development. Gained hands-on experience building highly responsive user interfaces, optimizing application performance, and ensuring cross-browser compatibility using React.js.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Column */}
              <div className="resume-column">
                <h4 className="column-title">
                  <div className="icon-wrapper">
                    <FaGraduationCap />
                  </div>
                  Education
                </h4>
                
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h5>Master of Computer Applications</h5>
                        <span className="badge">2025 - 2026</span>
                      </div>
                      <h6 className="company">Sardar Patel University-V.V.Nagar,Anand</h6>
                      <p className="description">
                        Focusing on Advanced Software Engineering, Cloud Computing, and Scalable Web Architectures. Active member of the university coding and hackathon club.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h5>Bachelor of Computer Applications</h5>
                        <span className="badge">2022 - 2024</span>
                      </div>
                      <h6 className="company">Saurashtra University - Rajkot</h6>
                      <p className="description">
                        Graduated with distinction. Core coursework included Data Structures, Algorithms, Database Management Systems, and Object-Oriented Programming.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Core Skills Summary inside Resume */}
            <div className="resume-footer">
               <h4 className="footer-title"><FaCode className="footer-icon" /> Core Competencies</h4>
               <div className="competencies-list">
                 <span className="competency-badge">React.js</span>
                 <span className="competency-badge">JavaScript (ES6+)</span>
                 <span className="competency-badge">Firebase / Firestore</span>
                 <span className="competency-badge">Framer Motion</span>
                 <span className="competency-badge">Tailwind / Vanilla CSS</span>
                 <span className="competency-badge">Redux Toolkit</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
