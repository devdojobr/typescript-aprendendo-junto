let namesSet = new Set<string>();
// namesSet.add("William");
// namesSet.add("DevDojo");
// namesSet.add("William");
namesSet.add("William").add("DevDojo").add("William");
let namesSet2 = new Set<string>(["Brenon", "Sandy", "Wildnei", "Bruno"]);

console.log(namesSet);
console.log(namesSet2);
console.log(namesSet.has("william"));
console.log(namesSet.has("William"));
console.log(namesSet.delete("William"));
console.log(namesSet.delete("william"));
console.log(namesSet2.size);
namesSet.clear();

for (let aux of namesSet2) {
    console.log(aux);
}

console.log("---------");

namesSet2.forEach(value => console.log(value));