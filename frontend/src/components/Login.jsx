import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for routing

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      setMessage('Login Successful!');
      console.log(res.data); // You can use this data later
    } catch (err) {
      setMessage('Invalid credentials');
    }
  };

  return (
    <div className="login-page min-h-screen flex items-center justify-center bg-gray-50 py-8 px-4">
      <div className="login-container flex w-full max-w-4xl bg-white rounded-xl shadow-md overflow-hidden">
        {/* Left Container (Login Form) */}
        <div className="login-form-container flex-1 p-12">
          <div className="logo-container mb-8">
            <div className="logo flex items-center text-gray-800 font-bold text-xl">
              <div className="logo-circle w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold mr-3">
                M
              </div>
              Memory Keeper
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back</h1>
          <p className="subtitle text-gray-600 mb-6">Sign in to continue to your memories</p>

          <form onSubmit={handleSubmit} className="login-form space-y-6">
            <div className="form-group space-y-2">
              <label className="text-gray-800 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group space-y-2">
              <label className="text-gray-800 font-medium">Password</label>
              <input
                type="password"
                name="password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="forgot-password flex justify-end mb-4">
              <a href="#" className="text-sm text-purple-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Sign In
            </button>

            <p className="signup-link text-center text-gray-600 mt-4 text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="text-purple-600 font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </form>

          {message && <p className="error-message text-center text-red-500 mt-4">{message}</p>}
        </div>

        {/* Right Container (Feature Section) */}
        <div className="login-feature-container hidden lg:block flex-1 bg-purple-600 text-white p-8 flex items-center justify-center relative">
          <div className="feature-content text-center max-w-sm">
            <h2 className="text-3xl font-bold mb-4">Memories at Your Fingertips</h2>
            <p className="text-lg mb-6 opacity-90">
              Discover, store, and cherish the best moments of your life, all in one place.
            </p>
            <ul className="feature-list grid grid-cols-2 gap-6 mb-8">
              <li className="feature-item flex items-center text-lg">
                <span className="feature-icon text-2xl mr-3">✔️</span> Easy Access to Your Memories
              </li>
              <li className="feature-item flex items-center text-lg">
                <span className="feature-icon text-2xl mr-3">✔️</span> Secure and Private
              </li>
            </ul>
            <div className="pagination-dots flex justify-center gap-2">
              <div className="dot w-2.5 h-2.5 bg-white rounded-full opacity-60"></div>
              <div className="dot w-2.5 h-2.5 bg-white rounded-full opacity-100"></div>
              <div className="dot w-2.5 h-2.5 bg-white rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
