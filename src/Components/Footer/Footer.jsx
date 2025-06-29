import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDiscord, FaFileAlt, FaPaperPlane, FaDownload } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const contacts = [
    {
      type: 'email',
      icon: <FaEnvelope className="cyber-contact-icon" />,
      value: 'satharakanilmantha1@gmail.com',
      action: 'mailto:satharakanilmantha1@gmail.com'
    },
    {
      type: 'phone',
      icon: <FaPhone className="cyber-contact-icon" />,
      value: '+94 76 587 1905',
      action: 'tel:+94765871905'
    },
    {
      type: 'github',
      icon: <FaGithub className="cyber-contact-icon" />,
      value: 'github.com/SatharakaNilmantha',
      action: 'https://github.com/SatharakaNilmantha'
    },
    {
      type: 'linkedin',
      icon: <FaLinkedin className="cyber-contact-icon" />,
      value: 'linkedin.com/in/satharaka-nilmantha',
      action: 'https://www.linkedin.com/in/satharaka-nilmantha-aa7b96297/'
    },
    {
      type: 'leetcode',
      icon: <SiLeetcode className="cyber-contact-icon" />,
      value: 'leetcode.com/Satharaka',
      action: 'https://leetcode.com/Satharaka'
    },
    {
      type: 'resume',
      icon: <FaDownload className="cyber-contact-icon" />,
      value: 'Download Resume',
      action: '/resume.pdf',
      isDownload: true
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Simulate form submission (replace with actual form handling)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For now, we'll just create a mailto link with the form data
      const subject = encodeURIComponent(`Contact Request from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      window.location.href = `mailto:satharakanilmantha1@gmail.com?subject=${subject}&body=${body}`;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResumeDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Satharaka_Nilmantha_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="cyber-footer" id="contact">
      <div className="cyber-container">
        <motion.div 
          className="cyber-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left Column - Contact Form */}
          <div className="cyber-contact-form">
            <motion.h3 
              className="cyber-title"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="cyber-glitch" data-text="SEND_MESSAGE">SEND_MESSAGE</span>
            </motion.h3>
            
            <form className="cyber-form" onSubmit={handleSubmit}>
              <motion.div 
                className="cyber-input-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <input 
                  type="text" 
                  name="name"
                  placeholder="YOUR_NAME" 
                  required 
                  className="cyber-input"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <span className="cyber-input-border"></span>
              </motion.div>
              
              <motion.div 
                className="cyber-input-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <input 
                  type="email" 
                  name="email"
                  placeholder="YOUR_EMAIL" 
                  required 
                  className="cyber-input"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <span className="cyber-input-border"></span>
              </motion.div>
              
              <motion.div 
                className="cyber-input-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <textarea 
                  name="message"
                  placeholder="YOUR_MESSAGE" 
                  required 
                  className="cyber-input cyber-textarea"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                <span className="cyber-input-border"></span>
              </motion.div>
              
              <motion.button 
                type="submit" 
                className="cyber-button"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <span className="cyber-button-text">
                  {isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT'}
                </span>
                <FaPaperPlane className="cyber-button-icon" />
                <span className="cyber-button-glitch"></span>
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div 
                  className="submit-success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Message sent successfully!
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div 
                  className="submit-error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Failed to send message. Please try again.
                </motion.div>
              )}
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div className="cyber-contact-info">
            <motion.h3 
              className="cyber-title"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="cyber-glitch" data-text="CONTACT_INFO">CONTACT_INFO</span>
            </motion.h3>
            
            <div className="cyber-contact-list">
              {contacts.map((contact, index) => (
                <motion.div 
                  key={index}
                  className="cyber-contact-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                >
                  <div className="cyber-contact-icon">{contact.icon}</div>
                  <div className="cyber-contact-details">
                    {contact.isDownload ? (
                      <button 
                        onClick={handleResumeDownload}
                        className="cyber-contact-link resume-download"
                      >
                        {contact.value}
                      </button>
                    ) : (
                      <a 
                        href={contact.action} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cyber-contact-link"
                      >
                        {contact.value}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="cyber-social-links">
              {contacts.filter(c => ['github', 'linkedin', 'leetcode'].includes(c.type)).map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-social-icon"
                  whileHover={{ y: -5, scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {contact.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          className="cyber-footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <p className="cyber-copyright">
            <span className="cyber-crypto">SATHARAKA_NILMANTHA_v2.0</span> © {new Date().getFullYear()} 
            <span className="cyber-highlight"> ALL_RIGHTS_RESERVED</span>
          </p>
          <p className="cyber-credits">
            <span className="cyber-powered">POWERED_BY</span> 
            <span className="cyber-tech"> REACT.js | FRAMER-MOTION | CYBER_ENERGY </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;