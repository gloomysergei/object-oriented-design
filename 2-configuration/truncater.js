class Truncater {
  static defaultOptions = { separator: "...", length: undefined };

  constructor(options) {
    this.options = { ...this.constructor.defaultOptions, ...options };
  }
  static defaultOptions = { separator: "...", length: undefined };
  truncate(text, param) {
    this.options = { ...this.options, ...param };
    if (
      this.options.length === undefined ||
      this.options.length >= text.length
    ) {
      return text;
    } else {
      const newString = text.slice(0, this.options.length);
      return `${newString}${this.options.separator}`;
    }
  }
}
export default Truncater;
