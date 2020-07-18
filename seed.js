var mongoose=require("mongoose");
var Campground=require("./models/campgrounds");
var Comment=require("./models/comments");


var data=[
    { name:"Pottto",
    image:"https://images.unsplash.com/photo-1497547031619-b2ccab0d622f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description:"Blah blah"
    },
    { name:"Dessta",
    image:"https://images.unsplash.com/photo-1497547031619-b2ccab0d622f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description:"Blah blah"
    },
    { name:"Kartta",
    image:"https://images.unsplash.com/photo-1497547031619-b2ccab0d622f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description:"Blah blah"
    }
];

function seedDb(){

        Campground.remove({},function(err){
            if(err){console.log(err);}
            else{
                console.log("Camps are removed.");
                data.forEach(function (seed) {
                    Campground.create(seed,function(err,camp){
                        if(err){
                            console.log(err);
                        }else{
                                console.log("Camp added");
                                Comment.create({
                                    text:"ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                                    author:"Ram"
                                },function(err,comment){
                                    if(err){console.log(err);}
                                    else{
                                        camp.comments.push(comment);
                                        camp.save();
                                            console.log("New Comment added")
                                    }
                                });
                                
                    
                        }
                });
                
                });
            }
        });
}


module.exports=seedDb;
