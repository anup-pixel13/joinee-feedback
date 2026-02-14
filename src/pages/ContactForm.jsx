import React, { useState } from 'react';
import '../component_css/ContactForm.css';
import { useNavigate } from 'react-router-dom';
import { saveContact } from '../services/ContactService';

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phoneNumber: ''
  });
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const saveContactForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const contactData = {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        message: formData.message,
      };

      await saveContact(contactData);
      
      // Show success message
      setShowSuccess(true);
      setShowError(false);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
        phoneNumber: ''
      });
      
      // Hide success message and navigate after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        navigate('/');
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setShowError(true);
      setShowSuccess(false);
      
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Success Alert */}
        {showSuccess && (
          <div className="alert alert-success-custom" role="alert">
            <i className="fas fa-check-circle me-2"></i>
            Message sent successfully! Redirecting to home...
          </div>
        )}

        {/* Error Alert */}
        {showError && (
          <div className="alert alert-error-custom" role="alert">
            <i className="fas fa-exclamation-circle me-2"></i>
            Failed to send message. Please try again.
          </div>
        )}
        
        <div className="row contact-row">
          
          {/* Contact Form */}
          <div className="col-lg-7 mb-4 mb-lg-0">
            <div className="contact-form-wrapper">
              <h3 className="form-title">
                <i className="fas fa-paper-plane me-2"></i>
                Send A Message
              </h3>
              
              <form onSubmit={saveContactForm}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    <i className="fas fa-user me-2"></i>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control custom-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <i className="fas fa-envelope me-2"></i>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control custom-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phoneNumber" className="form-label">
                    <i className="fas fa-phone me-2"></i>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="form-control custom-input"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    <i className="fas fa-comment-dots me-2"></i>
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control custom-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us what's on your mind..."
                    rows="5"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="form-group">
                  <button 
                    className="btn btn-submit" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane me-2"></i>
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="col-lg-5">
            <div className="contact-info-wrapper">
              <h3 className="info-title">
                <i className="fas fa-map-marker-alt me-2"></i>
                Contact Information
              </h3>
              
              <div className="info-items">
                
                {/* Company Name */}
                <div className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-building"></i>
                  </div>
                  <div className="info-content">
                    <h4 className="info-label">Company</h4>
                    <p className="info-text">Amii Business Support Solutions Pvt. Ltd.</p>
                  </div>
                </div>

                {/* Address */}
                <div className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-map-marked-alt"></i>
                  </div>
                  <div className="info-content">
                    <h4 className="info-label">Address</h4>
                    <p className="info-text">
                      Tower No 4, 6th floor, 601<br />
                      Railway Station Complex, CBD Belapur<br />
                      Navi Mumbai, Maharashtra 400614, IN
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="info-content">
                    <h4 className="info-label">Email</h4>
                    <p className="info-text">
                      <a href="mailto:info@amiibss.com">info@amiibss.com</a>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="info-content">
                    <h4 className="info-label">Phone</h4>
                    <p className="info-text">
                      <a href="tel:+911234567890">+91 123 456 7890</a>
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="info-content">
                    <h4 className="info-label">Business Hours</h4>
                    <p className="info-text">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Links */}
              <div className="social-section">
                <h4 className="social-title">Follow Us</h4>
                <div className="social-links">
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
    </section>
  );
};

export default ContactForm;