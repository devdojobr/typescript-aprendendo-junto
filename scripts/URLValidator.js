var Validation;
(function (Validation) {
    let urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    class UrlValidator {
        isValid(str) {
            return urlRegex.test(str);
        }
    }
    Validation.UrlValidator = UrlValidator;
})(Validation || (Validation = {}));
//# sourceMappingURL=URLValidator.js.map