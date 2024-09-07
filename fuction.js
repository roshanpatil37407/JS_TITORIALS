const fun =(str)=>{
    const vowels ="aeiou";
    for(let char of  vowels ){
    // console.log(str.includes(char));
    if(!str.includes(char)){
        return false;
    }
    }
    return true;
};
console.log(fun(" my name is java scripts"));