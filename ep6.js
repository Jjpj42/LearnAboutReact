//Rest Parameter


summation = (...newArr)=>{
    let total=0
    for(let i of newArr){
        total += i
    }
    return total
}

console.log(summation(10,20,30));
console.log(summation(30,40,50,60));