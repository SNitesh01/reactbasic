const cloudinary= require("cloudinary");
const dotenv = require("dotenv");

dotenv.config();
const cloudinaryUploader = cloudinary.v2;

cloudinaryUploader.config({
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
});

module.exports = cloudinaryUploader;