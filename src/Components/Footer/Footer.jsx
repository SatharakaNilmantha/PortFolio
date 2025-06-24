import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDiscord, FaFileAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
  const contacts = [
    {
      type: 'email',
      icon: <FaEnvelope className="contact-icon" />,
      value: 'satharakanilmantha1@gmail.com',
      action: 'mailto:satharakanilmantha1@gmail.com'
    },
    {
      type: 'phone',
      icon: <FaPhone className="contact-icon" />,
      value: '+94 76 587 1905', // Replace with your actual number
      action: 'tel:+94761234567'
    },
    {
      type: 'github',
      icon: <FaGithub className="contact-icon" />,
      value: 'github.com/SatharakaNilmantha',
      action: 'https://github.com/SatharakaNilmantha'
    },
    {
      type: 'linkedin',
      icon: <FaLinkedin className="contact-icon" />,
      value: 'linkedin.com/in/satharaka-nilmantha',
      action: 'https://www.linkedin.com/in/satharaka-nilmantha-aa7b96297/'
    },
    {
      type: 'leetcode',
      icon: <SiLeetcode className="contact-icon" />,
      value: 'leetcode.com/Satharaka',
      action: 'https://leetcode.com/Satharaka' // Add your actual LeetCode profile
    },
    {
      type: 'resume',
      icon: <FaFileAlt className="contact-icon" />,
      value: 'Download Resume',
      action: '/resume.pdf' // Replace with your resume path
    }
  ];

  const handleEmailClick = () => {
    window.location.href = 'mailto:satharakanilmantha1@gmail.com?subject=Contact%20Request&body=Hello%20Satharaka,%0D%0A%0D%0AI%20would%20like%20to%20connect%20with%20you...';
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
            
            <form className="cyber-form">
              <div className="cyber-input-group">
                <input type="text" placeholder="YOUR_NAME" required className="cyber-input" />
                <span className="cyber-input-border"></span>
              </div>
              
              <div className="cyber-input-group">
                <input type="email" placeholder="YOUR_EMAIL" required className="cyber-input" />
                <span className="cyber-input-border"></span>
              </div>
              
              <div className="cyber-input-group">
                <textarea placeholder="YOUR_MESSAGE" required className="cyber-input cyber-textarea"></textarea>
                <span className="cyber-input-border"></span>
              </div>
              
              <motion.button 
                type="submit" 
                className="cyber-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="cyber-button-text">TRANSMIT</span>
                <span className="cyber-button-glitch"></span>
              </motion.button>
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
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="cyber-contact-icon">{contact.icon}</div>
                  <div className="cyber-contact-details">
                    <a 
                      href={contact.action} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cyber-contact-link"
                    >
                      {contact.value}
                    </a>
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
                  transition={{ delay: index * 0.1 + 0.3 }}
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
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="cyber-copyright">
            <span className="cyber-crypto">SATHARAKA_NILMANTHA_v1.0</span> © {new Date().getFullYear()} 
            <span className="cyber-highlight"> ALL_RIGHTS_RESERVED</span>
          </p>
          <p className="cyber-credits">
            <span className="cyber-powered">POWERED_BY</span> 
            <span className="cyber-tech"> REACT.js | BOOTSTRAP | CYBER_ENERGY | HTML | CSS </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;