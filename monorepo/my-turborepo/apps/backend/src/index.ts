import express from "express";
import {backend_url} from "@repo/common/config"
const app = express()

app.get("/", (req, res) => {
    res.json({
        message: {backend_url}   });
}) 
app.listen(3500,()=>{
    console.log("server start")
})