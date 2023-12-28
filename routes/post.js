const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  image: String,
  caption: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  date: {
    type: Date,
    default: Date.now
  },
  likes: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",        
    }
  ]
});


module.exports  = mongoose.model('post', postSchema);