import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import profilePic from '../../Images/satharaka.jpg';
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const fullText = "Hello, I'm Satharaka Nilmantha";
  const typingSpeed = 120;
  const deletingSpeed = 60;
  const pauseTime = 3000;

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (currentIndex < fullText.length) {
          setDisplayText(fullText.substring(0, currentIndex + 1));
          setCurrentIndex(prev => prev + 1);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting backward
        if (currentIndex > 0) {
          setDisplayText(fullText.substring(0, currentIndex - 1));
          setCurrentIndex(prev => prev - 1);
        } else {
          // Start typing again
          setIsDeleting(false);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, fullText]);

  // Enhanced cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 600);
    return () => clearInterval(cursorTimer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const profileVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.7, 
      rotateY: 180,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 2,
        ease: [0.16, 1, 0.3, 1]
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
      {/* Enhanced Gaming Background System */}
      <div className="hero-background"></div>
      <div className="gaming-grid"></div>
      <div className="scanlines"></div>
      
      <motion.div 
        className="hero-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Enhanced Profile Picture Column */}
        <motion.div 
          className="profile-column"
          variants={profileVariants}
        >
          <div className="profile-image-container">
            <motion.img 
              src={profilePic} 
              alt="Satharaka Nilmantha - Gaming Developer" 
              className="profile-image"
              whileHover={{ 
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.4 }
              }}
            />
            {/* Multiple Gaming Frames */}
            <div className="profile-frame"></div>
            <div className="profile-frame"></div>
            <div className="profile-frame"></div>
            {/* Hologram Effect */}
            <div className="profile-hologram"></div>
          </div>
        </motion.div>

        {/* Enhanced Content Column */}
        <div className="content-column">
          {/* Advanced Real-time Typing Title */}
          <motion.div 
            className="typing-title-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <h1 className="typing-title">
              <span className="typing-text">{displayText}</span>
              <span className={`typing-cursor ${showCursor ? 'visible' : 'hidden'}`}>|</span>
            </h1>
          </motion.div>

          <motion.div 
            className="description-section"
            variants={itemVariants}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <p className="hero-description">
              I'm a passionate <strong>Computer Engineering undergraduate</strong> 
              specializing in building innovative, scalable, and efficient digital solutions. 
              I excel in both <strong>frontend</strong> and <strong>backend development</strong>, 
              with expertise in <strong>IoT systems</strong>, <strong>problem solving</strong>, and <strong>modern web technologies</strong>.
            </p>
            
            {/* Enhanced Gaming Expertise Layout */}
            <div className="expertise-section">
              {[
                "🚀 Full-Stack Development", 
                "⚡ Backend Architecture", 
                "🎨 Frontend Design", 
                "🔌 IoT & Embedded Systems", 
                "🧠 Problem Solving",
                "🎯 UI/UX Design"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="expertise-item"
                  initial={{ opacity: 0, scale: 0.7, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    delay: 1.8 + (index * 0.15), 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 150,
                    damping: 12
                  }}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Gaming Social Links */}
          <motion.div 
            className="social-container"
            variants={itemVariants}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 1 }}
          >
            <div className="social-title">
              Let's Connect & Collaborate
            </div>
            <div className="social-links">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className={`social-link ${item.className}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    delay: 3.2 + (index * 0.15), 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.08,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.92 }}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;