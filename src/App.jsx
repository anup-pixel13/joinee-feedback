import './App.css';
import HeaderComponent from './components/HeaderComponent';
import LoginFormComponent from './components/LoginFormComponent';
import FooterComponent from './components/FooterComponent';
import FeedbackFormComponent from './components/FeedbackFormComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewFeedbackComponent from './components/ViewFeedbackComponent';
import FeedbackFormComponentPop from './components/FeedbackFormComponentPop';
import ViewEnquiry from './pages/ViewEnquiry';
import ViewEnquiryComponent from './components/ViewEnquiryComponent';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import '@fortawesome/fontawesome-free/css/all.min.css';
import BothHandF from './layout/BothHandF';
import About from './pages/About';
import Privacy from './pages/Privacy';
import ContactForm from './pages/ContactForm';
import ScrollToTop from './components/ScrollToTop';
import {useLocation } from 'react-router-dom';
import { useEffect } from 'react';


function ScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <ScrollRestoration />
        <ScrollToTop />
        <AuthProvider>
          <Routes>
            {/* About Page - Public, always accessible */}
            <Route element={<BothHandF />}>
              <Route path='/about' element={<About />} />
            </Route>
            
            {/* Privacy Page - Public, always accessible */}
            <Route element={<BothHandF />}>
              <Route path='/privacypolicy' element={<Privacy />} />
            </Route>
            
            {/* Contact Page - Redirect to feedbacks_view if authenticated */}
            <Route element={<BothHandF />}>
              <Route 
                path='/contactus' 
                element={
                  <PublicRoute>
                    <ContactForm />
                  </PublicRoute>
                } 
              />
            </Route>

            {/* All other routes - Header and Footer rendered once */}
            <Route path='/*' element={
              <>
                <HeaderComponent />
                <main className="flex-grow-1">
                  <Routes>
                    {/* Public Routes */}
                    <Route 
                      path='/' 
                      element={
                        <PublicRoute>
                          <FeedbackFormComponent />
                        </PublicRoute>
                      } 
                    />
                    <Route 
                      path='/admin_feedbacks_view' 
                      element={
                        <PublicRoute>
                          <LoginFormComponent />
                        </PublicRoute>
                      } 
                    />
                    
                    {/* Protected Routes */}
                    <Route 
                      path='/feedbacks_view' 
                      element={
                        <ProtectedRoute>
                          <ViewFeedbackComponent />
                        </ProtectedRoute>
                      } 
                    />
                    
                    {/* ✅ FIXED: Remove BothHandF wrapper */}
                    <Route 
                      path='/enquiry_details/:cid' 
                      element={
                        <ProtectedRoute>
                          <ViewEnquiry />
                        </ProtectedRoute>
                      } 
                    />
                    
                    <Route 
                      path='/enquiry_view' 
                      element={
                        <ProtectedRoute>
                          <ViewEnquiryComponent />
                        </ProtectedRoute>
                      } 
                    />
                    
                    <Route 
                      path='/viewFeedback/:id' 
                      element={
                        <ProtectedRoute>
                          <FeedbackFormComponentPop />
                        </ProtectedRoute>
                      } 
                    />
                  </Routes>
                </main>
                <FooterComponent />
              </>
            } />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;