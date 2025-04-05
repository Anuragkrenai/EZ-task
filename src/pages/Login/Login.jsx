import React, { useEffect } from 'react';
import './Login.css';

const Login = () => {
  useEffect(() => {
    // Add overflow hidden to body when modal is open
    document.body.style.overflow = 'hidden';
    
    // Cleanup function to restore overflow when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="login-modal-overlay">
      <div className="login-modal">
        <button className="close-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        {/* Left Side - Image */}
        <div className="login-modal-image">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3"
            alt="office workspace"
          />
          <div className="image-overlay">
            <div className="overlay-content">
              <h2>Welcome to EZ-Task</h2>
              <p>Your productivity solution for managing tasks efficiently</p>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="login-modal-form">
          <div className="form-container">
            <h2>Sign In to Your Account</h2>
            <p className="subtitle">Enter your credentials to access your account</p>

            <form className="login-form">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                />
              </div>

              <div className="form-options">
                <div className="remember-me">
                  <input
                    type="checkbox"
                    id="remember"
                    className="checkbox"
                  />
                  <label htmlFor="remember">Remember me</label>
                </div>

                <a href="#" className="forgot-password">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="login-button"
              >
                Sign in
              </button>
            </form>

            <div className="social-login">
              <p>Or continue with</p>
              <div className="social-buttons">
                <button className="social-button">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" />
                </button>
                <button className="social-button">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" />
                </button>
                <button className="social-button">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" alt="Apple" />
                </button>
              </div>
            </div>

            <p className="signup-link">
              Don't have an account?{' '}
              <a href="#">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;