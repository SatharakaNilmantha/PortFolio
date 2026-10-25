import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaAward, FaExternalLinkAlt, FaCalendarAlt, FaIdBadge,
  FaCode, FaTrophy, FaLaptopCode, FaRocket, FaGraduationCap,
  FaChevronDown, FaChevronUp, FaTimes, FaSearchPlus
} from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import './Certificates.css';

// Certificate image imports
import certCybermasImg from '../../assets/cert_cybermas.jpg';
import certStartupImg from '../../assets/cert_startup_essentials.png';
import certSpiritxImg from '../../assets/cert_spiritx.png';
import certMoraxtremeImg from '../../assets/cert_moraxtreme.png';
import certPythonImg from '../../assets/cert_python_uom.png';
import certCoderallyImg from '../../assets/cert_coderally.jpg';
import certJavaImg from '../../assets/cert_java_codsoft.jpg';

// Certificates sorted in descending chronological order (2026 to 2024)
const certificates = [
  {
    id: 1,
    title: 'Software Development Internship',
    fullTitle: 'Software Development Internship Program – Cyber Mas Solutions',
    issuer: 'Cyber Mas Solutions (Pvt) Ltd.',
    date: 'May 24, 2026',
    year: 2026,
    type: 'Internship',
    icon: <FaGraduationCap />,
    gradient: 'linear-gradient(135deg, #007AFF, #00F0FF)',
    accentColor: '#00F0FF',
    image: certCybermasImg,
    description:
      'Awarded Certificate of Internship for successfully completing the Software Development Internship Program at Cyber Mas Solutions (Pvt) Ltd. from 17 November 2025 to 17 May 2026 (awarded on 24 May 2026). Consistently demonstrated exceptional coding proficiency, problem-solving skills, and contributed to core enterprise systems.',
    tags: ['Full-Stack', 'Spring Boot', 'React.js', 'Node.js', 'Docker', 'Cyber Mas'],
    credentialId: null,
    verifyUrl: null,
  },
  {
    id: 2,
    title: 'Startup Essentials Program',
    fullTitle: 'Startup Essentials Program – Uki & Yarl IT Hub',
    issuer: 'Ūki – A Technology School by Yarl IT Hub',
    date: 'Aug 2025',
    year: 2025,
    type: 'Program',
    icon: <FaAward />,
    gradient: 'linear-gradient(135deg, #667eea, #f093fb)',
    accentColor: '#f093fb',
    image: certStartupImg,
    description:
      'Awarded Certificate of Completion for the Startup Essentials Program offered by Ūki (A Technology School by Yarl IT Hub) from June 2025 to August 2025. Focused on startup methodology, innovation frameworks, entrepreneurial mindset, business strategy, and venture creation.',
    tags: ['Startup & Venture', 'Yarl IT Hub', 'Ūki', 'Business Strategy'],
    credentialId: null,
    verifyUrl: null,
  },
  {
    id: 3,
    title: 'SpiritX 2025 – Inter-University Dev Competition',
    fullTitle: 'SpiritX 2025 – Stage 1 (Xcelerate) Inter-University Dev Competition',
    issuer: 'MoraSpirit 360',
    date: '2025',
    year: 2025,
    type: 'Competition',
    icon: <FaRocket />,
    gradient: 'linear-gradient(135deg, #f7971e, #ffd200)',
    accentColor: '#ffd200',
    image: certSpiritxImg,
    description:
      "Awarded Certificate of Participation for competing in Stage 1 - Xcelerate of the SpiritX 2025 inter-university development competition, organized by MoraSpirit 360. Collaborated with team 'Dev Titans' tackling real-world software engineering challenges in a competitive tech environment.",
    tags: ['Web Development', 'Inter-University', 'Team Dev Titans', 'MoraSpirit'],
    credentialId: null,
    verifyUrl: null,
  },
  {
    id: 4,
    title: 'MoraXtreme 9.0 – Algorithmic Coding Competition',
    fullTitle: 'MoraXtreme 9.0 – Algorithmic Coding Competition',
    issuer: 'IEEE Student Branch & IEEE CS University of Moratuwa',
    date: 'Oct 19, 2024',
    year: 2024,
    type: 'Competition',
    icon: <FaLaptopCode />,
    gradient: 'linear-gradient(135deg, #c471ed, #12c2e9)',
    accentColor: '#c471ed',
    image: certMoraxtremeImg,
    description:
      "Awarded Certificate of Participation for competing in the MoraXtreme 9.0 algorithmic coding competition organized by the IEEE Student Branch of University of Moratuwa and IEEE Computer Society Student Branch Chapter on 19th October 2024, representing team 'Infinite Loopers'.",
    tags: ['Competitive Programming', 'Algorithms', 'Team Infinite Loopers', 'IEEE UoM'],
    credentialId: null,
    verifyUrl: null,
  },
  {
    id: 5,
    title: 'Python for Beginners – Online Programme',
    fullTitle: 'Python for Beginners – Online Learning Programme',
    issuer: 'Dept. of CSE & CODL, University of Moratuwa',
    date: 'Sep 15, 2024',
    year: 2024,
    type: 'Course',
    icon: <FaCode />,
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    accentColor: '#43e97b',
    image: certPythonImg,
    description:
      'Completed the accredited online learning programme "Python for Beginners" conducted by the Department of Computer Science & Engineering, Faculty of Engineering, University of Moratuwa (Centre for Open & Distance Learning). Covers core Python syntax, data structures, and automation.',
    tags: ['Python', 'Data Structures', 'Automation', 'University of Moratuwa'],
    credentialId: 't1u0GEpwYP',
    verifyUrl: 'https://open.uom.lk/verify',
  },
  {
    id: 6,
    title: 'CodeRally 6.0 – Advanced Tier',
    fullTitle: 'CodeRally 6.0 Competitive Programming Event (Advanced Tier)',
    issuer: 'IEEE Computer Society Student Branch Chapter of IIT',
    date: '2024',
    year: 2024,
    type: 'Competition',
    icon: <FaTrophy />,
    gradient: 'linear-gradient(135deg, #00c6ff, #0072ff)',
    accentColor: '#00c6ff',
    image: certCoderallyImg,
    description:
      "Awarded Certificate of Participation for competing in the Advanced Tier of CodeRally 6.0, organized by the IEEE Computer Society Student Branch Chapter of IIT. Engaged in a rigorous algorithmic programming journey testing problem-solving speed and algorithmic thinking with team 'LogicLegion'.",
    tags: ['Competitive Programming', 'Advanced Tier', 'Team LogicLegion', 'IEEE CS'],
    credentialId: null,
    verifyUrl: null,
  },
  {
    id: 7,
    title: 'Java Programming Virtual Internship',
    fullTitle: 'Java Programming Virtual Internship (4-Week Program)',
    issuer: 'CodSoft (ISO 9001:2015 & MSME Certified)',
    date: 'Feb 28, 2024',
    year: 2024,
    type: 'Internship',
    icon: <FaGraduationCap />,
    gradient: 'linear-gradient(135deg, #f43b47, #453a94)',
    accentColor: '#f43b47',
    image: certJavaImg,
    description:
      'Successfully completed a 4-week virtual internship in Java Programming at CodSoft from 25/01/2024 to 25/02/2024 (issued 28/02/2024). Focused on core software development, object-oriented design patterns, and hands-on coding tasks with exceptional remarks.',
    tags: ['Java', 'OOP Design', 'Software Development', 'CodSoft Internship'],
    credentialId: '15bb21f',
    verifyUrl: 'https://www.codsoft.in',
  },
];

const categories = ['All', 'Internship', 'Competition', 'Course', 'Program'];

const typeColors = {
  Competition: { bg: 'rgba(0,198,255,0.12)', color: '#00c6ff', border: 'rgba(0,198,255,0.3)' },
  Course:      { bg: 'rgba(67,233,123,0.12)', color: '#43e97b', border: 'rgba(67,233,123,0.3)' },
  Internship:  { bg: 'rgba(0,122,255,0.14)',  color: '#00F0FF', border: 'rgba(0,122,255,0.35)' },
  Program:     { bg: 'rgba(240,147,251,0.12)', color: '#f093fb', border: 'rgba(240,147,251,0.3)' },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Certificates() {
  const [filter, setFilter] = useState('All');
  const [expanded, setExpanded] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  const toggle = (id) => setExpanded(prev => (prev === id ? null : id));

  // Close modal on Escape key and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImg(null);
    };
    if (selectedImg) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImg]);

  const filtered = filter === 'All'
    ? certificates
    : certificates.filter(c => c.type.toLowerCase() === filter.toLowerCase());

  return (
    <section className="section certificates-section" id="certificates">
      {/* Watermark Background */}
      <div className="section-watermark watermark-center" aria-hidden="true">
        <span className="watermark-text">CERTIFICATES</span>
      </div>
      
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Credentials &amp; Milestones</span>
          <h2 className="section-title">
            Certifications &amp; <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Chronological timeline of verified industry internships, competitions, and technical courses (2026 – 2024).
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="cert-stats-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {[
            { value: '2', label: 'Internships' },
            { value: '3', label: 'Competitions' },
            { value: '1', label: 'Course' },
            { value: '1', label: 'Program' },
          ].map(s => (
            <div className="cert-stat" key={s.label}>
              <span className="cert-stat-value gradient-text">{s.value}</span>
              <span className="cert-stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Filter tabs */}
        <div className="cert-filters">
          {categories.map(cat => (
            <motion.button
              key={cat}
              className={`filter-btn${filter === cat ? ' active' : ''}`}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat === 'All' ? 'All Credentials' : `${cat}s`}
            </motion.button>
          ))}
        </div>

        {/* Certificate cards grid */}
        <motion.div className="cert-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((cert, i) => {
              const tc = typeColors[cert.type] || typeColors.Program;
              const isOpen = expanded === cert.id;
              return (
                <motion.div
                  key={cert.id}
                  className={`cert-card${isOpen ? ' cert-card--open' : ''}`}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  layout
                  whileHover={{ y: -7 }}
                >
                  {/* Certificate preview image banner */}
                  {cert.image && (
                    <div
                      className="cert-card-img-wrap"
                      onClick={() => setSelectedImg({ src: cert.image, title: cert.title })}
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="cert-card-thumb"
                        loading="lazy"
                      />
                      <div className="cert-img-overlay">
                        <span className="cert-zoom-pill">
                          <FaSearchPlus /> Preview Certificate
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="cert-card-body">
                    {/* Header row */}
                    <div className="cert-card-header">
                      <div className="cert-icon-wrap" style={{ background: cert.gradient }}>
                        {cert.icon}
                      </div>
                      <div className="cert-meta">
                        <div className="cert-meta-top">
                          <span className="cert-year-badge">{cert.year}</span>
                          <span
                            className="cert-type-badge"
                            style={{
                              background: tc.bg,
                              color: tc.color,
                              borderColor: tc.border,
                            }}
                          >
                            {cert.type}
                          </span>
                        </div>
                        <span className="cert-date">
                          <FaCalendarAlt /> {cert.date}
                        </span>
                      </div>
                    </div>

                    {/* Title & Issuer */}
                    <h3 className="cert-title">{cert.title}</h3>
                    <p className="cert-issuer">{cert.issuer}</p>

                    {/* Skill tags */}
                    <div className="cert-tags">
                      {cert.tags.map(t => (
                        <span key={t} className="cert-tag">{t}</span>
                      ))}
                    </div>

                    {/* Expand button */}
                    <button
                      className="cert-expand-btn"
                      onClick={() => toggle(cert.id)}
                      aria-expanded={isOpen}
                    >
                      {isOpen
                        ? <><FaChevronUp /> Collapse Details</>
                        : <><FaChevronDown /> View Certificate Details</>}
                    </button>

                    {/* Animated details panel */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          className="cert-details"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p className="cert-description">{cert.description}</p>

                          {cert.credentialId && (
                            <div className="cert-credential">
                              <FaIdBadge />
                              <span>
                                ID / Ref:{' '}
                                <strong>{cert.credentialId}</strong>
                              </span>
                            </div>
                          )}

                          <div className="cert-actions-row">
                            {cert.verifyUrl && (
                              <a
                                href={cert.verifyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cert-verify-link"
                                style={{ '--accent': cert.accentColor }}
                              >
                                <FaExternalLinkAlt /> Verify Online
                              </a>
                            )}

                            {cert.image && (
                              <button
                                className="cert-view-img-btn"
                                onClick={() => setSelectedImg({ src: cert.image, title: cert.title })}
                              >
                                <FaSearchPlus /> View Full Document
                              </button>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* LinkedIn CTA */}
        <motion.div
          className="cert-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Verified on LinkedIn</h3>
          <p>
            Explore all certified accomplishments, recommendations, and credentials on my official profile.
          </p>
          <motion.a
            href="https://www.linkedin.com/in/satharaka-nilmantha-aa7b96297/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="cert-linkedin-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <SiLinkedin /> View All on LinkedIn
          </motion.a>
        </motion.div>
      </div>

      {/* Lightbox Modal rendered via Portal to document.body (resolves navbar z-index overlap) */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              className="cert-lightbox-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
            >
              {/* Floating Quick Close Button */}
              <button
                className="cert-lightbox-floating-close"
                onClick={() => setSelectedImg(null)}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>

              <motion.div
                className="cert-lightbox-modal"
                initial={{ scale: 0.88, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.88, opacity: 0, y: 20 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="cert-lightbox-header">
                  <h4>
                    <FaAward className="cert-lightbox-title-icon" />
                    {selectedImg.title}
                  </h4>
                  <button
                    className="cert-lightbox-close"
                    onClick={() => setSelectedImg(null)}
                    aria-label="Close modal"
                  >
                    <FaTimes />
                  </button>
                </div>
                <div className="cert-lightbox-body">
                  <img
                    src={selectedImg.src}
                    alt={selectedImg.title}
                    className="cert-lightbox-img"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}


