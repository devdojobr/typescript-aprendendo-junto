function doSomethingWithString(input) {
    if (input === undefined || input === "") {
        throw new StringNotValidError(`The string ${input} is not valid`);
    }
    return input;
}
class ApplicationError {
    constructor(message) {
        this.message = message;
        this.name = "ApplicationError";
        if (typeof console !== undefined) {
            console.log(`Error: ${message}`);
        }
    }
    toString() {
        return `${this.name} : ${this.message}`;
    }
}
class StringNotValidError extends ApplicationError {
}
try {
    let input = doSomethingWithString("");
}
catch (err) {
    if (err instanceof ApplicationError) {
        console.log(`No action inside if`);
        throw err;
    }
    console.log(`No action`);
}
finally {
    console.log(`always executed`);
}
//# sourceMappingURL=errors.js.map