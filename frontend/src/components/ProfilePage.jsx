import React, { useState } from 'react';
import { ChevronLeft, Edit, Settings } from 'lucide-react';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "Sarah & Mike",
    location: "San Francisco, CA",
    coverPhoto: "/api/placeholder/1200/400",
    profilePhoto: "/api/placeholder/200/200",
    daysCount: 730,
    startDate: "February 14, 2022",
    memoriesCount: 156,
    bucketListCount: 24,
    bucketListCompletionPercentage: 60,
    about: "Adventure seekers, coffee lovers, and best friends. Making memories together since 2022.",
    interests: ["travel", "food", "photography", "hiking", "music"],
    recentMemories: [
      { id: 1, imageUrl: "/api/placeholder/80/80" },
      { id: 2, imageUrl: "/api/placeholder/80/80" },
      { id: 3, imageUrl: "/api/placeholder/80/80" },
    ]
  });

  // State for editing mode
  const [isEditingAbout, setIsEditingAbout] = useState(false);
  const [editedAbout, setEditedAbout] = useState(profile.about);
  
  // State for adding new interests
  const [newInterest, setNewInterest] = useState("");
  const [isAddingInterest, setIsAddingInterest] = useState(false);

  // Handle about section save
  const handleSaveAbout = () => {
    setProfile({
      ...profile,
      about: editedAbout
    });
    setIsEditingAbout(false);
  };

  // Handle adding new interest
  const handleAddInterest = () => {
    if (newInterest.trim() !== "") {
      setProfile({
        ...profile,
        interests: [...profile.interests, newInterest.trim()]
      });
      setNewInterest("");
      setIsAddingInterest(false);
    }
  };

  // Handle removing an interest
  const handleRemoveInterest = (interestToRemove) => {
    setProfile({
      ...profile,
      interests: profile.interests.filter(interest => interest !== interestToRemove)
    });
  };

  // Handle location edit
  const [isEditingLocation, setIsEditingLocation] = useState(false);
  const [editedLocation, setEditedLocation] = useState(profile.location);

  const handleSaveLocation = () => {
    setProfile({
      ...profile,
      location: editedLocation
    });
    setIsEditingLocation(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back button */}
      <div className="absolute top-4 left-4 z-10">
        <button className="bg-white rounded-full p-2 shadow-md">
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Cover photo */}
      <div className="relative h-80 bg-gray-300 overflow-hidden">
        <img 
          src={profile.coverPhoto} 
          alt="Cover" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
      </div>

      {/* Profile section */}
      <div className="relative px-4 pb-4 -mt-16 flex flex-col items-center">
        {/* Profile photo */}
        <div className="relative">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white bg-white">
            <img 
              src={profile.profilePhoto} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name and location */}
        <div className="mt-4 text-center">
          <h1 className="text-2xl font-bold text-gray-800">{profile.name}</h1>
          
          {isEditingLocation ? (
            <div className="flex items-center mt-1">
              <input 
                type="text" 
                value={editedLocation} 
                onChange={(e) => setEditedLocation(e.target.value)}
                className="px-2 py-1 border rounded-md text-sm"
              />
              <button 
                onClick={handleSaveLocation}
                className="ml-2 px-2 py-1 bg-blue-500 text-white text-xs rounded-md"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center mt-1">
              <span className="text-gray-600">{profile.location}</span>
              <button 
                onClick={() => setIsEditingLocation(true)}
                className="ml-2 text-gray-400 hover:text-gray-600"
              >
                <Edit className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>

        {/* Edit Profile and Settings buttons */}
        <div className="flex mt-4 gap-2">
          <button className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 text-sm font-medium hover:bg-gray-50">
            <Edit className="w-4 h-4" /> Edit Profile
          </button>
          <button className="p-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Stats section */}
      <div className="px-4 py-6 grid grid-cols-3 gap-4">
        {/* Days Together */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-red-500">💗</span>
            <h3 className="text-gray-600 font-medium">Days Together</h3>
          </div>
          <p className="text-4xl font-bold text-blue-600">{profile.daysCount}</p>
          <p className="text-sm text-gray-500 mt-2">Since {profile.startDate}</p>
        </div>

        {/* Memories */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span>📷</span>
            <h3 className="text-gray-600 font-medium">Memories</h3>
          </div>
          <p className="text-4xl font-bold text-blue-600">{profile.memoriesCount}</p>
          <div className="mt-2 flex gap-1">
            {profile.recentMemories.map(memory => (
              <div key={memory.id} className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden">
                <img src={memory.imageUrl} alt="Memory" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Bucket List */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span>🎯</span>
            <h3 className="text-gray-600 font-medium">Bucket List</h3>
          </div>
          <p className="text-4xl font-bold text-blue-600">{profile.bucketListCount}</p>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
                style={{ width: `${profile.bucketListCompletionPercentage}%` }}
              />
            </div>
            <p className="text-right text-sm text-gray-500 mt-1">{profile.bucketListCompletionPercentage}%</p>
          </div>
        </div>
      </div>

      {/* About Us section */}
      <div className="px-4 py-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">About Us</h3>
          
          {isEditingAbout ? (
            <div>
              <textarea 
                value={editedAbout}
                onChange={(e) => setEditedAbout(e.target.value)}
                className="w-full border rounded-md p-2 text-gray-700"
                rows={3}
              />
              <div className="flex justify-end mt-2">
                <button 
                  onClick={() => setIsEditingAbout(false)}
                  className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md mr-2"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSaveAbout}
                  className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md"
                >
                  Save
                </button>
              </div>
            </div>
          ) : (
            <div className="relative">
              <p className="text-gray-600">{profile.about}</p>
              <button 
                onClick={() => setIsEditingAbout(true)}
                className="absolute top-0 right-0 text-gray-400 hover:text-gray-600"
              >
                <Edit className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Interests section */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-gray-800">Interests</h3>
            <button 
              onClick={() => setIsAddingInterest(true)}
              className="text-blue-500 text-sm font-medium"
            >
              Add
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {profile.interests.map((interest, index) => (
              <div 
                key={index} 
                className="px-3 py-1 bg-gray-100 rounded-full text-gray-600 text-sm flex items-center"
              >
                {interest}
                <button 
                  onClick={() => handleRemoveInterest(interest)}
                  className="ml-2 text-gray-400 hover:text-gray-600"
                >
                  <span className="text-xs">✕</span>
                </button>
              </div>
            ))}
            
            {isAddingInterest && (
              <div className="flex items-center">
                <input 
                  type="text"
                  value={newInterest}
                  onChange={(e) => setNewInterest(e.target.value)}
                  placeholder="New interest"
                  className="px-2 py-1 border rounded-md text-sm"
                  autoFocus
                />
                <button 
                  onClick={handleAddInterest}
                  className="ml-2 px-2 py-1 bg-blue-500 text-white text-xs rounded-md"
                >
                  Add
                </button>
                <button 
                  onClick={() => setIsAddingInterest(false)}
                  className="ml-1 px-2 py-1 text-gray-500 text-xs"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;