const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Connection = require("../models/Connection");

router.get("/", auth, async (req, res) => {
  try {
    const connections = await Connection.findByUserId(req.user.id);
    res.json(connections);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.get("/pending", auth, async (req, res) => {
  try {
    const pending = await Connection.findPendingForUser(req.user.id);
    res.json(pending);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.post("/request/:userId", auth, async (req, res) => {
  try {
    const connection = await Connection.sendRequest(req.user.id, req.params.userId);
    res.status(201).json(connection);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.put("/accept/:connectionId", auth, async (req, res) => {
  try {
    const connection = await Connection.accept(req.params.connectionId);
    res.json(connection);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.delete("/reject/:connectionId", auth, async (req, res) => {
  try {
    await Connection.reject(req.params.connectionId);
    res.json({ message: "Connection request rejected" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
