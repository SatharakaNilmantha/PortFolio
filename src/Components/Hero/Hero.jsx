import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaDownload } from 'react-icons/fa';
import profilePic from '../../Images/satharaka.jpg';
import './Hero.css';

const Hero = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  const cursorControls = useAnimation();

  const titleParts = [
    { text: "Hello, ", color: "var(--neon-blue)" },
    { text: "I'm ", color: "var(--neon-green)" },
    { text: "Satharaka ", color: "var(--neon-pink)" },
    { text: "Nilmantha", color: "var(--neon-purple)" }
  ];

  const fullText = titleParts.map(part => part.text).join('');

  // Generate particles for background effect
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 1,
          speedY: (Math.random() - 0.5) * 1,
          color: ['var(--neon-blue)', 'var(--neon-pink)', 'var(--neon-purple)', 'var(--neon-green)'][Math.floor(Math.random() * 4)]
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.speedX + window.innerWidth) % window.innerWidth,
        y: (particle.y + particle.speedY + window.innerHeight) % window.innerHeight
      })));
    };

    const interval = setInterval(animateParticles, 100);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
    // Defer the initial call to ensure component is mounted
    const initialTimeout = setTimeout(() => {
      startTyping();
    }, 0);
    
    // Restart typing every 10 seconds
    const interval = setInterval(() => {
      startTyping();
    }, 10000);
    
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
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
      {/* Enhanced Animated Background */}
      <div className="hero-background">
        <div className="matrix-rain"></div>
        <div className="circuit-pattern"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="particles-container">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`
            }}
          />
        ))}
      </div>

      {/* Mouse Follower Effect */}
      <div 
        className="mouse-follower"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />
      
      <motion.div 
        className="hero-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Profile Picture Column - SAME LAYOUT, ENHANCED ANIMATIONS */}
        <motion.div className="profile-column">
          <div className="profile-image-container">
            <motion.img 
              src={profilePic} 
              alt="Satharaka Nilmantha" 
              className="profile-image"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            />
            <div className="profile-frame rgb-glow"></div>
            <div className="profile-scanner"></div>
            
            {/* Gaming HUD Elements */}
            <div className="hud-elements">
              <div className="hud-corner top-left"></div>
              <div className="hud-corner top-right"></div>
              <div className="hud-corner bottom-left"></div>
              <div className="hud-corner bottom-right"></div>
            </div>
          </div>
        </motion.div>

        {/* Content Column - SAME LAYOUT, ENHANCED ANIMATIONS */}
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
              I'm a passionate <strong>Full-Stack Developer</strong> and Computer Engineering undergraduate 
              specializing in building innovative, scalable, and efficient digital solutions. 
              I excel in both <strong>frontend</strong> and <strong>backend development</strong>, 
              with expertise in <strong>IoT systems</strong> and <strong>modern web technologies</strong>.
            </p>
            
            <div className="expertise-section">
              {[
                "🚀 Full-Stack Development", 
                "⚡ Backend Architecture", 
                "🎨 Frontend Design", 
                "🔌 IoT & Embedded Systems", 
                "🧠 Problem Solving"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="expertise-item"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + (0.08 * fullText.length) + (index * 0.1), duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5
                  }}
                >
                  {item}
                </motion.div>
              ))}
            </div>

            {/* Resume Download Button */}
            <motion.div 
              className="resume-section"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + (0.08 * fullText.length), duration: 0.5 }}
            >
              <motion.a 
                href="/resume.pdf" 
                download="Satharaka_Nilmantha_Resume.pdf"
                className="resume-download-btn"
                whileHover={{ 
                  scale: 1.05,
                  y: -3
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="download-icon" />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <div className="social-container">
            <motion.div 
              className="social-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 + (0.08 * fullText.length), duration: 0.5 }}
            >
              Let's Connect & Collaborate:
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
                  whileHover={{ 
                    y: -5, 
                    scale: 1.05
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Gaming UI Overlay */}
      <div className="gaming-overlay">
        <div className="scan-lines"></div>
        <div className="vignette"></div>
      </div>
    </section>
  );
};

export default Hero;