const a = 10;
const b = 5;
const c = "10";

// Arithmetic Operators
const addition = a + b;
const subtraction = a - b;
const multiplication = a * b;
const division = a / b;
const modulus = a % b;
const exponentiation = a ** b;
// const increment = ++a;
// const decrement = --b;

// Comparison Operators
const equalTo = a == c;
const strictlyEqualTo = a === c;
const notEqualTo = a != b;
const strictlyNotEqualTo = a !== c;
const greaterThan = a > b;
const lessThan = a < b;
const greaterThanOrEqualTo = a >= b;
const lessThanOrEqualTo = a <= b;

// Logical Operators
const andOperator = (a > 5) && (b < 10);
const orOperator = (a > 10) || (b < 10);
const notOperator = !(a == b);

// Bitwise Operators
const bitwiseAnd = a & b;
const bitwiseOr = a | b;
const bitwiseXor = a ^ b;
const bitwiseNot = ~a;
const leftShift = a << 1;
const rightShift = a >> 1;
const unsignedRightShift = a >>> 1;

// Assignment Operators
let x = 10;
x += 5;
x -= 3;
x *= 2;
x /= 2;
x %= 3;
x **= 2;

// Ternary Operator
const isEven = (a % 2 === 0) ? 'Even' : 'Odd';

// typeof Operator
const typeOfA = typeof a;
const typeOfC = typeof c;

// Instanceof Operator
const isInstanceOf = c instanceof String;

console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);
console.log(modulus);
console.log(exponentiation);


console.log(equalTo);
console.log(strictlyEqualTo);
console.log(notEqualTo);
console.log(strictlyNotEqualTo);
console.log(greaterThan);
console.log(lessThan);
console.log(greaterThanOrEqualTo);
console.log(lessThanOrEqualTo);

console.log(andOperator);
console.log(orOperator);
console.log(notOperator);

console.log(bitwiseAnd);
console.log(bitwiseOr);
console.log(bitwiseXor);
console.log(bitwiseNot);
console.log(leftShift);
console.log(rightShift);
console.log(unsignedRightShift);

console.log(x);
console.log(isEven);
console.log(typeOfA);
console.log(typeOfC);
console.log(isInstanceOf);
