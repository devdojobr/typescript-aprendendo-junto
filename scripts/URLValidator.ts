namespace Validation {
    let urlRegex: RegExp = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

    export class UrlValidator implements Validator {
        isValid(str: string): boolean {
            return urlRegex.test(str);
        }
    }
}