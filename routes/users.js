const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/instaclone");

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  name: String,
  passport: String,
  profileImage: String,
  bio: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post"
    }
  ]
});

userSchema.plugin(plm);

module.exports  = mongoose.model('user', userSchema);