function reverseArray<T>(arr: T[]): T[] {
    let result: T[] = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }

    return result;
}

let numbers = reverseArray<number>([10, 20, 30, 40]);
console.log(numbers);

let names = reverseArray<string>(["Devaki", "Anitha", "Priya"]);
console.log(names);