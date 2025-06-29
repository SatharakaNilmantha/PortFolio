import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaDownload, FaGamepad, FaCode, FaRocket } from 'react-icons/fa';
import profilePic from '../../Images/satharaka.jpg';
import './Hero.css';

const Hero = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  const cursorControls = useAnimation();

  // Gaming-style title phases
  const titlePhases = [
    [
      { text: "Hello, ", color: "var(--neon-blue)", glow: true },
      { text: "I'm ", color: "var(--neon-green)", glow: true },
      { text: "Satharaka ", color: "var(--neon-pink)", glow: true },
      { text: "Nilmantha", color: "var(--neon-purple)", glow: true }
    ],
    [
      { text: "Full-Stack ", color: "var(--neon-blue)", glow: true },
      { text: "Developer ", color: "var(--neon-green)", glow: true },
      { text: "& ", color: "var(--neon-pink)", glow: true },
      { text: "Problem Solver", color: "var(--neon-purple)", glow: true }
    ],
    [
      { text: "Backend ", color: "var(--neon-blue)", glow: true },
      { text: "Architect ", color: "var(--neon-green)", glow: true },
      { text: "& ", color: "var(--neon-pink)", glow: true },
      { text: "Frontend Master", color: "var(--neon-purple)", glow: true }
    ],
    [
      { text: "IoT ", color: "var(--neon-blue)", glow: true },
      { text: "Engineer ", color: "var(--neon-green)", glow: true },
      { text: "& ", color: "var(--neon-pink)", glow: true },
      { text: "Tech Innovator", color: "var(--neon-purple)", glow: true }
    ]
  ];

  const currentTitle = titlePhases[currentPhase];
  const fullText = currentTitle.map(part => part.text).join('');

  // Generate particles for background effect
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 2,
          speedY: (Math.random() - 0.5) * 2,
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

    const interval = setInterval(animateParticles, 50);
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

  // Enhanced typing animation sequence
  const startTyping = async () => {
    await controls.start("hidden");
    setTypingComplete(false);
    
    // Glitch effect before typing
    await controls.start("glitch", { duration: 0.3 });
    
    // Typing animation
    await controls.start("typing", {
      duration: 0.1 * fullText.length,
      ease: "easeInOut"
    });
    
    setTypingComplete(true);
    
    // Blinking cursor animation
    let blinkCount = 0;
    const blinkInterval = setInterval(async () => {
      await cursorControls.start({ opacity: 1, scale: 1.2 }, { duration: 0.3 });
      await cursorControls.start({ opacity: 0, scale: 1 }, { duration: 0.3 });
      blinkCount++;
      
      if (blinkCount >= 5) {
        clearInterval(blinkInterval);
        // Move to next phase
        setTimeout(() => {
          setCurrentPhase(prev => (prev + 1) % titlePhases.length);
          startTyping();
        }, 2000);
      }
    }, 600);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      startTyping();
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [currentPhase]);

  // Enhanced animation variants
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

  const typingVariants = {
    hidden: { 
      width: 0,
      opacity: 0
    },
    glitch: {
      width: "100%",
      opacity: [0, 1, 0, 1, 0, 1],
      x: [0, -5, 5, -3, 3, 0],
      transition: { duration: 0.3 }
    },
    typing: {
      width: "100%",
      opacity: 1,
      x: 0,
      transition: {
        width: { duration: 0.1 * fullText.length, ease: "easeInOut" },
        opacity: { duration: 0.2 }
      }
    }
  };

  const socialLinks = [
    { 
      icon: <FaGithub className="social-icon" />, 
      text: "GitHub", 
      href: "https://github.com/SatharakaNilmantha",
      className: "github-link",
      description: "Open Source Projects"
    },
    { 
      icon: <FaLinkedin className="social-icon" />, 
      text: "LinkedIn", 
      href: "https://www.linkedin.com/in/satharaka-nilmantha-aa7b96297/",
      className: "linkedin-link",
      description: "Professional Network"
    },
    { 
      icon: <FaEnvelope className="social-icon" />, 
      text: "Email", 
      href: "mailto:satharakanilmantha1@gmail.com",
      className: "email-link",
      description: "Direct Contact"
    },
    { 
      icon: <FaWhatsapp className="social-icon" />, 
      text: "WhatsApp", 
      href: "https://wa.me/94765871905",
      className: "whatsapp-link",
      description: "Quick Chat"
    }
  ];

  const expertiseItems = [
    { icon: <FaRocket />, text: "Full-Stack Development", level: 95 },
    { icon: <FaCode />, text: "Backend Architecture", level: 92 },
    { icon: <FaGamepad />, text: "Frontend Design", level: 90 },
    { icon: <FaRocket />, text: "IoT & Embedded Systems", level: 88 },
    { icon: <FaCode />, text: "Problem Solving", level: 96 }
  ];

  return (
    <section className="cyber-hero">
      {/* Animated Background */}
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
        {/* Enhanced Profile Picture Column */}
        <motion.div className="profile-column">
          <div className="profile-image-container">
            <motion.div
              className="profile-hologram"
              animate={{
                rotateY: [0, 360],
                scale: [1, 1.05, 1]
              }}
              transition={{
                rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <motion.img 
                src={profilePic} 
                alt="Satharaka Nilmantha" 
                className="profile-image"
                initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ delay: 0.5, duration: 1.5, ease: "backOut" }}
                whileHover={{ 
                  scale: 1.1,
                  rotateY: 15,
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>
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

        {/* Enhanced Content Column */}
        <div className="content-column">
          <div className="typing-container">
            <motion.div
              className="typing-wrapper"
              initial={{ width: 0 }}
              animate={controls}
              variants={typingVariants}
            >
              <h1 className="hero-title gaming-title">
                {currentTitle.map((part, index) => (
                  <motion.span 
                    key={`${currentPhase}-${index}`}
                    className="title-part"
                    style={{ 
                      color: part.color,
                      textShadow: part.glow ? `0 0 20px ${part.color}, 0 0 40px ${part.color}` : 'none'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {part.text}
                  </motion.span>
                ))}
              </h1>
            </motion.div>
            <motion.span
              className="typing-cursor gaming-cursor"
              initial={{ opacity: 0 }}
              animate={cursorControls}
            />
          </div>

          <motion.div 
            className="description-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="hero-description gaming-text">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                I'm a passionate <span className="highlight-text">Full-Stack Developer</span> and Computer Engineering undergraduate 
                specializing in building innovative, scalable, and efficient digital solutions. 
                I excel in both <span className="highlight-text">frontend</span> and <span className="highlight-text">backend development</span>, 
                with expertise in <span className="highlight-text">IoT systems</span> and <span className="highlight-text">modern web technologies</span>.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                My mission is to create <span className="highlight-text">next-generation applications</span> that push the boundaries 
                of technology while delivering exceptional user experiences. From crafting responsive React interfaces 
                to architecting robust backend systems, I bring ideas to life with precision and innovation.
              </motion.p>
            </div>
            
            {/* Enhanced Expertise Section */}
            <div className="expertise-section gaming-stats">
              {expertiseItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="expertise-item gaming-stat"
                  initial={{ opacity: 0, x: -20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 2.2 + (index * 0.15), duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    boxShadow: "0 10px 30px rgba(0, 243, 255, 0.3)"
                  }}
                >
                  <div className="stat-icon">{item.icon}</div>
                  <div className="stat-content">
                    <span className="stat-text">{item.text}</span>
                    <div className="stat-bar">
                      <motion.div 
                        className="stat-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${item.level}%` }}
                        transition={{ delay: 2.5 + (index * 0.1), duration: 1.5 }}
                      />
                      <span className="stat-percentage">{item.level}%</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Resume Download Button */}
            <motion.div 
              className="resume-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.5 }}
            >
              <motion.a 
                href="/resume.pdf" 
                download="Satharaka_Nilmantha_Resume.pdf"
                className="resume-download-btn gaming-button"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px var(--neon-purple)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="download-icon" />
                <span>Download Resume</span>
                <div className="button-glow"></div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Enhanced Social Links */}
          <div className="social-container">
            <motion.div 
              className="social-title gaming-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.2, duration: 0.5 }}
            >
              <FaGamepad className="title-icon" />
              Let's Connect & Level Up Together:
            </motion.div>
            <div className="social-links gaming-links">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className={`social-link gaming-link ${item.className}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 3.4 + (index * 0.15), duration: 0.6 }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 15px 35px rgba(0, 243, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="link-icon-container">
                    {item.icon}
                    <div className="icon-pulse"></div>
                  </div>
                  <div className="link-content">
                    <span className="link-title">{item.text}</span>
                    <span className="link-description">{item.description}</span>
                  </div>
                  <div className="link-arrow">→</div>
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