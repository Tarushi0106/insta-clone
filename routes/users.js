const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/instaclone"); //database conect kr rahe h

const userSchema = mongoose.Schema({  //database me kya kya details store hongi
  username: String,
  name: String,
  email: String,
  password: String,
  picture: {
    type: String,  //image ka url store krte hai isliye string
    default: "def.png"
  },
  contact: String,
  bio: String,
  stories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "story" 
    }
  ],
  saved: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post" 
    }
  ],
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "post" 
  }],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user" 
    } 
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user" 
    }
  ]
})

userSchema.plugin(plm); // iss line se serialize and deserialize user provide kr rahe h

module.exports = mongoose.model("user", userSchema); //iss line ki vajaha se hum create read update delete kr payenge .ye humne export kr diya hai toh ye wale page bhi jo bhi database wala code h uske through hum read update ye sab kr skte hai