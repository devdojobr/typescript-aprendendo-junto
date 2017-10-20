let nameAge = new Map();
nameAge.set("Gon", 14);
nameAge.set("Killua", 14);
nameAge.set("Gon", 15);
console.log(nameAge);
let nameAge2 = new Map().set("Gon", 14).set("Killua", 14);
console.log(nameAge2);
let animeEpisodes = new Map([
    ["DBZ", 200], ["FullMetal", 64]
]);
console.log(animeEpisodes);
console.log(animeEpisodes.get("DBZ"));
console.log(animeEpisodes.has("DBZ"));
// console.log(animeEpisodes.delete("DBZ"));
// console.log(animeEpisodes.has("DBZ"));
for (let key of animeEpisodes.keys()) {
    console.log(key);
}
for (let v of animeEpisodes.values()) {
    console.log(v);
}
for (let entry of animeEpisodes.entries()) {
    console.log(`${entry[0]} | ${entry[1]}`);
}
for (let entry of animeEpisodes) {
    console.log(`${entry[0]} | ${entry[1]}`);
}
for (let [key, value] of animeEpisodes.entries()) {
    console.log(`${key} | ${value}`);
}
animeEpisodes.clear();
console.log(animeEpisodes.size);
//# sourceMappingURL=map.js.map