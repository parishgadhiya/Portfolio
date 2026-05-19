import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../assets/css/Projects.css';

const projectsData = [
  {
    title: 'PetPal',
    description: 'Pet adoption and pet products platform with admin panel. A comprehensive solution for finding and adopting pets, along with a fully featured product store.',
    // Place a file named 'petpal-preview.jpg' in your public folder
    image: '/petpal_mockup.png',
    technologies: ['React.js', 'Firebase', 'CSS', 'Context API'],
    features: [
      'Pet adoption request',
      'Admin approval/rejection',
      'Product management',
      'Cart & wishlist',
      'Firebase Authentication'
    ],
    githubLink: 'https://github.com/parishgadhiya/Petpal-Pet-Adopation-System',
    liveLink: 'https://petpal-pet-adopation-system-gead.vercel.app'
  },
  {
    title: 'ShopSphere',
    description: 'Modern e-commerce frontend website. A highly responsive and beautifully designed shopping experience with dynamic product displays and user interactions.',
    // Place a file named 'shopsphere-preview.jpg' in your public folder
    image: '/shopsphere_mockup.png',
    technologies: ['React.js', 'Vite', 'CSS', 'Framer Motion'],
    features: [
      'Product listing',
      'Cart system',
      'Wishlist',
      'Search & filter',
      'Responsive UI'
    ],
    githubLink: 'https://github.com/parishgadhiya/ShopSphere',
    liveLink: 'https://shop-sphere-topaz-five.vercel.app'
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="projects">
      <div className="projects-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectsData.map((project, index) => (
            <motion.div key={index} className="project-card glass-panel" variants={projectVariants}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="project-link-btn" aria-label="GitHub">
                      <FaGithub />
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="project-link-btn" aria-label="Live Demo">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <strong>Key Features:</strong>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
