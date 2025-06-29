import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaGithub, FaMobileAlt, FaServer, FaShieldAlt, FaVideo, FaExternalLinkAlt, FaRobot } from 'react-icons/fa';
import { SiSpring, SiReact, SiMysql, SiFirebase, SiWebrtc, SiTwilio, SiNodedotjs } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const [loading, setLoading] = useState(true);

  const projects = [
    {
      id: 1,
      title: 'HealthHub – Smart Hospital Management System',
      period: 'Jan 2025 - May 2025',
      status: 'Completed',
      description: [
        'Architected and developed a comprehensive role-based hospital management system serving 4 user types',
        'Built responsive React.js frontend with modern UI/UX design and real-time data synchronization',
        'Designed RESTful APIs using Spring Boot with authentication and role-based access control',
        'Implemented advanced features: appointment scheduling, prescription management, and patient records',
        'Conducted comprehensive testing including unit tests, integration tests, and API validation with Postman'
      ],
      techStack: [
        { name: 'Spring Boot', icon: <SiSpring /> },
        { name: 'React.js', icon: <SiReact /> },
        { name: 'MySQL', icon: <SiMysql /> }
      ],
      icon: <FaServer />,
      github: 'https://github.com/SatharakaNilmantha/HealthHub_Smart-Hospital.git',
      highlights: ['Full-Stack', 'Authentication', 'Database Design', 'API Development']
    },
    {
      id: 2,
      title: 'Smart Pet Feeder – IoT Automated System',
      period: 'Jan 2025 - May 2025',
      status: 'Completed',
      description: [
        'Developed IoT-based pet feeding system using ESP32 microcontroller with C programming',
        'Created React Native mobile application for remote monitoring and feeding control',
        'Implemented real-time food level monitoring with ultrasonic sensors and servo motor control',
        'Integrated Firebase for cloud data storage, push notifications, and offline functionality',
        'Built scheduling system with portion control and automated feeding based on pet profiles'
      ],
      techStack: [
        { name: 'ESP32/C', icon: <FaMobileAlt /> },
        { name: 'React Native', icon: <SiReact /> },
        { name: 'Firebase', icon: <SiFirebase /> }
      ],
      icon: <FaMobileAlt />,
      github: 'https://github.com/SatharakaNilmantha/Smart-food-feeder.git',
      highlights: ['IoT Development', 'Mobile App', 'Hardware Integration', 'Cloud Services']
    },
    {
      id: 3,
      title: 'ProConnect – WebRTC Video Conferencing',
      period: 'Apr 2025',
      status: 'Completed',
      description: [
        'Built real-time video conferencing application with HD video/audio streaming capabilities',
        'Implemented WebRTC technology for peer-to-peer communication with low latency',
        'Developed Node.js signaling server using Socket.io for connection management and room handling',
        'Created responsive web interface with screen sharing, chat functionality, and meeting controls',
        'Optimized for cross-browser compatibility and mobile responsiveness'
      ],
      techStack: [
        { name: 'WebRTC', icon: <SiWebrtc /> },
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'Socket.io', icon: <FaVideo /> }
      ],
      icon: <FaVideo />,
      github: 'https://github.com/SatharakaNilmantha/ProConnect_WebRTC-online-meeting-platform.git',
      highlights: ['Real-time Communication', 'WebRTC', 'Socket Programming', 'Media Streaming']
    },
    {
      id: 4,
      title: 'BookMyDoctor – Appointment System',
      period: 'Nov 2024 - Jun 2025',
      status: 'Completed',
      description: [
        'Developed comprehensive doctor appointment booking system with secure user authentication',
        'Integrated React-based AI chatbot for intelligent patient assistance and symptom assessment',
        'Implemented Twilio API for SMS notifications, appointment reminders',
        'Built admin dashboard for managing doctors, appointments, and system analytics',
        'Created responsive design with intuitive user experience for patients and healthcare providers',
        'Added file upload functionality for medical documents and prescription management'
      ],
      techStack: [
        { name: 'Spring Boot', icon: <SiSpring /> },
        { name: 'React.js', icon: <SiReact /> },
        { name: 'AI Chatbot', icon: <FaRobot /> },
        { name: 'Twilio API', icon: <SiTwilio /> }
      ],
      icon: <FaServer />,
      github: 'https://github.com/SatharakaNilmantha/BookMyDoctor.git',
      highlights: ['Healthcare Tech', 'AI Integration', 'SMS Integration', 'File Management', 'Admin Dashboard']
    },
    {
      id: 5,
      title: 'ML-Based Intrusion Detection System',
      period: 'Jan 2025 - Present',
      status: 'In Development',
      description: [
        'Researching and developing real-time IDS for detecting Layer 2 network attacks on public Wi-Fi',
        'Implementing machine learning models with quantization techniques for edge device deployment',
        'Integrating custom SmartIDS plugin with pfSense firewall for live network traffic analysis',
        'Conducting performance benchmarking against industry standards like Arpwatch and Snort',
        'Focusing on ARP spoofing, MAC flooding, and DHCP starvation attack detection'
      ],
      techStack: [
        { name: 'Python/ML', icon: <FaShieldAlt /> },
        { name: 'Network Security', icon: <FaShieldAlt /> },
        { name: 'pfSense', icon: <FaShieldAlt /> }
      ],
      icon: <FaShieldAlt />,
      github: '#',
      highlights: ['Machine Learning', 'Cybersecurity', 'Network Analysis', 'Research Project']
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleLinkClick = (e, url) => {
    if (url === '#') {
      e.preventDefault();
      console.log('This repository is private or in development');
    }
  };

  if (loading) {
    return (
      <section id="projects" className="projects-section loading">
        <div className="container">
          <div className="loading-spinner"></div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">MY WORK</span>
          <h2 className="section-title">
            Featured <span className="highlight">Projects</span>
          </h2>
          <p className="section-subtitle">
            A showcase of my full-stack development expertise, from web applications to IoT systems
          </p>
        </motion.div>

        <div className="timeline">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="timeline-content">
                <div className="project-icon">{project.icon}</div>
                <div className="project-header">
                  <div className="project-title-row">
                    <h3 className="project-title">{project.title}</h3>
                    <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                    <span className="project-period">{project.period}</span>
                  </div>
                </div>
                
                <ul className="project-description">
                  {project.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                {/* Project Highlights */}
                <div className="project-highlights">
                  {project.highlights.map((highlight, i) => (
                    <span key={i} className="highlight-tag">
                      {highlight}
                    </span>
                  ))}
                </div>
                
                <div className="tech-stack">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-item">
                      {tech.icon}
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target={project.github === '#' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className={`project-link github-link ${project.github === '#' ? 'private-link' : ''}`}
                    onClick={(e) => handleLinkClick(e, project.github)}
                  >
                    <FaGithub />
                    {project.github === '#' ? 'Private Repository' : 'View Source Code'}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Interested in collaborating?</h3>
          <p>I'm always open to discussing new opportunities and innovative projects.</p>
          <a href="#contact" className="cta-button">
            Let's Connect
            <FaExternalLinkAlt />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;