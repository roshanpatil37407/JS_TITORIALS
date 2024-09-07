function outer() {
    let outerVar = "I'm outside!";
    
    function inner() {
        console.log(outerVar); 
    }
    
    return inner; 
}

const closureFunction = outer();
closureFunction(); 
