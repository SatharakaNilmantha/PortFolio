import { useEffect, useState, useRef } from 'react';
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
import profilePicHuman from '../../assets/satharaka1.jpg';
import profilePicAi from '../../assets/satharaka_ai.jpg';
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
  const [portraitMode, setPortraitMode] = useState('split'); // 'split' | 'human'
  const [isTransitioning, setIsTransitioning] = useState(false);
  const powderCanvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const imgAiRef = useRef(null);
  const imgHumanRef = useRef(null);

  // Preload images for canvas instant pixel-perfect slicing
  useEffect(() => {
    const ai = new Image();
    ai.src = profilePicAi;
    imgAiRef.current = ai;

    const human = new Image();
    human.src = profilePicHuman;
    imgHumanRef.current = human;
  }, []);

  // Image Shatter-Reveal Transition:
  // The NEXT image appears immediately behind the current one.
  // The CURRENT image shatters into small pieces that fly outward,
  // REVEALING the next image underneath — like peeling off a layer.
  const triggerFractureTransition = (toMode) => {
    if (toMode === portraitMode || isTransitioning) return;

    const canvas = powderCanvasRef.current;
    const imgFrom = portraitMode === 'split' ? imgAiRef.current : imgHumanRef.current;

    // Fallback if images not fully ready
    if (!canvas || !imgFrom || !imgFrom.complete) {
      setPortraitMode(toMode);
      return;
    }

    setIsTransitioning(true);

    // Reveal the NEXT image immediately (hidden under canvas)
    // Canvas will draw the OLD image shattering on top of it
    setPortraitMode(toMode);

    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = rect.width || 480;
    const height = rect.height || 480;
    canvas.width = width * dpr;
    canvas.height = height * dpr;

    const ctx = canvas.getContext('2d');
    ctx.resetTransform();
    ctx.scale(dpr, dpr);

    const cx = width / 2;
    const cy = height / 2;
    // Profile circle radius inside the canvas coordinate space
    const rProfile = width * 0.32;

    // Fine grid of small shatter pieces (40 x 40) — tiny powder-like fragments
    const cols = 30;
    const rows = 30;
    const pieceSize = (rProfile * 2) / cols;
    const startX = cx - rProfile;
    const startY = cy - rProfile;

    const pieces = [];

    const nwFrom = imgFrom.naturalWidth || 1024;
    const nhFrom = imgFrom.naturalHeight || 1024;

    const sStepXFrom = nwFrom / cols;
    const sStepYFrom = nhFrom / rows;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const ox = startX + c * pieceSize + pieceSize / 2;
        const oy = startY + r * pieceSize + pieceSize / 2;
        const dx = ox - cx;
        const dy = oy - cy;
        const distFromCenter = Math.sqrt(dx * dx + dy * dy);

        // Only include pieces inside the circular portrait area
        if (distFromCenter <= rProfile) {
          const angle = Math.atan2(dy, dx);
          // Each piece flies outward in its radial direction + some turbulence
          const scatterDist = 60 + Math.random() * 160;
          const scatterAngle = angle + (Math.random() - 0.5) * 0.7;
          const sx = ox + Math.cos(scatterAngle) * scatterDist;
          const sy = oy + Math.sin(scatterAngle) * scatterDist + (Math.random() - 0.3) * 30;

          // Radial wave stagger: pieces near center leave last (ripple from outside-in → inside-out)
          const normalDist = distFromCenter / rProfile; // 0 (center) to 1 (edge)
          const stagger = (1 - normalDist) * 0.12 + Math.random() * 0.04;

          pieces.push({
            originX: ox,
            originY: oy,
            scatterX: sx,
            scatterY: sy,
            size: pieceSize + 0.8,
            rotation: (Math.random() - 0.5) * Math.PI * 2.5,
            stagger,
            srcXFrom: c * sStepXFrom,
            srcYFrom: r * sStepYFrom,
            srcWFrom: sStepXFrom,
            srcHFrom: sStepYFrom,
          });
        }
      }
    }

    // Fine glowing dust accompanies the shatter
    const dustCount = 200;
    const dust = [];
    const dustColors = toMode === 'human'
      ? ['#00F0FF', '#38BDF8', '#007AFF', '#FFFFFF', '#A200FF']
      : ['#00F0FF', '#007AFF', '#60A5FA', '#FFFFFF', '#67E8F9'];

    for (let i = 0; i < dustCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const d = Math.sqrt(Math.random()) * rProfile;
      const x = cx + Math.cos(angle) * d;
      const y = cy + Math.sin(angle) * d;
      const speed = 1.5 + Math.random() * 5;
      dust.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.4,
        size: 0.7 + Math.random() * 2,
        color: dustColors[Math.floor(Math.random() * dustColors.length)],
        alpha: 0.85,
      });
    }

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const duration = 900; // ms — fast and punchy
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);

      ctx.clearRect(0, 0, width, height);

      // Draw each shatter piece of the OLD image flying outward
      // The new image is visible BEHIND through the gaps as pieces leave
      for (let i = 0; i < pieces.length; i++) {
        const p = pieces[i];
        // Each piece starts moving after its stagger delay
        const localP = Math.max(0, Math.min(1, (progress - p.stagger) / (1 - p.stagger)));
        // Ease-in: pieces start slow then accelerate outward
        const ease = Math.pow(localP, 1.8);

        const curX = (1 - ease) * p.originX + ease * p.scatterX;
        const curY = (1 - ease) * p.originY + ease * p.scatterY;
        const curRot = ease * p.rotation;
        const curAlpha = Math.max(0, 1 - ease * 1.1);

        if (curAlpha <= 0.01) continue;

        ctx.save();
        ctx.globalAlpha = curAlpha;
        ctx.translate(curX, curY);
        ctx.rotate(curRot);
        // Draw the image piece as a small square tile
        ctx.drawImage(
          imgFrom,
          p.srcXFrom, p.srcYFrom, p.srcWFrom, p.srcHFrom,
          -p.size / 2, -p.size / 2, p.size, p.size
        );
        ctx.restore();
      }

      // Fine glowing dust particles
      for (let i = 0; i < dust.length; i++) {
        const d = dust[i];
        d.x += d.vx;
        d.y += d.vy;
        d.vx *= 0.94;
        d.vy *= 0.94;

        const alpha = Math.max(0, d.alpha * (1 - progress * 1.3));
        if (alpha > 0.01) {
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.fillStyle = d.color;
          ctx.shadowColor = d.color;
          ctx.shadowBlur = 7;
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, width, height);
        setIsTransitioning(false);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  };
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

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
    a.download = 'Gunarathna A.M.S.N. cv.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section className="hero" id="hero">
      {/*  Stylized Watermark */}
      <div className="section-watermark watermark-center" aria-hidden="true">
        <span className="watermark-text">ENGINEER</span>
      </div>

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

            {/*  Cyber Corner Brackets */}
            <div className="cyber-bracket top-left" />
            <div className="cyber-bracket top-right" />
            <div className="cyber-bracket bottom-left" />
            <div className="cyber-bracket bottom-right" />

            {/* Cyber Scanline */}
            <div className="cyber-scanline" />

            {/* Cyber Shockwave on powder burst */}
            {isTransitioning && <div className="powder-shockwave" />}

            {/* AI / Human Split Image — always visible; canvas draws old image shattering on top */}
            <img
              src={portraitMode === 'split' ? profilePicAi : profilePicHuman}
              alt="Satharaka Nilmantha"
              className={`profile-img ${portraitMode === 'split' ? 'ai-active' : ''}`}
            />

            {/* Powder Disperse Canvas overlay */}
            <canvas ref={powderCanvasRef} className="powder-disperse-canvas" />

            {/* Floating Cyber HUD Chips */}
            <div className="hud-chip hud-chip-ai">
              <span className="hud-beacon cyan" />
              <span>AI // CYBORG</span>
            </div>
            <div className="hud-chip hud-chip-human">
              <span className="hud-beacon blue" />
              <span>HUMAN // CORE</span>
            </div>

            {/* 3-ring orbit — CSS handles rotation, framer-motion fades in only */}
            <div className="tech-orbit-wrap">
              {/* Futuristic Cyber Radar Scanner beam */}
              <div className="guide-radar" />

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

          {/* Portrait Mode Switcher */}
          <motion.div
            className="portrait-mode-bar"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <button
              type="button"
              className={`portrait-mode-btn ${portraitMode === 'split' ? 'active' : ''}`}
              onClick={() => triggerFractureTransition('split')}
            >
              <span className="mode-dot cyan" />
              AI / Human Split
            </button>
            <button
              type="button"
              className={`portrait-mode-btn ${portraitMode === 'human' ? 'active' : ''}`}
              onClick={() => triggerFractureTransition('human')}
            >
              <span className="mode-dot blue" />
              Human Core
            </button>
          </motion.div>

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