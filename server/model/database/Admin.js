const mongoose = require("mongoose"); 

const userSchema = new mongoose.Schema(
    { firstName: { type: String, required: true }, lastName: { type: String }, email: { type: String, required: true, unique: true }, education: { type: String, required: true }, contactNo: { type: String, required: true}, bookingtime: { type: Date, default: Date.now },exper:{type:String,required:true}})
     
    module.exports = mongoose.model("Admin", userSchema);