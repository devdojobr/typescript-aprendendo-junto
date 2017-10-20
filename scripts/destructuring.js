var Destructuring;
(function (Destructuring) {
    let person = { name: "William", lastname: "Suane" };
    let name1 = person.name;
    let lastname1 = person.lastname;
    console.log(name1);
    console.log(lastname1);
    let { name: name2, lastname: lastname2 } = person;
    console.log(name2);
    console.log(lastname2);
    let array = ["DevDojo", "Awesomeness"];
    let [a, b] = array;
    console.log(a);
    console.log(b);
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    function example(person) {
        console.log(person.name);
    }
    function example2({ name }) {
        console.log(name);
    }
    example(new Person("William"));
    example2({ name: "Thor" });
})(Destructuring || (Destructuring = {}));
//# sourceMappingURL=destructuring.js.map