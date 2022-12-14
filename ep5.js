//Spread Operator

const newArr = [100,200,300]

//เพิ่ม newArr เข้าไปใน data
const data=[10,20,...newArr]

//หรือใช้ push ก็ได้ 
const newNumber=[400,500,600]
data.push(...newNumber)

//เอาแค่ค่าท่ี่อยู่ใน arr ไปเพิ่ม โดยไม่ได้เอาทั้งชุดข้อมูล
console.log(data);

