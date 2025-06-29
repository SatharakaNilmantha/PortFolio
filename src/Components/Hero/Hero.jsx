import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaReact, FaHtml5, FaJs, FaJava, FaNodeJs, FaCss3Alt } from 'react-icons/fa';
import { SiSpringboot, SiMysql } from 'react-icons/si';
import profilePic from '../../Images/satharaka.jpg';
import './Hero.css';

const Hero = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const controls = useAnimation();
  const cursorControls = useAnimation();

  const titleParts = [
    { text: "Hello, ", color: "var(--neon-blue)" },
    { text: "I'm ", color: "var(--neon-green)" },
    { text: "Satharaka ", color: "var(--neon-pink)" },
    { text: "Nilmantha", color: "var(--neon-purple)" }
  ];

  const fullText = titleParts.map(part => part.text).join('');

  // Tech icons for orbit animation
  const techIcons = [
    { icon: <FaReact />, className: 'tech-icon-1' },
    { icon: <FaHtml5 />, className: 'tech-icon-2' },
    { icon: <SiSpringboot />, className: 'tech-icon-3' },
    { icon: <FaJava />, className: 'tech-icon-4' },
    { icon: <FaNodeJs />, className: 'tech-icon-5' },
    { icon: <FaCss3Alt />, className: 'tech-icon-6' },
    { icon: <FaJs />, className: 'tech-icon-7' },
    { icon: <SiMysql />, className: 'tech-icon-8' }
  ];

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
    
    // Restart typing every 8 seconds
    const interval = setInterval(() => {
      startTyping();
    }, 8000);
    
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const profileVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1.5,
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

  // Two-line expertise organization
  const expertiseFirstLine = [
    "🚀 Full-Stack Development", 
    "⚡ Backend Architecture", 
    "🎨 Frontend Developer",
    "🎯 UI/UX Designer"
  ];

  const expertiseSecondLine = [
    "🔌 IoT & Embedded Systems", 
    "🧠 Problem Solving"
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
        {/* Profile Picture Column with Animated Tech Icons */}
        <motion.div 
          className="profile-column"
          variants={profileVariants}
        >
          <div className="profile-image-container">
            <motion.img 
              src={profilePic} 
              alt="Satharaka Nilmantha" 
              className="profile-image"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            />
            <div className="profile-frame rgb-glow"></div>
            
            {/* Animated Tech Icons Orbit */}
            <div className="tech-orbit">
              {techIcons.map((tech, index) => (
                <motion.div
                  key={index}
                  className={`tech-icon-orbit ${tech.className}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 2 + (index * 0.2), 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {tech.icon}
                </motion.div>
              ))}
            </div>
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + (0.08 * fullText.length), duration: 0.8 }}
          >
            <p className="hero-description">
              I'm a passionate <strong>Computer Engineering undergraduate</strong> 
              specializing in building innovative, scalable, and efficient digital solutions. 
              I excel in both <strong>frontend</strong> and <strong>backend development</strong>, 
              with expertise in <strong>IoT systems</strong>, <strong>problem solving</strong>, and <strong>modern web technologies</strong>.
            </p>
            
            <div className="expertise-section">
              {/* First Line */}
              <div className="expertise-row">
                {expertiseFirstLine.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="expertise-item"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      delay: 1.2 + (0.08 * fullText.length) + (index * 0.1), 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
              
              {/* Second Line */}
              <div className="expertise-row">
                {expertiseSecondLine.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="expertise-item"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      delay: 1.6 + (0.08 * fullText.length) + (index * 0.1), 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="social-container"
            variants={itemVariants}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 + (0.08 * fullText.length), duration: 0.8 }}
          >
            <div className="social-title">
              Let's Connect & Collaborate:
            </div>
            <div className="social-links">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className={`social-link ${item.className}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    delay: 2.8 + (0.08 * fullText.length) + (index * 0.1), 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    y: -4, 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
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