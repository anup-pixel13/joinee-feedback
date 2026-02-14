import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getFeedbackById } from '../services/FeedbackService';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../component_css/FeedbackFormComponentPop.css';

function FeedbackFormComponentPop() {
  const { id } = useParams();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin_feedbacks_view', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const [feedback_datas, setData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    qualification: "",
    joiningSmooth: "",
    induction: "",
    pantryCondition: "",
    equipmentCondition: "",
    atmosphere: "",
    findUs: "",
    teamWork: "",
    passTime: "",
    recommendation: "",
	createdAt: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getFeedbackById(id)
        .then((response) => {
          setData({
            firstName: response.data.first_name,
            lastName: response.data.last_name,
            emailId: response.data.email_id,
            qualification: response.data.qualification,
            joiningSmooth: response.data.joining_smooth,
            induction: response.data.induction,
            pantryCondition: response.data.pantry_condition,
            equipmentCondition: response.data.equipment_condition,
            atmosphere: response.data.atmosphere,
            findUs: response.data.find_us,
            teamWork: response.data.team_work,
            passTime: response.data.pass_time,
            recommendation: response.data.recommendation,
			createdAt: response.data.createdAt,
          });
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  }, [id]);

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
    <div className="view-feedback-container">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="view-feedback-card">
              <div className="view-feedback-header">
                <h2 className="view-feedback-title">
                  <i className="fas fa-file-alt me-2"></i>
                  View Submitted Feedback
                </h2>
                <button 
                  className="btn-back" 
                  onClick={() => navigate('/feedbacks_view')}
                  title="Back to list"
                >
                  <i className="fas fa-arrow-left me-2"></i>
                  Back
                </button>
              </div>

              <div className="view-feedback-body">
                <form>
                  {/* Personal Information Section */}
                  <div className="section-header">
                    <i className="fas fa-user me-2"></i>
                    Personal Information
                  </div>

                  {/* First Name & Last Name */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <div className="readonly-field">
                          <i className="fas fa-user field-icon"></i>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="form-control"
                            value={feedback_datas.firstName}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <div className="readonly-field">
                          <i className="fas fa-user field-icon"></i>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="form-control"
                            value={feedback_datas.lastName}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email ID */}
                  <div className="form-group mb-3">
                    <label htmlFor="emailId" className="form-label">Email ID</label>
                    <div className="readonly-field">
                      <i className="fas fa-envelope field-icon"></i>
                      <input
                        type="email"
                        id="emailId"
                        name="emailId"
                        className="form-control"
                        value={feedback_datas.emailId}
                        readOnly
                      />
                    </div>
                  </div>

                  {/* Qualification */}
                  <div className="form-group mb-4">
                    <label htmlFor="qualification" className="form-label">Highest Qualification</label>
                    <div className="readonly-field">
                      <i className="fas fa-graduation-cap field-icon"></i>
                      <input
                        type="text"
                        id="qualification"
                        name="qualification"
                        className="form-control"
                        value={feedback_datas.qualification}
                        readOnly
                      />
                    </div>
                  </div>

                  {/* Onboarding Section */}
                  <div className="section-header">
                    <i className="fas fa-door-open me-2"></i>
                    Onboarding Experience
                  </div>

                  {/* Joining Smooth */}
                  <div className="form-group mb-3">
                    <label className="form-label">Was joining and onboarding smooth?</label>
                    <div className="readonly-radio-group">
                      <div className="readonly-radio-item">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="joiningSmooth"
                          id="joiningSmoothYes"
                          value="Yes"
                          checked={feedback_datas.joiningSmooth === "Yes"}
                          readOnly
                          disabled
                        />
                        <label className="form-check-label" htmlFor="joiningSmoothYes">
                          Yes
                        </label>
                      </div>
                      <div className="readonly-radio-item">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="joiningSmooth"
                          id="joiningSmoothNo"
                          value="No"
                          checked={feedback_datas.joiningSmooth === "No"}
                          readOnly
                          disabled
                        />
                        <label className="form-check-label" htmlFor="joiningSmoothNo">
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Induction */}
                  <div className="form-group mb-4">
                    <label htmlFor="induction" className="form-label">How was induction?</label>
                    <div className="readonly-field">
                      <i className="fas fa-comments field-icon"></i>
                      <input
                        type="text"
                        id="induction"
                        name="induction"
                        className="form-control"
                        value={feedback_datas.induction}
                        readOnly
                      />
                    </div>
                  </div>

                  {/* Facilities Section */}
                  <div className="section-header">
                    <i className="fas fa-building me-2"></i>
                    Facilities & Equipment
                  </div>

                  {/* Pantry Condition */}
                  <div className="form-group mb-3">
                    <label className="form-label">Is condition of pantry room and amenities great?</label>
                    <div className="readonly-radio-group">
                      <div className="readonly-radio-item">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="pantryCondition"
                          id="pantryConditionYes"
                          value="Yes"
                          checked={feedback_datas.pantryCondition === "Yes"}
                          readOnly
                          disabled
                        />
                        <label className="form-check-label" htmlFor="pantryConditionYes">
                          Yes
                        </label>
                      </div>
                      <div className="readonly-radio-item">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="pantryCondition"
                          id="pantryConditionNo"
                          value="No"
                          checked={feedback_datas.pantryCondition === "No"}
                          readOnly
                          disabled
                        />
                        <label className="form-check-label" htmlFor="pantryConditionNo">
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Equipment Condition */}
                  <div className="form-group mb-3">
                    <label htmlFor="equipmentCondition" className="form-label">How is condition of equipments?</label>
                    <div className="readonly-field">
                      <i className="fas fa-desktop field-icon"></i>
                      <input
                        type="text"
                        id="equipmentCondition"
                        name="equipmentCondition"
                        className="form-control"
                        value={feedback_datas.equipmentCondition}
                        readOnly
                      />
                    </div>
                  </div>

                  {/* Atmosphere */}
                  <div className="form-group mb-4">
                    <label htmlFor="atmosphere" className="form-label">How is atmosphere on floor?</label>
                    <div className="readonly-field">
                      <i className="fas fa-smile field-icon"></i>
                      <input
                        type="text"
                        id="atmosphere"
                        name="atmosphere"
                        className="form-control"
                        value={feedback_datas.atmosphere}
                        readOnly
                      />
                    </div>
                  </div>

                  {/* Additional Information Section */}
                  <div className="section-header">
                    <i className="fas fa-info-circle me-2"></i>
                    Additional Information
                  </div>

                  {/* Find Us */}
                  <div className="form-group mb-3">
                    <label htmlFor="findUs" className="form-label">How did you find about us?</label>
                    <div className="readonly-field">
                      <i className="fas fa-search field-icon"></i>
                      <input
                        type="text"
                        id="findUs"
                        name="findUs"
                        className="form-control"
                        value={feedback_datas.findUs}
                        readOnly
                      />
                    </div>
                  </div>

                  {/* Team Work */}
                  <div className="form-group mb-3">
                    <label className="form-label">Do you enjoy working in teams?</label>
                    <div className="readonly-radio-group">
                      <div className="readonly-radio-item">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="teamWork"
                          id="teamWorkYes"
                          value="Yes"
                          checked={feedback_datas.teamWork === "Yes"}
                          readOnly
                          disabled
                        />
                        <label className="form-check-label" htmlFor="teamWorkYes">
                          Yes
                        </label>
                      </div>
                      <div className="readonly-radio-item">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="teamWork"
                          id="teamWorkNo"
                          value="No"
                          checked={feedback_datas.teamWork === "No"}
                          readOnly
                          disabled
                        />
                        <label className="form-check-label" htmlFor="teamWorkNo">
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Pass Time */}
                  <div className="form-group mb-3">
                    <label htmlFor="passTime" className="form-label">What is your favourite pass time?</label>
                    <div className="readonly-field">
                      <i className="fas fa-gamepad field-icon"></i>
                      <input
                        type="text"
                        id="passTime"
                        name="passTime"
                        className="form-control"
                        value={feedback_datas.passTime}
                        readOnly
                      />
                    </div>
                  </div>

                  {/* Recommendation */}
                  <div className="form-group mb-4">
                    <label htmlFor="recommendation" className="form-label">
                      How would you rate us and recommend us to your friends?
                    </label>
                    <div className="readonly-field">
                      <i className="fas fa-star field-icon"></i>
                      <input
                        type="text"
                        className="form-control"
                        value={feedback_datas.recommendation.replace(/_/g, ' ')}
                        readOnly
                      />
                    </div>
                  </div>
				  
				  <div className="form-group mb-3">
				  				    <label htmlFor="createdAt" className="form-label">
				  				      Created At <span className="required">*</span>
				  				    </label>
				  				    <input
				  				      type="datetime-local"
				  				      id="createdAt"
				  				      name="createdAt"
				  				      className="form-control"
				  				      value={feedback_datas.createdAt}
				  				      readOnly
				  				    />
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

export default FeedbackFormComponentPop;