"use strict";
// Variable Annotations
let Name = "Devaki";
let age = 20;
let isStudent = true;
// Array Annotation
let marks = [90, 85, 95];
// Function Annotation
function calculateAverage(scores) {
    let sum = 0;
    for (let score of scores) {
        sum += score;
    }
    return sum / scores.length;
}
// Output
console.log("Name:", Name);
console.log("Age:", age);
console.log("Student:", isStudent);
console.log("Marks:", marks);
let average = calculateAverage(marks);
console.log("Average Marks:", average);
