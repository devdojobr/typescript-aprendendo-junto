/**
 * Created by william on 7/13/17.
 */
var p = document.createElement('p');
var ola = "DevDojo Vocês são foda";
p.textContent = ola;
document.body.appendChild(p);
let num = 10;
let bool = true;
let str = "A beautiful message";
let str2 = 'A beautiful message';
let str3 = `${str2} to william
finishing my string`;
console.log(str3);
function func() {
}
if (bool !== null) {
}
if (bool === undefined) {
}
if (bool) {
    let i;
    for (i = 0; i < 3; i++) {
        // console.log(i);
    }
}
// console.log("value of "+i);
let list = [1, 2, 3];
let list2 = [1, 2, 3];
let tuple;
tuple = ["william", 22];
// tuple = [22,"william"];
tuple = ["william", 22];
// console.log(tuple[0].toLowerCase());
// console.log(tuple[1]);
var Day;
(function (Day) {
    Day[Day["MONDAY"] = 0] = "MONDAY";
    Day[Day["TUESDAY"] = 1] = "TUESDAY";
    Day[Day["WEDNESDAY"] = 2] = "WEDNESDAY";
})(Day || (Day = {}));
let day = Day.MONDAY;
// console.log(`day: ${day} | ${Day.TUESDAY} ${Day.WEDNESDAY}`);
// console.log(`day: ${Day[0]} | ${Day[1]} ${Day[2]}`);
// console.log(true === 1);
// function add(v1: number, v2: number, v3?: number): number {
//     if (v3 !== undefined)
//         return v1 + v2 + v3;
//     return v1 + v2;
// }
function add(v1, v2, v3) {
    if (v3 !== undefined)
        return v1 + v2 + v3;
    return v1 + v2;
}
console.log(`add ${add(1, 2)}`);
console.log(`add ${add("quem é o ", "gatao")}`);
let var1 = "sasa";
let stringLength = var1.length;
let stringUpperCase = var1.toUpperCase();
console.log(stringLength);
console.log(stringUpperCase);
function add2(v1, ...v2) {
    let sum = 0;
    for (let i = 0; i < v2.length; i++) {
        sum += v2[i];
    }
    console.log(v1 + sum);
}
add2("Sum is: ", 1, 2, 4, 5);
//# sourceMappingURL=olamundo.js.map