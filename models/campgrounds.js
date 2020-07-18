var mongoose=require("mongoose");


//=======================
//---Yelpcamp schema----
//=======================
var campgroundSchema=new mongoose.Schema({
        name:String,
        image:String,
        description:String,
        comments:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }]
                                        });
//create camp  data model
module.exports = mongoose.model("Campgrounds",campgroundSchema);