// src/components/Signup.jsx
import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', formData);
      setMessage('Signup Successful!');
      console.log(res.data);
    } catch (err) {
      setMessage('Signup failed');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-md border border-blue-400 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-2">Create Account</h2>
        <p className="text-center text-gray-500 mb-6">Start storing your memories</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full mt-1 px-4 py-2 border rounded-md"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              className="w-full mt-1 px-4 py-2 border rounded-md"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full mt-1 px-4 py-2 border rounded-md"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800">
            Sign Up
          </button>
          <p className="text-center text-gray-600 mt-4 text-sm">
            Already have an account? <a href="/login" className="text-purple-600 font-medium hover:underline">Log in</a>
          </p>
        </form>
        {message && <p className="text-center text-red-500 mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default Signup;
