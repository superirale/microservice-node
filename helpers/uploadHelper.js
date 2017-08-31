const multer = require('multer');

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
  	var ext = file.originalname.split(".");
    cb(null, file.fieldname + '-' + Date.now()+"."+ext[ext.length-1])
  }
});

let upload = multer({ storage: storage })


module.exports = upload