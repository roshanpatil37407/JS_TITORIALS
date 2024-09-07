function operateOnNumbers(operation, a, b) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

console.log(operateOnNumbers(add, 5, 3)); 
console.log(operateOnNumbers(subtract, 5, 3)); 
