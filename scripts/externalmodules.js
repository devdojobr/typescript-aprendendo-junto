"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmailValidatorExternal_1 = require("./EmailValidatorExternal");
const URLValidatorExternal_1 = require("./URLValidatorExternal");
let emailExamples2 = ["lala@", "lala@lala", "william.suane@devdojo.com.br"];
let urlExamples2 = ["devdojo.com.br", "www.devdojo.com.br", "http:///devdojo.com.br"];
emailExamples2.forEach(email => {
    console.log(`${email}  ${new EmailValidatorExternal_1.EmailValidatorExternal().isValid(email)}`);
});
urlExamples2.forEach(url => {
    console.log(`${url}  ${new URLValidatorExternal_1.URLValidatorExternal().isValid(url)}`);
});
//# sourceMappingURL=externalmodules.js.map