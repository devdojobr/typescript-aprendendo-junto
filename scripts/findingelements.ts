let element = <HTMLElement> document.getElementById("btn2"); // HTMLElement
console.log(element);
let element2 = document.querySelector(".test"); // Element
console.log(element2);
let element3 = <HTMLDivElement> document.querySelector("#main"); //HTMLDivElement
console.log(element3);
let elements = document.getElementsByTagName("div"); //NodeListfOf<HTMLDivElement>
console.log(elements);
console.log(elements[3]);
let elements2 = document.querySelectorAll(".test"); //NodeList
console.log(elements2);
console.log(elements2[0]); // Node
console.log(<HTMLButtonElement> elements2[0]); // Node
let elements3 = document.getElementsByName("button");// NodeList<HTMLElement>
console.log(elements3);
