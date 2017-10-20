"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
class URLValidatorExternal {
    isValid(str) {
        return urlRegex.test(str);
    }
}
exports.URLValidatorExternal = URLValidatorExternal;
//# sourceMappingURL=URLValidatorExternal.js.map