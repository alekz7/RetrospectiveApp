const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const courseSchema = new Schema({
  typePostIt: {type:String, enum: ["START DOING","STOP DOING","STAY THE SAME", "DO MORE OF", "DO LESS OF" ]},
  initiative: String,
  userId: String
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
