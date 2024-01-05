const multer = require("multer");
const { v4: uuidv4 } = require('uuid');
const path = require("path");
const { Module } = require("module");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/uploads') // 
    },
    filename: function (req, file, cb) {
        const unique = uuidv4(); // es ki vajah se uniq nam multa hai
      cb(null, unique + path.extname(file.originalname)) // file ji me us ka extantion le lega
    }
  })
  
  const upload = multer({ storage: storage })
  module.exports = upload ;