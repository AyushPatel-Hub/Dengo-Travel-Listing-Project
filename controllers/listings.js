const Listing=require("../models/listing.js");






module.exports.index=async (req,res,next)=>{
   
        const allListings =await Listing.find({});
    res.render("./listings/index.ejs",{allListings});
    
}

module.exports.renderNew=(req,res)=>{
    res.render("./listings/new.ejs");
}


module.exports.show=async (req,res)=>{
    let {id}=req.params;
    
     let showData= await Listing.findById(id).populate("reviews").populate("owner");
     if(!showData){
         req.flash("deleted"," Listing You requested Does not Exist");
        return res.redirect("/listings");
     }
    res.render("./listings/show.ejs",{showData});
}

module.exports.createListings=async (req,res)=>{
    // let {title,discription,image,price,location,country}=req.body;
    let url=req.file.path;
    let filename=req.file.filename;
    let listing=req.body.listing;
  const newListing= new Listing(listing);
  newListing.owner=req.user._id;
  newListing.image={url,filename}
   await newListing.save();
   req.flash("success","New Listing Added!");
   res.redirect("/listings");
    
}
module.exports.editForm=async (req,res)=>{
    let {id}=req.params;
    let editData= await Listing.findById(id);
    if(!editData){
         req.flash("deleted"," Listing You requested Does not Exist");
        return res.redirect("/listings");
     }

     let originalUrl=editData.image.url;
    originalUrl= originalUrl.replace("/upload","/upload/w_250");
    res.render("listings/edit.ejs",{editData,originalUrl});
}

module.exports.update=async (req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id);
    if(res.locals.currUser && !listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("deleted","You don't have Permisson to Update this Listing");
       return res.redirect(`/listings/${id}`);
    }
    let listingss=await Listing.findByIdAndUpdate(id,{...req.body.listing});
    if( typeof req.file!=="undefined"){
     let url=req.file.path;
    let filename=req.file.filename;
    listingss.image={url,filename};
    await listingss.save();
    }
     req.flash("success"," Listing Updated!");
    res.redirect(`/listings/${id}`);
    
}

module.exports.showDelete=async (req,res)=>{
    let {id}=req.params;
    let editData= await Listing.findById(id);
    res.render("./listings/delete.ejs",{editData});
}

module.exports.delete=async (req,res)=>{
        let {id}= req.params;
         let listing=await Listing.findById(id);
         if(res.locals.currUser && !listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("deleted","You don't have Permisson to Update or Delete this Listing");
       return res.redirect("/listings");
    }
       await  Listing.findByIdAndDelete(id);
       req.flash("deleted","Listing Deleted Successfully!");
       res.redirect("/listings");
}