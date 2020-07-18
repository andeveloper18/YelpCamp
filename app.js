var express=require("express");
var app =express();
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
var Campground=require("./models/campgrounds");
var Comment=require("./models/comments");
var seedDb=require("./seed");
mongoose.connect("mongodb://localhost:27017/yelp_camp",{ useNewUrlParser: true });
seedDb();

// //create a fake camp data and passing it into somewhere idk
// Campground.create({
//     name:"Kutta",
//     image:"https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg",
//     description:"NO bathroon,Ganda ganda.."
// },function(err,campground){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Newly created CAMPGROUND :");
//         console.log(campground);
//     }
// });


app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");


app.get("/",function(req,res){
    res.render("landing");      //landing.ejs

});

//INDEX-RESTful route
app.get("/campgrounds",function(req,res){
    Campground.find({},function(err,allCamps){
        if(err){ console.log("ERORR :",err);}
        else{
              
    res.render("index",{campgrounds:allCamps}); 
        }
    })
       //landing.ejs

});
// CREATE -RESTful route
//adding a post-route to get data from entry-form
app.post("/campgrounds",function(req,res){
    var name=req.body.Name;
    var image=req.body.image;
    var desc=req.body.description;
    var newCampground={name:name,image:image,description:desc};
   Campground.create(newCampground,function(err,newlyCreated){
       if(err){ console.log("ERROR:",err)}
       else{
           console.log("NEWLY ADDED Camp");
           console.log(newlyCreated);  res.redirect("/campgrounds");
       }
   });
  
});

//NEW RESTfull route
app.get("/campgrounds/new",function(req,res){
    res.render("new"); 
         //new .ejs
});
//SHOW-RESTful route
app.get("/campgrounds/:id",function(req,res){
   Campground.findById(req.params.id).populate("comments").exec(function(err,foundCampground){
       if(err){
           console.log(err)
        }
       else
       { 
        res.render("show",{campground:foundCampground});
    }
   });

});

//app is listning 
app.listen(3000,process.env.IP,function(){
    console.log("YelpCamp server is On!");
});