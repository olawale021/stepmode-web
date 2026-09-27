'use client';

import { useState, useEffect } from 'react';
import './page.css';
import RequestAccessModal from './components/RequestAccessModal';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-content">
            <a href="/" className="nav-logo">
              <img src="/logo.png" alt="StepMode Logo" className="nav-logo-img" />
              <span className="nav-brand">StepMode</span>
            </a>
            <div className="nav-links">
              <a href="#features" className="nav-link">Features</a>
              <a href="#tracking" className="nav-link">Tracking</a>
              <a href="#community" className="nav-link">Community</a>
              <a href="#ai-coach" className="nav-link">AI Coach</a>
              <a href="/contact" className="nav-cta">Contact Us</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-blur-1"></div>
          <div className="hero-blur-2"></div>
          <div className="hero-grid"></div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              <span>Available on iOS, coming soon on Android</span>
            </div>

            <h1 className="hero-title">
              You Show Up.
              <br />
              <span className="hero-title-gradient">We Keep You on Track.</span>
            </h1>

            <p className="hero-description">
              AI workout plans, food scanning, GPS running, macro tracking, and a personal coach — all in one app.
            </p>

            <div className="hero-cta">
              <a href="https://apps.apple.com/gb/app/stepmode/id6755781884" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Download Now
              </a>
              <a href="#features" className="btn-secondary">
                <span>See How It Works</span>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section — Core */}
      <section id="features" className="section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">Core Features</div>
            <h2 className="section-title">
              Everything You Need. <span className="highlight">One App.</span>
            </h2>
            <p className="section-description">
              Workouts, nutrition, running, and AI coaching — all working together.
            </p>
          </div>

          <div className="features-grid">
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
                title: 'AI Workout Plans',
                description: 'Personalized weekly programs built from your goals, fitness level, and schedule. Every session tracked automatically.'
              },
              {
                icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></>,
                title: 'Scan Equipment',
                description: 'Point your camera at any gym machine. AI identifies it and suggests the best exercises you can do.'
              },
              {
                icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></>,
                title: 'AI Food Scanner',
                description: 'Snap a photo of your meal. Instant breakdown of calories, protein, carbs, and fat — logged automatically.'
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
                title: 'Nutrition Diary',
                description: 'Full daily food log with macro tracking. See your protein, carbs, fat, and calories in real time.'
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
                title: 'GPS Running + Voice Coach',
                description: 'Track runs with real-time GPS, distance, and pace. A voice coach keeps you pushing through every interval.'
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />,
                title: 'AI Fitness Coach',
                description: 'Chat with your personal AI coach anytime. Ask about training, nutrition, recovery — get instant, tailored answers.'
              },
            ].map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracking Section */}
      <section id="tracking" className="section" style={{background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.02), transparent)'}}>
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">Track Everything</div>
            <h2 className="section-title">
              Your Body. Your Data. <span className="highlight">Your Progress.</span>
            </h2>
            <p className="section-description">
              Steps, calories burned, macros, workouts, runs — all tracked and visualized.
            </p>
          </div>

          <div className="features-grid" style={{marginTop: '3rem'}}>
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
                title: 'Apple Health Sync',
                description: 'Steps, active calories burned, distance, and exercise minutes — synced automatically from Apple Health.'
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
                title: 'Weekly Stats',
                description: 'Detailed weekly breakdowns of your training volume, consistency, and progress toward your goals.'
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
                title: 'Net Calories',
                description: 'See calories eaten minus calories burned from workouts, steps, and runs. Know exactly where you stand.'
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />,
                title: 'Streaks & Affirmations',
                description: 'Daily workout streaks keep you consistent. Personalized affirmations keep you motivated.'
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />,
                title: 'iOS Home Widget',
                description: 'See your steps, calories, and next workout right on your home screen without opening the app.'
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />,
                title: 'ModeShare Cards',
                description: 'Share your workout stats as beautifully designed cards on Instagram, WhatsApp, or any social platform.'
              },
            ].map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">Community</div>
            <h2 className="section-title">
              Train Together. <span className="highlight">Stay Accountable.</span>
            </h2>
            <p className="section-description">
              Post workouts, follow friends, join groups, and compete on leaderboards.
            </p>
          </div>

          <div className="features-grid" style={{marginTop: '3rem'}}>
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />,
                title: 'Social Feed',
                description: 'Share completed workouts, progress photos, and milestones. Like and comment on your friends\' achievements.'
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
                title: 'Groups & Friends',
                description: 'Create or join fitness groups. Follow friends and see their workouts in your feed.'
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
                title: 'Run Leaderboard',
                description: 'Compete with other runners. See who ran the farthest, fastest, or most consistently this week.'
              },
            ].map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Coach Section */}
      <section id="ai-coach" className="section" style={{background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.02), transparent)'}}>
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">AI Coach</div>
            <h2 className="section-title">
              Your Personal <span className="highlight">AI Fitness Coach</span>
            </h2>
            <p className="section-description">
              Chat with an AI that knows your goals, your body, and your progress. Ask anything.
            </p>
          </div>

          <div className="features-grid" style={{marginTop: '3rem'}}>
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />,
                title: 'Ask Anything',
                description: '"What should I eat after a workout?" "How do I fix my squat form?" — instant, personalized answers.'
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
                title: 'Knows Your Data',
                description: 'The coach sees your workouts, nutrition, and progress. Advice is based on YOUR data, not generic tips.'
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />,
                title: 'Daily Affirmations',
                description: 'Personalized motivational messages delivered at the right time. Configurable schedule — morning, pre-workout, or evening.'
              },
            ].map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section" style={{background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.02), transparent)'}}>
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">How It Works</div>
            <h2 className="section-title">
              Get Started in <span className="highlight">3 Simple Steps</span>
            </h2>
          </div>

          <div className="steps-grid">
            {[
              {
                step: '01',
                title: 'Set Your Goals',
                description: 'Share your fitness goals, body focus areas, workout frequency, and available equipment to get started'
              },
              {
                step: '02',
                title: 'Get Personalized Plans',
                description: 'Let AI create personalized workout plans or scan gym equipment to get instant exercise suggestions'
              },
              {
                step: '03',
                title: 'Track, Share & Connect',
                description: 'Complete workouts, track progress, share achievements with the community, and stay motivated together'
              }
            ].map((item, index) => (
              <div key={index} className="step">
                <div className="step-number">{item.step}</div>
                <h3 className="step-title">{item.title}</h3>
                <p className="step-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="section">
        <div className="section-container" style={{textAlign: 'center'}}>
          <h2 className="section-title">
            Ready to Start <span className="highlight">Your Journey?</span>
          </h2>
          <p className="section-description" style={{marginBottom: '3rem'}}>
            Download StepMode and experience AI-powered fitness with a supportive community
          </p>

          <div className="download-cta">
            <a href="https://apps.apple.com/gb/app/stepmode/id6755781884" target="_blank" rel="noopener noreferrer" className="app-store-btn">
              <div className="app-store-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <div className="app-store-text">
                <div className="app-store-label">Download on the</div>
                <div className="app-store-name">App Store</div>
              </div>
            </a>

            <a href="#" className="app-store-btn">
              <div className="app-store-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
              </div>
              <div className="app-store-text">
                <div className="app-store-label">GET IT ON</div>
                <div className="app-store-name">Google Play</div>
              </div>
            </a>
          </div>

          <p style={{color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem', marginTop: '2rem'}}>
            Free to download • No credit card required
          </p>
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
                <li><a href="#features" className="footer-link">Features</a></li>
                <li><a href="#how-it-works" className="footer-link">How It Works</a></li>
                <li><a href="#download" className="footer-link">Download</a></li>
                <li><a href="#" className="footer-link">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-title">Company</h4>
              <ul className="footer-links">
                <li><a href="/about" className="footer-link">About Us</a></li>
                <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
                <li><a href="/terms" className="footer-link">Terms of Service</a></li>
                <li><a href="/contact" className="footer-link">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2026 StepMode. All rights reserved.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <RequestAccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
