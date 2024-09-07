// Creating an object to represent a car
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021,
    color: 'Blue',
    isElectric: false,
    start: function() {
        console.log('The car is starting...');
    },
    paint: function(newColor) {
        this.color = newColor;
        console.log(`The car has been painted ${newColor}.`);
    }
};


console.log(car.make); 
console.log(car['model']); 

car.year = 2022;


car.start(); 
car.paint('Red'); 

console.log(car);


// const person = {
//     name: 'Alice',
//     age: 30,
//     address: {
//         street: '123 Main St',
//         city: 'Wonderland',
//         zip: '12345'
//     }
// };

// console.log(person.address.city); 

