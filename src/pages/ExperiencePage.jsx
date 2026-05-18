import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaBriefcase, FaCalendarAlt, FaCheckCircle,
  FaReact, FaNodeJs, FaDocker, FaGithub,
  FaDatabase, FaServer, FaMicrochip, FaChevronDown
} from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiNginx } from 'react-icons/si';
import './ExperiencePage.css';

const techIcons = {
  'React': <FaReact />,
  'Node.js': <FaNodeJs />,
  'Docker': <FaDocker />,
  'GitHub': <FaGithub />,
  'MySQL': <SiMysql />,
  'Spring Boot': <SiSpringboot />,
  'Nginx': <SiNginx />,
  'Microservices': <FaServer />,
  'Biometric': <FaMicrochip />,
  'MongoDB': <FaDatabase />,
};

const experiences = [
  {
    id: 1,
    role: 'Software Developer – Junior Associate',
    company: 'Cyber Mas Solutions (Pvt) Ltd',
    period: 'May 2026 – Present',
    type: 'Full-time',
    color: '#00f3ff',
    tech: ['React', 'Node.js', 'Docker', 'GitHub'],
    highlights: [
      'Continuing development and maintenance of the VETAHR Payroll Management System.',
      'Adding new features, optimizing database queries, and enhancing fingerprint matching reliability.',
      'Collaborating with stakeholders to align the system with evolving business and compliance requirements.',
    ],
    projects: [],
  },
  {
    id: 2,
    role: 'Software Developer Intern',
    company: 'Cyber Mas Solutions (Pvt) Ltd',
    period: 'November 2025 – May 2026',
    type: 'Internship',
    color: '#c724ff',
    tech: ['React', 'Spring Boot', 'Node.js', 'Docker', 'MySQL', 'Nginx', 'GitHub'],
    highlights: [],
    projects: [
      {
        name: 'Smart Dispatch System',
        tech: ['Spring Boot', 'MySQL', 'React', 'Docker', 'Nginx', 'GitHub'],
        points: [
          'Built a full-stack dispatch platform that generates barcodes for packages before delivery to external companies, enabling end-to-end package tracking.',
          'Implemented barcode scanning to instantly retrieve all package details from the database, improving delivery accuracy and reducing manual lookup time.',
          'Deployed using Docker + Nginx with Grafana for monitoring and an Ubuntu server.',
          'Architected backend with Spring Boot (microservices) and MySQL database; frontend with React + Tailwind CSS.',
          'Used GitHub for version control and team collaboration, working closely with clients to refine requirements.',
          'Delivered project with HTTPS security implementation and full handover documentation.',
        ],
      },
      {
        name: 'VETAHR Payroll Management System',
        tech: ['Node.js', 'React', 'Docker', 'Nginx', 'Biometric'],
        points: [
          'Developed a payroll system that captures employee attendance, leave requests, and processes payroll with ETF/EPF calculations and bank salary transactions.',
          'Integrated fingerprint matching for automated attendance tracking.',
          'Deployed using Docker + Nginx with a cloud database.',
          'Built backend with Node.js + Express.js and frontend with React + Tailwind CSS in a collaborative team environment.',
          'Implemented API-based Hikvision integration for biometric attendance.',
        ],
      },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: 'easeOut' },
  }),
};

export default function ExperiencePage() {
  const [expandedProject, setExpandedProject] = useState({});

  const toggleProject = (expId, projIdx) => {
    const key = `${expId}-${projIdx}`;
    setExpandedProject((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="exp-page">
      {/* ── Page Header ── */}
      <motion.div
        className="exp-heading"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="exp-label">My Journey</span>
        <h1 className="exp-title">Work Experience</h1>
        <p className="exp-subtitle">
          Building real-world solutions from day one — dispatching packages, calculating payroll, and shipping production code.
        </p>
        <div className="exp-divider" />
      </motion.div>

      {/* ── Timeline ── */}
      <div className="exp-timeline">
        <div className="timeline-line" />

        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            className="exp-entry"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Dot */}
            <div className="timeline-dot" style={{ borderColor: exp.color, boxShadow: `0 0 14px ${exp.color}` }}>
              <FaBriefcase style={{ color: exp.color }} />
            </div>

            {/* Card */}
            <div className="exp-card" style={{ '--accent': exp.color }}>
              {/* Card top bar */}
              <div className="exp-card-bar" style={{ background: exp.color }} />

              {/* Header row */}
              <div className="exp-card-head">
                <div>
                  <h2 className="exp-role">{exp.role}</h2>
                  <h3 className="exp-company">{exp.company}</h3>
                </div>
                <div className="exp-badges">
                  <span className="badge-type">{exp.type}</span>
                  <span className="badge-period">
                    <FaCalendarAlt /> {exp.period}
                  </span>
                </div>
              </div>

              {/* Tech stack */}
              <div className="tech-stack">
                {exp.tech.map((t) => (
                  <span key={t} className="tech-pill">
                    {techIcons[t] && <span className="tech-icon">{techIcons[t]}</span>}
                    {t}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              {exp.highlights.length > 0 && (
                <ul className="exp-list">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>
                      <FaCheckCircle className="check" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Projects */}
              {exp.projects.length > 0 && (
                <div className="projects-wrapper">
                  <p className="projects-heading">Key Projects</p>
                  {exp.projects.map((proj, pIdx) => {
                    const key = `${exp.id}-${pIdx}`;
                    const open = !!expandedProject[key];
                    return (
                      <div key={pIdx} className={`project-card ${open ? 'open' : ''}`}>
                        <button
                          className="project-toggle"
                          onClick={() => toggleProject(exp.id, pIdx)}
                        >
                          <span className="project-name">{proj.name}</span>
                          <span className="project-tech-mini">
                            {proj.tech.slice(0, 3).map((t) => (
                              <span key={t} className="tech-pill sm">
                                {techIcons[t] && <span className="tech-icon">{techIcons[t]}</span>}
                                {t}
                              </span>
                            ))}
                          </span>
                          <FaChevronDown className={`chevron ${open ? 'rotated' : ''}`} />
                        </button>

                        {open && (
                          <motion.ul
                            className="exp-list project-points"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {proj.points.map((pt, k) => (
                              <li key={k}>
                                <FaCheckCircle className="check" />
                                <span>{pt}</span>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
