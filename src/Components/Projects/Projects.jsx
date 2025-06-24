import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaGithub, FaMobileAlt, FaServer, FaShieldAlt, FaVideo } from 'react-icons/fa';
import { SiSpring, SiReact, SiMysql, SiFirebase, SiWebrtc, SiTwilio } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const [loading, setLoading] = useState(true);

  const projects = [
    {
      id: 1,
      title: 'HealthHub – Smart Hospital Management System',
      period: 'Jan 2025 - May 2025',
      description: [
        'Contributed to full-stack development of a role-based hospital management system',
        'Designed responsive UI for patients, doctors, admins, and receptionists',
        'Implemented real-time appointment booking and doctor prescription features',
        'Conducted manual and exploratory QA testing, validated APIs with Postman'
      ],
      techStack: [
        { name: 'Java Spring Boot', icon: <SiSpring /> },
        { name: 'React.js', icon: <SiReact /> },
        { name: 'MySQL', icon: <SiMysql /> }
      ],
      icon: <FaServer />,
      github: 'https://github.com/SatharakaNilmantha/HealthHub_Smart-Hospital.git'
    },
    {
      id: 2,
      title: 'Smart Pet Feeder – IoT-Based Automated Feeding System',
      period: 'Jan 2025 - May 2025',
      description: [
        'Developed IoT pet feeder using ESP32 and C with real-time food level monitoring',
        'Built React Native mobile app for remote control and scheduling',
        'Implemented dynamic portion control and offline functionality',
        'Integrated with Firebase for instant alerts and data synchronization'
      ],
      techStack: [
        { name: 'ESP32', icon: <FaMobileAlt /> },
        { name: 'React Native', icon: <SiReact /> },
        { name: 'Firebase', icon: <SiFirebase /> }
      ],
      icon: <FaMobileAlt />,
      github: 'https://github.com/SatharakaNilmantha/Smart-food-feeder.git'
    },
    {
      id: 3,
      title: 'ProConnect – WebRTC Video Conferencing Application',
      period: 'Apr 2025',
      description: [
        'Developed video conferencing app with HD video/audio calls and screen sharing',
        'Implemented WebRTC for low-latency peer-to-peer media streaming',
        'Built signaling server with Socket.io for connection management',
        'Created responsive frontend with modern JavaScript'
      ],
      techStack: [
        { name: 'WebRTC', icon: <SiWebrtc /> },
        { name: 'Node.js', icon: <FaServer /> },
        { name: 'Socket.io', icon: <FaVideo /> }
      ],
      icon: <FaVideo />,
      github: 'https://github.com/SatharakaNilmantha/ProConnect_WebRTC-online-meeting-platform.git'
    },
    {
      id: 4,
      title: 'BookMyDoctor – Appointment Booking System',
      period: 'Nov 2024 - Jun 2025',
      description: [
        'Developed web-based doctor appointment system with secure authentication',
        'Integrated Twilio for SMS notifications and appointment reminders',
        'Built admin features for managing appointments and doctor registration',
        'Implemented file handling for document uploads'
      ],
      techStack: [
        { name: 'Spring Boot', icon: <SiSpring /> },
        { name: 'React.js', icon: <SiReact /> },
        { name: 'Twilio', icon: <SiTwilio /> }
      ],
      icon: <FaServer />,
      github: 'https://github.com/SatharakaNilmantha/BookMyDoctor.git'
    },
    {
      id: 5,
      title: 'ML-Based Intrusion Detection System',
      period: 'Jan 2025 - Present',
      description: [
        'Researching real-time IDS to detect Layer 2 attacks on public Wi-Fi',
        'Implementing model quantization for edge device deployment',
        'Integrating SmartIDS plugin with pfSense for live traffic analysis',
        'Benchmarking against Arpwatch and Snort'
      ],
      techStack: [
        { name: 'Python', icon: <FaShieldAlt /> },
        { name: 'Machine Learning', icon: <FaShieldAlt /> },
        { name: 'Network Security', icon: <FaShieldAlt /> }
      ],
      icon: <FaShieldAlt />,
      github: '#'
    }
  ];

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleLinkClick = (e, url) => {
    if (url === '#') {
      e.preventDefault();
      // Optional: Add toast notification or other feedback
      console.log('This repository is private');
    }
    // For all other links, default behavior (opening in new tab) will occur
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
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          PROJECTS
        </motion.h2>

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
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-period">{project.period}</span>
                </div>
                
                <ul className="project-description">
                  {project.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                
                <div className="tech-stack">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-item">
                      {tech.icon}
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.github} 
                  target={project.github === '#' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className={`github-link ${project.github === '#' ? 'private-link' : ''}`}
                  onClick={(e) => handleLinkClick(e, project.github)}
                >
                  <FaGithub />
                  {project.github === '#' ? 'Private Repository' : 'View on GitHub'}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;