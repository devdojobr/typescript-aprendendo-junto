/**
 * Created by william on 7/18/17.
 */
function print(val) {
    console.log(val);
}
print("Message here");
function printOrNot(flag = false) {
    let str = flag ? "flag is true" : "flag is false";
    console.log(str);
}
printOrNot(true);
let sumAnonymous = function (n1, n2) {
    console.log(`sum: ${n1 + n2}`);
};
sumAnonymous(1, 2);
sumNotAnonymous(2, 2);
function sumNotAnonymous(n1, n2) {
    console.log(`sum: ${n1 + n2}`);
}
sumNotAnonymous(2, 2);
let sumArrow1 = (n1, n2) => n1 + n2;
let sumArrow2 = (n1, n2) => {
    return n1 + n2;
};
let objectArrow = (name, surname) => ({ name: name, surname: surname });
// console.log(sumArrow1(3,3));
// console.log(sumArrow2(4,4));
// console.log(objectArrow("William","Suane"));
console.log("-----------------");
function testThis() {
    return this;
}
console.log(testThis());
console.log(this);
let objExample = {
    name: "Jiraya",
    lastName: "Ninja",
    fullName: function () {
        return this;
    },
    fullName2: () => {
        return this;
    },
    thisExample: this
};
console.log(objExample.name);
console.log(objExample.fullName());
console.log(objExample.fullName2());
console.log(objExample.thisExample);
let lottery = {
    names: ["Gon", "Killua", "Leorio"],
    test: "lalala",
    createLotteryPicker: function () {
        console.log("first level this: " + this.names, +" " + this.test);
        return function () {
            console.log("second level this: " + this);
            let pickedPersonNumber = Math.floor(Math.random() * 3);
            return { name: this.names[pickedPersonNumber] };
        };
    }
};
let personPicker = lottery.createLotteryPicker();
let pickedPerson = personPicker();
console.log(pickedPerson);
//# sourceMappingURL=functions.js.map