const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

main().then((res)=>{
    console.log("connected to Dengo");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Dengo');

}
const initDB= async ()=>{
    await Listing.deleteMany({});
     initData.data=initData.data.map((obj)=>({...obj,
        owner:"6a5a40d3e107df1677954ffa",
    }));
    await Listing.insertMany(initData.data);
   
    console.log("data was ");
}
initDB();