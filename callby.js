// Call by Value (Primitive types)
function changePrimitive(x) {
    x = 10;
    console.log(`Inside function: x = ${x}`); 
}

let a = 5;
console.log(`Before function call: a = ${a}`); 
changePrimitive(a);
console.log(`After function call: a = ${a}`); 




// Call by Reference (Objects)
function changeObject(obj) {
    obj.name = 'Bob';
    console.log(`Inside function: obj.name = ${obj.name}`); 
}

let person = { name: 'Alice' };
console.log(`Before function call: person.name = ${person.name}`); 
changeObject(person);
console.log(`After function call: person.name = ${person.name}`); 
