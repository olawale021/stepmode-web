'use client';

import Link from 'next/link';
import '../page.css';
import '../contact/contact.css';

export default function Privacy() {
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

      {/* Privacy Section */}
      <section className="page-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">Legal</div>
            <h1 className="section-title">
              Privacy <span className="highlight">Policy</span>
            </h1>
            <p className="section-description">
              Effective Date: January 2026
            </p>
          </div>

          <div className="legal-content">
            {/* Introduction */}
            <div className="legal-section">
              <h2>1. Introduction</h2>
              <p>
                Welcome to StepMode. This Privacy Policy explains how Olawale Filani ("StepMode," "we," "us," or "our") collects, uses, shares, and protects your personal information when you use our mobile application and related services (collectively, the "Service").
              </p>
              <p>
                We are committed to protecting your privacy and ensuring you understand how your data is handled. Please read this policy carefully. By using StepMode, you agree to the collection and use of information in accordance with this policy.
              </p>
              <p>
                <strong>Age Requirement:</strong> StepMode is intended for users aged 13 and older. We do not knowingly collect personal information from anyone under the age of 13.
              </p>
            </div>

            {/* Quick Links */}
            <div className="legal-section">
              <h2>2. Quick Links</h2>
              <p>Click on the links below to jump to specific sections:</p>
              <ul className="quick-links">
                <li><a href="#info-collect">Information We Collect</a></li>
                <li><a href="#how-use">How We Use Your Information</a></li>
                <li><a href="#legal-basis">Legal Basis for Processing</a></li>
                <li><a href="#sharing">How We Share Your Information</a></li>
                <li><a href="#third-party">Third-Party Services</a></li>
                <li><a href="#retention">Data Retention</a></li>
                <li><a href="#security">Data Security</a></li>
                <li><a href="#international">International Data Transfers</a></li>
                <li><a href="#your-rights">Your Privacy Rights</a></li>
                <li><a href="#children">Children's Privacy</a></li>
                <li><a href="#updates">Policy Updates</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>

            {/* Information We Collect */}
            <div className="legal-section" id="info-collect">
              <h2>3. Information We Collect</h2>
              <p>
                We collect information in several ways: directly from you, automatically when you use the Service, and from third-party sources.
              </p>

              <h3>3.1 Information You Provide Directly</h3>

              <h4>Account Information</h4>
              <p>When you create an account, we collect:</p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Date of birth</li>
                <li>Gender</li>
                <li>Password (encrypted)</li>
              </ul>

              <h4>Profile Information</h4>
              <p>To personalize your experience, you may provide:</p>
              <ul>
                <li>Profile photo</li>
                <li>Height and weight</li>
                <li>Fitness goals (e.g., lose weight, build muscle, stay active)</li>
                <li>Target body areas</li>
                <li>Workout frequency preferences</li>
                <li>Available equipment</li>
              </ul>

              <h4>Fitness and Health Data</h4>
              <p>When you use our fitness features, we collect:</p>
              <ul>
                <li>Workout completion records</li>
                <li>Exercise history and preferences</li>
                <li>Workout difficulty ratings and feedback</li>
                <li>Progress tracking data</li>
              </ul>

              <h4>User-Generated Content</h4>
              <p>When you use our social features, we collect:</p>
              <ul>
                <li>Posts and photos you share</li>
                <li>Comments and replies</li>
                <li>Likes and saved content</li>
                <li>Information about users you follow</li>
              </ul>

              <h4>Safety and Moderation Data</h4>
              <p>To maintain a safe community, we collect:</p>
              <ul>
                <li>Content reports you submit (including report type and description)</li>
                <li>Users you have blocked</li>
                <li>EULA acceptance records (version accepted and timestamp)</li>
                <li>Content moderation decisions and actions taken</li>
              </ul>

              <h4>Communications</h4>
              <p>When you contact us, we collect:</p>
              <ul>
                <li>Support inquiries and correspondence</li>
                <li>Feedback and suggestions</li>
              </ul>

              <h3>3.2 Information Collected Automatically</h3>

              <h4>Device and Usage Information</h4>
              <p>When you use the Service, we automatically collect:</p>
              <ul>
                <li>Device type, model, and operating system</li>
                <li>Unique device identifiers</li>
                <li>App version</li>
                <li>Usage patterns (features accessed, time spent, interactions)</li>
                <li>Crash reports and performance data (via Sentry)</li>
              </ul>

              <h4>Log Data</h4>
              <p>Our servers automatically record:</p>
              <ul>
                <li>Access times and dates</li>
                <li>App features accessed</li>
                <li>Error logs and diagnostics</li>
              </ul>

              <h3>3.3 Information from Third-Party Sources</h3>

              <h4>Apple Health Integration</h4>
              <p>
                With your explicit permission, we read the following data from Apple Health:
              </p>
              <ul>
                <li>Step count</li>
              </ul>
              <p>
                <strong>Important:</strong> We only read this data to display within the app. We do not store Apple Health data on our servers, sell it, use it for advertising, or share it with third parties. You can revoke this access at any time through your device's Settings &gt; Health &gt; Data Access &amp; Devices.
              </p>

              <h4>Social Login Providers</h4>
              <p>
                If you choose to sign in using Google or Apple, we receive:
              </p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Profile photo (if available and permitted)</li>
              </ul>
              <p>
                We do not receive your password from these providers. We only receive information you authorize during the sign-in process.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div className="legal-section" id="how-use">
              <h2>4. How We Use Your Information</h2>
              <p>We use your information for the following purposes:</p>

              <h3>4.1 Providing and Improving the Service</h3>
              <ul>
                <li>Create and manage your account</li>
                <li>Generate personalized workout plans using AI</li>
                <li>Track your fitness progress and display statistics</li>
                <li>Display step count from Apple Health</li>
                <li>Enable social features (posts, follows, likes, comments)</li>
                <li>Provide customer support</li>
              </ul>

              <h3>4.2 Personalization</h3>
              <ul>
                <li>Customize workout recommendations based on your goals and preferences</li>
                <li>Adapt the app experience to your fitness level</li>
                <li>Provide personalized motivation and coaching messages</li>
              </ul>

              <h3>4.3 Communication</h3>
              <ul>
                <li>Send push notifications (workout reminders, motivation, social activity)</li>
                <li>Respond to your support requests</li>
                <li>Send important service announcements</li>
              </ul>

              <h3>4.4 Safety, Security, and Content Moderation</h3>
              <ul>
                <li>Monitor for and prevent fraud, abuse, and security incidents</li>
                <li>Diagnose and fix technical issues</li>
                <li>Ensure compliance with our Terms of Service</li>
                <li>Automatically screen content using AI moderation to detect policy violations</li>
                <li>Process and investigate user reports of objectionable content</li>
                <li>Enforce blocking relationships between users</li>
                <li>Take action against users who violate community guidelines</li>
              </ul>

              <h3>4.5 Analytics and Improvement</h3>
              <ul>
                <li>Understand how users interact with the app</li>
                <li>Identify and fix bugs and crashes</li>
                <li>Develop new features and improve existing ones</li>
              </ul>

              <h3>4.6 Legal Compliance</h3>
              <ul>
                <li>Comply with applicable laws and regulations</li>
                <li>Respond to legal requests and prevent harm</li>
                <li>Protect our rights and the rights of others</li>
              </ul>
            </div>

            {/* Legal Basis for Processing */}
            <div className="legal-section" id="legal-basis">
              <h2>5. Legal Basis for Processing (GDPR)</h2>
              <p>
                If you are located in the European Economic Area (EEA), United Kingdom (UK), or Switzerland, we process your personal data based on the following legal grounds:
              </p>

              <table className="legal-table">
                <thead>
                  <tr>
                    <th>Purpose</th>
                    <th>Legal Basis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Providing the Service, managing your account</td>
                    <td><strong>Contract:</strong> Necessary to perform our contract with you</td>
                  </tr>
                  <tr>
                    <td>Reading Apple Health data</td>
                    <td><strong>Consent:</strong> Based on your explicit opt-in permission</td>
                  </tr>
                  <tr>
                    <td>Processing health and fitness data</td>
                    <td><strong>Consent:</strong> You provide this data voluntarily to use fitness features</td>
                  </tr>
                  <tr>
                    <td>Sending push notifications</td>
                    <td><strong>Consent:</strong> Based on your device permission settings</td>
                  </tr>
                  <tr>
                    <td>Analytics and crash reporting</td>
                    <td><strong>Legitimate Interest:</strong> To improve and secure our Service</td>
                  </tr>
                  <tr>
                    <td>Fraud prevention and security</td>
                    <td><strong>Legitimate Interest:</strong> To protect users and the Service</td>
                  </tr>
                  <tr>
                    <td>Legal compliance</td>
                    <td><strong>Legal Obligation:</strong> To comply with applicable laws</td>
                  </tr>
                </tbody>
              </table>

              <p>
                Where we rely on consent, you have the right to withdraw it at any time. Where we rely on legitimate interests, you have the right to object (see "Your Privacy Rights" below).
              </p>
            </div>

            {/* How We Share Your Information */}
            <div className="legal-section" id="sharing">
              <h2>6. How We Share Your Information</h2>
              <p>
                <strong>We do not sell your personal information.</strong> We share your information only in the following limited circumstances:
              </p>

              <h3>6.1 With Other Users</h3>
              <p>
                When you use social features, certain information is visible to other users:
              </p>
              <ul>
                <li>Your profile name and photo</li>
                <li>Posts, photos, and content you share publicly</li>
                <li>Your followers and following lists (based on your privacy settings)</li>
                <li>Likes and comments you make on public posts</li>
              </ul>
              <p>
                You can control your profile visibility through your privacy settings in the app.
              </p>

              <h3>6.2 With Service Providers</h3>
              <p>
                We work with trusted third-party service providers who assist us in operating the Service:
              </p>
              <ul>
                <li><strong>Hosting and Infrastructure:</strong> Cloud servers to store and process data</li>
                <li><strong>Authentication:</strong> Google and Apple for social sign-in</li>
                <li><strong>Error Monitoring:</strong> Sentry for crash reporting and diagnostics</li>
              </ul>
              <p>
                These providers are contractually bound to protect your data and may only use it to provide services to us.
              </p>

              <h3>6.3 For Legal Reasons</h3>
              <p>
                We may disclose your information if required to do so by law or if we believe in good faith that such action is necessary to:
              </p>
              <ul>
                <li>Comply with legal obligations or valid legal processes</li>
                <li>Protect and defend our rights or property</li>
                <li>Prevent fraud or abuse of the Service</li>
                <li>Protect the personal safety of users or the public</li>
              </ul>

              <h3>6.4 Business Transfers</h3>
              <p>
                If StepMode is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you via email or prominent notice in the app before your information becomes subject to a different privacy policy.
              </p>

              <h3>6.5 What We Don't Share</h3>
              <ul>
                <li>We do not sell your personal information to third parties</li>
                <li>We do not share data with advertising networks</li>
                <li>We do not share Apple Health data with any third parties</li>
                <li>We do not share your data with data brokers or marketing partners</li>
              </ul>
            </div>

            {/* Third-Party Services */}
            <div className="legal-section" id="third-party">
              <h2>7. Third-Party Services</h2>

              <h3>7.1 Apple Health</h3>
              <p>
                StepMode integrates with Apple Health to read your step count data. This integration is governed by Apple's terms and privacy policy. Key points:
              </p>
              <ul>
                <li>We only access data you explicitly authorize</li>
                <li>Data is read locally on your device for display purposes</li>
                <li>We do not store Apple Health data on our servers</li>
                <li>We never share Apple Health data with third parties</li>
                <li>You can revoke access anytime via iOS Settings &gt; Health</li>
              </ul>

              <h3>7.2 Google Sign-In</h3>
              <p>
                If you sign in with Google, Google's Privacy Policy applies to information collected by Google. We only receive the basic profile information you authorize.
              </p>

              <h3>7.3 Apple Sign-In</h3>
              <p>
                If you sign in with Apple, Apple's Privacy Policy applies to information collected by Apple. Apple allows you to hide your email address, in which case we receive a relay email address.
              </p>

              <h3>7.4 Sentry (Error Monitoring)</h3>
              <p>
                We use Sentry to monitor app crashes and errors. Sentry may collect:
              </p>
              <ul>
                <li>Device information and operating system</li>
                <li>App state at the time of a crash</li>
                <li>Error stack traces</li>
              </ul>
              <p>
                This data is used solely for debugging and improving app stability. Sentry&apos;s privacy policy governs their handling of this data.
              </p>

              <h3>7.5 OpenAI (Content Moderation)</h3>
              <p>
                We use OpenAI&apos;s Moderation API to automatically screen user-generated content for policy violations:
              </p>
              <ul>
                <li><strong>What is sent:</strong> Text content from posts, comments, usernames, and profile bios</li>
                <li><strong>Purpose:</strong> To detect hate speech, harassment, self-harm content, sexual content, violence, and other objectionable material</li>
                <li><strong>Data retention:</strong> OpenAI does not retain content sent to the Moderation API</li>
                <li><strong>No training:</strong> Your content is not used to train OpenAI&apos;s models</li>
              </ul>
              <p>
                This processing is necessary to maintain a safe community and comply with App Store guidelines. OpenAI&apos;s privacy policy and usage policies govern their handling of this data.
              </p>
            </div>

            {/* Data Retention */}
            <div className="legal-section" id="retention">
              <h2>8. Data Retention</h2>
              <p>
                We retain your information only for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required by law.
              </p>

              <table className="legal-table">
                <thead>
                  <tr>
                    <th>Data Type</th>
                    <th>While Account Active</th>
                    <th>After Account Deletion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Account information (name, email, DOB, gender)</td>
                    <td>Retained</td>
                    <td>Deleted within 30 days</td>
                  </tr>
                  <tr>
                    <td>Profile photo</td>
                    <td>Retained</td>
                    <td>Deleted within 30 days</td>
                  </tr>
                  <tr>
                    <td>Body measurements (height, weight)</td>
                    <td>Retained</td>
                    <td>Deleted within 30 days</td>
                  </tr>
                  <tr>
                    <td>Workout history and completions</td>
                    <td>Retained</td>
                    <td>Deleted within 30 days</td>
                  </tr>
                  <tr>
                    <td>Posts and shared content</td>
                    <td>Retained</td>
                    <td>Deleted or anonymized within 30 days</td>
                  </tr>
                  <tr>
                    <td>Apple Health data (steps)</td>
                    <td>Not stored on our servers</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>Error logs (Sentry)</td>
                    <td>90 days</td>
                    <td>90 days</td>
                  </tr>
                  <tr>
                    <td>Support communications</td>
                    <td>2 years</td>
                    <td>2 years</td>
                  </tr>
                  <tr>
                    <td>Content reports submitted</td>
                    <td>2 years</td>
                    <td>2 years (for legal compliance)</td>
                  </tr>
                  <tr>
                    <td>Block relationships</td>
                    <td>Retained</td>
                    <td>Deleted within 30 days</td>
                  </tr>
                  <tr>
                    <td>EULA acceptance records</td>
                    <td>Retained</td>
                    <td>Deleted within 30 days</td>
                  </tr>
                  <tr>
                    <td>Backup systems</td>
                    <td>N/A</td>
                    <td>Purged within 90 days</td>
                  </tr>
                </tbody>
              </table>

              <p>
                <strong>Exceptions:</strong> We may retain certain information longer if required for legal compliance, dispute resolution, fraud prevention, or to enforce our agreements.
              </p>
            </div>

            {/* Data Security */}
            <div className="legal-section" id="security">
              <h2>9. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information:
              </p>
              <ul>
                <li><strong>Encryption in Transit:</strong> All data transmitted between your device and our servers is encrypted using TLS/SSL</li>
                <li><strong>Encryption at Rest:</strong> Sensitive data is encrypted when stored on our servers</li>
                <li><strong>Secure Authentication:</strong> Passwords are hashed using industry-standard algorithms; we support secure social login</li>
                <li><strong>Access Controls:</strong> Employee access to personal data is restricted and logged</li>
                <li><strong>Regular Security Reviews:</strong> We regularly review and update our security practices</li>
              </ul>
              <p>
                While we strive to protect your information, no method of transmission or storage is 100% secure. If you believe your account has been compromised, please contact us immediately.
              </p>
            </div>

            {/* International Data Transfers */}
            <div className="legal-section" id="international">
              <h2>10. International Data Transfers</h2>
              <p>
                StepMode is operated globally. Your information may be transferred to and processed in countries other than your country of residence, including countries that may not provide the same level of data protection as your home country.
              </p>
              <p>
                If you are located in the EEA, UK, or Switzerland, we ensure appropriate safeguards are in place for international transfers, including:
              </p>
              <ul>
                <li>Standard Contractual Clauses approved by the European Commission</li>
                <li>Transfers to countries with adequacy decisions</li>
                <li>Other legally approved transfer mechanisms</li>
              </ul>
              <p>
                By using StepMode, you consent to the transfer of your information to countries outside your country of residence.
              </p>
            </div>

            {/* Your Privacy Rights */}
            <div className="legal-section" id="your-rights">
              <h2>11. Your Privacy Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information:
              </p>

              <h3>11.1 Rights for All Users</h3>
              <ul>
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your account and personal data</li>
                <li><strong>Data Portability:</strong> Request your data in a portable format</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for processing based on consent</li>
                <li><strong>Opt-Out:</strong> Opt out of push notifications via device settings</li>
              </ul>
              <p>
                To exercise these rights, you can use the account settings in the app or contact us at <a href="mailto:info@stepmode.app">info@stepmode.app</a>.
              </p>

              <h3>11.2 Additional Rights for EEA, UK, and Swiss Users (GDPR)</h3>
              <p>If you are in the European Economic Area, United Kingdom, or Switzerland, you also have the right to:</p>
              <ul>
                <li><strong>Restrict Processing:</strong> Request restriction of processing in certain circumstances</li>
                <li><strong>Object to Processing:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Lodge a Complaint:</strong> File a complaint with your local data protection authority</li>
              </ul>
              <p>
                We will respond to your request within 30 days. We may ask for verification of your identity before processing your request.
              </p>

              <h3>11.3 Additional Rights for California Residents (CCPA/CPRA)</h3>
              <p>If you are a California resident, you have the right to:</p>
              <ul>
                <li><strong>Know:</strong> Request information about the categories and specific pieces of personal information we collect</li>
                <li><strong>Delete:</strong> Request deletion of your personal information</li>
                <li><strong>Opt-Out of Sale:</strong> We do not sell personal information, so this right does not apply</li>
                <li><strong>Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights</li>
              </ul>
              <p>
                To submit a request, email us at <a href="mailto:info@stepmode.app">info@stepmode.app</a> with "California Privacy Request" in the subject line.
              </p>

              <h3>11.4 Additional Rights for Brazilian Users (LGPD)</h3>
              <p>If you are in Brazil, you have rights under the Lei Geral de Proteção de Dados (LGPD), including:</p>
              <ul>
                <li>Confirmation of the existence of processing</li>
                <li>Access to your data</li>
                <li>Correction of incomplete or inaccurate data</li>
                <li>Anonymization, blocking, or deletion of unnecessary data</li>
                <li>Data portability</li>
                <li>Information about third parties with whom we share data</li>
                <li>Revocation of consent</li>
              </ul>

              <h3>11.5 Additional Rights for Canadian Users</h3>
              <p>If you are in Canada, you have rights under PIPEDA and provincial privacy laws, including:</p>
              <ul>
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Withdrawal of consent for certain processing</li>
              </ul>
            </div>

            {/* Children's Privacy */}
            <div className="legal-section" id="children">
              <h2>12. Children's Privacy</h2>
              <p>
                StepMode is not intended for users under the age of 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete that information as quickly as possible.
              </p>
              <p>
                If you are a parent or guardian and believe your child has provided us with personal information, please contact us at <a href="mailto:info@stepmode.app">info@stepmode.app</a>.
              </p>
            </div>

            {/* Policy Updates */}
            <div className="legal-section" id="updates">
              <h2>13. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.
              </p>
              <p>
                When we make changes:
              </p>
              <ul>
                <li>We will update the "Effective Date" at the top of this policy</li>
                <li>For significant changes, we will notify you via email or in-app notification</li>
                <li>We encourage you to review this policy periodically</li>
              </ul>
              <p>
                Your continued use of StepMode after any changes indicates your acceptance of the updated policy.
              </p>
            </div>

            {/* Contact Us */}
            <div className="legal-section" id="contact">
              <h2>14. Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="contact-box">
                <p><strong>Olawale Filani</strong></p>
                <p>Email: <a href="mailto:info@stepmode.app">info@stepmode.app</a></p>
              </div>
              <p>
                We aim to respond to all inquiries within 30 days.
              </p>
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

      <style jsx>{`
        .legal-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .legal-section {
          margin-bottom: 3rem;
        }

        .legal-section h2 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
          color: var(--primary);
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(0, 255, 136, 0.2);
        }

        .legal-section h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 2rem 0 1rem;
          color: rgba(255, 255, 255, 0.95);
        }

        .legal-section h4 {
          font-size: 1.0625rem;
          font-weight: 600;
          margin: 1.5rem 0 0.75rem;
          color: rgba(255, 255, 255, 0.85);
        }

        .legal-section p {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.8;
          margin-bottom: 1rem;
        }

        .legal-section ul {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.8;
          margin: 0.5rem 0 1.25rem;
          padding-left: 1.5rem;
        }

        .legal-section li {
          margin-bottom: 0.5rem;
        }

        .legal-section strong {
          color: rgba(255, 255, 255, 0.95);
        }

        .legal-section a {
          color: var(--primary);
          text-decoration: none;
        }

        .legal-section a:hover {
          text-decoration: underline;
        }

        .quick-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 0.5rem;
          list-style: none;
          padding: 0;
          margin: 1rem 0;
        }

        .quick-links li {
          margin: 0;
        }

        .quick-links a {
          display: block;
          padding: 0.5rem 0;
          color: var(--primary);
          transition: opacity 0.2s;
        }

        .quick-links a:hover {
          opacity: 0.8;
        }

        .legal-table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
          font-size: 0.9375rem;
        }

        .legal-table th,
        .legal-table td {
          padding: 1rem;
          text-align: left;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .legal-table th {
          background: rgba(0, 255, 136, 0.1);
          color: var(--primary);
          font-weight: 600;
        }

        .legal-table td {
          color: rgba(255, 255, 255, 0.7);
        }

        .legal-table tr:nth-child(even) td {
          background: rgba(255, 255, 255, 0.02);
        }

        .contact-box {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.02));
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          padding: 1.5rem;
          margin: 1.5rem 0;
        }

        .contact-box p {
          margin: 0.5rem 0;
        }

        @media (max-width: 768px) {
          .legal-table {
            font-size: 0.875rem;
          }

          .legal-table th,
          .legal-table td {
            padding: 0.75rem;
          }

          .quick-links {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
