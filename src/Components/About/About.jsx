import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaNodeJs,
  FaJava, FaDatabase, FaCode, FaServer, FaMobile, FaCloud,
  FaVideo, FaAws, FaDocker, FaPhone,
  FaLaptopCode, FaWrench, FaSatelliteDish
} from 'react-icons/fa';
import {
  SiSpringboot, SiMongodb, SiMysql, SiFirebase,
  SiPhp, SiPython, SiCplusplus,
  SiPostman, SiFigma, SiC, SiExpress,
  SiSocketdotio, SiGit, SiLinux, SiGrafana, SiNginx
} from 'react-icons/si';
import './About.css';

const skills = [
  {
    name: 'Programming Languages', level: 95, gradient: 'var(--grad-1)',
    tech: [
      { name: 'Java',       icon: <FaJava color="#007396" /> },
      { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
      { name: 'Python',     icon: <SiPython color="#3776AB" /> },
      { name: 'C++',        icon: <SiCplusplus color="#00599C" /> },
      { name: 'C',          icon: <SiC color="#A8B9CC" /> },
      { name: 'PHP',        icon: <SiPhp color="#777BB4" /> },
    ],
  },
  {
    name: 'Frontend', level: 92, gradient: 'var(--grad-2)',
    tech: [
      { name: 'React.js', icon: <FaReact color="#61DAFB" /> },
      { name: 'HTML5',    icon: <FaHtml5 color="#E34F26" /> },
      { name: 'CSS3',     icon: <FaCss3Alt color="#1572B6" /> },
      { name: 'Bootstrap',icon: <FaBootstrap color="#7952B3" /> },
    ],
  },
  {
    name: 'Backend', level: 90, gradient: 'var(--grad-4)',
    tech: [
      { name: 'Spring Boot', icon: <SiSpringboot color="#6DB33F" /> },
      { name: 'Node.js',     icon: <FaNodeJs color="#68A063" /> },
      { name: 'Express.js',  icon: <SiExpress color="#888" /> },
      { name: 'Socket.io',   icon: <SiSocketdotio color="#010101" /> },
    ],
  },
  {
    name: 'Database & Cloud', level: 88, gradient: 'var(--grad-3)',
    tech: [
      { name: 'MySQL',    icon: <SiMysql color="#4479A1" /> },
      { name: 'MongoDB',  icon: <SiMongodb color="#47A248" /> },
      { name: 'Firebase', icon: <SiFirebase color="#FFCA28" /> },
    ],
  },
  {
    name: 'DevOps & Tools', level: 85, gradient: 'var(--grad-1)',
    tech: [
      { name: 'Git',     icon: <SiGit color="#F05032" /> },
      { name: 'Docker',  icon: <FaDocker color="#2496ED" /> },
      { name: 'Nginx',   icon: <SiNginx color="#009639" /> },
      { name: 'Grafana', icon: <SiGrafana color="#F46800" /> },
      { name: 'AWS',     icon: <FaAws color="#FF9900" /> },
      { name: 'Linux',   icon: <SiLinux color="#FCC624" /> },
      { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
      { name: 'Figma',   icon: <SiFigma color="#F24E1E" /> },
    ],
  },
  {
    name: 'Specialized', level: 82, gradient: 'var(--grad-2)',
    tech: [
      { name: 'IoT/Embedded', icon: <FaMobile color="#00D4AA" /> },
      { name: 'WebRTC',       icon: <FaVideo color="#FF6B6B" /> },
      { name: 'API Integration', icon: <FaCloud color="#4ECDC4" /> },
      { name: 'Twilio',       icon: <FaPhone color="#F22F46" /> },
    ],
  },
];

const achievements = [
  { icon: <FaLaptopCode />,    color: '#6c63ff', title: '5+ Projects Completed', desc: 'Full-stack apps with modern tech stacks' },
  { icon: <FaWrench />,        color: '#ff6b9d', title: 'Backend Expertise',      desc: 'RESTful APIs, microservices & DB design' },
  { icon: <FaSatelliteDish />, color: '#43e97b', title: 'IoT Development',        desc: 'ESP32, Arduino & embedded systems' },
  { icon: <FaCloud />,         color: '#4facfe', title: 'Cloud Integration',      desc: 'Firebase, Docker & third-party APIs' },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">About Me</span>
          <h2 className="section-title">
            Full-Stack <span className="gradient-text">Developer</span> &{' '}
            <span className="gradient-text-2">Problem Solver</span>
          </h2>
          <p className="section-subtitle">
            Building scalable solutions from backend to frontend — and everything in between.
          </p>
        </motion.div>

        <div className="about-grid">
          {/* Left: Bio + achievements */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="about-bio-text">
              I'm <span className="hl">Satharaka Nilmantha</span>, a{' '}
              <span className="hl">Software Developer – Junior Associate</span> at{' '}
              <span className="hl">Cyber Mas Solutions (Pvt) Ltd</span> and a passionate
              Computer Engineering undergraduate specializing in{' '}
              <span className="hl">Full-Stack Development</span> and{' '}
              <span className="hl">IoT Systems</span>.
            </p>
            <p className="about-bio-text">
              My philosophy centers on building <span className="hl">scalable, efficient, user-centric applications</span>.
              From responsive React interfaces to RESTful APIs with Spring Boot, every project delivers
              technical excellence and exceptional user experience.
            </p>

            <ul className="competency-list">
              {[
                ['Frontend', 'React.js, HTML5, CSS3, Bootstrap, Responsive Design'],
                ['Backend', 'Spring Boot, Node.js, Express.js, RESTful APIs'],
                ['Databases', 'MySQL, MongoDB, Firebase, Database Design'],
                ['Languages', 'Java, JavaScript, Python, C++, C, PHP'],
                ['DevOps', 'Docker, Nginx, Grafana, Jenkins, AWS, Git, Linux'],
                ['Specialized', 'IoT, WebRTC, Real-time Apps, Biometrics'],
              ].map(([label, val], i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <span className="comp-label">{label}:</span>
                  <span>{val}</span>
                </motion.li>
              ))}
            </ul>

            <div className="achievement-grid" style={{ marginTop: 28 }}>
              {achievements.map((a, i) => (
                <motion.div
                  key={i}
                  className="achievement-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="ach-icon" style={{ color: a.color, background: `${a.color}18`, border: `1px solid ${a.color}33` }}>
                    {a.icon}
                  </div>
                  <div className="ach-title">{a.title}</div>
                  <div className="ach-desc">{a.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Skill bars */}
          <motion.div
            className="skills-section"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {skills.map((sk, i) => (
              <motion.div
                key={i}
                className="skill-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className="skill-group-header">
                  <span className="skill-group-name">{sk.name}</span>
                  <span className="skill-level">{sk.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <motion.div
                    className="skill-bar-fill"
                    style={{ background: sk.gradient }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${sk.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.05, ease: 'easeOut' }}
                  />
                </div>
                <div className="skill-icons">
                  {sk.tech.map((t, j) => (
                    <motion.span
                      key={j}
                      className="skill-chip"
                      whileHover={{ y: -3, scale: 1.05 }}
                    >
                      <span className="skill-chip-icon">{t.icon}</span>
                      {t.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
