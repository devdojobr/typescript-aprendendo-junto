function doingSomething(callback: (name: string) => void): void {
    callback.call(this, "William Suane");
    callback.apply(this, ["William Suane", "DevDojo Rules"]);
    callback("William Suane");
}

function execute(name: string): void {
    console.log(name);
}

doingSomething(execute);

function calculator(num1: number, num2: number, type: string): number {
    switch (type) {
        case "add":
            return num1 + num2;
        case "multiply":
            return num1 * num2;
        default :
            return 0;
    }
}

function sum(num1: number, num2: number): number {
    return num1 + num2;
}

function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

function doingSomethingCrazy(num1: number, num2: number): void {
    console.log(`Numbers: ${num1} and ${num2}`);
}

function calculator2(num1: number, num2: number, callback): number {
    if (typeof callback === "function") {
        return callback(num1, num2);
    }
    return 0;
}

function calculator3(num1: number, num2: number, callback: (num1: number, num2: number) => number): number {
    return callback(num1, num2);
}

// console.log(calculator(1, 2, "multiply"));
// console.log(calculator(4, 2, "add"));
console.log(calculator2(5, 5, sum));
console.log(calculator2(5, 5, multiply));
calculator2(5, 5, doingSomethingCrazy);
// calculator2(5, 5, 5);
// calculator3(5, 5, doingSomethingCrazy);
console.log(calculator3(10, 20, (num1: number, num2: number) => {
    return num1 - num2;
}));