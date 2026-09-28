const path = require("path");

require("dotenv").config({
    path: path.join(__dirname, "..", ".env")
});

const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

mongoose.connect(uri)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.log("MongoDB connection failed");
        console.log(error.message);
    });

module.exports = mongoose;