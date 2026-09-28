const mongoose = require("./connect");

// Schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    branch: String
});

// Model
const Student = mongoose.model("Student", studentSchema);

// CRUD Operations
async function performCRUD() {

    // CREATE - Insert 5 students
    await Student.insertMany([
        { name: "Devaki", age: 20, branch: "CSE" },
        { name: "Anjali", age: 21, branch: "CSE" },
        { name: "Rahul", age: 20, branch: "ECE" },
        { name: "Priya", age: 22, branch: "CSE" },
        { name: "Kiran", age: 21, branch: "IT" }
    ]);

    console.log("5 students created successfully");


    // READ - Display all students
    const students = await Student.find();

    console.log("All Students:");
    console.log(students);


    // UPDATE - Update Devaki's age
    await Student.updateOne(
        { name: "Devaki" },
        { $set: { age: 21 } }
    );

    console.log("Devaki's age updated successfully");


    // READ again - Display updated student
    const updatedStudent = await Student.findOne({ name: "Devaki" });

    console.log("Updated Devaki:");
    console.log(updatedStudent);


    // DELETE
    // Keeping this commented so that the 5 records remain in MongoDB Atlas.

     await Student.deleteOne({ name: "Devaki" });
    console.log("Devaki deleted successfully");
}


// Wait for MongoDB connection
mongoose.connection.once("connected", async () => {

    console.log("MongoDB connected successfully");

    await performCRUD();

    await mongoose.connection.close();

    console.log("MongoDB connection closed");
});