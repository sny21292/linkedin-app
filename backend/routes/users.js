const express = require("express");
const router = express.Router();
const multer = require("multer");
const auth = require("../middleware/auth");
const { getProfile, updateProfile } = require("../controllers/userController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });

router.get("/profile", auth, getProfile);
router.get("/profile/:id", auth, getProfile);
router.put("/profile", auth, upload.single("profilePicture"), updateProfile);

module.exports = router;
