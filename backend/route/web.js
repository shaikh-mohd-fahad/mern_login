import express from "express"
const web_route=express.Router();
import { home,login } from "../controller/siteController.js";

web_route.get("/",home)
web_route.post("/login",login)
// web_route.get("/login",(req,res)=>{
//     return res.json({success:"working"})
// })
export default web_route