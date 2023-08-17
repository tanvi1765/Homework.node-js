const mongoose= require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        category_name:{
            type:String,
            trim:true,
        },
        category_desc:{
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
const category= mongoose.model("catrgory",categorySchema);
module.exports =Category;