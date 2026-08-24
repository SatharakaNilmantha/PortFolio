import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUserAlt, FaBriefcase, FaCode, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';

const navItems = [
  { name: 'Home',       id: 'hero',       icon: <FaHome /> },
  { name: 'About',      id: 'about',      icon: <FaUserAlt /> },
  { name: 'Experience', id: 'experience', icon: <FaBriefcase /> },
  { name: 'Projects',   id: 'projects',   icon: <FaCode /> },
  { name: 'Contact',    id: 'contact',    icon: <FaEnvelope /> },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      // Determine active section
      const sections = navItems.map(n => document.getElementById(n.id));
      let current = 'hero';
      sections.forEach(sec => {
        if (sec && window.scrollY >= sec.offsetTop - 120) {
          current = sec.id;
        }
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navHeight = 70;
    const y = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <motion.header
        className={`navbar${scrolled ? ' scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar-inner">
          {/* Logo */}
          <motion.div
            className="nav-logo"
            onClick={() => scrollTo('hero')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="logo-badge">SN</div>
            <div className="logo-text-wrap">
              <span className="logo-first">Satharaka</span>
              <span className="logo-last">Nilmantha</span>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <ul className="nav-links">
            {navItems.map((item, i) => (
              <li key={item.id} className="nav-link-item">
                <motion.button
                  className={`nav-link-btn${active === item.id ? ' active' : ''}`}
                  onClick={() => scrollTo(item.id)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.3 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                  {item.name}
                </motion.button>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="nav-actions">
            <motion.button
              className="theme-btn"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 20 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </motion.button>

            <button
              className={`hamburger-btn${open ? ' open' : ''}`}
              onClick={() => setOpen(p => !p)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {navItems.map(item => (
              <button
                key={item.id}
                className={`mobile-nav-link${active === item.id ? ' active' : ''}`}
                onClick={() => scrollTo(item.id)}
              >
                {item.icon}
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
