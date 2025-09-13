const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // يخزن في فولدر uploads
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (ext === ".jpg" || ext === ".jpeg" || ext === ".png" || ext === ".pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only .jpg, .jpeg, .png, .pdf are allowed"), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
