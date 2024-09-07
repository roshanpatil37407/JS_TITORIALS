// const pr = new Promise((resolve, reject) => {
//     setTimeout (()=>{
//         resolve("hello");
        
        
        
//        },2000);
// })

// pr.then((res)=>{
//     console.log(res);
    
// }).catch((error) =>{
//     console.log(error);
// }).finally(()=>{
//     console.log("dont worry");
// })


const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; 
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Error fetching data.");
            }
        }, 2000); 
    });
};


fetchData()
    .then(result => {
        console.log(result); 
    })
    .catch(error => {
        console.error(error); 
    })
    .finally(() => {
        console.log("Request finished."); 
    });