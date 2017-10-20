let key = "key1";
let key2 = "key2";
console.log(sessionStorage.getItem(key));
console.log(sessionStorage.getItem(key2));
sessionStorage.setItem(key, "William");
sessionStorage.setItem(key2, "DevDojo");
console.log(sessionStorage.getItem(key));
console.log(sessionStorage.getItem(key2));

for (let i = 0; i < sessionStorage.length; i++) {
    console.log(sessionStorage.getItem(<string>sessionStorage.key(i)));
}
sessionStorage.removeItem(key);
console.log(sessionStorage.getItem(key));
sessionStorage.clear();
console.log("----------------");
for (let i = 0; i < sessionStorage.length; i++) {
    console.log(sessionStorage.getItem(<string>sessionStorage.key(i)));
}

let key3 = "localStorageKey";
// localStorage.setItem(key3, "Trying local storage");
console.log(localStorage.getItem(key3));
localStorage.clear();