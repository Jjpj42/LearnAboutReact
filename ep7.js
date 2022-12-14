//Destructuring(การสลายโครงสร้าง)

// const colors=["แดง","ขาว","ดำ"]
// const [red,white,black] = colors
// console.log(red,white,black);


const colored = {
    red:"แดง",
    white:"ขาว",
    black:"ดำ"
}
// const BlackColor = colored.black
// console.log(BlackColor);

//เก็บข้อมูลเข้าไปอยู่ใน black
const {red:red,white:white,black:black} = colored
console.log(red,white,black);

