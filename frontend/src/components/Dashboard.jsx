import { Link } from 'react-router-dom';
import { Heart, Search, Bell, Camera, PenLine, Target, Gift, Calendar, MapPin } from 'lucide-react';

const MemoryKeeper = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <header className="bg-white border-b border-blue-500 px-6 py-3 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow">
            MK
          </div>
          <h1 className="text-xl font-semibold text-gray-800">Memory Keeper</h1>
        </div>

        <div className="relative flex-1 max-w-lg mx-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search memories..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        <div className="flex items-center gap-6">
          <Link to="/notifications">
            <div className="relative cursor-pointer">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </div>
          </Link>
          <Link to="/profile">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="bg-gray-200 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center text-xs font-semibold">
                S+M
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">Sarah & Mike</p>
                <p className="text-xs text-gray-500">730 days together</p>
              </div>
            </div>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r p-5 shadow-sm">
          <div className="mb-8">
            <h2 className="font-semibold text-lg text-gray-800 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Camera, label: 'Add Memory' },
                { icon: PenLine, label: 'Write Note' },
                { icon: Target, label: 'Add to Bucket List' },
                { icon: Gift, label: 'Special Dates' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="bg-gray-100 rounded-lg p-4 flex flex-col items-center gap-2 hover:bg-gray-200 cursor-pointer">
                  <Icon className="h-5 w-5 text-gray-600" />
                  <span className="text-sm text-gray-700 text-center">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-gray-800 mb-4">Recent Activity</h2>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <div className="bg-gray-300 rounded-full w-9 h-9 flex items-center justify-center text-xs font-medium">S</div>
                <div>
                  <p><span className="font-medium">Sarah</span> added 2 new photos</p>
                  <p className="text-xs text-gray-500">5m ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-yellow-100 rounded-full w-9 h-9 flex items-center justify-center">🎉</div>
                <div>
                  <p>Anniversary coming up in 5 days!</p>
                  <p className="text-xs text-gray-500">1h ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 rounded-full w-9 h-9 flex items-center justify-center">✅</div>
                <div>
                  <p><span className="font-medium">Mike</span> completed a bucket list item</p>
                  <p className="text-xs text-gray-500">2h ago</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 p-6 bg-gray-50">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Your Memories</h1>
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
</button>
              <select className="bg-gray-200 rounded-lg px-3 py-2 text-sm font-medium">
                <option>All Memories</option>
                <option>Photos</option>
                <option>Notes</option>
                <option>Special Days</option>
              </select>
            </div>
          </div>

          {/* Memory Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cards go here — unchanged from your version */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MemoryKeeper;
