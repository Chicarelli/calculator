export class Calculator {
    result;
    history;
    operator = '+'

    _operators = ['%', '/', '+', '-', '*']

    clean() {
        this.result = null;
        this.history = null;
    }

    changeOperator(operator) {
        if (this._operators.includes(operator)) {
            operator = operator;
        }
                
    }


}