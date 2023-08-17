const mongoose = require("mongoose");
const config = require("../config/config");

const connectDB = async () => {
    mongoose
    .connect(config.mongoose.url,config.mongoose.options)
    .then((data) =>{
        console.log("database connected !");
    })
    .catch((error)=>{
        console.log("database connection erroe:",error)
    });
};
module.exports={connectDB};