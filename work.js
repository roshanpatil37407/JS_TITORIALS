const fun2 =()=>{
    console.log("fun to start and end");
    
}

const fun1 =()=>{
    console.log("fun1 to start and end");
    fun2();
        console.log("fun to calls");
    
    
}
fun1();




const fun3 =()=>{
   setTimeout(()=>{
    console.log("fun to start and end");
   },2000)
    
    
};

const fun =()=>{
    console.log("fun1 to start and end");
    fun3();
        console.log("fun to calls");
    
    
}
fun();