import React, { useEffect } from 'react';
import '../component_css/privacy.css';

function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Privacy Policy</h1>
            <p className="hero-subtitle">Your privacy is important to us</p>
            <div className="hero-divider"></div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="privacy-content">
        <div className="container">
          <div className="content-wrapper">
            
            {/* Last Updated */}
            <div className="updated-date">
              <i className="fas fa-calendar-alt me-2"></i>
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>

            {/* Introduction */}
            <div className="privacy-section">
              <h2 className="section-title">
                <i className="fas fa-info-circle me-2"></i>
                Introduction
              </h2>
              <p className="section-text">
                Welcome to Amii Business Support Solutions Pvt. Ltd. ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="privacy-section">
              <h2 className="section-title">
                <i className="fas fa-database me-2"></i>
                Information We Collect
              </h2>
              <p className="section-text">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="privacy-list">
                <li><i className="fas fa-check-circle"></i> Name and contact information (email, phone number)</li>
                <li><i className="fas fa-check-circle"></i> Company or organization details</li>
                <li><i className="fas fa-check-circle"></i> Feedback and survey responses</li>
                <li><i className="fas fa-check-circle"></i> Communication preferences</li>
                <li><i className="fas fa-check-circle"></i> Any other information you choose to provide</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="privacy-section">
              <h2 className="section-title">
                <i className="fas fa-cogs me-2"></i>
                How We Use Your Information
              </h2>
              <p className="section-text">
                We use the information we collect to:
              </p>
              <ul className="privacy-list">
                <li><i className="fas fa-arrow-right"></i> Provide and improve our services</li>
                <li><i className="fas fa-arrow-right"></i> Respond to your inquiries and support requests</li>
                <li><i className="fas fa-arrow-right"></i> Send you updates, newsletters, and marketing communications</li>
                <li><i className="fas fa-arrow-right"></i> Analyze usage patterns and enhance user experience</li>
                <li><i className="fas fa-arrow-right"></i> Comply with legal obligations and protect our rights</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="privacy-section">
              <h2 className="section-title">
                <i className="fas fa-share-alt me-2"></i>
                Information Sharing and Disclosure
              </h2>
              <p className="section-text">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="privacy-list">
                <li><i className="fas fa-shield-alt"></i> With your consent or at your direction</li>
                <li><i className="fas fa-shield-alt"></i> With service providers who assist us in operating our business</li>
                <li><i className="fas fa-shield-alt"></i> To comply with legal requirements or respond to lawful requests</li>
                <li><i className="fas fa-shield-alt"></i> To protect our rights, privacy, safety, or property</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="privacy-section">
              <h2 className="section-title">
                <i className="fas fa-lock me-2"></i>
                Data Security
              </h2>
              <p className="section-text">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </div>

            {/* Your Rights */}
            <div className="privacy-section">
              <h2 className="section-title">
                <i className="fas fa-user-shield me-2"></i>
                Your Rights
              </h2>
              <p className="section-text">
                You have the right to:
              </p>
              <ul className="privacy-list">
                <li><i className="fas fa-star"></i> Access and review your personal information</li>
                <li><i className="fas fa-star"></i> Request correction of inaccurate data</li>
                <li><i className="fas fa-star"></i> Request deletion of your personal information</li>
                <li><i className="fas fa-star"></i> Opt-out of marketing communications</li>
                <li><i className="fas fa-star"></i> Withdraw consent where applicable</li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="privacy-section">
              <h2 className="section-title">
                <i className="fas fa-cookie-bite me-2"></i>
                Cookies and Tracking
              </h2>
              <p className="section-text">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user preferences. You can control cookie settings through your browser preferences.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="privacy-section">
              <h2 className="section-title">
                <i className="fas fa-edit me-2"></i>
                Changes to This Privacy Policy
              </h2>
              <p className="section-text">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </div>

            {/* Contact Us */}
            <div className="privacy-section contact-section">
              <h2 className="section-title">
                <i className="fas fa-envelope me-2"></i>
                Contact Us
              </h2>
              <p className="section-text">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-building"></i>
                  <div>
                    <strong>Amii Business Support Solutions Pvt. Ltd.</strong>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <a href="mailto:info@amiibss.com">info@amiibss.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <a href="tel:+911234567890">+91 123 456 7890</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="back-button-wrapper">
              <button 
                className="back-btn"
                onClick={() => window.history.back()}
              >
                <i className="fas fa-arrow-left me-2"></i>
                Go Back
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Privacy;