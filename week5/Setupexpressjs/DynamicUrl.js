const express=require("express")
const app=express()
app.get("/users/:id",(req,res)=>{res.send(`User id:${req.params.id}`)});
app.get("/search",(req,res)=>{res.send(`User name:${req.query.name} User age:${req.query.age}`)});
app.listen(3000,()=>{console.log("Server is running on port 3000")});