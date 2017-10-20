/// <reference path="Validation.ts"/>
/// <reference path="URLValidator.ts"/>
/// <reference path="EmailValidator.ts"/>
var EmailValidator = Validation.EmailValidator;
var UrlValidator = Validation.UrlValidator;
let emailExamples = ["lala@", "lala@lala", "william.suane@devdojo.com.br"];
let urlExamples = ["devdojo.com.br", "www.devdojo.com.br", "http:///devdojo.com.br"];
emailExamples.forEach(email => {
    console.log(`${email}  ${new EmailValidator().isValid(email)}`);
});
urlExamples.forEach(url => {
    console.log(`${url}  ${new UrlValidator().isValid(url)}`);
});
//# sourceMappingURL=namespacetest.js.map