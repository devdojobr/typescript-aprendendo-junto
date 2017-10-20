let promise = new Promise((resolve, reject) => {
    // Opening the file
    let isOpened = true;
    if (isOpened)
        resolve("Opened");
    reject("Not Opened");
});
// promise.then((fromResolve) => {
//     console.log(fromResolve);
// }).catch((fromReject) => {
//     console.log(fromReject);
// });
function openFile() {
    return new Promise((resolve, reject) => {
        // Opening the file
        let isOpened = false;
        if (isOpened)
            resolve("Opened");
        reject("Not Opened");
    });
}
function readFile() {
    return new Promise((resolve, reject) => {
        // Opening the file
        let isOpened = true;
        if (isOpened)
            resolve("read");
        reject("Not read");
    });
}
function deleteFile() {
    return new Promise((resolve, reject) => {
        // Opening the file
        let isOpened = true;
        if (isOpened)
            resolve("deleted");
        reject("Not deleted");
    });
}
openFile()
    .then(() => readFile()
    .then(() => deleteFile()
    .then(() => console.log("everything ok"))
    .catch((frj) => console.log(frj)))
    .catch((frj) => console.log(frj)))
    .catch((frj) => console.log(frj));
Promise.all([openFile(), readFile(), deleteFile()]).then().catch();
Promise.race([openFile(), readFile(), deleteFile()]).then().catch();
//# sourceMappingURL=promises.js.map