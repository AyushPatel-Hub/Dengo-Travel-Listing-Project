const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const {listingSchema,reviewSchema}=require("../schema.js");
const Listing=require("../models/listing.js");
const Review=require("../models/review.js");
const {isLoggedIn}=require("../middleware.js");
const reviewController=require("../controllers/reviews.js");


const validateReview=(req,res,next)=>{
     let result=reviewSchema.validate(req.body);
     let{error}=result;
    console.log(result);
    if(error){
        throw new ExpressError(400,error);
    }else{
        next();
    }  
}

router.post("/",isLoggedIn, validateReview, wrapAsync(reviewController.addReview));



router.delete("/:reviewId",isLoggedIn,wrapAsync(reviewController.deleteRewiew));

module.exports=router;