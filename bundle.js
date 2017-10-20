(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
class EmailValidatorExternal {
    isValid(str) {
        return emailRegex.test(str);
    }
}
exports.EmailValidatorExternal = EmailValidatorExternal;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
class URLValidatorExternal {
    isValid(str) {
        return urlRegex.test(str);
    }
}
exports.URLValidatorExternal = URLValidatorExternal;

},{}],3:[function(require,module,exports){
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

},{"./EmailValidatorExternal":1,"./URLValidatorExternal":2}]},{},[3]);
