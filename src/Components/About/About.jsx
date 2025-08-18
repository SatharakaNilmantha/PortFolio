import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaBootstrap, 
  FaReact, FaNodeJs, FaJava, FaDatabase,
  FaCode, FaServer, FaMobile, FaCloud, FaVideo
} from 'react-icons/fa';
import { 
  SiSpringboot, SiMongodb, SiMysql, SiFirebase, 
  SiPhp, SiTwilio, SiPython, SiCplusplus, 
  SiPostman, SiFigma, SiC, SiExpress,
  SiSocketdotio, SiGit, SiDocker, SiLinux
} from 'react-icons/si';
import './About.css';

function About() {
  const [activeStack, setActiveStack] = useState(0);

  // JavaScript for rotating tech stacks
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStack(prev => (prev + 1) % techStacks.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const techStacks = [
    { 
      name: 'Programming Languages', 
      level: 95,
      tech: [
        { name: 'Java', icon: <FaJava color="#007396" /> },
        { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
        { name: 'Python', icon: <SiPython color="#3776AB" /> },
        { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
        { name: 'C', icon: <SiC color="#A8B9CC" /> },
        { name: 'PHP', icon: <SiPhp color="#777BB4" /> }
      ] 
    },
    { 
      name: 'Frontend Development', 
      level: 92,
      tech: [
        { name: 'React.js', icon: <FaReact color="#61DAFB" /> },
        { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
        { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
        { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" /> }
      ] 
    },
    { 
      name: 'Backend Development', 
      level: 90,
      tech: [
        { name: 'Spring Boot', icon: <SiSpringboot color="#6DB33F" /> },
        { name: 'Node.js', icon: <FaNodeJs color="#68A063" /> },
        { name: 'Express.js', icon: <SiExpress color="#000000" /> },
        { name: 'Socket.io', icon: <SiSocketdotio color="#010101" /> }
      ] 
    },
    { 
      name: 'Database & Cloud', 
      level: 88,
      tech: [
        { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
        { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
        { name: 'Firebase', icon: <SiFirebase color="#FFCA28" /> }
      ] 
    },
    { 
      name: 'Tools & DevOps', 
      level: 85,
      tech: [
        { name: 'Git', icon: <SiGit color="#F05032" /> },
        { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
        { name: 'Linux', icon: <SiLinux color="#FCC624" /> },
        { name: 'Figma', icon: <SiFigma color="#F24E1E" /> }
      ] 
    },
    { 
      name: 'Specialized Skills', 
      level: 82,
      tech: [
        { name: 'IoT/Embedded', icon: <FaMobile color="#00D4AA" /> },
        { name: 'WebRTC', icon: <FaVideo color="#FF6B6B" /> },
        { name: 'API Integration', icon: <FaCloud color="#4ECDC4" /> },
        { name: 'Twilio', icon: <SiTwilio color="#F22F46" /> }
      ] 
    }
  ];

  const achievements = [
    {
      icon: <FaCode />,
      title: "5+ Projects Completed",
      description: "Full-stack applications with modern tech stacks"
    },
    {
      icon: <FaServer />,
      title: "Backend Expertise",
      description: "RESTful APIs, microservices, and database design"
    },
    {
      icon: <FaMobile />,
      title: "IoT Development",
      description: "ESP32, Arduino, and embedded systems programming"
    },
    {
      icon: <FaCloud />,
      title: "Cloud Integration",
      description: "Firebase, real-time databases, and third-party APIs"
    }
  ];

  return (
    <section id="about" className="about-section container-fluid">
      <div className="container-lg">
        <motion.div 
          className="about-card card bg-dark border-info"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="about-header text-center mb-5">
            <span className="section-tag badge bg-info text-dark mb-3">ABOUT ME</span>
            <h2 className="section-title display-4 fw-bold text-white">
              Full-Stack <span className="highlight">Developer</span> & <span className="highlight">Problem Solver</span>
            </h2>
            <hr className="divider bg-info mx-auto" style={{width: '80px', height: '3px'}} />
          </div>

          <div className="about-content row">
            <motion.div 
              className="about-description col-12 mb-4 p-4 bg-dark rounded border border-info"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="description-text text-light lead">
                I'm <span className="text-highlight">Satharaka Nilmantha</span>, a passionate Computer Engineering undergraduate 
                specializing in <span className="text-highlight">Full-Stack Development</span> and <span className="text-highlight">IoT Systems</span>. 
                With expertise spanning both frontend and backend technologies, I create comprehensive digital solutions 
                that bridge the gap between user experience and robust system architecture.
              </p>
              <p className="description-text text-light">
                My development philosophy centers on building <span className="text-highlight">scalable, efficient, and user-centric applications</span>. 
                From crafting responsive React interfaces to designing RESTful APIs with Spring Boot, I ensure every project 
                delivers both technical excellence and exceptional user experience.
              </p>
              <p className="description-text text-light">
                <span className="list-highlight">Core Competencies:</span>
              </p>
              <ul className="expertise-list list-unstyled text-light">
                <li><span className="list-highlight">Frontend:</span> React.js, HTML5, CSS3, Bootstrap, Responsive Design</li>
                <li><span className="list-highlight">Backend:</span> Spring Boot, Node.js, Express.js, RESTful APIs</li>
                <li><span className="list-highlight">Databases:</span> MySQL, MongoDB, Firebase, Database Design</li>
                <li><span className="list-highlight">Languages:</span> Java, JavaScript, Python, C++, C, PHP</li>
                <li><span className="list-highlight">Specialized:</span> IoT Development, WebRTC, Real-time Applications</li>
                <li><span className="list-highlight">Tools:</span> Git, Docker, Postman, Linux, Agile Development</li>
              </ul>
            </motion.div>

            {/* Achievements Section */}
            <motion.div 
              className="achievements-grid row g-4 mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  className="achievement-card col-lg-3 col-md-6 col-sm-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="card bg-dark border-info h-100 text-center p-3">
                    <div className="achievement-icon text-info fs-1 mb-3">{achievement.icon}</div>
                    <h4 className="achievement-title text-white mb-2">{achievement.title}</h4>
                    <p className="achievement-description text-light small">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="tech-stacks col-12">
              {techStacks.map((stack, index) => (
                <motion.div 
                  key={index}
                  className={`tech-stack card bg-dark border-secondary mb-4 p-4 ${index === activeStack ? 'border-info' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="stack-header d-flex justify-content-between align-items-center mb-3">
                    <h3 className="stack-title text-white h5 mb-0">{stack.name}</h3>
                    <span className="stack-level badge bg-info text-dark">{stack.level}%</span>
                  </div>
                  <div className="progress mb-4" style={{height: '8px'}}>
                    <motion.div 
                      className="progress-bar bg-info"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stack.level}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                  <div className="tech-icons d-flex flex-wrap gap-3 justify-content-center">
                    {stack.tech.map((tech, techIndex) => (
                      <motion.div 
                        key={techIndex}
                        className="tech-icon text-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <div className="icon-wrapper bg-dark border border-info rounded-circle d-flex align-items-center justify-content-center mb-2" 
                             style={{ width: '50px', height: '50px', color: tech.icon.props.color }}>
                          {tech.icon}
                        </div>
                        <span className="text-light small">{tech.name}</span>
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