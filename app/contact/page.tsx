'use client';

import { useState } from 'react';
import Link from 'next/link';
import '../page.css';
import './contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build mailto link with form data
    const subject = encodeURIComponent(`[${formData.subject}] Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:info@stepmode.app?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="nav scrolled">
        <div className="nav-container">
          <div className="nav-content">
            <Link href="/" className="nav-logo">
              <img src="/logo.png" alt="StepMode Logo" className="nav-logo-img" />
              <span className="nav-brand">StepMode</span>
            </Link>
            <div className="nav-links">
              <Link href="/#features" className="nav-link">Features</Link>
              <Link href="/#community" className="nav-link">Community</Link>
              <Link href="/#how-it-works" className="nav-link">How It Works</Link>
              <Link href="/contact" className="nav-cta">Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="page-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">Contact</div>
            <h1 className="section-title">
              Get in <span className="highlight">Touch</span>
            </h1>
            <p className="section-description">
              Have questions, feedback, or just want to say hello? We'd love to hear from you.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3>Email Us</h3>
                <p>info@stepmode.app</p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3>Social Media</h3>
                <div className="social-links-contact">
                  <a href="#" aria-label="Twitter">Twitter</a>
                  <a href="#" aria-label="Instagram">Instagram</a>
                  <a href="#" aria-label="Facebook">Facebook</a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3>Response Time</h3>
                <p>We typically respond within 24-48 hours</p>
              </div>
            </div>

            <div className="contact-form-wrapper">
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="How can we help you?"
                      rows={5}
                    />
                  </div>

                  <button type="submit" className="btn-primary">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="nav-logo" style={{marginBottom: '1rem'}}>
                <img src="/logo.png" alt="StepMode Logo" className="nav-logo-img" />
                <span className="nav-brand">StepMode</span>
              </div>
              <p className="footer-description">
                An intelligent coach that learns your habits, adapts to your goals, and keeps you accountable.
              </p>
            </div>

            <div>
              <h4 className="footer-title">Product</h4>
              <ul className="footer-links">
                <li><Link href="/#features" className="footer-link">Features</Link></li>
                <li><Link href="/#how-it-works" className="footer-link">How It Works</Link></li>
                <li><Link href="/#download" className="footer-link">Download</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-title">Company</h4>
              <ul className="footer-links">
                <li><Link href="/about" className="footer-link">About Us</Link></li>
                <li><Link href="/privacy" className="footer-link">Privacy Policy</Link></li>
                <li><Link href="/terms" className="footer-link">Terms of Service</Link></li>
                <li><Link href="/contact" className="footer-link">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2025 StepMode. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
