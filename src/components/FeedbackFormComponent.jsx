import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createFeedback } from '../services/FeedbackService';
import { useNavigate } from 'react-router-dom';
import '../component_css/FeedbackFormComponent.css';

function FeedbackFormComponent() {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...feedback_datas,
      [name]: value
    });
  };

/*  const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };
  */
  
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
/*	createdAt:  getCurrentDateTime()
*/  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({
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
/*	createdAt: getCurrentDateTime()
*/  });

  function validateForm() {
    const errorsCopy = { ...errors };
    let valid = true;

    if (feedback_datas.firstName && feedback_datas.firstName.trim()) {
      errorsCopy.firstName = '';
    } else {
      errorsCopy.firstName = 'First Name is required';
      valid = false;
    }

    if (feedback_datas.lastName && feedback_datas.lastName.trim()) {
      errorsCopy.lastName = '';
    } else {
      errorsCopy.lastName = 'Last Name is required';
      valid = false;
    }

    if (feedback_datas.emailId && feedback_datas.emailId.trim()) {
      errorsCopy.emailId = '';
    } else {
      errorsCopy.emailId = 'Email ID is required';
      valid = false;
    }

    if (feedback_datas.qualification && feedback_datas.qualification.trim()) {
      errorsCopy.qualification = '';
    } else {
      errorsCopy.qualification = 'Qualification is required';
      valid = false;
    }

    if (feedback_datas.joiningSmooth) {
      errorsCopy.joiningSmooth = '';
    } else {
      errorsCopy.joiningSmooth = 'Please select an option';
      valid = false;
    }

    if (feedback_datas.induction && feedback_datas.induction.trim()) {
      errorsCopy.induction = '';
    } else {
      errorsCopy.induction = 'Induction feedback is required';
      valid = false;
    }

    if (feedback_datas.pantryCondition) {
      errorsCopy.pantryCondition = '';
    } else {
      errorsCopy.pantryCondition = 'Please select an option';
      valid = false;
    }

    if (feedback_datas.equipmentCondition && feedback_datas.equipmentCondition.trim()) {
      errorsCopy.equipmentCondition = '';
    } else {
      errorsCopy.equipmentCondition = 'Equipment condition is required';
      valid = false;
    }

    if (feedback_datas.atmosphere && feedback_datas.atmosphere.trim()) {
      errorsCopy.atmosphere = '';
    } else {
      errorsCopy.atmosphere = 'Atmosphere feedback is required';
      valid = false;
    }

    if (feedback_datas.findUs && feedback_datas.findUs.trim()) {
      errorsCopy.findUs = '';
    } else {
      errorsCopy.findUs = 'This field is required';
      valid = false;
    }

    if (feedback_datas.teamWork) {
      errorsCopy.teamWork = '';
    } else {
      errorsCopy.teamWork = 'Please select an option';
      valid = false;
    }

    if (feedback_datas.passTime && feedback_datas.passTime.trim()) {
      errorsCopy.passTime = '';
    } else {
      errorsCopy.passTime = 'Pass time is required';
      valid = false;
    }

    if (feedback_datas.recommendation) {
      errorsCopy.recommendation = '';
    } else {
      errorsCopy.recommendation = 'Please select a recommendation';
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  async function saveFeedback(e) {
    e.preventDefault();

    if (!validateForm(feedback_datas, setErrors)) {
      return;
    }

    const feedback_data = {
      first_name: feedback_datas.firstName,
      last_name: feedback_datas.lastName,
      email_id: feedback_datas.emailId,
      qualification: feedback_datas.qualification,
      joining_smooth: feedback_datas.joiningSmooth,
      induction: feedback_datas.induction,
      pantry_condition: feedback_datas.pantryCondition,
      equipment_condition: feedback_datas.equipmentCondition,
      atmosphere: feedback_datas.atmosphere,
      find_us: feedback_datas.findUs,
      team_work: feedback_datas.teamWork,
      pass_time: feedback_datas.passTime,
      recommendation: feedback_datas.recommendation
    };

    try {
      const res = await createFeedback(feedback_data);
      alert("Feedback submitted successfully!");
      setData({
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
        recommendation: ""
      });
      navigate("/");
    } catch (err) {
      if (err.response && err.response.status === 409) {
        alert("Feedback already submitted for this email!");
      } else {
        console.error("Error submitting feedback:", err);
        alert("Something went wrong. Please try again.");
      }
    }
  }

  function validateField(name, value) {
    let errorMsg = '';

    switch (name) {
      case 'firstName':
        if (!value.trim()) errorMsg = 'First Name is required';
        break;
      case 'lastName':
        if (!value.trim()) errorMsg = 'Last Name is required';
        break;
      case 'emailId':
        if (!value.trim()) errorMsg = 'Email ID is required';
        else if (!/\S+@\S+\.\S+/.test(value)) errorMsg = 'Invalid email format';
        break;
      case 'qualification':
        if (!value.trim()) errorMsg = 'Qualification is required';
        break;
      case 'joiningSmooth':
        if (!value) errorMsg = 'Please select an option';
        break;
      case 'induction':
        if (!value.trim()) errorMsg = 'Induction feedback is required';
        break;
      case 'pantryCondition':
        if (!value) errorMsg = 'Please select an option';
        break;
      case 'equipmentCondition':
        if (!value.trim()) errorMsg = 'Equipment condition is required';
        break;
      case 'atmosphere':
        if (!value.trim()) errorMsg = 'Atmosphere feedback is required';
        break;
      case 'findUs':
        if (!value.trim()) errorMsg = 'This field is required';
        break;
      case 'teamWork':
        if (!value) errorMsg = 'Please select an option';
        break;
      case 'passTime':
        if (!value.trim()) errorMsg = 'Pass time is required';
        break;
      case 'recommendation':
        if (!value) errorMsg = 'Please select a recommendation';
        break;
      default:
        break;
    }

    return errorMsg;
  }

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setData({ ...feedback_datas, [name]: value });
    const errorMsg = validateField(name, value);
    setErrors({ ...errors, [name]: errorMsg });
  };

  return (
    <div className="feedback-form-container">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="feedback-card">
              <div className="feedback-header">
                <h2 className="feedback-title">New Joinee Feedback Form</h2>
              </div>

              <div className="feedback-body">
                <form onSubmit={saveFeedback}>
                  {/* First Name & Last Name - Side by Side on Desktop */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label htmlFor="firstName" className="form-label">
                          First Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                          value={feedback_datas.firstName}
                          onChange={handleFieldChange}
                          placeholder="Enter first name"
                        />
                        {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label htmlFor="lastName" className="form-label">
                          Last Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                          value={feedback_datas.lastName}
                          onChange={handleFieldChange}
                          placeholder="Enter last name"
                        />
                        {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                      </div>
                    </div>
                  </div>

                  {/* Email ID */}
                  <div className="form-group mb-3">
                    <label htmlFor="emailId" className="form-label">
                      Email ID <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="emailId"
                      name="emailId"
                      className={`form-control ${errors.emailId ? 'is-invalid' : ''}`}
                      value={feedback_datas.emailId}
                      onChange={handleFieldChange}
                      placeholder="your.email@example.com"
                    />
                    {errors.emailId && <div className="invalid-feedback">{errors.emailId}</div>}
                  </div>

                  {/* Qualification */}
                  <div className="form-group mb-3">
                    <label htmlFor="qualification" className="form-label">
                      What is your highest qualification? <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="qualification"
                      name="qualification"
                      className={`form-control ${errors.qualification ? 'is-invalid' : ''}`}
                      value={feedback_datas.qualification}
                      onChange={handleFieldChange}
                      placeholder="e.g., Bachelor's, Master's, PhD"
                    />
                    {errors.qualification && <div className="invalid-feedback">{errors.qualification}</div>}
                  </div>

                  {/* Joining Smooth */}
                  <div className="form-group mb-4">
                    <label className="form-label">
                      Was joining and onboarding smooth? <span className="required">*</span>
                    </label>
                    <div className="radio-group">
                      <div className="form-check form-check-inline">
                        <input
                          className={`form-check-input ${errors.joiningSmooth ? 'is-invalid' : ''}`}
                          type="radio"
                          name="joiningSmooth"
                          id="joiningSmoothYes"
                          value="Yes"
                          checked={feedback_datas.joiningSmooth === "Yes"}
                          onChange={handleFieldChange}
                        />
                        <label className="form-check-label" htmlFor="joiningSmoothYes">
                          Yes
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className={`form-check-input ${errors.joiningSmooth ? 'is-invalid' : ''}`}
                          type="radio"
                          name="joiningSmooth"
                          id="joiningSmoothNo"
                          value="No"
                          checked={feedback_datas.joiningSmooth === "No"}
                          onChange={handleFieldChange}
                        />
                        <label className="form-check-label" htmlFor="joiningSmoothNo">
                          No
                        </label>
                      </div>
                    </div>
                    {errors.joiningSmooth && <div className="invalid-feedback d-block">{errors.joiningSmooth}</div>}
                  </div>

                  {/* Induction */}
                  <div className="form-group mb-3">
                    <label htmlFor="induction" className="form-label">
                      How was induction? <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="induction"
                      name="induction"
                      className={`form-control ${errors.induction ? 'is-invalid' : ''}`}
                      value={feedback_datas.induction}
                      onChange={handleFieldChange}
                      placeholder="Share your experience"
                    />
                    {errors.induction && <div className="invalid-feedback">{errors.induction}</div>}
                  </div>

                  {/* Pantry Condition */}
                  <div className="form-group mb-4">
                    <label className="form-label">
                      Is condition of pantry room and amenities great? <span className="required">*</span>
                    </label>
                    <div className="radio-group">
                      <div className="form-check form-check-inline">
                        <input
                          className={`form-check-input ${errors.pantryCondition ? 'is-invalid' : ''}`}
                          type="radio"
                          name="pantryCondition"
                          id="pantryConditionYes"
                          value="Yes"
                          checked={feedback_datas.pantryCondition === "Yes"}
                          onChange={handleFieldChange}
                        />
                        <label className="form-check-label" htmlFor="pantryConditionYes">
                          Yes
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className={`form-check-input ${errors.pantryCondition ? 'is-invalid' : ''}`}
                          type="radio"
                          name="pantryCondition"
                          id="pantryConditionNo"
                          value="No"
                          checked={feedback_datas.pantryCondition === "No"}
                          onChange={handleFieldChange}
                        />
                        <label className="form-check-label" htmlFor="pantryConditionNo">
                          No
                        </label>
                      </div>
                    </div>
                    {errors.pantryCondition && <div className="invalid-feedback d-block">{errors.pantryCondition}</div>}
                  </div>

                  {/* Equipment Condition */}
                  <div className="form-group mb-3">
                    <label htmlFor="equipmentCondition" className="form-label">
                      How is condition of equipments? <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="equipmentCondition"
                      name="equipmentCondition"
                      className={`form-control ${errors.equipmentCondition ? 'is-invalid' : ''}`}
                      value={feedback_datas.equipmentCondition}
                      onChange={handleFieldChange}
                      placeholder="Describe equipment condition"
                    />
                    {errors.equipmentCondition && <div className="invalid-feedback">{errors.equipmentCondition}</div>}
                  </div>

                  {/* Atmosphere */}
                  <div className="form-group mb-3">
                    <label htmlFor="atmosphere" className="form-label">
                      How is atmosphere on floor? <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="atmosphere"
                      name="atmosphere"
                      className={`form-control ${errors.atmosphere ? 'is-invalid' : ''}`}
                      value={feedback_datas.atmosphere}
                      onChange={handleFieldChange}
                      placeholder="Describe the atmosphere"
                    />
                    {errors.atmosphere && <div className="invalid-feedback">{errors.atmosphere}</div>}
                  </div>

                  {/* Find Us */}
                  <div className="form-group mb-3">
                    <label htmlFor="findUs" className="form-label">
                      How did you find about us? <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="findUs"
                      name="findUs"
                      className={`form-control ${errors.findUs ? 'is-invalid' : ''}`}
                      value={feedback_datas.findUs}
                      onChange={handleFieldChange}
                      placeholder="e.g., Job portal, referral, social media"
                    />
                    {errors.findUs && <div className="invalid-feedback">{errors.findUs}</div>}
                  </div>

                  {/* Team Work */}
                  <div className="form-group mb-4">
                    <label className="form-label">
                      Do you enjoy working in teams? <span className="required">*</span>
                    </label>
                    <div className="radio-group">
                      <div className="form-check form-check-inline">
                        <input
                          className={`form-check-input ${errors.teamWork ? 'is-invalid' : ''}`}
                          type="radio"
                          name="teamWork"
                          id="teamWorkYes"
                          value="Yes"
                          checked={feedback_datas.teamWork === "Yes"}
                          onChange={handleFieldChange}
                        />
                        <label className="form-check-label" htmlFor="teamWorkYes">
                          Yes
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className={`form-check-input ${errors.teamWork ? 'is-invalid' : ''}`}
                          type="radio"
                          name="teamWork"
                          id="teamWorkNo"
                          value="No"
                          checked={feedback_datas.teamWork === "No"}
                          onChange={handleFieldChange}
                        />
                        <label className="form-check-label" htmlFor="teamWorkNo">
                          No
                        </label>
                      </div>
                    </div>
                    {errors.teamWork && <div className="invalid-feedback d-block">{errors.teamWork}</div>}
                  </div>

                  {/* Pass Time */}
                  <div className="form-group mb-3">
                    <label htmlFor="passTime" className="form-label">
                      What is your favourite pass time? <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="passTime"
                      name="passTime"
                      className={`form-control ${errors.passTime ? 'is-invalid' : ''}`}
                      value={feedback_datas.passTime}
                      onChange={handleFieldChange}
                      placeholder="e.g., Reading, sports, music"
                    />
                    {errors.passTime && <div className="invalid-feedback">{errors.passTime}</div>}
                  </div>

                  {/* Recommendation */}
                  <div className="form-group mb-4">
                    <label htmlFor="recommendation" className="form-label">
                      How would you rate us and recommend us to your friends in perspective of job? <span className="required">*</span>
                    </label>
                    <select
                      id="recommendation"
                      name="recommendation"
                      className={`form-select ${errors.recommendation ? 'is-invalid' : ''}`}
                      value={feedback_datas.recommendation}
                      onChange={handleFieldChange}
                    >
                      <option value="">-- Select Rating --</option>
                      <option value="Not_at_all">Not at all</option>
                      <option value="Neutral">Neutral</option>
                      <option value="Recommend">Recommend</option>
                      <option value="Highly_Recommended">Highly Recommended</option>
                    </select>
                    {errors.recommendation && <div className="invalid-feedback">{errors.recommendation}</div>}
                  </div>
				  
				 {/* <div className="form-group mb-3">
				    <label htmlFor="createdAt" className="form-label">
				      Created At <span className="required">*</span>
				    </label>
				    <input
				      type="datetime-local"
				      id="createdAt"
				      name="createdAt"
				      className="form-control"
				      value={feedback_datas.createdAt}
				      onChange={(e) => setCurrentDateTime(e.target.value)}
				      required
				    />
				  </div>*/}

                  {/* Submit Button */}
                  <div className="form-group">
                    <button type="submit" className="btn btn-submit w-100">
                      <i className="fas fa-paper-plane me-2"></i>
                      Submit Feedback
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

export default FeedbackFormComponent;