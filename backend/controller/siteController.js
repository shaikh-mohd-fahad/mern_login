import jwt from "jsonwebtoken"

export const home =(req,res)=>{
    res.send("hellow from home controller");
}
export const login=async (req,res)=>{
    const {email,password}=req.body;
    if(email==="abc@gmail.com" && password==="123456"){
        const token=await jwt.sign({email},process.env.SECRET_KEY)
        return res.json({token,success:true,message:"user is logged in..."})
    }
    else{
        return res.json({success:false,message:"email or password is wrong"})
    }
    // return res.json({success:"working"})
}