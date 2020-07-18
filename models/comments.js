var mongoose=require("mongoose");


//=======================
//---Yelpcamp schema----
//=======================
var commentSchema=new mongoose.Schema({
    text:String,
    author:String

 });
//create camp  data model
module.exports = mongoose.model("Comment",commentSchema);