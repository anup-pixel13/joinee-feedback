import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import '../component_css/FooterComponent.css';

function FooterComponent() {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="feedback-footer">
      <div className="footer-content">
        <div className="container">
          <div className="row align-items-center">
            
            {/* Company Info */}
            <div className="col-12 col-md-4 text-center text-md-start mb-3 mb-md-0">
              <div className="footer-brand">
                <i className="fas fa-building brand-icon-footer"></i>
                <div className="footer-brand-text">
                  <h5 className="company-name">Amii Business Support Solutions</h5>
                  <p className="company-tagline">Pvt. Ltd.</p>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
              <div className="copyright">
                <p className="mb-1">
                  <i className="far fa-copyright me-1"></i>
                  {new Date().getFullYear()} All rights reserved
                </p>
                <p className="made-with mb-0">
                  Made with <i className="fas fa-heart heart-icon"></i> in India
                </p>
              </div>
            </div>

            {/* Quick Links & Social */}
            <div className="col-12 col-md-4 text-center text-md-end">
              <div className="footer-links">
                <a 
                  href="/about" 
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/about');
                  }}
                >
                  <i className="fas fa-info-circle me-1"></i>
                  About
                </a>
                <a 
                  href="/privacypolicy" 
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/privacypolicy');
                  }}
                >
                  <i className="fas fa-shield-alt me-1"></i>
                  Privacy
                </a>
                <a 
                  href="/contactus" 
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/contactus');
                  }}
                >
                  <i className="fas fa-envelope me-1"></i>
                  Contact
                </a>
              </div>
              
              {/* Social Media Icons */}
              <div className="social-links mt-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        className="back-to-top" 
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i className="fas fa-chevron-up"></i>
      </button>

      {/* Footer Wave Decoration */}
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </footer>
  );
}

export default FooterComponent;