function doSomethingWithString(input: string): string {
    if (input === undefined || input === "") {
        throw new StringNotValidError(`The string ${input} is not valid`);
    }
    return input;
}

class ApplicationError implements Error {
    name: string = "ApplicationError";

    constructor(public message: string) {
        if (typeof console !== undefined) {
            console.log(`Error: ${message}`);
        }
    }

    toString(): string {
        return `${this.name} : ${this.message}`;
    }
}

class StringNotValidError extends ApplicationError {

}

try {
    let input = doSomethingWithString("");
} catch (err) {
    if (err instanceof ApplicationError) {
        console.log(`No action inside if`);
        throw err;
    }
    console.log(`No action`);
}finally {
    console.log(`always executed`);
}


