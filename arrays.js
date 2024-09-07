const numbers = [1, 2, 3, 4, 5];

const firstElement = numbers[0];
const lastElement = numbers[numbers.length - 1];

numbers.push(6);
numbers.unshift(0);

numbers.pop();
numbers.shift();

numbers.splice(2, 1);
numbers.splice(2, 0, 'a');

const slicedArray = numbers.slice(1, 3);

const concatenatedArray = numbers.concat([6, 7]);

const joinedString = numbers.join(', ');

numbers.sort();
numbers.reverse();

const squaredArray = numbers.map(x => x * x);

const evenNumbers = numbers.filter(x => x % 2 === 0);

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

const foundElement = numbers.find(x => x > 3);
const indexOfElement = numbers.indexOf(4);

const hasElement = numbers.includes(3);

const nestedArray = [1, [2, [3, 4]]];
const flatArray = nestedArray.flat(2);

console.log(firstElement); 
console.log(lastElement); 
console.log(slicedArray); 
console.log(numbers); 
console.log(concatenatedArray); 
console.log(joinedString); 
console.log(squaredArray); 
console.log(evenNumbers); 
console.log(sum); 
console.log(foundElement); 
console.log(indexOfElement); 
console.log(hasElement); 
console.log(flatArray); 
