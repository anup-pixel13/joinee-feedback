import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../component_css/HeaderComponent.css';

function HeaderComponent() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      bsCollapse.hide();
    }
  };

  const login_admin = () => {
    navigate("/admin_feedbacks_view");
    closeMenu();
  };

  const handleLogout = () => {
    logout();
    navigate('/admin_feedbacks_view', { replace: true });
    closeMenu();
  };

  const handleViewFeedbacks = () => {
    navigate('/feedbacks_view');
    closeMenu();
  };

  const handleHome = () => {
    navigate('/');
    closeMenu();
  };

  const handleviewEnquiries = () => {
	    navigate('/enquiry_view');
		        closeMenu();
				        };
  return (
    <header className="feedback-header">
      <nav className="navbar navbar-expand-lg feedback-navbar">
        <div className="container-fluid">
          {/* Brand Logo */}
          <a 
            className="navbar-brand brand-link" 
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleHome();
            }}
          >
            <div className="brand-content">
              <i className="fas fa-building brand-icon"></i>
              <div className="brand-text">
                <span className="brand-name">Amii Business Support Solutions</span>
                <span className="brand-tagline">Pvt. Ltd.</span>
              </div>
            </div>
          </a>

          {/* Mobile Toggle Button */}
          <button 
            className="navbar-toggler custom-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="toggler-icon">
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </span>
          </button>

          {/* Navigation Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              
              {/* Home Button - Show when not authenticated */}
              {!isAuthenticated && (
                <li className="nav-item">
                  <button 
                    className="nav-btn btn-home" 
                    onClick={handleHome}
                  >
                    <i className="fas fa-home me-2"></i>
                    <span>Home</span>
                  </button>
                </li>
              )}

              {/* About Link */}
        {     /* <li className="nav-item">
                <a 
                  className="nav-link custom-nav-link" 
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/about');
                    closeMenu();
                  }}
                >
                  <i className="fas fa-info-circle me-2"></i>
                  <span>About</span>
                </a>
              </li>
			*/  }

              {/* Login as Admin - Show when not authenticated */}
              {!isAuthenticated && (
                <li className="nav-item">
                  <button 
                    className="nav-btn btn-login" 
                    onClick={login_admin}
                  >
                    <i className="fas fa-user-shield me-2"></i>
                    <span>Admin Login</span>
                  </button>
                </li>
              )}

              {/* View Feedbacks - Show when authenticated */}
              {isAuthenticated && (
                <li className="nav-item">
                  <button 
                    className="nav-btn btn-view" 
                    onClick={handleViewFeedbacks}
                  >
                    <i className="fas fa-clipboard-list me-2"></i>
                    <span>View Feedbacks</span>
                  </button>
                </li>
              )}

			  {isAuthenticated && (
			          <li className="nav-item">
			            <button 
			              className="nav-btn btn-view" 
			              onClick={handleviewEnquiries}
			            >
			<i className="fas fa-envelope-open-text me-2"></i>
			              <span>View Enquiries</span>
			            </button>
			          </li>
			        )}
			  	
              {/* Logout - Show when authenticated */}
              {isAuthenticated && (
                <li className="nav-item">
                  <button 
                    className="nav-btn btn-logout" 
                    onClick={handleLogout}
                  >
                    <i className="fas fa-sign-out-alt me-2"></i>
                    <span>Logout</span>
                  </button>
                </li>
              )}

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HeaderComponent;