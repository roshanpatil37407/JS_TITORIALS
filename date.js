
let now = new Date();
console.log(now); 


let specificDate = new Date(2024, 8, 3, 12, 0, 0); 
console.log(specificDate); 


let dateString = new Date("2024-09-03T12:00:00Z");
console.log(dateString);


let epochDate = new Date(0);
console.log(epochDate); 


// Getting Date and Time Components
let nows = new Date();

console.log(now.getFullYear()); 
console.log(now.getMonth());    
console.log(now.getDate());    
console.log(now.getDay());      
console.log(now.getHours());   
console.log(now.getMinutes());  
console.log(now.getSeconds()); 
console.log(now.getMilliseconds()); 
console.log(now.getTime()); 
console.log(now.getTimezoneOffset()); 


// Date Conversion Methods
let Nows = new Date();

console.log(now.toDateString()); 
console.log(now.toTimeString()); 
console.log(now.toISOString()); 
console.log(now.toUTCString()); 
console.log(now.toLocaleDateString()); 
console.log(now.toLocaleTimeString()); 
console.log(now.toLocaleString());    



// Comparing Dates
let date1 = new Date(2024, 8, 3);
let date2 = new Date(2025, 8, 3); 

console.log(date1 > date2);
console.log(date1 < date2); 
console.log(date1.getTime() === date2.getTime()); 



// set the time
let set = new Date();
set.setFullYear(2025, 0, 1); 
console.log(set);


set.setHours(15, 30, 45); 
console.log(set);
