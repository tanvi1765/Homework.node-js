const mongoose= require("mongoose");

const userSchema =new mongoose.Schema(
    {
        category_name:{
            type:String,
            tirm:true,
        },
        category_desc:{
            type:String,
            trim:true,
        },
        is_active:{
            type: Boolean,
            default: true,
        },
    },
    {
            timestamps: true,
            versionKey: false,
    },
);
const User = mongoose.model("users", userSchema);
module.exports = User;