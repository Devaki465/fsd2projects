const express=require("express")
const app=express()
app.use(express.json())
app.get("/users",(req,res)=>{res.json({id:101,Name:"B.DEVAKI",Age:20});});
app.post("/users",(req,res)=>{res.json({message:"User created",data:req.body})});
app.put("/users/:id",(req,res)=>{res.json({message:`User with id ${req.params.id} updated`,data:req.body})});   
app.delete("/users/:id",(req,res)=>{res.json({message:`User with id ${req.params.id} deleted`})});
app.listen(3000,()=>{console.log("Server is running on port No 3000")});