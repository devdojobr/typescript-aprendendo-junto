/**
 * Created by william on 7/17/17.
 */
function printName(person) {
    console.log(person.name);
}
let randomObj = { name: "William", age: 20 };
let randomObj2 = { age: 20 };
printName(randomObj);
let pe = { name: "William Suane" };
let emp = { name: "William Suane2", salary: 2000 };
printName(pe);
printName(emp);
function printName2(person) {
    console.log(person.name);
}
printName2(pe);
printName2(emp);
printName2(randomObj);
printName2({ name: "Test" });
let manager = { name: "William Suane2", salary: 2000, bonus: 5 };
manager.name = " Alterado";
// manager.bonus = 10;
printName2(manager);
//# sourceMappingURL=interfaces.js.map