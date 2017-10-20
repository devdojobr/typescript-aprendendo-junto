interface Example1 {
    name: string;
}

class AnotherExample1 {
    name: string;
    age: number;
}

class AnotherExample2 {
    num: number;
}

let exVar: Example1;
exVar = new AnotherExample1();
// exVar = new AnotherExample2();
// exVar = new Person2("sasa");
let exVar2 = {name: "Brook", age: 20};
exVar = exVar2;

// exVar = {name:"Brook",age: 20};

function testExample1(ex: Example1) {
    console.log(ex.name);
}

let exVar3 = {name: "Brook", age: 20};
testExample1(exVar3);
// testExample1({name:"Brook",age: 20});

let x1 = (a: number) => a;
let x2 = (b: number, s: string) => 0;
// let x2 = (b: number, s: string) => b + s;

console.log(x1(10));
console.log(x2(10, " something"));
x2 = x1;
console.log(x2(20, " something2"));

let items = [1,2,3];
items.forEach((item,index,array) => console.log(item));
items.forEach(item => console.log(item));
