const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    //   username:String,
    //   name:String,
    //   email:String,
    //   password:String,
    //   profileImage:String,
    //   bio:String,
    picture:String,
    user:{ // yha par array me stor nahi karte []
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    date:{
        type:Date,
        default:Date.now()
    },
    caption:String,
    likes: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }],
    //   posts:[{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"post"
    //   }]
})


module.exports = mongoose.model("post",postSchema);