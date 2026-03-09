const express = require("express");
const router = express.Router();
const multer = require("multer");
const auth = require("../middleware/auth");
const { createPost, getFeed, getPost, deletePost } = require("../controllers/postController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });

router.get("/", auth, getFeed);
router.get("/:id", auth, getPost);
router.post("/", auth, upload.single("image"), createPost);
router.delete("/:id", auth, deletePost);

module.exports = router;
