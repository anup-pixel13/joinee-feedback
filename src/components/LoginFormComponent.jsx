import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { checkLogin } from "../services/FeedbackService";
import { useAuth } from "../context/AuthContext";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../component_css/LoginFormComponent.css';

const LoginFormComponent = () => {
  const [credentials, setCredentials] = useState({
    userName: "",
    password: ""
  });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  
  // ✅ Create refs for username field and login card
  const usernameRef = useRef(null);
  const loginCardRef = useRef(null);

  // ✅ Auto-focus and scroll into view on component mount
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Focus on username field
      if (usernameRef.current) {
        usernameRef.current.focus();
      }
      
      // Scroll the login card into center view
      if (loginCardRef.current) {
        loginCardRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center', // ✅ Center the element in viewport
          inline: 'center'
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    // Clear message when user starts typing
    if (message) {
      setMessage("");
      setMessageType("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    
    try {
      const res = await checkLogin(credentials);
      if (res.status === 200) {
        login();
        setMessage("Login successful! Redirecting...");
        setMessageType("success");
        setTimeout(() => {
          navigate("/feedbacks_view");
        }, 1000);
      } else {
        setMessage("Invalid username or password.");
        setMessageType("error");
        setCredentials({ userName: "", password: "" });
        setLoading(false);
        // ✅ Re-focus on username after error
        setTimeout(() => {
          if (usernameRef.current) {
            usernameRef.current.focus();
          }
        }, 100);
      }
    } catch (err) {
      console.error("Login error:", err);
      setMessage("Error logging in. Please try again.");
      setMessageType("error");
      setCredentials({ userName: "", password: "" });
      setLoading(false);
      // ✅ Re-focus on username after error
      setTimeout(() => {
        if (usernameRef.current) {
          usernameRef.current.focus();
        }
      }, 100);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
            <div className="login-card" ref={loginCardRef}> {/* ✅ Added ref */}
              {/* Login Icon/Logo */}
              <div className="login-icon-wrapper">
                <div className="login-icon">
                  <i className="fas fa-user-shield"></i>
                </div>
              </div>

              {/* Header */}
              <div className="login-header">
                <h2 className="login-title">Admin Login</h2>
                <p className="login-subtitle">Feedback and Enquiry Form Viewer</p>
              </div>

              {/* Body */}
              <div className="login-body">
                <form onSubmit={handleSubmit}>
                  {/* Username */}
                  <div className="form-group mb-3">
                    <label htmlFor="userName" className="form-label">
                      <i className="fas fa-user me-2"></i>
                      Username
                    </label>
					<div className="input-wrapper">
					  <i className="fas fa-user input-icon"></i>
					  <input
					    type="text"
					    id="userName"
					    name="userName"
					    value={credentials.userName}
					    onChange={handleChange}
					    required
					    className="form-control"
					    placeholder="Enter your username"
					    disabled={loading}
					    ref={usernameRef}
					    autoFocus
					  />
					</div>
					</div>
                  {/* Password */}
                  <div className="form-group mb-3">
                    <label htmlFor="password" className="form-label">
                      <i className="fas fa-lock me-2"></i>
                      Password
                    </label>
                    <div className="input-wrapper password-wrapper">
                      <i className="fas fa-lock input-icon"></i>
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                        className="form-control"
                        placeholder="Enter your password"
                        disabled={loading}
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={togglePasswordVisibility}
                        tabIndex="-1"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                      </button>
                    </div>
                  </div>

                  {/* Message Alert */}
                  {message && (
                    <div className={`alert-message ${messageType}`}>
                      <i className={`fas ${messageType === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} me-2`}></i>
                      {message}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="btn-login w-100"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Logging in...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-sign-in-alt me-2"></i>
                        Login
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Footer */}
              <div className="login-footer">
                <button 
                  className="btn-back-home"
                  onClick={() => navigate('/')}
                  type="button"
                >
                  <i className="fas fa-arrow-left me-2"></i>
                  Back to Home
                </button>
              </div>
            </div>

            {/* Security Note */}
            <div className="security-note">
              <i className="fas fa-shield-alt me-2"></i>
              Your credentials are secure and encrypted
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFormComponent;