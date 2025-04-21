import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
  
    if (!fullName || !email || !password) {
      setError("Please fill all the fields");
      setIsLoading(false);
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      body: JSON.stringify({
          name: fullName,
          email,
          password,
        }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }
  
      // On success
      navigate('/login');
    } catch (err) {
      console.error('Registration error:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <div className="flex w-full max-w-6xl min-h-[600px] bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Left Side - Signup Form */}
        <div className="flex-1 p-12 flex flex-col overflow-y-auto">
          <div className="mb-8">
            <Link to="/" className="flex items-center text-gray-800 text-xl font-bold">
              <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold mr-3">
                MK
              </div>
              Memory Keeper
            </Link>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Your Account</h1>
          <p className="text-gray-500 mb-6">Start preserving your precious moments together</p>

          {error && <div className="bg-red-100 text-red-600 p-3 rounded-md mb-4">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col space-y-2">
              <label htmlFor="fullName" className="text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-gray-700 font-medium">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="password" className="text-gray-700 font-medium">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="confirmPassword" className="text-gray-700 font-medium">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="agreeTerms"
                checked={agreeToTerms}
                onChange={() => setAgreeToTerms(!agreeToTerms)}
                className="h-4 w-4"
              />
              <label htmlFor="agreeTerms" className="text-sm text-gray-600">
                I agree to the <Link to="/terms" className="text-indigo-600">Terms of Service</Link> and <Link to="/privacy" className="text-indigo-600">Privacy Policy</Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full p-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none disabled:bg-indigo-200"
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account? <Link to="/login" className="text-indigo-600 font-semibold">Sign in</Link>
          </div>
        </div>

        {/* Right Side - Features */}
        <div className="flex-1 bg-indigo-600 text-white p-12 flex items-center justify-center">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold mb-6">Join Thousands of Happy Couples</h2>
            <p className="text-lg mb-8 opacity-90">Create your digital love story with smart organization and private sharing.</p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="w-12 h-12 bg-white text-indigo-600 rounded-full flex items-center justify-center text-xl">🎯</span>
                <div>
                  <h3 className="text-xl font-semibold">Smart Organization</h3>
                  <p className="text-sm opacity-80">AI-powered sorting and tagging of your memories</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-12 h-12 bg-white text-indigo-600 rounded-full flex items-center justify-center text-xl">🔒</span>
                <div>
                  <h3 className="text-xl font-semibold">Private & Secure</h3>
                  <p className="text-sm opacity-80">End-to-end encryption for complete privacy</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-12 h-12 bg-white text-indigo-600 rounded-full flex items-center justify-center text-xl">💑</span>
                <div>
                  <h3 className="text-xl font-semibold">Share the Love</h3>
                  <p className="text-sm opacity-80">Create and share special moments together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
