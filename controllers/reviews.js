const Listing=require("../models/listing.js");
const Review=require("../models/review.js");

module.exports.addReview=async (req,res)=>{
    let {id}=req.params;
    let listing = await  Listing.findById(id);
    let newReview= new Review(req.body.review);
    newReview.username=req.user.username;
    listing.reviews = listing.reviews || [];
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success","Review Added!");
    res.redirect(`/listings/${id}`);
}


module.exports.deleteRewiew=async (req,res)=>{
        let {id,reviewId}=req.params;
        await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
       await Review.findByIdAndDelete(reviewId);
       req.flash("reviewD","Review Deleted!")
       res.redirect(`/listings/${id}`);
}