let firstNum, secondNum;
let isValid;

isValid = false;
while (!isValid) {
    firstNum = Number(prompt("Enter the first number: "));
    if (!isNaN(firstNum)) {
        isValid = true;
    } else {
        console.log("Please enter a valid number.");
    }
}

isValid = false;
while (!isValid) {
    secondNum = Number(prompt("Enter the second number: "));
    if (!isNaN(secondNum)) {
        isValid = true;
    } else {
        console.log("Please enter a valid number.");
    }
}

function calculate(firstNum, secondNum, operator){
    
    operator = prompt("Enter an operator (+, -, *, /): ");

    switch(operator){
        case '+': return add(firstNum, secondNum);
        case '-': return subtract(firstNum, secondNum);
        case '*': return multiply(firstNum, secondNum);
        case '/': return divide(firstNum, secondNum);
        default: return "Invalid operator";
    }
}

function multiply(firstNum, secondNum){
    return firstNum * secondNum;
}

function divide(firstNum, secondNum){
    return firstNum / secondNum;
}

function add(firstNum, secondNum){
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum){
    return firstNum - secondNum;
}