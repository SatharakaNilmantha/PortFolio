import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import profilePic from '../../Images/satharaka.jpg';
import './Hero.css';

const Hero = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const controls = useAnimation();
  const cursorControls = useAnimation();

  const titleParts = [
    { text: "Hello , ", color: "var(--neon-blue)" },
    { text: " I'm ", color: "var(--neon-green)" },
    { text: " Satharaka ", color: "var(--neon-pink)" },
    { text: " Nilmantha", color: "var(--neon-purple)" }
  ];

  const fullText = titleParts.map(part => part.text).join('');

  // Typing animation sequence
  const startTyping = async () => {
    await controls.start("hidden");
    setTypingComplete(false);
    
    // Typing animation
    await controls.start("typing", {
      duration: 0.08 * fullText.length,
      ease: "linear"
    });
    
    setTypingComplete(true);
    
    // Blinking cursor animation
    while (true) {
      await cursorControls.start({ opacity: 1 }, { duration: 0.5 });
      await cursorControls.start({ opacity: 0 }, { duration: 0.5 });
    }
  };

  useEffect(() => {
    startTyping();
    
    // Restart typing every 10 seconds
    const interval = setInterval(() => {
      startTyping();
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const typingVariants = {
    hidden: { width: 0 },
    typing: {
      width: "100%",
      transition: {
        duration: 0.08 * fullText.length,
        ease: "linear"
      }
    }
  };

  const socialLinks = [
    { 
      icon: <FaGithub className="social-icon" />, 
      text: "GitHub", 
      href: "https://github.com/SatharakaNilmantha",
      className: "github-link" 
    },
    { 
      icon: <FaLinkedin className="social-icon" />, 
      text: "LinkedIn", 
      href: "https://www.linkedin.com/in/satharaka-nilmantha-aa7b96297/",
      className: "linkedin-link" 
    },
    { 
      icon: <FaEnvelope className="social-icon" />, 
      text: "Email", 
      href: "mailto:satharakanilmantha1@gmail.com",
      className: "email-link" 
    },
    { 
      icon: <FaWhatsapp className="social-icon" />, 
      text: "WhatsApp", 
      href: "https://wa.me/94765871905",
      className: "whatsapp-link" 
    }
  ];

  return (
    <section className="cyber-hero">
      <div className="hero-background"></div>
      
      <motion.div 
        className="hero-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Profile Picture Column */}
        <motion.div className="profile-column">
          <div className="profile-image-container">
            <motion.img 
              src={profilePic} 
              alt="Satharaka Nilmantha" 
              className="profile-image"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            />
            <div className="profile-frame rgb-glow"></div>
          </div>
        </motion.div>

        {/* Content Column */}
        <div className="content-column">
          <div className="typing-container">
            <motion.div
              className="typing-wrapper"
              initial={{ width: 0 }}
              animate={controls}
              variants={typingVariants}
            >
              <h1 className="hero-title">
                {titleParts.map((part, index) => (
                  <span 
                    key={index}
                    className="title-part"
                    style={{ color: part.color }}
                  >
                    {part.text}
                  </span>
                ))}
              </h1>
            </motion.div>
            <motion.span
              className="typing-cursor"
              initial={{ opacity: 0 }}
              animate={cursorControls}
            />
          </div>

          <motion.div 
            className="description-section"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 + (0.08 * fullText.length), duration: 0.8 }}
          >
            <p className="hero-description">
              I'm a Computer Engineering undergraduate passionate about building innovative, 
              efficient, and scalable solutions. I specialize in full-stack development, 
              IoT systems, and machine learning applications.
            </p>
            
            <div className="expertise-section">
              {["🚀 Full Stack Development", "🔌 IoT & Embedded Systems", "🧠 Machine Learning"].map((item, index) => (
                <motion.div 
                  key={index}
                  className="expertise-item"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + (0.08 * fullText.length) + (index * 0.1), duration: 0.5 }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="social-container">
            <motion.div 
              className="social-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 + (0.08 * fullText.length), duration: 0.5 }}
            >
              Connect With Me:
            </motion.div>
            <div className="social-links">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className={`social-link ${item.className}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + (0.08 * fullText.length) + (index * 0.1), duration: 0.5 }}
                  whileHover={{ y: -3, scale: 1.05 }}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;