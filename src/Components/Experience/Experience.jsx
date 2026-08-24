import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBriefcase, FaCalendarAlt, FaCheckCircle, FaChevronDown,
  FaReact, FaNodeJs, FaDocker, FaGithub, FaDatabase, FaServer, FaMicrochip
} from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiNginx } from 'react-icons/si';
import './Experience.css';

const techIcons = {
  React:        <FaReact />,
  'Node.js':    <FaNodeJs />,
  Docker:       <FaDocker />,
  GitHub:       <FaGithub />,
  MySQL:        <SiMysql />,
  'Spring Boot':<SiSpringboot />,
  Nginx:        <SiNginx />,
  Microservices:<FaServer />,
  Biometric:    <FaMicrochip />,
  MongoDB:      <FaDatabase />,
};

const experiences = [
  {
    id: 1,
    role: 'Software Developer – Junior Associate',
    company: 'Cyber Mas Solutions (Pvt) Ltd., Colombo, Sri Lanka',
    period: 'May 2026 – Present',
    type: 'Full-time',
    dotColor: '#6c63ff',
    gradient: 'linear-gradient(90deg, #6c63ff, #ff6b9d)',
    tech: ['React', 'Node.js', 'Docker', 'MySQL', 'Nginx', 'Biometric'],
    highlights: [
      'Maintain and enhance payroll system ensuring stability, performance, and compliance. Optimize queries and improve fingerprint matching via Hikvision API for accurate attendance.',
      'Develop new features and RESTful APIs with Node.js + Express.js + JWT. Build responsive UI with React.js + Tailwind CSS aligning with business needs.',
      'Manage deployment with Docker + Nginx. Collaborate with stakeholders as key Junior Associate, continuing development from internship.',
    ],
    projects: [
      {
        name: 'VETAHR Payroll Management System',
        tech: ['Node.js', 'Express.js', 'React.js', 'MySQL', 'Docker', 'Nginx', 'JWT', 'Hikvision API'],
        points: [
          'Maintain and enhance payroll system ensuring stability, performance, and compliance. Optimize queries and improve fingerprint matching via Hikvision API for accurate attendance.',
          'Develop new features and RESTful APIs with Node.js + Express.js + JWT. Build responsive UI with React.js + Tailwind CSS aligning with business needs.',
          'Manage deployment with Docker + Nginx. Collaborate with stakeholders as key Junior Associate, continuing development from internship.',
        ],
      },
    ],
  },
  {
    id: 2,
    role: 'Software Developer Intern',
    company: 'Cyber Mas Solutions (Pvt) Ltd., Colombo, Sri Lanka',
    period: 'November 2025 – May 2026',
    type: 'Internship',
    dotColor: '#ff6b9d',
    gradient: 'linear-gradient(90deg, #43e97b, #4facfe)',
    tech: ['Spring Boot', 'React', 'Node.js', 'Docker', 'MySQL', 'Nginx', 'Biometric'],
    highlights: [],
    projects: [
      {
        name: 'Smart Dispatch System',
        tech: ['Spring Boot', 'React.js', 'MySQL', 'Docker', 'Nginx', 'Grafana', 'JMeter', 'JWT'],
        points: [
          'Built microservices dispatch platform with barcode generation/scanning for instant package retrieval. Developed React.js + Tailwind CSS frontend consuming REST APIs via Spring Cloud API Gateway.',
          'Architected Spring Boot microservices with Spring Cloud for service discovery and API gateway. Implemented JWT-based authentication + HTTPS security across all services, with MySQL following database-per-service isolation.',
          'Deployed via Docker + Nginx on Ubuntu, integrated Grafana for monitoring and tested with Apache JMeter to validate scalability and performance under peak load.',
        ],
      },
      {
        name: 'VETAHR Payroll Management System',
        tech: ['Node.js', 'Express.js', 'React.js', 'MySQL', 'Docker', 'Nginx', 'JWT', 'Hikvision API'],
        points: [
          'Developed automated payroll system handling attendance, leave requests, and payroll processing with ETF/EPF contributions and bank salary transfers. Integrated fingerprint matching via Hikvision API for real-time biometric attendance.',
          'Built secure RESTful APIs using Node.js + Express.js with JWT-based authentication and authorization. Developed responsive UI with React.js + Tailwind CSS, collaborating in an Agile team environment.',
          'Deployed stack using Docker + Nginx on cloud infrastructure with managed cloud database, ensuring seamless scalability and reliable performance.',
        ],
      },
    ],
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState({});
  const toggle = (expId, projIdx) => {
    const key = `${expId}-${projIdx}`;
    setExpanded(p => ({ ...p, [key]: !p[key] }));
  };

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">My Journey</span>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Building real-world solutions from day one — dispatching packages, calculating payroll,
            and shipping production code.
          </p>
        </motion.div>

        <div className="exp-timeline">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="exp-entry"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Dot */}
              <div className="exp-dot" style={{ '--dot-color': exp.dotColor }}>
                <FaBriefcase />
              </div>

              {/* Card */}
              <div className="exp-card">
                <div className="exp-card-accent" style={{ background: exp.gradient }} />
                <div className="exp-card-body">
                  {/* Header */}
                  <div className="exp-card-head">
                    <div>
                      <h3 className="exp-role">{exp.role}</h3>
                      <p className="exp-company">{exp.company}</p>
                    </div>
                    <div className="exp-badges">
                      <span className="exp-badge badge-type">{exp.type}</span>
                      <span className="exp-badge badge-period">
                        <FaCalendarAlt /> {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Tech */}
                  <div className="exp-tech-row">
                    {exp.tech.map(t => (
                      <span key={t} className="exp-tech-pill">
                        {techIcons[t] && <span>{techIcons[t]}</span>}
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  {exp.highlights.length > 0 && (
                    <ul className="exp-highlights">
                      {exp.highlights.map((h, j) => (
                        <li key={j}>
                          <FaCheckCircle className="exp-check" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Projects accordion */}
                  {exp.projects.length > 0 && (
                    <div>
                      <p className="exp-projects-label">Key Projects</p>
                      {exp.projects.map((proj, pIdx) => {
                        const key = `${exp.id}-${pIdx}`;
                        const open = !!expanded[key];
                        return (
                          <div key={pIdx} className="exp-project-item">
                            <button
                              className="exp-project-toggle"
                              onClick={() => toggle(exp.id, pIdx)}
                            >
                              <span className="exp-project-name">{proj.name}</span>
                              <span className="proj-tech-mini">
                                {proj.tech.slice(0, 3).map(t => (
                                  <span key={t} className="proj-pill-sm">{t}</span>
                                ))}
                              </span>
                              <FaChevronDown className={`exp-chevron${open ? ' open' : ''}`} />
                            </button>
                            <AnimatePresence>
                              {open && (
                                <motion.div
                                  className="exp-project-body"
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  style={{ overflow: 'hidden' }}
                                >
                                  <ul className="exp-project-points">
                                    {proj.points.map((pt, k) => (
                                      <li key={k}>
                                        <FaCheckCircle className="exp-check" />
                                        <span>{pt}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
