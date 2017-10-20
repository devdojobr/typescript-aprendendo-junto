/**
    * @author William Suane for DevDojo on 7/17/17.
    */
class Person2 {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    print(): void {
        console.log(`name: ${this._name}`);
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}
class Employee2 extends Person2 {
    private _salary: number;

    constructor(name: string, salary: number) {
        super(name);
        // super.name;
        this._salary = salary;
    }
    print():void{
        super.print();
        console.log(`salary: ${this._salary}`);
    }

    get salary(): number {
        return this._salary;
    }

    set salary(value: number) {
        this._salary = value;
    }
}

let p1 = new Person2("Natsu");
console.log(p1.name);
p1.name ="Natsu 2";
console.log(p1.name);

