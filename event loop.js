const fun =()=>{
    console.log("1");
    fun1();
}

const fun1 =()=>{
    console.log("2");
    setTimeout(()=>{
        console.log("3");
       },2000)
        fun2();
    
   
        
}


const fun2 =()=>{
    console.log("4");
    
}
fun();