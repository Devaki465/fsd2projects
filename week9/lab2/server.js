const express = require("express");
const mongoose = require("./connect");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// EJS configuration
app.set("view engine", "ejs");

// Student Schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    branch: String
});

// Student Model
const Student = mongoose.model("Student", studentSchema);


// =========================
// EJS HOME PAGE
// =========================

app.get("/", async (req, res) => {
    try {
        const students = await Student.find();

        res.render("apphome", {
            students: students
        });

    } catch (error) {
        res.status(500).send("Error loading students");
    }
});


// =========================
// REST APIs
// =========================

// GET - Get all students
app.get("/students", async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);

    } catch (error) {
        res.status(500).json({
            message: "Error fetching students"
        });
    }
});


// POST - Add student
app.post("/students", async (req, res) => {
    try {
        const student = await Student.create({
            name: req.body.name,
            age: req.body.age,
            branch: req.body.branch
        });

        res.status(201).json(student);

    } catch (error) {
        res.status(500).json({
            message: "Error creating student"
        });
    }
});


// PUT - Update student
app.put("/students/:id", async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                age: req.body.age,
                branch: req.body.branch
            },
            { new: true }
        );

        res.json(student);

    } catch (error) {
        res.status(500).json({
            message: "Error updating student"
        });
    }
});


// DELETE - Delete student
app.delete("/students/:id", async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);

        res.json({
            message: "Student deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Error deleting student"
        });
    }
});


// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});