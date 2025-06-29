import { motion } from 'framer-motion';
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
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="cyber-hero">
      <div className="hero-background"></div>
      
      <motion.div 
        className="hero-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Profile Picture Section */}
        <motion.div 
          className="profile-section"
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
            <div className="profile-frame"></div>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="content-section">
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
                    delay: index * 0.15, 
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
            transition={{ delay: 1, duration: 0.8 }}
          >
            <h2 className="hero-role">
              Full-Stack Developer & Problem Solver
            </h2>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;