//ทำงานกับ object

//ตัวแปรเก็บข้อมูล
const CustomerName = "Jaturaphat Janseeda"
const age = 21
const customer = {
    CustomerName,
    age,
    phoneNumber: 0886274546,
    birthday:18122000,
    showData(){
        console.log("ชื่อ : "+ CustomerName);
    }
}

customer.showData()