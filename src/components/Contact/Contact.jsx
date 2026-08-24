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
    iconBg: 'linear-gradient(135deg,#6c63ff,#ff6b9d)',
    label: 'Email',
    value: 'satharakanilmantha1@gmail.com',
    href: 'mailto:satharakanilmantha1@gmail.com',
  },
  {
    icon: <FaPhone />,
    iconBg: 'linear-gradient(135deg,#43e97b,#4facfe)',
    label: 'Phone',
    value: '+94 76 587 1905',
    href: 'tel:+94765871905',
  },
  {
    icon: <FaGithub />,
    iconBg: 'linear-gradient(135deg,#434343,#000)',
    label: 'GitHub',
    value: 'github.com/SatharakaNilmantha',
    href: 'https://github.com/SatharakaNilmantha',
  },
  {
    icon: <FaLinkedin />,
    iconBg: 'linear-gradient(135deg,#0A66C2,#00a0dc)',
    label: 'LinkedIn',
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
    await new Promise(r => setTimeout(r, 1500));
    const sub = encodeURIComponent(`Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:satharakanilmantha1@gmail.com?subject=${sub}&body=${body}`;
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
    setSubmitting(false);
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
      <div className="container">
        <motion.div
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
                  <div className="ci-icon" style={{ background: c.iconBg, color: '#fff' }}>
                    {c.icon}
                  </div>
                  <div>
                    <div className="ci-label">{c.label}</div>
                    <div className="ci-value">{c.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Resume download */}
            <motion.button
              className="btn-grad"
              onClick={downloadCV}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{ marginBottom: 24, width: '100%', justifyContent: 'center' }}
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

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Satharaka"
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
                    placeholder="hello@example.com"
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
                  className="form-input"
                  placeholder="Tell me about your project or just say hello..."
                  required
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <motion.button
                type="submit"
                className="form-submit"
                disabled={submitting}
                whileHover={{ scale: submitting ? 1 : 1.03 }}
                whileTap={{ scale: submitting ? 1 : 0.97 }}
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
                  ✅ Message sent! I'll be in touch soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
