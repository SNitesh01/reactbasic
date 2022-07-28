const multer = require('multer');

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "." + file.mimetype.split("/")[1];
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
