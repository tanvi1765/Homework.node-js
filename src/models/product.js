const mongoose= require("mongoose");

const productSchema = new mongoose.Schema(
    {
        product_name:{
            type:String,
            trim:true,
        },
        product_desc:{
            type:String,
            trim:true,
        },
        is_active:{
            type:Boolean,
            default:true,
        },
    },
    {
        timestapm:true,
        versionkey:false,
    }
)
const product= mongoose.model("product",productSchema);
module.exports =product;