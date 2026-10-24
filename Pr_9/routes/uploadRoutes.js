const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const File = require("../models/File");

// POST /api/upload  - field name must be "file"
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const fileDoc = await File.create({
      originalName: req.file.originalname,
      storedName: req.file.filename,
      path: req.file.path,
      size: req.file.size,
      mimeType: req.file.mimetype,
    });

    res.status(201).json(fileDoc);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET /api/files - list metadata of all uploaded files
router.get("/files", async (req, res) => {
  const files = await File.find().sort({ createdAt: -1 });
  res.status(200).json(files);
});

module.exports = router;
