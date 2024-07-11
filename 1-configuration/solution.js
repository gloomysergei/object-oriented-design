/* eslint-disable consistent-return */
/* eslint-disable indent */
/* eslint-disable default-case */
/* eslint-disable quotes */
/* eslint-disable no-else-return */
const hasNumber = (string) => string.search(/\d/) !== -1;

class PasswordValidator {
  constructor(options) {
    const defaultOptions = { minLength: 8, containNumbers: true };
    this.options = { ...defaultOptions, ...options };
  }

  conditionTwo(text) {
    return this.options.minLength <= text.length
      ? {}
      : { minLength: "too small" };
  }

  conditionOne(text) {
    switch (hasNumber(text)) {
      case true:
        return text.length < this.options.minLength
          ? { minLength: "too small" }
          : {};

      case false:
        return text.length < this.options.minLength
          ? {
              minLength: "too small",
              containNumbers: "should contain at least one number",
            }
          : { containNumbers: "should contain at least one number" };

      default:
        break;
    }
  }

  validate(text) {
    const result = this.options.containNumbers
      ? this.conditionOne(text)
      : this.conditionTwo(text);
    return result;
  }
}
export default PasswordValidator;
