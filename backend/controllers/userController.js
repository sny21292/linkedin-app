const User = require("../models/User");

const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id || req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { password, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { name, headline, bio, location } = req.body;

    const updates = {};
    if (name) updates.name = name;
    if (headline) updates.headline = headline;
    if (bio) updates.bio = bio;
    if (location) updates.location = location;

    if (req.file) {
      updates.profile_picture = `/uploads/${req.file.filename}`;
    }

    const user = await User.update(req.user.id, updates);
    const { password, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = { getProfile, updateProfile };
