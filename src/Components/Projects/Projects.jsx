import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub, FaMobileAlt, FaServer, FaShieldAlt, FaVideo,
  FaRobot, FaCalendarAlt, FaCircle, FaPhone
} from 'react-icons/fa';
import { SiSpring, SiReact, SiMysql, SiFirebase, SiWebrtc, SiNodedotjs } from 'react-icons/si';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'HealthHub – Smart Hospital Management System',
    period: 'Jan 2025 – May 2025',
    status: 'Completed',
    category: 'Full-Stack',
    gradient: 'linear-gradient(135deg, #6c63ff, #ff6b9d)',
    iconBg: 'linear-gradient(135deg, #6c63ff, #ff6b9d)',
    icon: <FaServer />,
    description: [
      'Contributed to full-stack development of role-based hospital management system using Spring Boot + React.js. Implemented admin employee management and receptionist access to doctor prescriptions.',
      'Designed responsive UI for patients, doctors, admins, and receptionists. Implemented real-time appointment booking and doctor prescription features for streamlined workflows.',
      'Conducted QA testing with manual + exploratory methods, validated APIs using Postman, and collaborated in Agile sprints tracked via Jira.',
    ],
    techStack: [
      { name: 'Spring Boot', icon: <SiSpring /> },
      { name: 'React.js',   icon: <SiReact /> },
      { name: 'MySQL',      icon: <SiMysql /> },
    ],
    highlights: ['Full-Stack', 'Role-Based Access', 'Agile / Jira', 'Postman QA'],
    github: 'https://github.com/SatharakaNilmantha/HealthHub_Smart-Hospital.git',
  },
  {
    id: 2,
    title: 'Smart Pet Feeder – IoT-Based Automated Feeding System',
    period: 'Jan 2025 – May 2025',
    status: 'Completed',
    category: 'IoT',
    gradient: 'linear-gradient(135deg, #43e97b, #4facfe)',
    iconBg: 'linear-gradient(135deg, #43e97b, #4facfe)',
    icon: <FaMobileAlt />,
    description: [
      'Developed IoT pet feeder using ESP32 + C with ultrasonic sensors for real-time food level monitoring and instant alerts via Firebase notifications.',
      'Built React Native mobile app for remote control, feeding schedule management, manual override, and dynamic portion control with offline support.',
      'Utilized Firebase for scheduling logic, data storage, and device-user synchronization, preventing food waste and overfeeding.',
    ],
    techStack: [
      { name: 'ESP32 / C',    icon: <FaMobileAlt /> },
      { name: 'React Native', icon: <SiReact /> },
      { name: 'Firebase',     icon: <SiFirebase /> },
    ],
    highlights: ['IoT / ESP32', 'React Native', 'Firebase Sync', 'Hardware Integration'],
    github: 'https://github.com/SatharakaNilmantha/Smart-food-feeder.git',
  },
  {
    id: 3,
    title: 'ProConnect – WebRTC Video Conferencing',
    period: 'Apr 2025',
    status: 'Completed',
    category: 'Full-Stack',
    gradient: 'linear-gradient(135deg, #f7971e, #ffd200)',
    iconBg: 'linear-gradient(135deg, #f7971e, #ffd200)',
    icon: <FaVideo />,
    description: [
      'Built real-time video conferencing app with HD video/audio streaming capabilities.',
      'Implemented WebRTC technology for peer-to-peer communication with low latency.',
      'Developed Node.js signaling server using Socket.io for connection management.',
      'Created responsive web interface with screen sharing, chat, and meeting controls.',
      'Optimized for cross-browser compatibility and mobile responsiveness.',
    ],
    techStack: [
      { name: 'WebRTC',    icon: <SiWebrtc /> },
      { name: 'Node.js',   icon: <SiNodedotjs /> },
      { name: 'Socket.io', icon: <FaVideo /> },
    ],
    highlights: ['Real-time Comm', 'WebRTC', 'Socket Programming', 'Media Streaming'],
    github: 'https://github.com/SatharakaNilmantha/ProConnect_WebRTC-online-meeting-platform.git',
  },
  {
    id: 4,
    title: 'BookMyDoctor – Doctor Appointment Booking System',
    period: 'Nov 2024 – Jun 2025',
    status: 'Completed',
    category: 'Full-Stack',
    gradient: 'linear-gradient(135deg, #c471ed, #12c2e9)',
    iconBg: 'linear-gradient(135deg, #c471ed, #12c2e9)',
    icon: <FaRobot />,
    description: [
      'Developed web-based appointment system with secure authentication using bcrypt, file handling, and responsive UI with Bootstrap.',
      'Integrated Twilio for SMS notifications including confirmations, cancellations, reminders, and next-day alerts for patients.',
      'Built admin features for appointment management, doctor registration/activation, and patient notifications. Integrated React-based chatbot for doctor details (specialization, availability, contact).',
    ],
    techStack: [
      { name: 'Spring Boot', icon: <SiSpring /> },
      { name: 'React.js',   icon: <SiReact /> },
      { name: 'Twilio SMS', icon: <FaPhone /> },
      { name: 'MySQL',      icon: <SiMysql /> },
    ],
    highlights: ['Healthcare Tech', 'Twilio SMS', 'Chatbot Integration', 'bcrypt Auth'],
    github: 'https://github.com/SatharakaNilmantha/BookMyDoctor.git',
  },
  {
    id: 5,
    title: 'ML-Based Intrusion Detection System for Public Wi-Fi',
    period: 'Jan 2025 – Aug 2026',
    status: 'Completed',
    category: 'Security',
    gradient: 'linear-gradient(135deg, #f43b47, #453a94)',
    iconBg: 'linear-gradient(135deg, #f43b47, #453a94)',
    icon: <FaShieldAlt />,
    description: [
      'Developed real-time IDS to detect ARP Spoofing & MITM attacks on public Wi-Fi using supervised ML, engineering 15 behavioral features via Borda Count consensus (XGBoost Gain, Mutual Information, ANOVA, Permutation Importance).',
      'Deployed SmartIDS plugin on pfSense with dual-layer defense (heuristic + XGBoost), model quantization for <1ms inference, ensuring 100% offline, privacy-first operation with zero internet slowdown.',
      'Simulated attacks via Mininet, benchmarked against Arpwatch & Snort, optimized XGBoost pipeline with 5-fold cross-validation and early stopping, achieving high accuracy with minimal false positives for edge deployment.',
    ],
    techStack: [
      { name: 'Python / ML', icon: <FaShieldAlt /> },
      { name: 'XGBoost',     icon: <FaShieldAlt /> },
      { name: 'pfSense',     icon: <FaShieldAlt /> },
    ],
    highlights: ['Machine Learning', 'Cybersecurity', 'XGBoost / Scikit-Learn', 'Network Security'],
    github: 'https://github.com/SatharakaNilmantha/research-mitm-attack-detection-new.git',
  },
];

const categories = ['All', 'Full-Stack', 'IoT', 'Security'];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">My Work</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A showcase of full-stack development expertise — from web apps to IoT systems.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="project-filters">
          {categories.map(cat => (
            <motion.button
              key={cat}
              className={`filter-btn${filter === cat ? ' active' : ''}`}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((proj, i) => (
              <motion.div
                key={proj.id}
                className="proj-card"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                layout
                whileHover={{ y: -6 }}
              >
                <div className="proj-card-top" style={{ background: proj.gradient }} />
                <div className="proj-card-body">
                  <div className="proj-icon-row">
                    <div className="proj-icon" style={{ background: proj.iconBg }}>
                      {proj.icon}
                    </div>
                    <span className={`proj-status ${proj.status.toLowerCase().replace(' ', '-')}`}>
                      {proj.status}
                    </span>
                  </div>

                  <h3 className="proj-title">{proj.title}</h3>
                  <p className="proj-period"><FaCalendarAlt /> {proj.period}</p>

                  <ul className="proj-desc">
                    {proj.description.map((d, j) => (
                      <li key={j}>
                        <FaCircle className="proj-desc-dot" />
                        {d}
                      </li>
                    ))}
                  </ul>

                  <div className="proj-tags">
                    {proj.highlights.map((h, j) => (
                      <span key={j} className="proj-tag">{h}</span>
                    ))}
                  </div>

                  <div className="proj-tech">
                    {proj.techStack.map((t, j) => (
                      <span key={j} className="proj-tech-item">
                        {t.icon} {t.name}
                      </span>
                    ))}
                  </div>

                  <div className="proj-links">
                    {proj.github === '#' ? (
                      <span className="proj-link private">
                        <FaGithub /> Private Repository
                      </span>
                    ) : (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-link"
                      >
                        <FaGithub /> View Source Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Interested in collaborating?</h3>
          <p>I'm always open to discussing new opportunities and innovative projects.</p>
          <motion.button
            className="btn-grad"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Let's Connect
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
