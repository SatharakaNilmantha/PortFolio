import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaHome, 
  FaUserAlt, 
  FaCode, 
  FaEnvelope,
  FaGamepad,
  FaHeadset,
  FaRocket
} from 'react-icons/fa';
import { useEffect } from 'react';
import './Header.css';

const Header = () => {
  const location = useLocation();
  
  // Scroll to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/', icon: <FaHome />, color: 'var(--neon-blue)' },
    { name: 'About', path: '/about', icon: <FaUserAlt />, color: 'var(--neon-green)' },
    { name: 'Projects', path: '/projects', icon: <FaCode />, color: 'var(--neon-purple)' },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope />, color: 'var(--neon-pink)' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <motion.header 
      className="neon-header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="header-container">
        <motion.div
          className="logo-container"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="logo-link">
            <div className="gamepad-icon-container">
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaGamepad className="gamepad-icon" />
              </motion.div>
              <motion.div
                animate={{ 
                  rotate: [15, 25, 15],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaHeadset className="headset-icon" />
              </motion.div>
              <motion.div
                className="rocket-icon"
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaRocket />
              </motion.div>
            </div>
            <motion.h1 
              className="logo-text"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 20px var(--neon-blue)"
              }}
            >
              <motion.span 
                className="logo-3d"
                animate={{
                  textShadow: [
                    "0 0 10px var(--neon-blue)",
                    "0 0 20px var(--neon-blue)",
                    "0 0 10px var(--neon-blue)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Satharaka
              </motion.span>
              <motion.span 
                className="logo-3d-alt"
                animate={{
                  textShadow: [
                    "0 0 10px var(--neon-pink)",
                    "0 0 20px var(--neon-pink)",
                    "0 0 10px var(--neon-pink)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                Nilmantha
              </motion.span>
            </motion.h1>
          </Link>
        </motion.div>

        <nav className="nav-3d">
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 300
                }}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.15,
                    y: -5,
                    rotateY: 10
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link 
                    className={`nav-link ${isActive(item.path) ? 'active' : ''}`} 
                    to={item.path}
                  >
                    <motion.span 
                      className="nav-icon"
                      animate={isActive(item.path) ? {
                        color: item.color,
                        filter: `drop-shadow(0 0 10px ${item.color})`,
                        rotate: [0, 5, -5, 0]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {item.icon}
                    </motion.span>
                    <motion.span 
                      className="nav-text"
                      animate={isActive(item.path) ? {
                        color: item.color,
                        textShadow: `0 0 10px ${item.color}`
                      } : {}}
                    >
                      {item.name}
                    </motion.span>
                    <motion.span 
                      className="nav-underline"
                      animate={isActive(item.path) ? {
                        scaleX: 1,
                        background: item.color,
                        boxShadow: `0 0 15px ${item.color}`
                      } : {}}
                    />
                    {isActive(item.path) && (
                      <motion.span 
                        className="active-indicator"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        style={{ background: item.color, boxShadow: `0 0 10px ${item.color}` }}
                      />
                    )}
                    
                    {/* Gaming particle effect on hover */}
                    <motion.div
                      className="nav-particles"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="nav-particle"
                          animate={{
                            y: [0, -20, 0],
                            x: [0, Math.random() * 20 - 10, 0],
                            opacity: [0, 1, 0]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* Header glow effect */}
      <motion.div
        className="header-glow"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.02, 1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </motion.header>
  );
};

export default Header;