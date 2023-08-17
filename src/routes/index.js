const express=require("express");
const userRoutes=require("./user.route");

const route=express.Router();
Router.use("/user",userRoutes);

module.exports=Router;

