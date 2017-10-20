let array = ["DevDojo", "Awesomeness"];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
array.forEach((name) => {
    console.log(name);
    //break, continue, return
});
let person = {name: "William", lastname: "Suane"};
for(let prop in person){
    console.log(prop);
}
for(let prop in array){
    console.log(prop);
    console.log(typeof (prop));
}
console.log("---------------");
for(let prop of array){
    console.log(prop);
}
