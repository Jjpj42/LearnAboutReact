//ค้นหาข้อมูลใน Array

const color=["แดง","ดำ","ขาว","เขียว","น้ำตาล"]

//IndexOf(ข้อมูล) ถ้าค้นเจอจะได้ตำแหน่งข้อมูล ถ้าค้นไม่เจอจะได้ค่า -1
const index = color.indexOf("ดำ")
console.log(index);


//find(ข้อมูล) ได้ข้อมูลที่ค้นเจอ ถ้าไม่เจอจะได้ undefined
const index2 = color.find(element=>{
    return element==="น้ำตาล"
})
console.log(index2);


//findIndex(ข้อมูล) ถ้าค้นเจอจะได้ตำแหน่งข้อมูล ถ้าค้นไม่เจอจะได้ค่า -1
const index3 = color.findIndex(element=>{
    return element==="ดำ"
})
console.log(index3);