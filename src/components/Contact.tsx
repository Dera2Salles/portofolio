import { Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Message from ${name || 'Portfolio Visitor'}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    window.location.href = `mailto:dera.ah.14@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      style={{ padding: "120px 0", background: "var(--mocha-mantle)", position: "relative" }}
    >
      <div className="mocha-divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "64px" }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "var(--mocha-s0)", border: "1px solid var(--mocha-s1)",
            borderRadius: "var(--r-pill)", padding: "6px 16px", marginBottom: "20px",
          }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", color: "var(--mocha-ov1)", textTransform: "uppercase" }}>
              Get in touch
            </span>
          </div>
          <h2 style={{
            fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 900,
            color: "var(--mocha-text)", letterSpacing: "-0.5px",
            lineHeight: 1.1, marginBottom: "16px",
          }}>
            Let's Connect
          </h2>
          <p style={{ fontSize: "18px", color: "var(--mocha-ov1)", maxWidth: "500px", lineHeight: 1.7, fontWeight: 400 }}>
            Available for architectural consulting, engineering roles, and strategic technical partnerships.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "48px" }}
          className="grid-cols-1 md:grid-cols-2">

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            <div
              className="oneui-card"
              style={{ padding: "24px", display: "flex", alignItems: "flex-start", gap: "16px" }}
            >
              <div style={{
                width: "40px", height: "40px", flexShrink: 0,
                background: "var(--mocha-s0)", border: "1px solid var(--mocha-s1)",
                borderRadius: "var(--r-sm)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--mocha-sub1)",
              }}>
                <Mail size={18} />
              </div>
              <div>
                <p className="oneui-label">Electronic Mail</p>
                <a
                  href="mailto:dera.ah.14@gmail.com"
                  style={{
                    fontSize: "15px", fontWeight: 700,
                    color: "var(--mocha-text)", textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--mocha-sub1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--mocha-text)")}
                >
                  dera.ah.14@gmail.com
                </a>
              </div>
            </div>

            <div className="oneui-card" style={{ padding: "24px" }}>
              <p className="oneui-label">Response Expectation</p>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "var(--mocha-text)", marginTop: "4px" }}>
                Within 24–48 business hours
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            <div>
              <label className="oneui-label">Your Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="oneui-input"
                placeholder="Jane Doe"
                required
              />
            </div>
            <div>
              <label className="oneui-label">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="oneui-input"
                placeholder="jane@example.com"
                required
              />
            </div>
            <div>
              <label className="oneui-label">Project Details</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="oneui-input"
                style={{ resize: "none" }}
                placeholder="Briefly describe your requirements..."
                required
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="oneui-btn-primary"
              style={{
                padding: "14px 28px", fontSize: "15px",
                cursor: "pointer", border: "none",
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
                alignSelf: "flex-start",
              }}
            >
              <span>Initiate Contact</span>
              <Send size={16} />
            </motion.button>
          </motion.form>
        </div>
      </div>

      <div className="mocha-divider" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />
    </section>
  );
};

export default Contact;
