'use client';

import Link from 'next/link';
import '../page.css';
import '../contact/contact.css';

export default function Terms() {
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

      {/* Terms Section */}
      <section className="page-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">Legal</div>
            <h1 className="section-title">
              Terms of <span className="highlight">Service</span>
            </h1>
            <p className="section-description">
              Effective Date: January 2026
            </p>
          </div>

          <div className="legal-content">
            {/* Introduction */}
            <div className="legal-section">
              <h2>1. Introduction and Acceptance</h2>
              <p>
                Welcome to StepMode. These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;User,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and STEPPAs TECHNOLOGIES LTD, a company registered in England and Wales (&ldquo;StepMode,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
              </p>
              <p>
                These Terms govern your access to and use of the StepMode mobile application, website, and all related services (collectively, the &ldquo;Service&rdquo;). By downloading, installing, accessing, or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms.
              </p>
              <p>
                <strong>If you do not agree to these Terms, you must not access or use the Service.</strong>
              </p>
              <p>
                We may update these Terms from time to time. We will notify you of material changes by posting the updated Terms in the app or sending you a notification. Your continued use of the Service after such changes constitutes acceptance of the new Terms.
              </p>
            </div>

            {/* Quick Links */}
            <div className="legal-section">
              <h2>2. Quick Links</h2>
              <p>Click on the links below to jump to specific sections:</p>
              <ul className="quick-links">
                <li><a href="#eligibility">Eligibility</a></li>
                <li><a href="#account">Account Registration</a></li>
                <li><a href="#service">Description of Service</a></li>
                <li><a href="#health">Health and Fitness Disclaimer</a></li>
                <li><a href="#user-content">User Content</a></li>
                <li><a href="#conduct">Prohibited Conduct</a></li>
                <li><a href="#moderation">Content Moderation</a></li>
                <li><a href="#ip">Intellectual Property</a></li>
                <li><a href="#third-party">Third-Party Services</a></li>
                <li><a href="#subscriptions">Subscriptions and Payments</a></li>
                <li><a href="#termination">Termination and Suspension</a></li>
                <li><a href="#disclaimers">Disclaimers</a></li>
                <li><a href="#liability">Limitation of Liability</a></li>
                <li><a href="#indemnification">Indemnification</a></li>
                <li><a href="#disputes">Dispute Resolution</a></li>
                <li><a href="#general">General Provisions</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>

            {/* Eligibility */}
            <div className="legal-section" id="eligibility">
              <h2>3. Eligibility</h2>
              <p>
                To use the Service, you must:
              </p>
              <ul>
                <li>Be at least <strong>16 years of age</strong></li>
                <li>Have the legal capacity to enter into a binding agreement</li>
                <li>Not be prohibited from using the Service under applicable laws</li>
                <li>Not have been previously banned or removed from the Service</li>
              </ul>
              <p>
                If you are between 16 and 18 years old, you represent that you have reviewed these Terms with your parent or guardian, and they agree to these Terms on your behalf and take responsibility for your use of the Service.
              </p>
              <p>
                By using the Service, you represent and warrant that you meet all eligibility requirements. We reserve the right to request proof of age at any time and to suspend or terminate accounts if eligibility requirements are not met.
              </p>
            </div>

            {/* Account Registration */}
            <div className="legal-section" id="account">
              <h2>4. Account Registration and Security</h2>

              <h3>4.1 Creating an Account</h3>
              <p>
                To access most features of the Service, you must create an account. You may register using:
              </p>
              <ul>
                <li>Email address and password</li>
                <li>Google Sign-In</li>
                <li>Apple Sign-In</li>
              </ul>

              <h3>4.2 Account Information</h3>
              <p>
                When creating an account, you agree to:
              </p>
              <ul>
                <li>Provide accurate, current, and complete information</li>
                <li>Update your information to keep it accurate and current</li>
                <li>Not use false or misleading information</li>
                <li>Not create an account using another person&apos;s identity</li>
              </ul>

              <h3>4.3 Account Security</h3>
              <p>
                You are responsible for:
              </p>
              <ul>
                <li>Maintaining the confidentiality of your login credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorised access or security breach</li>
              </ul>
              <p>
                We are not liable for any loss or damage arising from unauthorised use of your account. You should use a strong, unique password and enable any available security features.
              </p>

              <h3>4.4 One Account Per User</h3>
              <p>
                Each user may maintain only one active account. Creating multiple accounts to circumvent restrictions, abuse features, or for any deceptive purpose is prohibited and may result in termination of all accounts.
              </p>
            </div>

            {/* Description of Service */}
            <div className="legal-section" id="service">
              <h2>5. Description of Service</h2>
              <p>
                StepMode is an AI-powered fitness application that provides:
              </p>
              <ul>
                <li><strong>Personalised Workout Plans:</strong> AI-generated workout routines based on your goals, preferences, and available equipment</li>
                <li><strong>Progress Tracking:</strong> Tools to monitor your workouts, streaks, and fitness journey</li>
                <li><strong>Health Integration:</strong> Connection with Apple Health to display step count data</li>
                <li><strong>Social Features:</strong> Ability to share workouts, follow other users, and engage with the community</li>
                <li><strong>AI Coaching:</strong> Personalised motivation and guidance based on your patterns</li>
              </ul>
              <p>
                The Service is provided &ldquo;as is&rdquo; and we reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, with or without notice. We are not liable to you or any third party for any modification, suspension, or discontinuation of the Service.
              </p>
            </div>

            {/* Health and Fitness Disclaimer */}
            <div className="legal-section" id="health">
              <h2>6. Health and Fitness Disclaimer</h2>
              <p>
                <strong>IMPORTANT: PLEASE READ THIS SECTION CAREFULLY</strong>
              </p>

              <h3>6.1 Not Medical Advice</h3>
              <p>
                The Service provides fitness information, workout suggestions, and general wellness content for <strong>educational and informational purposes only</strong>. The Service is NOT intended to be:
              </p>
              <ul>
                <li>A substitute for professional medical advice, diagnosis, or treatment</li>
                <li>A replacement for consultation with qualified healthcare providers</li>
                <li>Medical or therapeutic advice of any kind</li>
              </ul>

              <h3>6.2 Consult Your Doctor</h3>
              <p>
                Before starting any exercise programme, diet, or fitness regimen, you should:
              </p>
              <ul>
                <li>Consult with a qualified physician or healthcare provider</li>
                <li>Undergo a physical examination if you have any health concerns</li>
                <li>Discuss any medical conditions, injuries, or limitations</li>
                <li>Get clearance for physical activity if you are pregnant, elderly, or have chronic conditions</li>
              </ul>

              <h3>6.3 Exercise at Your Own Risk</h3>
              <p>
                You acknowledge and agree that:
              </p>
              <ul>
                <li>Physical exercise carries inherent risks of injury</li>
                <li>You are voluntarily participating in exercise activities</li>
                <li>You assume full responsibility for any risks, injuries, or damages</li>
                <li>You should stop exercising immediately if you experience pain, discomfort, dizziness, or shortness of breath</li>
              </ul>

              <h3>6.4 AI-Generated Content</h3>
              <p>
                Workout plans and recommendations are generated by artificial intelligence. While we strive for accuracy and safety, AI-generated content may not account for your specific health conditions, physical limitations, or individual circumstances. Always use your own judgment and consult professionals when in doubt.
              </p>

              <h3>6.5 No Guarantees</h3>
              <p>
                We make no guarantees regarding:
              </p>
              <ul>
                <li>Weight loss or fitness results</li>
                <li>Health improvements or outcomes</li>
                <li>The accuracy or completeness of fitness information</li>
                <li>The suitability of any workout for your specific situation</li>
              </ul>
            </div>

            {/* User Content */}
            <div className="legal-section" id="user-content">
              <h2>7. User Content</h2>

              <h3>7.1 Definition</h3>
              <p>
                &ldquo;User Content&rdquo; means any content you create, upload, post, share, or transmit through the Service, including but not limited to:
              </p>
              <ul>
                <li>Profile information and photos</li>
                <li>Posts and status updates</li>
                <li>Photos and images</li>
                <li>Comments and replies</li>
                <li>Workout data and progress information you choose to share</li>
              </ul>

              <h3>7.2 Your Ownership</h3>
              <p>
                You retain ownership of the User Content you create. We do not claim ownership of your content.
              </p>

              <h3>7.3 Licence to StepMode</h3>
              <p>
                By posting User Content, you grant StepMode a worldwide, non-exclusive, royalty-free, transferable, sublicensable licence to:
              </p>
              <ul>
                <li>Use, reproduce, modify, and display your User Content within the Service</li>
                <li>Distribute your User Content to other users as part of the Service&apos;s social features</li>
                <li>Use your User Content for promotional purposes (e.g., featuring posts in marketing materials)</li>
                <li>Create derivative works for the purpose of operating and improving the Service</li>
              </ul>
              <p>
                This licence continues even if you stop using the Service, but only for content that has been shared with other users or used in promotional materials. You can delete your content at any time, and we will remove it from active display, subject to technical limitations and backup retention periods.
              </p>

              <h3>7.4 Your Responsibilities</h3>
              <p>
                You are solely responsible for your User Content. You represent and warrant that:
              </p>
              <ul>
                <li>You own or have the necessary rights to post the content</li>
                <li>Your content does not infringe any third-party rights (copyright, trademark, privacy, etc.)</li>
                <li>Your content complies with these Terms and all applicable laws</li>
                <li>Your content is accurate and not misleading</li>
              </ul>
            </div>

            {/* Prohibited Conduct */}
            <div className="legal-section" id="conduct">
              <h2>8. Prohibited Conduct</h2>
              <p>
                You agree NOT to use the Service to:
              </p>

              <h3>8.1 Harmful Content</h3>
              <ul>
                <li>Post hate speech, discriminatory content, or content that promotes violence</li>
                <li>Harass, bully, intimidate, or abuse other users</li>
                <li>Post sexually explicit, pornographic, or obscene content</li>
                <li>Share graphic violence or content that glorifies self-harm</li>
                <li>Promote dangerous activities, eating disorders, or unhealthy behaviours</li>
              </ul>

              <h3>8.2 Deceptive Practices</h3>
              <ul>
                <li>Impersonate any person, business, or entity</li>
                <li>Create fake accounts or misrepresent your identity</li>
                <li>Spread misinformation or false health/fitness claims</li>
                <li>Engage in fraud, phishing, or scams</li>
              </ul>

              <h3>8.3 Spam and Abuse</h3>
              <ul>
                <li>Send spam, unsolicited promotions, or advertisements</li>
                <li>Use bots, scripts, or automated tools to access the Service</li>
                <li>Artificially inflate followers, likes, or engagement</li>
                <li>Repeatedly post the same content or flood the community</li>
              </ul>

              <h3>8.4 Illegal Activities</h3>
              <ul>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe intellectual property rights of others</li>
                <li>Share content depicting illegal activities</li>
                <li>Facilitate or promote illegal substances or activities</li>
              </ul>

              <h3>8.5 Security Violations</h3>
              <ul>
                <li>Attempt to gain unauthorised access to the Service or other users&apos; accounts</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Circumvent security features or access restrictions</li>
                <li>Reverse engineer, decompile, or disassemble the Service</li>
                <li>Collect user data without authorisation</li>
              </ul>
            </div>

            {/* Content Moderation */}
            <div className="legal-section" id="moderation">
              <h2>9. Content Moderation and Reporting</h2>

              <h3>9.1 Our Right to Moderate</h3>
              <p>
                We reserve the right, but have no obligation, to:
              </p>
              <ul>
                <li>Monitor, review, and moderate User Content</li>
                <li>Remove or disable access to any content that violates these Terms, without prior notice</li>
                <li>Take action against users who violate these Terms</li>
                <li>Cooperate with law enforcement when required</li>
              </ul>
              <p>
                We are not responsible for pre-screening content and do not endorse any User Content. The presence of content on the Service does not indicate our approval.
              </p>

              <h3>9.2 Reporting Violations</h3>
              <p>
                If you encounter content or behaviour that violates these Terms, you can:
              </p>
              <ul>
                <li>Use the in-app reporting feature to flag content or users</li>
                <li>Contact us at <a href="mailto:support@stepmode.app">support@stepmode.app</a></li>
              </ul>
              <p>
                We will review reports and take appropriate action, which may include content removal, warnings, or account suspension. We may not notify you of the outcome of your report for privacy and safety reasons.
              </p>

              <h3>9.3 Appeals</h3>
              <p>
                If your content is removed or your account is actioned and you believe this was in error, you may appeal by contacting us at <a href="mailto:support@stepmode.app">support@stepmode.app</a>. See Section 12 for details on the appeals process.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="legal-section" id="ip">
              <h2>10. Intellectual Property</h2>

              <h3>10.1 Our Intellectual Property</h3>
              <p>
                The Service, including all content, features, and functionality, is owned by STEPPAs TECHNOLOGIES LTD and is protected by international copyright, trademark, patent, and other intellectual property laws.
              </p>
              <p>
                This includes, but is not limited to:
              </p>
              <ul>
                <li>The StepMode name, logo, and branding</li>
                <li>App design, user interface, and user experience</li>
                <li>Workout plans, exercise descriptions, and fitness content</li>
                <li>AI algorithms and personalisation technology</li>
                <li>Software code and underlying technology</li>
                <li>Graphics, icons, and visual elements</li>
              </ul>

              <h3>10.2 Limited Licence to You</h3>
              <p>
                We grant you a limited, non-exclusive, non-transferable, revocable licence to:
              </p>
              <ul>
                <li>Download and install the app on your personal device</li>
                <li>Access and use the Service for personal, non-commercial purposes</li>
              </ul>
              <p>
                This licence does not include the right to:
              </p>
              <ul>
                <li>Modify, copy, or create derivative works of the Service</li>
                <li>Sell, resell, rent, or lease access to the Service</li>
                <li>Use the Service for commercial purposes without written permission</li>
                <li>Remove or alter any proprietary notices or labels</li>
                <li>Use our trademarks without written permission</li>
              </ul>

              <h3>10.3 Feedback</h3>
              <p>
                If you provide feedback, suggestions, or ideas about the Service, you grant us the right to use this feedback without restriction or compensation to you. We are not obligated to implement any feedback.
              </p>

              <h3>10.4 Copyright Infringement</h3>
              <p>
                We respect intellectual property rights. If you believe your copyright has been infringed, please contact us at <a href="mailto:support@stepmode.app">support@stepmode.app</a> with:
              </p>
              <ul>
                <li>Description of the copyrighted work</li>
                <li>Location of the infringing material on our Service</li>
                <li>Your contact information</li>
                <li>A statement of good faith belief that the use is not authorised</li>
                <li>A statement, under penalty of perjury, that the information is accurate</li>
              </ul>
            </div>

            {/* Third-Party Services */}
            <div className="legal-section" id="third-party">
              <h2>11. Third-Party Services</h2>

              <h3>11.1 Third-Party Integrations</h3>
              <p>
                The Service integrates with third-party services, including:
              </p>
              <ul>
                <li><strong>Apple Health:</strong> To read and display your step count data</li>
                <li><strong>Google Sign-In:</strong> For account authentication</li>
                <li><strong>Apple Sign-In:</strong> For account authentication</li>
                <li><strong>Apple App Store / Google Play Store:</strong> For app distribution and payments</li>
              </ul>
              <p>
                Your use of these services is subject to their respective terms and privacy policies. We are not responsible for third-party services.
              </p>

              <h3>11.2 Third-Party Links</h3>
              <p>
                The Service may contain links to third-party websites or resources. We provide these links for convenience only and do not endorse or assume responsibility for any third-party content, products, or services.
              </p>

              <h3>11.3 App Store Terms</h3>
              <p>
                If you downloaded the app from Apple App Store or Google Play Store, you also agree to their terms of service. In case of conflict between these Terms and app store terms, the more restrictive terms shall apply.
              </p>
            </div>

            {/* Subscriptions and Payments */}
            <div className="legal-section" id="subscriptions">
              <h2>12. Subscriptions and Payments</h2>

              <h3>12.1 Free and Premium Features</h3>
              <p>
                StepMode may offer both free features and premium subscription plans. Details of available plans, pricing, and features are displayed in the app.
              </p>

              <h3>12.2 In-App Purchases</h3>
              <p>
                All purchases and subscriptions are processed through the Apple App Store or Google Play Store. By making a purchase, you agree to the payment terms of the respective app store.
              </p>

              <h3>12.3 Subscription Terms</h3>
              <p>
                If you subscribe to a premium plan:
              </p>
              <ul>
                <li>Subscriptions automatically renew unless cancelled before the renewal date</li>
                <li>You can cancel anytime through your device&apos;s subscription settings</li>
                <li>Cancellation takes effect at the end of the current billing period</li>
                <li>No refunds are provided for partial subscription periods</li>
              </ul>

              <h3>12.4 Price Changes</h3>
              <p>
                We may change subscription prices at any time. Price changes will take effect at your next renewal. We will notify you of price changes in advance, and you can cancel before the new price applies.
              </p>

              <h3>12.5 Refunds</h3>
              <p>
                Refunds are handled by the Apple App Store or Google Play Store according to their refund policies. Please contact them directly for refund requests.
              </p>
            </div>

            {/* Termination and Suspension */}
            <div className="legal-section" id="termination">
              <h2>13. Termination and Suspension</h2>

              <h3>13.1 Termination by You</h3>
              <p>
                You may terminate your account at any time by:
              </p>
              <ul>
                <li>Using the account deletion feature in the app settings</li>
                <li>Contacting us at <a href="mailto:support@stepmode.app">support@stepmode.app</a></li>
              </ul>
              <p>
                Upon termination, your access to the Service will end, and your data will be deleted in accordance with our Privacy Policy.
              </p>

              <h3>13.2 Suspension by Us</h3>
              <p>
                We may suspend your account if we reasonably believe you have violated these Terms. Suspension means temporary restriction of access while we investigate.
              </p>
              <p>
                During suspension:
              </p>
              <ul>
                <li>You cannot access some or all features of the Service</li>
                <li>Your content may be hidden from other users</li>
                <li>We will notify you of the reason for suspension via email</li>
              </ul>

              <h3>13.3 Appeal Process</h3>
              <p>
                If your account is suspended, you may appeal within <strong>14 days</strong> by:
              </p>
              <ul>
                <li>Emailing <a href="mailto:support@stepmode.app">support@stepmode.app</a> with subject line &ldquo;Account Appeal&rdquo;</li>
                <li>Explaining why you believe the suspension was in error</li>
                <li>Providing any relevant information to support your case</li>
              </ul>
              <p>
                We will review your appeal and respond within 14 days. Our decision on the appeal is final.
              </p>

              <h3>13.4 Termination by Us</h3>
              <p>
                We may terminate your account immediately and without prior notice for:
              </p>
              <ul>
                <li>Severe violations (illegal activity, abuse, harassment, fraud)</li>
                <li>Repeated violations after warnings</li>
                <li>Failed appeal or continued violations during suspension</li>
              </ul>
              <p>
                For non-severe violations, we will generally provide a warning before termination, except where immediate action is necessary to protect users or the Service.
              </p>

              <h3>13.5 Effect of Termination</h3>
              <p>
                Upon termination:
              </p>
              <ul>
                <li>Your right to use the Service ends immediately</li>
                <li>You must stop using the app and delete it from your devices</li>
                <li>Your data will be deleted per our Privacy Policy retention schedule</li>
                <li>Sections of these Terms that should survive termination will remain in effect (e.g., limitation of liability, intellectual property)</li>
              </ul>
            </div>

            {/* Disclaimers */}
            <div className="legal-section" id="disclaimers">
              <h2>14. Disclaimers</h2>

              <h3>14.1 Service Provided &ldquo;As Is&rdquo;</h3>
              <p>
                THE SERVICE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
              </p>
              <p>
                To the fullest extent permitted by law, we disclaim all warranties, including but not limited to:
              </p>
              <ul>
                <li>Implied warranties of merchantability and fitness for a particular purpose</li>
                <li>Warranties that the Service will be uninterrupted, secure, or error-free</li>
                <li>Warranties regarding the accuracy or reliability of any content</li>
                <li>Warranties that defects will be corrected</li>
              </ul>

              <h3>14.2 No Professional Advice</h3>
              <p>
                The Service does not provide medical, health, legal, financial, or other professional advice. Any information provided is for general informational purposes only. See Section 6 for our full health disclaimer.
              </p>

              <h3>14.3 Third-Party Content</h3>
              <p>
                We do not endorse, guarantee, or assume responsibility for any User Content or third-party content, products, or services.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="legal-section" id="liability">
              <h2>15. Limitation of Liability</h2>

              <h3>15.1 Exclusion of Certain Damages</h3>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, STEPMODE AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY:
              </p>
              <ul>
                <li>Indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, revenue, data, or business opportunities</li>
                <li>Personal injury or property damage resulting from your use of the Service</li>
                <li>Damages arising from unauthorised access to or alteration of your data</li>
                <li>Damages arising from any User Content or third-party conduct</li>
              </ul>

              <h3>15.2 Liability Cap</h3>
              <p>
                <strong>OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED TO THE SERVICE SHALL NOT EXCEED ONE HUNDRED POUNDS STERLING (£100).</strong>
              </p>

              <h3>15.3 Exceptions</h3>
              <p>
                Nothing in these Terms excludes or limits our liability for:
              </p>
              <ul>
                <li>Death or personal injury caused by our negligence</li>
                <li>Fraud or fraudulent misrepresentation</li>
                <li>Any other liability that cannot be excluded or limited under applicable law</li>
              </ul>

              <h3>15.4 Basis of the Bargain</h3>
              <p>
                You acknowledge that the limitations of liability in this section are essential elements of the agreement between us, and that we would not provide the Service without these limitations.
              </p>
            </div>

            {/* Indemnification */}
            <div className="legal-section" id="indemnification">
              <h2>16. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless StepMode, STEPPAs TECHNOLOGIES LTD, and our officers, directors, employees, agents, and affiliates from and against any and all claims, damages, losses, costs, and expenses (including reasonable legal fees) arising from:
              </p>
              <ul>
                <li>Your use of the Service</li>
                <li>Your User Content</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Your violation of any applicable laws</li>
              </ul>
              <p>
                We reserve the right to assume the exclusive defence of any matter subject to indemnification by you, and you agree to cooperate with our defence of such claims.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="legal-section" id="disputes">
              <h2>17. Dispute Resolution and Governing Law</h2>

              <h3>17.1 Governing Law</h3>
              <p>
                These Terms and any dispute arising from or related to them or the Service shall be governed by and construed in accordance with the <strong>laws of England and Wales</strong>, without regard to conflict of law principles.
              </p>

              <h3>17.2 Jurisdiction</h3>
              <p>
                You agree that any legal action or proceeding arising from these Terms shall be brought exclusively in the courts of England and Wales. You consent to the jurisdiction of such courts and waive any objection to venue.
              </p>

              <h3>17.3 Informal Resolution</h3>
              <p>
                Before initiating any formal legal proceedings, you agree to first contact us at <a href="mailto:support@stepmode.app">support@stepmode.app</a> and attempt to resolve the dispute informally for at least 30 days.
              </p>

              <h3>17.4 Consumer Rights</h3>
              <p>
                If you are a consumer in the European Union or United Kingdom, nothing in these Terms affects your statutory rights that cannot be waived or limited by contract. You may also have the right to bring proceedings in your local courts.
              </p>
            </div>

            {/* General Provisions */}
            <div className="legal-section" id="general">
              <h2>18. General Provisions</h2>

              <h3>18.1 Entire Agreement</h3>
              <p>
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and StepMode regarding the Service and supersede all prior agreements and understandings.
              </p>

              <h3>18.2 Severability</h3>
              <p>
                If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.
              </p>

              <h3>18.3 Waiver</h3>
              <p>
                Our failure to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision. Any waiver must be in writing and signed by us.
              </p>

              <h3>18.4 Assignment</h3>
              <p>
                You may not assign or transfer your rights or obligations under these Terms without our prior written consent. We may assign our rights and obligations without restriction.
              </p>

              <h3>18.5 No Third-Party Beneficiaries</h3>
              <p>
                These Terms do not create any third-party beneficiary rights, except that our affiliates are intended third-party beneficiaries of these Terms.
              </p>

              <h3>18.6 Force Majeure</h3>
              <p>
                We shall not be liable for any delay or failure to perform resulting from causes outside our reasonable control, including but not limited to natural disasters, war, terrorism, pandemics, labour disputes, government actions, or internet/infrastructure failures.
              </p>

              <h3>18.7 Notices</h3>
              <p>
                We may provide notices to you via email, in-app notifications, or by posting on the Service. You may provide notices to us by emailing <a href="mailto:support@stepmode.app">support@stepmode.app</a>.
              </p>

              <h3>18.8 Language</h3>
              <p>
                These Terms are written in English. If translated into another language, the English version shall prevail in case of conflict.
              </p>
            </div>

            {/* Contact Us */}
            <div className="legal-section" id="contact">
              <h2>19. Contact Us</h2>
              <p>
                If you have any questions, concerns, or feedback regarding these Terms of Service, please contact us:
              </p>
              <div className="contact-box">
                <p><strong>STEPPAs TECHNOLOGIES LTD</strong></p>
                <p>Registered in England and Wales</p>
                <p>Email: <a href="mailto:support@stepmode.app">support@stepmode.app</a></p>
              </div>
              <p>
                We aim to respond to all inquiries within 14 business days.
              </p>
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
              <Link href="/about" className="footer-link">About</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
              <Link href="/privacy" className="footer-link">Privacy</Link>
            </div>
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
          .quick-links {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
