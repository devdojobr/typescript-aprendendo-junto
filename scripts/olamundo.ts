/**
 * Created by william on 7/13/17.
 */
var p = document.createElement('p');
var ola: string = "DevDojo Vocês são foda";
p.textContent = ola;
document.body.appendChild(p);

let num: number = 10;
let bool: boolean = true;
let str: string = "A beautiful message";
let str2: string = 'A beautiful message';
let str3: string = `${str2} to william
finishing my string`;
console.log(str3);
function func(): void {
}
if (bool !== null) {
}
if (bool === undefined) {
}

if (bool) {
    let i: number;
    for (i = 0; i < 3; i++) {
        // console.log(i);
    }
}
// console.log("value of "+i);
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let tuple: [string, number];
tuple = ["william", 22];
// tuple = [22,"william"];
tuple = ["william", 22];
// console.log(tuple[0].toLowerCase());
// console.log(tuple[1]);
enum Day{MONDAY, TUESDAY, WEDNESDAY}
let day: Day = Day.MONDAY;
// console.log(`day: ${day} | ${Day.TUESDAY} ${Day.WEDNESDAY}`);
// console.log(`day: ${Day[0]} | ${Day[1]} ${Day[2]}`);

// console.log(true === 1);

// function add(v1: number, v2: number, v3?: number): number {
//     if (v3 !== undefined)
//         return v1 + v2 + v3;
//     return v1 + v2;
// }
function add(v1: any, v2: any, v3?: any): any {
    if (v3 !== undefined)
        return v1 + v2 + v3;
    return v1 + v2;
}

console.log(`add ${add(1, 2)}`);
console.log(`add ${add("quem é o ", "gatao")}`);

let var1: any = "sasa";

let stringLength: number = (<string> var1).length;
let stringUpperCase: string = (var1 as string).toUpperCase();

console.log(stringLength);
console.log(stringUpperCase);

function add2(v1: string, ...v2: number[]): void {
    let sum: number = 0;
    for (let i = 0; i < v2.length; i++) {
        sum += v2[i];
    }
    console.log(v1 + sum);
}
add2("Sum is: ",1,2,4,5);