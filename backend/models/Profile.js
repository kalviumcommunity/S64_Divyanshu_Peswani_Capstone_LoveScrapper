import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  name: String,
  location: String,
  coverPhoto: String,
  profilePhoto: String,
  daysCount: Number,
  startDate: String,
  memoriesCount: Number,
  bucketListCount: Number,
  bucketListCompletionPercentage: Number,
  about: String,
  interests: [String],
  recentMemories: [
    {
      id: Number,
      imageUrl: String
    }
  ]
});

export default mongoose.model("Profile", profileSchema);
