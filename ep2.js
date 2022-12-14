// Arrow Function

// แบบเดิม
    function Arrow(fname,lname){
        return fname+lname
    }

    console.log(Arrow("Jaturaphat ","Janseeda"));


//แบบใหม่ Arrow
    fullname=(fname,lname)=>fname+lname
    console.log(fullname("Jaturaphat ","Janseeda"));