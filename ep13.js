//Array Map
// const data=[10,20,30]
// console.log("ชุดข้อมูลเดิม :"+data);

// const sum = data.map( (e,i)=>{
//     const a=e*2
//     return `ชุดข้อมูลใหม่ตัวที่ ${i+1} คือ ${a}`
// })
// console.log(sum);

//ต้องการค่าแค่บางส่วน
const data = [{Name:"Jaturaphat Janseeda",
                age:21,
                NumberPhone:0886274546},
            {Name:"Benyapa faksawut",
                age:19,
                NumberPhone:0994563746}
            ]

const result = data.map(e=>{
    return "อายุ : "+e.age
})
console.log(result);