import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaHome, 
  FaUserAlt, 
  FaCode, 
  FaEnvelope,
  FaGamepad,
  FaHeadset
} from 'react-icons/fa';
import { useEffect } from 'react'; // Import useEffect
import './Header.css';

const Header = () => {
  const location = useLocation();
  
  // Scroll to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'About', path: '/about', icon: <FaUserAlt /> },
    { name: 'Projects', path: '/projects', icon: <FaCode /> },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope /> },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  
  return (
    <header className="neon-header">
      <div className="header-container">
        <motion.div
          className="logo-container"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="logo-link">
            <div className="gamepad-icon-container">
              <FaGamepad className="gamepad-icon" />
              <FaHeadset className="headset-icon" />
            </div>
            <h1 className="logo-text">
              <span className="logo-3d">Satharaka</span>
              <span className="logo-3d-alt">Nilmantha</span>
            </h1>
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
                    scale: 1.1,
                    y: -3
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link 
                    className={`nav-link ${isActive(item.path) ? 'active' : ''}`} 
                    to={item.path}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-text">{item.name}</span>
                    <span className="nav-underline"></span>
                    {isActive(item.path) && (
                      <span className="active-indicator"></span>
                    )}
                  </Link>
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;