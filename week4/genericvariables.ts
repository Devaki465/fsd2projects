class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    display(): void {
        console.log(this.value);
    }
}

let num = new Box<number>(100);
num.display();

let str = new Box<string>("Hello");
str.display();