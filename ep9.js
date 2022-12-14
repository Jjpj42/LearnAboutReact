// join , concat

//ประกาศข้อมูลเก็บไว้ใน data
const data=[10,20,30,40,50]
console.log(data);

//join ข้อมูลเข้าด้วยกันเป็นชุดเดียว
const result = data.join()
console.log(result);


//การใช้ concat 
const data1=[10,20,30]
const data2 = [40,50,60]
// ดึง data2 เข้าไปเก็บ ใน data 1 โดยใช้ concat
const Alldata = data1.concat(data2)
console.log(Alldata);
