import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import profilePic from '../../Images/satharaka.jpg';
import './Hero.css';

const Hero = () => {
  const titleParts = [
    { text: "Hello,", color: "var(--neon-blue)" },
    { text: "I'm", color: "var(--neon-green)" },
    { text: "Satharaka", color: "var(--neon-pink)" },
    { text: "Nilmantha", color: "var(--neon-purple)" }
  ];

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

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
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
      <div className="hero-background"></div>
      
      <motion.div 
        className="hero-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Profile Picture Column */}
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
          </div>
        </motion.div>

        {/* Content Column */}
        <div className="content-column">
          <motion.div variants={titleVariants}>
            <h1 className="hero-title">
              {titleParts.map((part, index) => (
                <motion.span 
                  key={index}
                  className="title-part"
                  style={{ color: part.color }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: index * 0.2, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {part.text}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          <motion.div 
            className="role-container"
            variants={itemVariants}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h2 className="hero-role">
              Full-Stack Developer & Problem Solver
            </h2>
          </motion.div>

          <motion.div 
            className="description-section"
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <p className="hero-description">
              I'm a passionate <strong>Full-Stack Developer</strong> and Computer Engineering undergraduate 
              specializing in building innovative, scalable, and efficient digital solutions. 
              I excel in both <strong>frontend</strong> and <strong>backend development</strong>, 
              with expertise in <strong>IoT systems</strong>, <strong>problem solving</strong>, and <strong>modern web technologies</strong>.
            </p>
            
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
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    delay: 1.8 + (index * 0.1), 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="social-container"
            variants={itemVariants}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
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
                    delay: 2.8 + (index * 0.1), 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
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