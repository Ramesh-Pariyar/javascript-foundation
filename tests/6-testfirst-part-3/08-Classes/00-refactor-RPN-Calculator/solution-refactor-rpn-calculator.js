/* eslint-disable no-unused-vars, no-throw-literal*/

/*
  Refactor the constructor function below and use ES2015 Class Syntax
*/
class RPNCalculator {
  constructor() {
    this.stack = [];
  }
  push(value) {
    this.stack.push(value);
  }
  plus() {
    this._requireStackLength(2);
    const b = this.stack.pop();
    const a = this.stack.pop();
    this.stack.push(a + b);
  }
  minus() {
    this._requireStackLength(2);
    const b = this.stack.pop();
    const a = this.stack.pop();
    this.stack.push(a - b);
  }
  times() {
    this._requireStackLength(2);
    const b = this.stack.pop();
    const a = this.stack.pop();
    this.stack.push(a * b);
  }
  divide() {
    this._requireStackLength(2);
    const b = this.stack.pop();
    const a = this.stack.pop();
    this.stack.push(a / b);
  }
  value() {
    return this.stack[this.stack.length - 1];
  }
  _requireStackLength(n) {
    if (this.stack.length < n) {
      throw "rpnCalculatorInstance is empty";
    }
  }
}
