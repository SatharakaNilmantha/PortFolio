import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaDownload,
  FaReact, FaNodeJs, FaJava, FaHtml5, FaJs, FaCss3Alt,
  FaBootstrap, FaDocker, FaAws, FaJenkins, FaPhone,
  FaRocket, FaBolt, FaPalette, FaPlug, FaBrain, FaCloud,
  FaCode, FaWrench, FaSatelliteDish
} from 'react-icons/fa';
import {
  SiLeetcode, SiSpringboot, SiMysql, SiMongodb, SiFirebase,
  SiNginx, SiGrafana, SiGit, SiLinux,
  SiPython, SiCplusplus, SiC, SiPhp, SiExpress
} from 'react-icons/si';
import profilePic from '../../assets/satharaka.jpg';
import cvFile from '../../assets/Gunarathna A.M.S.N. cv.pdf';
import './Hero.css';

const roles = [
  'Full-Stack Developer',
  'Backend Engineer',
  'IoT Developer',
  'Problem Solver',
];

// 3 concentric orbit rings — inner CW, mid CCW, outer CW
const orbitRings = [
  {
    cls: 'ring-inner',
    icons: [
      { icon: <FaReact />,      color: '#61DAFB', name: 'React.js' },
      { icon: <FaHtml5 />,      color: '#E34F26', name: 'HTML5' },
      { icon: <FaCss3Alt />,    color: '#1572B6', name: 'CSS3' },
      { icon: <FaBootstrap />,  color: '#7952B3', name: 'Bootstrap' },
      { icon: <SiSpringboot />, color: '#6DB33F', name: 'Spring Boot' },
      { icon: <FaNodeJs />,     color: '#68A063', name: 'Node.js' },
      { icon: <SiExpress />,    color: '#aaaaaa', name: 'Express.js' },
      { icon: <SiMysql />,      color: '#4479A1', name: 'MySQL' },
    ],
  },
  {
    cls: 'ring-mid',
    icons: [
      { icon: <SiMongodb />,  color: '#47A248', name: 'MongoDB' },
      { icon: <SiFirebase />, color: '#FFCA28', name: 'Firebase' },
      { icon: <FaDocker />,   color: '#2496ED', name: 'Docker' },
      { icon: <SiNginx />,    color: '#009639', name: 'Nginx' },
      { icon: <SiGrafana />,  color: '#F46800', name: 'Grafana' },
      { icon: <FaJenkins />,  color: '#D24939', name: 'Jenkins' },
      { icon: <FaAws />,      color: '#FF9900', name: 'AWS' },
      { icon: <SiGit />,      color: '#F05032', name: 'Git' },
    ],
  },
  {
    cls: 'ring-outer',
    icons: [
      { icon: <SiLinux />,     color: '#FCC624', name: 'Linux' },
      { icon: <FaJava />,      color: '#007396', name: 'Java' },
      { icon: <FaJs />,        color: '#F7DF1E', name: 'JavaScript' },
      { icon: <SiPython />,    color: '#3776AB', name: 'Python' },
      { icon: <SiCplusplus />, color: '#00599C', name: 'C++' },
      { icon: <SiC />,         color: '#A8B9CC', name: 'C' },
      { icon: <SiPhp />,       color: '#777BB4', name: 'PHP' },
      { icon: <FaPhone />,     color: '#F22F46', name: 'Twilio' },
    ],
  },
];

const socials = [
  { icon: <FaGithub />, href: 'https://github.com/SatharakaNilmantha', cls: 'soc-github', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/satharaka-nilmantha-aa7b96297/', cls: 'soc-linkedin', label: 'LinkedIn' },
  { icon: <FaEnvelope />, href: 'mailto:satharakanilmantha1@gmail.com', cls: 'soc-email', label: 'Email' },
  { icon: <FaWhatsapp />, href: 'https://wa.me/94765871905', cls: 'soc-whatsapp', label: 'WhatsApp' },
  { icon: <SiLeetcode />, href: 'https://leetcode.com/Satharaka', cls: 'soc-leetcode', label: 'LeetCode' },
];

const expertise = [
  { icon: <FaRocket />,        label: 'Full-Stack Development' },
  { icon: <FaBolt />,          label: 'Backend Architecture' },
  { icon: <FaPalette />,       label: 'UI/UX Design' },
  { icon: <FaPlug />,          label: 'IoT & Embedded Systems' },
  { icon: <FaBrain />,         label: 'Problem Solving' },
  { icon: <FaCloud />,         label: 'Cloud & DevOps' },
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const current = roles[roleIdx];
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(d => d.slice(0, -1)), 40);
      } else {
        setRoleIdx(i => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  const downloadCV = () => {
    const a = document.createElement('a');
    a.href = cvFile;
    a.download = 'Satharaka_Nilmantha_CV.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section className="hero" id="hero">
      {/* Animated background */}
      <div className="hero-mesh">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
      </div>
      <div className="hero-grid" />

      <div className="hero-container">
        {/* ---- Content ---- */}
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-greeting" variants={itemVariants}>
            <span className="greeting-dot" />
            Available for opportunities
          </motion.div>

          <motion.h1 className="hero-name" variants={itemVariants}>
            Hello, I'm{' '}
            <span className="hero-name-names">
              <span className="gradient-text">Satharaka</span>{' '}
              <span className="gradient-text-2">Nilmantha</span>
            </span>
          </motion.h1>

          <motion.div className="hero-role-line" variants={itemVariants}>
            <span className="hero-role-static">I'm a </span>
            <span className="hero-role-animated">
              {displayed}<span style={{ opacity: typing ? 1 : 0, borderRight: '2px solid' }}>|</span>
            </span>
          </motion.div>

          <motion.p className="hero-desc" variants={itemVariants}>
            I'm a <strong>Software Developer – Junior Associate</strong> at{' '}
            <strong>Cyber Mas Solutions (Pvt) Ltd</strong> and a passionate{' '}
            <strong>Computer Engineering undergraduate</strong> specializing in building
            innovative, scalable, and efficient digital solutions.
          </motion.p>

          <motion.div className="hero-expertise" variants={itemVariants}>
            {expertise.map((e, i) => (
              <motion.span
                key={i}
                className="expertise-chip"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <span className="chip-icon">{e.icon}</span>
                {e.label}
              </motion.span>
            ))}
          </motion.div>

          <motion.div className="hero-cta" variants={itemVariants}>
            <motion.button
              className="btn-grad"
              onClick={downloadCV}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaDownload />
              Download CV
            </motion.button>
            <motion.button
              className="btn-outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Let's Connect
            </motion.button>
          </motion.div>

          <motion.div className="hero-socials" variants={itemVariants}>
            <span className="hero-socials-label">Find me on</span>
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                className={`social-icon-link ${s.cls}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.08 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* ---- Visual ---- */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="profile-wrapper">
            <div className="profile-glow-ring" />
            <div className="profile-glow-mask" />
            <img src={profilePic} alt="Satharaka Nilmantha" className="profile-img" />

            {/* 3-ring orbit — CSS handles rotation, framer-motion fades in only */}
            <div className="tech-orbit-wrap">
              {/* Decorative pulsing guide rings */}
              <div className="guide-ring guide-inner" />
              <div className="guide-ring guide-mid" />
              <div className="guide-ring guide-outer" />

              {/* All 24 tech icons across 3 rings */}
              {orbitRings.map((ring, ri) =>
                ring.icons.map((o, ii) => (
                  <motion.div
                    key={`${ri}-${ii}`}
                    className={`orbit-icon ${ring.cls} a-${ii}`}
                    style={{ '--icon-color': o.color }}
                    title={o.name}
                    // Only animate opacity — transform is handled by CSS orbit keyframes
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + ri * 0.35 + ii * 0.07, duration: 0.5 }}
                  >
                    {o.icon}
                  </motion.div>
                ))
              )}
            </div>
          </div>

          {/* Stats — below profile, NOT absolutely positioned (fixes mobile overlap) */}
          <div className="hero-stats">
            {[
              { num: '5+',  label: 'Projects',     icon: <FaCode /> },
              { num: '2+',  label: 'Experience',   icon: <FaWrench /> },
              { num: '10+', label: 'Technologies', icon: <FaSatelliteDish /> },
            ].map((s, i) => (
              <motion.div
                key={i}
                className="hero-stat"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + i * 0.1 }}
                whileHover={{ y: -4, scale: 1.03 }}
              >
                <span className="stat-icon">{s.icon}</span>
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="scroll-mouse"><div className="scroll-wheel" /></div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
