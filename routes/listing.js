const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const {listingSchema,reviewSchema}=require("../schema.js");
const Listing=require("../models/listing.js");
const {isLoggedIn}=require("../middleware.js");
const listingController=require("../controllers/listings.js");
const multer  = require('multer')
const {storage}=require("../cloudConfig.js");
const upload = multer({ storage })


const validateListing=(req,res,next)=>{
     let result=listingSchema.validate(req.body);
     let{error}=result;
    // console.log(result);
    if(error){
        throw new ExpressError(400,error);
    }else{
        next();
    }  
}

router.route("/")
.get(validateListing, wrapAsync(listingController.index))
.post(isLoggedIn, upload.single('listing[image]'),wrapAsync(listingController.createListings))



router.route("/new")
.get(isLoggedIn,listingController.renderNew);



router.route("/:id")
.delete(isLoggedIn, wrapAsync(listingController.delete))
.put(isLoggedIn,upload.single('listing[image]'),  validateListing,wrapAsync(listingController.update))
.get(wrapAsync(listingController.show));

router.get("/:id/delete", wrapAsync(listingController.showDelete))



router.get("/:id/edit",isLoggedIn, wrapAsync(listingController.editForm))



module.exports=router;