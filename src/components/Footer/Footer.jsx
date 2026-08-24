import { motion } from 'framer-motion';
import './Footer.css';

const navItems = [
  { name: 'Home',       id: 'hero' },
  { name: 'About',      id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects',   id: 'projects' },
  { name: 'Contact',    id: 'contact' },
];

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-inner">
        <motion.div
          className="footer-logo"
          onClick={() => scrollTo('hero')}
          whileHover={{ scale: 1.05 }}
        >
          <div className="footer-logo-badge">SN</div>
          <span className="footer-name">Satharaka Nilmantha</span>
        </motion.div>

        <nav className="footer-nav">
          {navItems.map(n => (
            <button key={n.id} className="footer-nav-btn" onClick={() => scrollTo(n.id)}>
              {n.name}
            </button>
          ))}
        </nav>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy">
            <span>SATHARAKA_NILMANTHA</span> © {new Date().getFullYear()} · All Rights Reserved
          </p>
          <p className="footer-tech">
            Built with <span>React.js</span> · <span>Framer Motion</span> · <span>Vite</span> · ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
