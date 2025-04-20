// components/LoginPage.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to sign in');
      }

      // Check if the login was successful (no JWT handling in this case)
      if (data.success) {
        // Redirect to the dashboard if login is successful
        navigate('/dashboard');
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form-container">
          <div className="logo-container">
            <div className="logo">
              <div className="logo-circle">MK</div>
              <span>Memory Keeper</span>
            </div>
          </div>

          <h1>Welcome Back</h1>
          <p className="subtitle">Sign in to continue to your memories</p>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="forgot-password">
              <Link to="/forgot-password">Forgot password?</Link>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={isLoading}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div className="signup-link">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </div>

        <div className="login-feature-container">
          <div className="feature-content">
            <h2>Preserve Your Love Story</h2>
            <p>
              Create a beautiful digital scrapbook of your relationship with AI-powered organization
              and private sharing.
            </p>

            <div className="feature-list">
              <div className="feature-item">
                <span className="feature-icon">📸</span>
                <span>Smart Photo Organization</span>
              </div>

              <div className="feature-item">
                <span className="feature-icon">💌</span>
                <span>Love Notes & Messages</span>
              </div>

              <div className="feature-item">
                <span className="feature-icon">🧡</span>
                <span>Shared Bucket List</span>
              </div>

              <div className="feature-item">
                <span className="feature-icon">🔒</span>
                <span>Private & Secure</span>
              </div>
            </div>

            <div className="pagination-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
