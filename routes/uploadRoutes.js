const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/uploadController");

// Image upload endpoint
router.post("/upload", uploadController.uploadImage);

module.exports = router;
