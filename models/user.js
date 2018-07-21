const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  role: { type: String, enum : ['ESTUDIANTE', 'TEACHER'], default : 'ESTUDIANTE' },
  pic: String
});

<<<<<<< HEAD
=======

>>>>>>> 21c285ea7e04cb47b2187203935f894f289d3d2a
const User = mongoose.model("User", userSchema);
module.exports = User;
