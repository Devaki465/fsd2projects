const express=require("express");
const app=express();
app.get("/users",(req,res)=>{res.json({Name:"B.Devaki",Age:20,Location:"Mumbai"});});
app.listen(3000,()=>{console.log("Server is running on port No 3000")});