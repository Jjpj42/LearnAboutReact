//ทำงานร่วมกับ String

//multi line
const address = `ชื่อ : จตุรภัทร จันทร์สีดา ที่อยู่ : 40/164 หมู่ 4 พฤกษา B ต.คลองสาม อ.คลองหลวง จ.ปทุมธานี ${12120}`
console.log(address);

//แทรกตัวแปร
const Name="จตุรภัทร จันทร์สีดา"
const city = "40/164 หมู่ 4 พฤกษา B ต.คลองสาม อ.คลองหลวง จ.ปทุมธานี"
const addressed = `ชื่อ : ${Name} ที่อยู่: ${city} รหัสไปรษณีย์ ${12120}`
console.log(addressed);