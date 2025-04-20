// components/LoginPage.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full bg-white rounded-lg shadow-xl flex">
        <div className="flex-1 p-12">
          <div className="mb-10 flex items-center">
            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xl mr-3">
              MK
            </div>
            <span className="font-semibold text-2xl text-gray-800">Memory Keeper</span>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome Back</h1>
          <p className="text-gray-500 mb-8">Sign in to continue to your memories</p>

          {error && (
            <div className="bg-red-100 text-red-700 p-4 rounded mb-4">{error}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-end mb-6">
              <Link to="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={isLoading}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-8 text-center text-gray-500">
            Don't have an account?{' '}
            <Link to="/signup" className="text-indigo-600 font-semibold hover:text-indigo-700">
              Sign up
            </Link>
          </div>
        </div>

        <div className="flex-1 bg-indigo-600 text-white p-12 flex items-center justify-center">
          <div className="max-w-sm text-center">
            <h2 className="text-3xl font-bold mb-4">Preserve Your Love Story</h2>
            <p className="text-lg mb-6">Create a beautiful digital scrapbook of your relationship with AI-powered organization and private sharing.</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-xl">📸</span>
                <span className="ml-2">Smart Photo Organization</span>
              </div>
              <div className="flex items-center">
                <span className="text-xl">💌</span>
                <span className="ml-2">Love Notes & Messages</span>
              </div>
              <div className="flex items-center">
                <span className="text-xl">🧡</span>
                <span className="ml-2">Shared Bucket List</span>
              </div>
              <div className="flex items-center">
                <span className="text-xl">🔒</span>
                <span className="ml-2">Private & Secure</span>
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white opacity-50"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-white opacity-50"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
