const {userService,emailService}=require("../services");
// create user
const createUser=async(req,res)=>{
    try{
        const reqbody=req.body;
        const userExists=await userService.getuserEmail(reqbody.email);
        if(userExists){
            throw new Error("user already created by this email!");
        }
        const user = await userService.createUser(reqbody);
        if(!user){
            throw new Error("something went wrong,please try again or later!");
        }

        res.status(200).json({
            success:true,
            message:"user create successfully!",
            data:(user),
        });
    }catch(error){
        res.status(400).json({success:false,message:error.message});
    }
}