'use client';

import Link from 'next/link';
import '../page.css';
import '../contact/contact.css';

export default function About() {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="nav scrolled">
        <div className="nav-container">
          <div className="nav-content">
            <Link href="/" className="nav-logo">
              <div className="nav-logo-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="nav-brand">StepMode</span>
            </Link>
            <div className="nav-links">
              <Link href="/#features" className="nav-link">Features</Link>
              <Link href="/#community" className="nav-link">Community</Link>
              <Link href="/#how-it-works" className="nav-link">How It Works</Link>
              <Link href="/#download" className="nav-cta">Get Started Free</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section className="page-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">About Us</div>
            <h1 className="section-title">
              Our <span className="highlight">Mission</span>
            </h1>
            <p className="section-description">
              Making fitness accessible, personal, and sustainable for everyone.
            </p>
          </div>

          <div className="content-wrapper">
            <div className="content-block">
              <h2>Why StepMode?</h2>
              <p>
                We believe that staying fit shouldn't be complicated. Too many people give up on their fitness goals because they don't have the right support, guidance, or accountability. That's why we built StepMode—an intelligent fitness partner that understands you.
              </p>
            </div>

            <div className="content-block">
              <h2>What We Do</h2>
              <p>
                StepMode combines the power of AI with human-centered design to create a fitness experience that adapts to your life. Our app learns your habits, understands your schedule, and provides personalized workout plans that actually fit your lifestyle.
              </p>
              <p>
                But we're more than just a workout app. We're building a community of people who support each other, celebrate wins together, and keep each other accountable. Because we know that lasting change happens when you're not doing it alone.
              </p>
            </div>

            <div className="content-block">
              <h2>Our Values</h2>
              <div className="values-grid">
                <div className="value-card">
                  <div className="value-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3>Personal</h3>
                  <p>Every journey is unique. We meet you where you are.</p>
                </div>

                <div className="value-card">
                  <div className="value-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3>Consistent</h3>
                  <p>Small steps every day lead to big transformations.</p>
                </div>

                <div className="value-card">
                  <div className="value-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3>Community</h3>
                  <p>Together we're stronger. Support makes the difference.</p>
                </div>

                <div className="value-card">
                  <div className="value-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3>Smart</h3>
                  <p>AI that learns and adapts to help you succeed.</p>
                </div>
              </div>
            </div>

            <div className="content-block">
              <h2>Join Us</h2>
              <p>
                Whether you're just starting your fitness journey or looking to level up, StepMode is here to help. Join thousands of others who have made fitness a sustainable part of their lives.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/#download" className="btn-primary">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-bottom" style={{ borderTop: 'none', paddingTop: 0 }}>
            <p className="footer-copyright">
              © 2025 StepMode. All rights reserved.
            </p>
            <div className="footer-links-inline">
              <Link href="/contact" className="footer-link">Contact</Link>
              <Link href="/privacy" className="footer-link">Privacy</Link>
              <Link href="/terms" className="footer-link">Terms</Link>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .content-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }

        .content-block {
          margin-bottom: 3rem;
        }

        .content-block h2 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--primary);
        }

        .content-block p {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.8;
          margin-bottom: 1rem;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-top: 1.5rem;
        }

        .value-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.02));
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          padding: 1.5rem;
        }

        .value-icon {
          width: 2.5rem;
          height: 2.5rem;
          background: linear-gradient(135deg, rgba(0, 255, 136, 0.2), rgba(0, 255, 136, 0.05));
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          margin-bottom: 1rem;
        }

        .value-icon svg {
          width: 1.25rem;
          height: 1.25rem;
        }

        .value-card h3 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .value-card p {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9375rem;
          margin: 0;
        }

        @media (max-width: 640px) {
          .values-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
