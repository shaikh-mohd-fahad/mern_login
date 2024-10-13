import express from "express"
import web_route from "./route/web.js";
import dotenv from "dotenv"
import cors from "cors"
import cookieParser  from "cookie-parser"

const app=express();
app.use(cookieParser());
dotenv.config()
app.use(cors())
app.use(express.json())
app.use("/",web_route)
app.listen(3000);