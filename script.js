function calculate(firstNum, secondNum, operator){
    let add = Number(prompt("Enter the first number: "));
    let subtract = Number(prompt("Enter the second number: "));
    let multiply = Number(prompt("Enter the third number: "));
    let divide = Number(prompt("Enter the fourth number: "));

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