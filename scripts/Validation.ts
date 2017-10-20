namespace Validation {
    export interface Validator {
        isValid(str: string): boolean;
    }
}