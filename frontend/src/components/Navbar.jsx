// src/components/Navbar.jsx
const Navbar = ({ onGetStarted }) => {
    return (
      <nav className="flex justify-between items-center px-6 lg:px-24 py-4 bg-white shadow-md">
        <div className="text-2xl font-bold text-purple-700">Memory Keeper</div>
        <ul className="hidden md:flex gap-6 text-gray-700 text-sm">
          <li className="hover:text-purple-600 cursor-pointer">Features</li>
          <li className="hover:text-purple-600 cursor-pointer">Stories</li>
          <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
        </ul>
        <button onClick={onGetStarted} className="bg-purple-700 text-white text-sm px-5 py-2 rounded-md hover:bg-purple-800">
          Get Started
        </button>
      </nav>
    );
  };
  
  export default Navbar;
  