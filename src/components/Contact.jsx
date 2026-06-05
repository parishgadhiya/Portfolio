import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
import '../assets/css/Contact.css';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill out all fields.' });
      setIsSubmitting(false);
      return;
    }

    // TODO: Ensure these credentials are correct and match your EmailJS account
    const serviceId = 'service_u24dehj';
    const templateId = 'template_wribva4';
    const publicKey = 'tmgjCSLFviyrzlQcJ';

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      if (response.status === 200) {
        setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: 'Oops! Something went wrong. Please try again later.' });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({ type: 'error', message: 'Oops! Something went wrong. Please try again later.' });
    } finally {
      setIsSubmitting(false);
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
    }
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <div className="contact-content">
          <motion.div 
            className="contact-info glass-panel"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Let's Connect</h3>
            <p className="contact-desc">
              I'm currently available for freelance work or full-time opportunities. 
              If you have a project that needs some creative magic, I'd love to hear about it!
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><FaEnvelope /></div>
                <div className="info-text">
                  <h4>Email</h4>
                  <p>parishgadhiya26@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><FaPhoneAlt /></div>
                <div className="info-text">
                  <h4>Phone</h4>
                  <p>+91 9723717168</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <Link to="https://github.com/parishgadhiya" className="social-btn" aria-label="GitHub"><FaGithub /></Link>
              <Link to=" https://www.linkedin.com/in/parish-gadhiya" className="social-btn" aria-label="LinkedIn"><FaLinkedin /></Link>
              <a href="#" className="social-btn" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container glass-panel"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="John Doe"
                  className={status.type === 'error' && !formData.name ? 'error-input' : ''}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="john@example.com"
                  className={status.type === 'error' && !formData.email ? 'error-input' : ''}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="How can I help you?"
                  className={status.type === 'error' && !formData.message ? 'error-input' : ''}
                ></textarea>
              </div>

              {status.message && (
                <div className={`form-status ${status.type}`}>
                  {status.message}
                </div>
              )}

              <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="loader"></span>
                ) : (
                  <><FaPaperPlane className="btn-icon" /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
