export const home =(req,res)=>{
    res.send("hellow from home controller");
}
export const login=(req,res)=>{
    const {email,password}=req.body;
    if(email==="abc@gmail.com" && password==="123456"){

    }
    else{
        return res.json({success:"email or password is wrong"})
    }
    // return res.json({success:"working"})
}