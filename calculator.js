export class Calculator {
    _operators = ['%', '/', '+', '-', '*']

    actualNumber = null;
    result = 0;
    operator = '+'

    clean() {
        this.actualNumber = null;
        this.result = 0;
        this.history = null;
    }

    setActualNumber(number) {
        this.actualNumber = number;
    }

    setOperator(operator) {
        if (!his._operators.includes(operator)) return;

        if (actualNumber == null) {
            this.operator = operator;
            return;
        }

        countNumber();
        actualNumber = null;
        this.operator = operator;
    }

    countNumber() {
        const makeExpression = {
            '+' : () => this.result + this.actualNumber,
            '-' : () => this.result = this.actualNumber,
            '*' : () => this.result * this.actualNumber,
            '/' : () => this.result / this.actualNumber,
            '%' : () => this.result % this.actualNumber
        }

        this.result = makeExpression[this.operator]();
    }
}