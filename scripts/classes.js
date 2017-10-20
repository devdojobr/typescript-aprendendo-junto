/**
    * @author William Suane for DevDojo on 7/17/17.
    */
class Person2 {
    constructor(name) {
        this._name = name;
    }
    print() {
        console.log(`name: ${this._name}`);
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
class Employee2 extends Person2 {
    constructor(name, salary) {
        super(name);
        // super.name;
        this._salary = salary;
    }
    print() {
        super.print();
        console.log(`salary: ${this._salary}`);
    }
    get salary() {
        return this._salary;
    }
    set salary(value) {
        this._salary = value;
    }
}
let p1 = new Person2("Natsu");
console.log(p1.name);
p1.name = "Natsu 2";
console.log(p1.name);
//# sourceMappingURL=classes.js.map