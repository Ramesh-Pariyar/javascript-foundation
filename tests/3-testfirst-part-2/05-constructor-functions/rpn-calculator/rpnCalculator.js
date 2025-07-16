function RPNCalculator() {
  this.stack = [];
}

RPNCalculator.prototype.push = function (value) {
  this.stack.push(value);
};

RPNCalculator.prototype.plus = function () {
  this._requireStackLength(2);
  const b = this.stack.pop();
  const a = this.stack.pop();
  this.stack.push(a + b);
};

RPNCalculator.prototype.minus = function () {
  this._requireStackLength(2);
  const b = this.stack.pop();
  const a = this.stack.pop();
  this.stack.push(a - b);
};

RPNCalculator.prototype.times = function () {
  this._requireStackLength(2);
  const b = this.stack.pop();
  const a = this.stack.pop();
  this.stack.push(a * b);
};

RPNCalculator.prototype.divide = function () {
  this._requireStackLength(2);
  const b = this.stack.pop();
  const a = this.stack.pop();
  this.stack.push(a / b);
};

RPNCalculator.prototype.value = function () {
  return this.stack[this.stack.length - 1];
};

RPNCalculator.prototype._requireStackLength = function (n) {
  if (this.stack.length < n) {
    throw "rpnCalculatorInstance is empty";
  }
};
