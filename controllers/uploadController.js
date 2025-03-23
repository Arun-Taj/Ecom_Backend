const multer = require("multer");
const path = require("path");

// Image Storage Engine configuration
const storage = multer.diskStorage({
  destination: './Uploads/Images',
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage: storage }).single('product');

exports.uploadImage = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
    res.json({
      success: 1,
      image_url: `http://localhost:5000/images/${req.file.filename}`
    });
  });
};
