var Validation;
(function (Validation) {
    let emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    class EmailValidator {
        isValid(str) {
            return emailRegex.test(str);
        }
    }
    Validation.EmailValidator = EmailValidator;
})(Validation || (Validation = {}));
//# sourceMappingURL=EmailValidator.js.map