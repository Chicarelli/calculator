export class Calculator {
  _operators = ["%", "÷", "+", "-", "x"];

  actualNumber = null;
  result = 0;
  operator = "+";

  clean() {
    this.actualNumber = "";
    this.result = 0;
    this.operator = "+";
  }

  setActualNumber(number) {
    if (!this.actualNumber) {
      this.actualNumber = number;
      return;
    }
    this.actualNumber = `${this.actualNumber}${number}`;
  }

  setOperator(operator) {
    if (!this._operators.includes(operator)) {
      return this.isCleanKey(operator) ? this.clean() : this.handleEquals();
    }

    if (!this.actualNumber) {
      this.operator = operator;
      return;
    }

    this.countNumber();
    this.actualNumber = "";
    this.operator = operator;
  }

  countNumber() {
    const makeExpression = {
      "+": () => Number(this.result) + Number(this.actualNumber),
      "-": () => Number(this.result) - Number(this.actualNumber),
      x: () => Number(this.result) * Number(this.actualNumber),
      "÷": () => Number(this.result) / Number(this.actualNumber),
      "%": () => Number(this.result) % Number(this.actualNumber),
    };

    this.result = makeExpression[this.operator]();

    if (isNaN(this.result)) {
      alert("Something wrong happened");
      this.clean();
    }
  }

  isCleanKey(key) {
    return key === "CE";
  }

  handleEquals() {
    this.countNumber();
    this.actualNumber = "";
    this.operator = "+";
  }
}
