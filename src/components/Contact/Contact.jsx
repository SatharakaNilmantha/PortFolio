import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaWhatsapp,
  FaPaperPlane, FaDownload
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import cvFile from '../../assets/Gunarathna A.M.S.N. cv.pdf';
import './Contact.css';

const contactItems = [
  {
    icon: <FaEnvelope />,
    iconBg: 'linear-gradient(135deg, rgba(0, 122, 255, 0.25), rgba(0, 240, 255, 0.15))',
    iconBorder: 'rgba(0, 122, 255, 0.5)',
    iconColor: '#00F0FF',
    glowColor: '0 0 16px rgba(0, 122, 255, 0.45)',
    label: 'Email Address',
    value: 'satharakanilmantha1@gmail.com',
    href: 'mailto:satharakanilmantha1@gmail.com',
  },
  {
    icon: <FaPhone />,
    iconBg: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25), rgba(5, 150, 105, 0.15))',
    iconBorder: 'rgba(16, 185, 129, 0.5)',
    iconColor: '#10B981',
    glowColor: '0 0 16px rgba(16, 185, 129, 0.45)',
    label: 'Phone & WhatsApp',
    value: '+94 76 587 1905',
    href: 'tel:+94765871905',
  },
  {
    icon: <FaGithub />,
    iconBg: 'linear-gradient(135deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.05))',
    iconBorder: 'rgba(255, 255, 255, 0.3)',
    iconColor: '#ffffff',
    glowColor: '0 0 16px rgba(255, 255, 255, 0.2)',
    label: 'GitHub Profile',
    value: 'github.com/SatharakaNilmantha',
    href: 'https://github.com/SatharakaNilmantha',
  },
  {
    icon: <FaLinkedin />,
    iconBg: 'linear-gradient(135deg, rgba(10, 102, 194, 0.3), rgba(0, 119, 181, 0.15))',
    iconBorder: 'rgba(10, 102, 194, 0.55)',
    iconColor: '#38bdf8',
    glowColor: '0 0 16px rgba(10, 102, 194, 0.45)',
    label: 'LinkedIn Network',
    value: 'linkedin.com/in/satharaka-nilmantha',
    href: 'https://www.linkedin.com/in/satharaka-nilmantha-aa7b96297/',
  },
];

const socials = [
  { icon: <FaGithub />,  href: 'https://github.com/SatharakaNilmantha', cls: 'cs-github', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/satharaka-nilmantha-aa7b96297/', cls: 'cs-linkedin', label: 'LinkedIn' },
  { icon: <SiLeetcode />, href: 'https://leetcode.com/Satharaka', cls: 'cs-leetcode', label: 'LeetCode' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/satharakanilmantha1@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New Portfolio Message from ${form.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const resData = await response.json();
      if (response.ok || resData.success === 'true' || resData.success === true) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
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
    <section className="section contact-section" id="contact">
      {/*  Stylized Watermark */}
      <div className="section-watermark watermark-center" aria-hidden="true">
        <span className="watermark-text">CONNECT</span>
      </div>

      <div className="container">
        <motion.div
          className="section-header-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* ---- Info ---- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-desc">
              I'm currently open to new opportunities. Whether you have a question, a project idea,
              or just want to say hello — feel free to reach out!
            </p>

            <div className="contact-items">
              {contactItems.map((c, i) => (
                <motion.a
                  key={i}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 6 }}
                >
                  <div
                    className="ci-icon"
                    style={{
                      background: c.iconBg,
                      border: `1px solid ${c.iconBorder}`,
                      color: c.iconColor,
                      boxShadow: c.glowColor,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div className="ci-content">
                    <div className="ci-label">{c.label}</div>
                    <div className="ci-value">{c.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Resume download */}
            <motion.button
              className="btn-grad download-cv-btn"
              onClick={downloadCV}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaDownload /> Download Resume
            </motion.button>

            <div className="contact-socials">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`c-social-link ${s.cls}`}
                  aria-label={s.label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ---- Form ---- */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="form-title">Send a Message</h3>
            <p className="form-subtitle">Fill in the form and I'll get back to you ASAP.</p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="e.g. Satharaka Nilmantha"
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Your Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="e.g. hello@example.com"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="Tell me about your project or just say hello..."
                  required
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <motion.button
                type="submit"
                className="form-submit-btn"
                disabled={submitting}
                whileHover={{ scale: submitting ? 1 : 1.02 }}
                whileTap={{ scale: submitting ? 1 : 0.98 }}
              >
                <FaPaperPlane />
                {submitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {status === 'success' && (
                <motion.div
                  className="form-msg success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you! Your message was sent directly to my inbox. I'll get back to you shortly.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  className="form-msg error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Message could not be sent right now. Please email directly to{' '}
                  <a href="mailto:satharakanilmantha1@gmail.com" style={{ color: '#00F0FF', textDecoration: 'underline' }}>
                    satharakanilmantha1@gmail.com
                  </a>
                </motion.div>
              )}
            </form>
          </motion.div>
      </div>
    </div>
      {/*  Inspired Call to Action Banner */}
      <div className="footer-cta-banner">
        <div className="container footer-cta-inner">
          <div className="footer-cta-text-wrap">
            <h2 className="footer-cta-heading">Ready to Build Something Extraordinary?</h2>
            <p className="footer-cta-text">Let's engineer scalable, intelligent software together.</p>
          </div>
          <a
            className="footer-cta-button"
            href="mailto:satharakanilmantha1@gmail.com"
          >
            Start a Conversation →
          </a>
        </div>
      </div>
    </section>
  );
}
