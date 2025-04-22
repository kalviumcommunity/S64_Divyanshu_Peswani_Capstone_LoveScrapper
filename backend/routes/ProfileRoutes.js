import express from "express";
import Profile from "../models/Profile.js";

const router = express.Router();

// GET profile
router.get("/", async (req, res) => {
  try {
    const profile = await Profile.findOne(); // assuming one profile
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
