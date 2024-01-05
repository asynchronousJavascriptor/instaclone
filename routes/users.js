// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

const mongoose = require("mongoose");
const plm = require("passport-local-mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/instagram")
.then(()=>{
  console.log("mongoDB sucessfuly cunnected 👍");
})
.catch((err)=>{
  console.log("something went worng");
})

const userSchema = mongoose.Schema({
      username:String,
      name:String,
      email:String,
      password:String,
      profileImage:String,
      bio:String,
      posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
      }]
})

userSchema.plugin(plm);

module.exports = mongoose.model("user",userSchema);