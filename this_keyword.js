const person ={
    name:'ram',
    age:20,
    greet: function(){
        console.log(`hellow , my  name is ${this.name}`);

        function inner(){
            console.log(`inner function: my name is ${this.name}`);

        }
        inner();
        const innerArrowFunction = () => {
            console.log(`Inner Arrow Function: My name is ${this.name}`);
        }
        innerArrowFunction(); 
        
    }
};
person.greet();