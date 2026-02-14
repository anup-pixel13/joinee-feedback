import React, { useEffect } from 'react';
import '../component_css/aboutus.css';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title" data-aos="fade-down">
              About Us
            </h1>
            <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
              Empowering Businesses with Innovative Solutions
            </p>
            <div className="hero-divider" data-aos="zoom-in" data-aos-delay="400"></div>
          </div>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
              <div className="overview-image">
                <div className="image-wrapper">
                  <i className="fas fa-building company-icon"></i>
                  <div className="image-decoration decoration-1"></div>
                  <div className="image-decoration decoration-2"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="overview-content">
                <h2 className="section-title">
                  <span className="title-accent">Who</span> We Are
                </h2>
                <div className="title-underline"></div>
                <p className="section-text">
                  <strong>Amii Business Support Solutions Pvt. Ltd.</strong> is a forward-thinking company dedicated to providing top-notch business support services. We specialize in helping businesses streamline their operations, enhance productivity, and achieve sustainable growth.
                </p>
                <p className="section-text">
                  Our team of experienced professionals brings together expertise from various domains to deliver comprehensive solutions tailored to your unique business needs.
                </p>
                <div className="overview-stats">
                  <div className="stat-item">
                    <div className="stat-icon">
                      <i className="fas fa-users"></i>
                    </div>
                    <div className="stat-content">
                      <h3 className="stat-number">15+</h3>
                      <p className="stat-label">Happy Clients</p>
                    </div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-icon">
                      <i className="fas fa-project-diagram"></i>
                    </div>
                    <div className="stat-content">
                      <h3 className="stat-number">20+</h3>
                      <p className="stat-label">Projects Completed</p>
                    </div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-icon">
                      <i className="fas fa-award"></i>
                    </div>
                    <div className="stat-content">
                      <h3 className="stat-number">4+</h3>
                      <p className="stat-label">Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-up">
              <div className="mv-card mission-card">
                <div className="mv-icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3 className="mv-title">Our Mission</h3>
                <div className="mv-divider"></div>
                <p className="mv-text">
                  To empower businesses by providing innovative, reliable, and efficient support solutions that drive growth and success. We are committed to understanding our clients' unique challenges and delivering customized strategies that make a real difference.
                </p>
                <ul className="mv-list">
                  <li><i className="fas fa-check-circle"></i> Client-focused approach</li>
                  <li><i className="fas fa-check-circle"></i> Innovation-driven solutions</li>
                  <li><i className="fas fa-check-circle"></i> Sustainable business growth</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="mv-card vision-card">
                <div className="mv-icon">
                  <i className="fas fa-eye"></i>
                </div>
                <h3 className="mv-title">Our Vision</h3>
                <div className="mv-divider"></div>
                <p className="mv-text">
                  To be the leading business support partner recognized globally for excellence, innovation, and transformative impact. We envision a future where businesses of all sizes can access world-class support services that enable them to thrive in an ever-changing market.
                </p>
                <ul className="mv-list">
                  <li><i className="fas fa-check-circle"></i> Global recognition</li>
                  <li><i className="fas fa-check-circle"></i> Excellence in service</li>
                  <li><i className="fas fa-check-circle"></i> Transformative solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-down">
            <h2 className="section-title">
              Our <span className="title-accent">Core Values</span>
            </h2>
            <div className="title-underline mx-auto"></div>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4" data-aos="flip-left">
              <div className="value-card">
                <div className="value-icon">
                  <span className="emoji">🌟</span>
                  <i className="fas fa-users"></i>
                </div>
                <h3 className="value-title">Team Spirit</h3>
                <p className="value-text">
                  Together, we achieve greatness. Our team is the heart of ABSS, working collaboratively to deliver exceptional results.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4" data-aos="flip-left" data-aos-delay="100">
              <div className="value-card">
                <div className="value-icon">
                  <span className="emoji">🔥</span>
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3 className="value-title">Innovation</h3>
                <p className="value-text">
                  We thrive on finding fresh solutions to complex challenges, constantly pushing boundaries to stay ahead.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4" data-aos="flip-left" data-aos-delay="200">
              <div className="value-card">
                <div className="value-icon">
                  <span className="emoji">📈</span>
                  <i className="fas fa-check-circle"></i>
                </div>
                <h3 className="value-title">Excellence</h3>
                <p className="value-text">
                  Our commitment to quality fuels our clients' growth and success. We never settle for anything less than the best.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4" data-aos="flip-left" data-aos-delay="300">
              <div className="value-card">
                <div className="value-icon">
                  <span className="emoji">🤝</span>
                  <i className="fas fa-handshake"></i>
                </div>
                <h3 className="value-title">Integrity</h3>
                <p className="value-text">
                  We build trust through transparency, honesty, and ethical business practices in every interaction.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4" data-aos="flip-left" data-aos-delay="400">
              <div className="value-card">
                <div className="value-icon">
                  <span className="emoji">💡</span>
                  <i className="fas fa-brain"></i>
                </div>
                <h3 className="value-title">Creativity</h3>
                <p className="value-text">
                  We embrace creative thinking and innovative approaches to solve problems and deliver unique solutions.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4" data-aos="flip-left" data-aos-delay="500">
              <div className="value-card">
                <div className="value-icon">
                  <span className="emoji">🎯</span>
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3 className="value-title">Customer Focus</h3>
                <p className="value-text">
                  Your success is our priority. We listen, understand, and deliver solutions that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content" data-aos="zoom-in">
            <h2 className="cta-title">Ready to Transform Your Business?</h2>
            <p className="cta-text">
              Let's work together to achieve your business goals. Get in touch with us today!
            </p>
			<div className="back-button-wrapper">
			  <button 
			    className="back-btn"
			    onClick={() => window.history.back()}
			  >
			    <i className="fas fa-arrow-left me-2"></i>
			    Go Back
			  </button>
			  </div>
           {/* <div className="cta-buttons">
              <button 
                className="cta-btn btn-primary"
                onClick={() => window.location.href = '/'}
              >
                <i className="fas fa-home me-2"></i>
                Back to Home
              </button>
       {/*       <button 
                className="cta-btn btn-secondary"
                onClick={() => window.location.href = '/'}
              >
                <i className="fas fa-envelope me-2"></i>
                Contact Us
              </button>
            </div>*/}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;