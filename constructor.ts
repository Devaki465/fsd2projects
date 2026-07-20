class Student {
    name: string;
    age: number;
    branch: string;
    cgpa: number;

    // Constructor 1
    constructor(name: string, age: number);

    // Constructor 2
    constructor(name: string, age: number, branch: string, cgpa: number);

    // Single implementation
    constructor(
        name: string,
        age: number,
        branch?: string,
        cgpa?: number
    ) {
        this.name = name;
        this.age = age;
        this.branch = branch ?? "AIML";
        this.cgpa = cgpa ?? 7.5;
    }

    display(): void {
        console.log(`Name   : ${this.name}`);
        console.log(`Age    : ${this.age}`);
        console.log(`Branch : ${this.branch}`);
        console.log(`CGPA   : ${this.cgpa}`);
        console.log("------------------------");
    }
}

// Object using Constructor 1
const s1 = new Student("Devaki", 19);

// Object using Constructor 2
const s2 = new Student("Rahul", 20, "CSE", 9.4);

s1.display();
s2.display();