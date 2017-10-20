/**
 * Created by william on 7/17/17.
 */
function printName(person: { name: string }): void {
    console.log(person.name);
}
let randomObj = {name: "William", age: 20};
let randomObj2 = {age: 20};
printName(randomObj);
// printName(randomObj2);
interface Person {
    name: string;
    // age?:number;
}
interface Employee extends Person {
    salary: number;
}
let pe: Person = {name: "William Suane"};
let emp: Employee = {name: "William Suane2", salary: 2000};
printName(pe);
printName(emp);

function printName2(person: Person): void {
    console.log(person.name);
}
printName2(pe);
printName2(emp);
printName2(randomObj);
printName2({name: "Test"} as Person);

interface Person {
    age?: number;
}
interface Manager extends Employee {
    readonly bonus: number;
}
let manager: Manager = {name: "William Suane2", salary: 2000, bonus : 5};
manager.name =" Alterado";
// manager.bonus = 10;
printName2(manager);
