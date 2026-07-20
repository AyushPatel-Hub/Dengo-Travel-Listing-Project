if(process.env.NODE_ENV !="production"){
    require('dotenv').config();
}

const PORT = process.env.PORT || 8080;
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const Listing=require("./models/listing.js");
const override=require("method-override");
const ejsMate=require("ejs-mate");
const wrapAsync=require("./utils/wrapAsync.js");
const ExpressError=require("./utils/ExpressError.js");
const {listingSchema,reviewSchema}=require("./schema.js");
const Review=require("./models/review.js");
const listings=require("./routes/listing.js");
const review=require("./routes/review.js");
const user=require("./routes/user.js");
const session=require("express-session");
const {MongoStore} = require('connect-mongo');
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");




app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}));
app.use(override("_method"));
app.engine('ejs', ejsMate);
const dbUrl=process.env.ATLAS_URL;

const store= MongoStore.create({
    mongoUrl:dbUrl,
    crypto:{
    secret: process.env.SECRET,
  },
   touchAfter: 24 * 3600 ,
});

store.on("error",()=>{
    console.log("Error in mongo")
})

const sessionOption={
    store, 
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true,
    }
};


app.use(session(sessionOption));
app.use(flash());
 
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser()); 

main().then((res)=>{
    console.log("connected to Dengo");
})
.catch(err => console.log(err));


async function main() {
  await mongoose.connect(dbUrl);

}



// const validateListing=(req,res,next)=>{
//      let result=listingSchema.validate(req.body);
//      let{error}=result;
//     // console.log(result);
//     if(error){
//         throw new ExpressError(400,error);
//     }else{
//         next();
//     }  
// }

// const validateReview=(req,res,next)=>{
//      let result=reviewSchema.validate(req.body);
//      let{error}=result;
//     // console.log(result);
//     if(error){
//         throw new ExpressError(400,error);
//     }else{
//         next();
//     }  
// }

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.deleted=req.flash("deleted");

    res.locals.reviewD=req.flash("reviewD");
    res.locals.currUser=req.user;
    // console.log(req.user);
    next();
})

// app.get("/demouser",async (req,res)=>{
//     let fakeUser=new User({
//         email:"ayush@gmail.com",
//         username:"Ayush",
//     })
//     let registeredUser = await User.register(fakeUser,"helloworld");
//     res.send(registeredUser);
// })

app.use("/listings",listings);
app.use("/listings/:id/reviews",review);
app.use("/",user);



app.get("/home",(req,res)=>{
    res.render("./listings/home.ejs");
})
app.get("/privacy",(req,res)=>{
    res.render("./listings/privacy");
})
app.get("/terms",(req,res)=>{
    res.render("./listings/terms.ejs");
})

// app.get("/",(req,res)=>{
//     res.render("./listings/home.ejs");
// })

// app.get("/listings" ,validateListing, wrapAsync(async (req,res,next)=>{
   
//         const allListings =await Listing.find({});
//     res.render("./listings/index.ejs",{allListings});
    
// })
// );


// app.get("/listings/new",(req,res)=>{
//     res.render("./listings/new.ejs");
// })

// app.get("/listings/:id/delete", wrapAsync(async (req,res)=>{
//     let {id}=req.params;
//     let editData= await Listing.findById(id);
//     res.render("./listings/delete.ejs",{editData});
// }))
// app.delete("/listings/:id", wrapAsync(async (req,res)=>{
//         let {id}= req.params;
//        await  Listing.findByIdAndDelete(id);
//        res.redirect("/listings");
// }))


// app.post("/listings", wrapAsync(async (req,res)=>{
//     // let {title,discription,image,price,location,country}=req.body;
//     let listing=req.body.listing;
//   const newListing= new Listing(listing);
//    await newListing.save();
//    res.redirect("/listings");
    
// }))


// app.get("/listings/:id/edit", wrapAsync(async (req,res)=>{
//     let {id}=req.params;
//     let editData= await Listing.findById(id);
//     res.render("./listings/edit.ejs",{editData});
// }))
// app.put("/listings/:id", validateListing,wrapAsync(async (req,res)=>{
//     let {id}=req.params;
//     await Listing.findByIdAndUpdate(id,{...req.body.listing});
//     res.redirect(`/listings/${id}`);
    
// }))
// app.get("/listings/:id",wrapAsync(async (req,res)=>{
//     let {id}=req.params;
    
//      let showData= await Listing.findById(id).populate("reviews");
//      console.log(showData);
//     res.render("./listings/show.ejs",{showData});
// }));
// app.post("/listings/:id/reviews", validateReview, wrapAsync(async (req,res)=>{
//     let {id}=req.params;
//     let listing = await  Listing.findById(id);
//     let newReview= new Review(req.body.review);
//     listing.reviews = listing.reviews || [];
//     listing.reviews.push(newReview);
//     await newReview.save();
//     await listing.save();
//     res.redirect(`/listings/${id}`)
// }))
// app.delete("/listings/:id/reviews/:reviewId",wrapAsync(async (req,res)=>{
//         let {id,reviewId}=req.params;
//         await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
//        await Review.findByIdAndDelete(reviewId);
//        res.redirect(`/listings/${id}`);
// }));

   
app.all("{*splat}",(req,res,next)=>{
    next(new ExpressError(500,"Page not found"));
})
app.use((err,req,res,next)=>{
    let {statusCode=500,message}=err;
    res.render("./listings/error.ejs",{err});
    // res.status(statusCode).send(message);
})


app.listen(PORT,()=>{
    console.log("listening");
});