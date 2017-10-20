"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
class EmailValidatorExternal {
    isValid(str) {
        return emailRegex.test(str);
    }
}
exports.EmailValidatorExternal = EmailValidatorExternal;
//# sourceMappingURL=EmailValidatorExternal.js.map