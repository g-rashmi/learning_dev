import express from "express" 
import {createClient} from "redis" 
const app=express(); 
app.use(express.json()); 
const client= createClient(); 
client.on("error",(error)=>{console.log(error)}) 
 
app.post("/submit",async(req,res)=>{
  const problemid= req.body.problemid; 
  const code = req.body.code; 
  const language=req.body.language ; 
  try{
    await client.lPush("problems",JSON.stringify({code,language,problemid})); 
res.status(200).send("submission received") 
 
  
  }catch(error){
    console.log(error);
    res.status(500).send("Failed to store submission.");
  }
})








async function startserver(){
  try{
await client.connect(); 
console.log("redis connected"); 
app.listen(3000,()=>{
  console.log("server -connected")
})
  }catch(error){
    console.log(error)
  }
}