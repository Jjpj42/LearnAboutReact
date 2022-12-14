//การทำ Loop Array 
const data=[10,20,30]

//For Loop
for(let i=0 ; i<data.length /* data.length = 3 */;i++){
    // console.log(`ลำดับที่ ${i} : || Data : ${data[i]}`);
}

//ForEach
let i=0
data.forEach(Element=>{
    // console.log(`ลำดับที่ ${i} : || Data : ${Element}`);
    // i++
})

//For Of
for( const Element of data){
    // console.log(`ลำดับที่ ${i} : || Data : ${Element}`);
    // i++
}
