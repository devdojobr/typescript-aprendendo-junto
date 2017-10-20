
import {EmailValidatorExternal} from "./EmailValidatorExternal";
import {URLValidatorExternal} from "./URLValidatorExternal";

let emailExamples2 = ["lala@", "lala@lala", "william.suane@devdojo.com.br"];
let urlExamples2 = ["devdojo.com.br", "www.devdojo.com.br", "http:///devdojo.com.br"];

emailExamples2.forEach(email => {
    console.log(`${email}  ${new EmailValidatorExternal().isValid(email)}`);
});
urlExamples2.forEach(url => {
    console.log(`${url}  ${new URLValidatorExternal().isValid(url)}`);
});