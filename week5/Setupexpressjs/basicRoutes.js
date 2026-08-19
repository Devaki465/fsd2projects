const express=require("express")
const app=express()
app.get("/mylocation",(req,res)=>{res.send("U r currently on home page ")});
app.get("/about",(req,res)=>{res.send("This is  about page")});
app.get("/contact",(req,res)=>{res.send("This is contact page")});
app.listen(3000,()=>{console.log("You are currently on port No 3000")});
