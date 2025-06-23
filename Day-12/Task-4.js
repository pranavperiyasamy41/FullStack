let x = Number(prompt("Enter num1"));
let y = Number(prompt("Enter num2"));

function add(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}
function mul(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}

console.log(`Addition: ${add(x, y)}`);
console.log(`Subtraction: ${sub(x, y)}`);
console.log(`Multiplication: ${mul(x, y)}`);
console.log(`Division: ${div(x, y)}`);
