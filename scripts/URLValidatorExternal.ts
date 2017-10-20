import {ValidatorExternal} from "./ValidatorExternal";

let urlRegex: RegExp = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

export class URLValidatorExternal implements ValidatorExternal {
    isValid(str: string): boolean {
        return urlRegex.test(str);
    }
}
