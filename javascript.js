function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let op;
let a;
let b;

function operate(op, a, b) {
    switch (op) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

const numbers = document.querySelectorAll(".number");
const firstNumber = document.querySelector(".a");
const secondNumber = document.querySelector(".b");

const operators = document.querySelectorAll(".operator");
const selectedOperator = document.querySelector(".op");

const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (selectedOperator.textContent == '') {
            firstNumber.textContent += number.textContent;
            a = Number(firstNumber.textContent);
        }
        else {
            secondNumber.textContent += number.textContent;
            b = Number(secondNumber.textContent);
        }
    });
});

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (firstNumber.textContent != '') {
            if (selectedOperator.textContent == '') {
                selectedOperator.textContent = operator.textContent;
                op = selectedOperator.textContent;
            }
            else {
                calculate();
                selectedOperator.textContent = operator.textContent;
                op = selectedOperator.textContent;
            }
        }
    });
});

equals.addEventListener('click', calculate); 

function calculate() {
    if (firstNumber.textContent != '' && selectedOperator.textContent != '' && secondNumber.textContent != '') {
        firstNumber.textContent = operate(op, a, b);
        a = Number(firstNumber.textContent);
        secondNumber.textContent = '';
        b = '';
        selectedOperator.textContent = '';
        op = '';
    }
};

clear.addEventListener('click', () => {
    firstNumber.textContent = '';
    a = '';
    secondNumber.textContent = '';
    b = '';
    selectedOperator.textContent = '';
    op = '';
})