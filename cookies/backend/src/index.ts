import express from "express"  
import cookieParser from "cookie-parser" 
import jwt , {jwtPayload} from "jsonwebtoken" 
import path from "path" ;  
import cors from "cors";
const app=express() ; 
app.use(cors({
  credentials:true, 
  origin:"http://localhost:5173"
}));
app.use(cookieParser()); 
app.use(express.json()); 
const JWT_SECRET="1234"
app.post("/signin",(req,res)=>{
const email = req.body.email ; 
const password = req.body.password ;
 const token = jwt.sign({ 
  id:1
 },JWT_SECRET)  
 res.cookie("token",token); 
 res.send("logged in ")

})