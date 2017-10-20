
import {ValidatorExternal} from "./ValidatorExternal";

let emailRegex: RegExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

export class EmailValidatorExternal implements ValidatorExternal {
    isValid(str: string): boolean {
        return emailRegex.test(str);
    }
}

