//push , pop , shift , unshift , splice , slice

const data1 = [10,20,30]
console.log(data1);


//push
//เพิ่มต่อท้ายใน array
data1.push(40)
data1.push(...[50,60,70])
// console.log(data1);

//pop
//เอาตัวท้ายออกไป
data1.pop()
// console.log(data1);

//shift
data1.shift()
console.log(data1);

//unshift
data1.unshift(...[6,7,8,9,10])
console.log(data1);

//splice (ตำแหน่งที่จะลบ,จำนวนที่จะลบ,สามารถแทรกข้อมูลเข้าไปได้)
data1.splice(0,4)
console.log(data1);


//slice(ตำแหน่งเริ่มต้น,ตำแหน่งสุดท้าย -1)
const newData1 = data1.slice(0,3) // 1,2,3 [0,1,2]
console.log(newData1);