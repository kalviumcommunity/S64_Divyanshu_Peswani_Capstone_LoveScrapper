// src/components/LandingPage.jsx
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onGetStarted={handleGetStarted} />
      
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-16 bg-white">
        <div className="max-w-xl">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-snug text-gray-900">
            Preserve Your Love Story, One Memory at a Time
          </h1>
          <p className="text-gray-600 mb-6">
            Create a beautiful digital scrapbook of your relationship with AI-powered organization and private sharing.
          </p>
          <div className="flex gap-4">
            <button onClick={handleGetStarted} className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-5 rounded-md text-sm font-medium">
              Start Your Love Story
            </button>
            <button className="border border-purple-700 text-purple-700 hover:bg-purple-100 py-2 px-5 rounded-md text-sm font-medium">
              Watch Demo
            </button>
          </div>
        </div>
        <div className="mt-10 lg:mt-0">
          <div className="w-[600px] h-[400px] bg-gray-200 flex items-center justify-center text-3xl text-gray-400 rounded-lg">
            600 × 400
          </div>
          <div className="bg-white shadow-md rounded-full px-4 py-2 mt-4 inline-block text-sm">
            ❤️ Total Memories: <strong>23,487</strong>
          </div>
        </div>
      </section>

      {/* Mid Section */}
      <section className="px-6 lg:px-24 py-12 bg-white text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
          Everything You Need to Preserve Your Love
        </h2>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 px-6 lg:px-24 py-12 text-center">
        <h2 className="text-2xl font-bold mb-6">Love Stories Preserved</h2>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
          <p className="text-gray-600">
            "Memory Keeper has transformed how we capture our journey together. It's like having a digital time capsule of our love story."
          </p>
          <p className="mt-2 text-sm font-semibold">Sarah & Mike • 2 years</p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-24 py-16 bg-purple-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Digital Love Story Today</h2>
        <p className="mb-6">Join thousands of couples preserving their precious moments with Memory Keeper.</p>
        <button onClick={handleGetStarted} className="bg-white text-purple-700 hover:bg-purple-100 py-2 px-6 rounded-md text-sm font-semibold">
          Get Started Free
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
