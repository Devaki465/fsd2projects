namespace College {

    export class Student {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        display(): void {
            console.log("Name: " + this.name);
            console.log("Age: " + this.age);
        }
    }

}

// Using the namespace and class
let s1 = new College.Student("Devaki", 20);
s1.display();