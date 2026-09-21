// Variable Annotations
let Name: string = "Devaki";
let age: number = 20;
let isStudent: boolean = true;

// Array Annotation
let marks: number[] = [90, 85, 95];

// Function Annotation
function calculateAverage(scores: number[]): number {
    let sum: number = 0;

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

let average: number = calculateAverage(marks);
console.log("Average Marks:", average);