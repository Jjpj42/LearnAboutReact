//Array Filter

//ตัวอย่างง่ายๆ
const data=[10,20,30,40,50]
const result = data.filter(e=>{
    return e>10
})
console.log(result);

//อีกตัวอย่าง
const Alluser = [
    {Name:"Jaturaphat Janseeda",Age:21,City:"ปทุมธานี"},
    {Name:"Benyapa Faksawut",Age:19,City:"สมุทรปราการ"},
    {Name:"Summud kernma",Age:20,City:"กรุงเทพ"}
]

const findUser = Alluser.filter(e=>{
    return e.Age>=20
})
console.log(findUser);