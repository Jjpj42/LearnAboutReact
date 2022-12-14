//Default Parameter

getDataAddress = (CustomerName,CustomerAddress= "กรุงเทพ")=>{

    
    // if(!CustomerAddress){
    //     CustomerAddress = "กรุงเทพ"
    // }
    const address= `ชื่อ : ${CustomerName} ที่อยู่ : ${CustomerAddress}`

    return address
}


console.log(getDataAddress("Jaturaphat Janseeda","40/164 หมู่ 4 พฤกษา B ต.คลองสาม อ.คลองหลวง จ.ปทุมธานี"));
console.log(getDataAddress("Benyapa")); 