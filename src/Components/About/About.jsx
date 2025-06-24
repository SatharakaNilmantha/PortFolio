import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaBootstrap, 
  FaReact, FaNodeJs, FaJava, FaDatabase 
} from 'react-icons/fa';
import { 
  SiSpringboot, SiMongodb, SiMysql, SiFirebase, 
  SiPhp, SiTwilio, SiPython, SiCplusplus, 
  SiPostman, SiFigma, SiC 
} from 'react-icons/si';
import './About.css';

const About = () => {
  const techStacks = [
    { 
      name: 'Programming Languages', 
      level: 95,
      tech: [
        { name: 'Java', icon: <FaJava color="#007396" /> },
        { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
        { name: 'C', icon: <SiC color="#A8B9CC" /> },
        { name: 'Python', icon: <SiPython color="#3776AB" /> },
        { name: 'PHP', icon: <SiPhp color="#777BB4" /> },
        { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> }
      ] 
    },
    { 
      name: 'Frontend Development', 
      level: 90,
      tech: [
        { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
        { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
        { name: 'React', icon: <FaReact color="#61DAFB" /> },
        { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" /> }
      ] 
    },
    { 
      name: 'Backend & Frameworks', 
      level: 85,
      tech: [
        { name: 'Node.js', icon: <FaNodeJs color="#68A063" /> },
        { name: 'Spring Boot', icon: <SiSpringboot color="#6DB33F" /> }
      ] 
    },
    { 
      name: 'Databases & Cloud', 
      level: 80,
      tech: [
        { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
        { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
        { name: 'Firebase', icon: <SiFirebase color="#FFCA28" /> }
      ] 
    },
    { 
      name: 'Tools & Platforms', 
      level: 75,
      tech: [
        { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
        { name: 'Figma', icon: <SiFigma color="#F24E1E" /> },
        { name: 'Twilio', icon: <SiTwilio color="#F22F46" /> }
      ] 
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div 
          className="about-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="about-header">
            <span className="section-tag">TECHNOLOGY STACK</span>
            <h2 className="section-title">
              My <span className="highlight">Technical Expertise</span>
            </h2>
            <div className="divider"></div>
          </div>

          <div className="about-content">
            <motion.div 
            className="about-description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            >
            <p className="description-text">
                As a <span className="text-highlight">Full-Stack Developer</span> with expertise in <span className="text-highlight">IoT/Embedded Systems</span>, 
                I combine low-level programming with modern web development to build complete solutions.
            </p>
            <p className="description-text">
                My technical capabilities span across multiple layers of the stack:
            </p>
            <ul className="expertise-list">
                <li><span className="list-highlight">Languages:</span> Java, C++, C, Python, PHP, JavaScript</li>
                <li><span className="list-highlight">Frontend:</span> HTML5, CSS3, React, Bootstrap</li>
                <li><span className="list-highlight">Backend:</span> Node.js, Spring Boot, REST APIs</li>
                <li><span className="list-highlight">Databases:</span> MongoDB, MySQL, Firebase</li>
                <li><span className="list-highlight">Tools:</span> Postman, Figma, Twilio integrations</li>
            </ul>
            </motion.div>

            <div className="tech-stacks">
              {techStacks.map((stack, index) => (
                <motion.div 
                  key={index}
                  className="tech-stack"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="stack-header">
                    <h3 className="stack-title">{stack.name}</h3>
                    <span className="stack-level">{stack.level}%</span>
                  </div>
                  <div className="progress-container">
                    <motion.div 
                      className="progress-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stack.level}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                      style={{
                        background: `linear-gradient(90deg, 
                          var(--neon-blue), 
                          var(--neon-purple))`
                      }}
                    ></motion.div>
                  </div>
                  <div className="tech-icons">
                    {stack.tech.map((tech, techIndex) => (
                      <motion.div 
                        key={techIndex}
                        className="tech-icon"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <div className="icon-wrapper" style={{ color: tech.icon.props.color }}>
                          {tech.icon}
                        </div>
                        <span>{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;