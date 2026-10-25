import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import snLogo from '../../assets/sn.png';
import './Footer.css';

const navItems = [
  { name: 'Home',       id: 'hero' },
  { name: 'About',      id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects',   id: 'projects' },
  { name: 'Contact',    id: 'contact' },
];

const socialLinks = [
  { name: 'GitHub',   icon: <FaGithub />,   href: 'https://github.com/SatharakaNilmantha', color: '#ffffff', glow: 'rgba(255, 255, 255, 0.35)' },
  { name: 'LinkedIn', icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/satharaka-nilmantha-aa7b96297/', color: '#0A66C2', glow: 'rgba(10, 102, 194, 0.45)' },
  { name: 'Email',    icon: <FaEnvelope />, href: 'mailto:satharakanilmantha1@gmail.com', color: '#00F0FF', glow: 'rgba(0, 240, 255, 0.45)' },
  { name: 'LeetCode', icon: <SiLeetcode />, href: 'https://leetcode.com/Satharaka', color: '#FFA116', glow: 'rgba(255, 161, 22, 0.45)' },
  { name: 'WhatsApp', icon: <FaWhatsapp />, href: 'https://wa.me/94765871905', color: '#25D366', glow: 'rgba(37, 211, 102, 0.45)' },
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
          <div className="footer-logo-badge">
            <img src={snLogo} alt="Satharaka Nilmantha Logo" className="footer-logo-img" />
          </div>
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
            Built with <span>React.js</span> · <span>Framer Motion</span> · <span>Vite</span>
          </p>
        </div>

        <div className="footer-socials">
          {socialLinks.map((s) => (
            <motion.a
              key={s.name}
              href={s.href}
              target={s.href.startsWith('mailto:') ? '_self' : '_blank'}
              rel="noreferrer"
              className="footer-social-btn"
              aria-label={s.name}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.92 }}
              style={{ '--btn-glow': s.glow, '--btn-color': s.color }}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
