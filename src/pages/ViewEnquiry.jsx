import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getContactById } from '../services/ContactService';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../component_css/ViewEnquiry.css';

function ViewEnquiry() {
  const { cid } = useParams();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/enquiries_view', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const [contact_data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    createdAt: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (cid) {
    //  console.log('Contact ID (cid):', cid); // ✅ Check if cid is received
      
      getContactById(cid)
        .then((response) => {
       //   console.log('API Response:', response); // ✅ Check full response
        //  console.log('Response Data:', response.data); // ✅ Check response.data
          
          setData({
            name: response.data.name,
            email: response.data.email,
            phoneNumber: response.data.phoneNumber,
            message: response.data.message,
            createdAt: response.data.createdAt,
          });
          
   /*       console.log('Contact Data Set:', { // ✅ Verify what's being set
            name: response.data.name,
            email: response.data.email,
            phoneNumber: response.data.phoneNumber,
            message: response.data.message,
            createdAt: response.data.createdAt,
          });*/
          
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching contact:', error); // ✅ Check errors
          console.error('Error details:', error.response); // ✅ More error info
          setLoading(false);
        });
    } else {
      //console.log('No cid provided'); // ✅ Check if cid is missing
    }
  }, [cid]);

  if (!isAuthenticated) {
    return null;
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="view-enquiry-container">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="view-enquiry-card">
              <div className="view-enquiry-header">
                <h2 className="view-enquiry-title">
                  <i className="fas fa-envelope-open-text me-2"></i>
                  View Contact Enquiry
                </h2>
                <button 
                  className="btn-back" 
                  onClick={() => navigate('/enquiry_view')}
                  title="Back to list"
                >
                  <i className="fas fa-arrow-left me-2"></i>
                  Back
                </button>
              </div>

              <div className="view-enquiry-body">
                <form>
                  {/* Contact Information Section */}
                  <div className="section-header">
                    <i className="fas fa-user me-2"></i>
                    Contact Information
                  </div>

                  {/* Name */}
                  <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <div className="readonly-field">
                      <i className="fas fa-user field-icon"></i>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={contact_data.name}
                        readOnly
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="form-group mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <div className="readonly-field">
                      <i className="fas fa-envelope field-icon"></i>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={contact_data.email}
                        readOnly
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="form-group mb-4">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                    <div className="readonly-field">
                      <i className="fas fa-phone field-icon"></i>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="form-control"
                        value={contact_data.phoneNumber}
                        readOnly
                      />
                    </div>
                  </div>

                  {/* Message Section */}
                  <div className="section-header">
                    <i className="fas fa-comment-dots me-2"></i>
                    Message Details
                  </div>

                  {/* Message */}
                  <div className="form-group mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <div className="readonly-field">
                      <i className="fas fa-comment-alt field-icon"></i>
                      <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        value={contact_data.message}
                        readOnly
                        rows="8"
                      />
                    </div>
                  </div>

                  {/* Created At */}
                  <div className="form-group mb-3">
                    <label htmlFor="createdAt" className="form-label">
                      <i className="fas fa-calendar-alt me-2"></i>
                      Submitted On
                    </label>
                    <div className="readonly-field">
                      <i className="fas fa-clock field-icon"></i>
                      <input
                        type="text"
                        id="createdAt"
                        name="createdAt"
                        className="form-control"
                        value={contact_data.createdAt}
                        readOnly
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="action-buttons">
                    <button 
                      type="button"
                      className="btn-action btn-email"
                      onClick={() => window.location.href = `mailto:${contact_data.email}`}
                    >
                      <i className="fas fa-reply me-2"></i>
                      Reply via Email
                    </button>
                    <button 
                      type="button"
                      className="btn-action btn-call"
                      onClick={() => window.location.href = `tel:${contact_data.phoneNumber}`}
                    >
                      <i className="fas fa-phone me-2"></i>
                      Call Now
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewEnquiry;