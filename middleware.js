const Listing=require("./models/listing");
module.exports.isLoggedIn=(req,res,next)=>{
     if(!req.isAuthenticated()){
        console.log(req.originalUrl);
        req.session.redirectUrl=req.originalUrl;
        console.log(req.session.redirectUrl);
        req.flash("deleted","Please Login");
      return res.redirect("/login");
    }
    next();
}

module.exports.saveredirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner=async(req,res,next)=>{
    let {id}=req.params;
     let listing=await Listing.findById(id);
     if(res.locals.currUser && !listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("deleted","You don't have Permisson to Update or Delete this Listing");
       return res.redirect("/listings");
    }
}
