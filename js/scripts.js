var myGenderFunction=function() {
    var maleUser= document.getElementById("male");
    var femaleUser=document.getElementById("female");
    if (maleUser.checked===true){
        alert("Your gender has been recorded as male");
    }else if (femaleUser.checked===true){
        alert("Your gender has been recorded as female");
    }else{
        alert("Gender is required!");
    }
};


var myBirthdayFunction= function(){
    var dateOfBirth=document.getElementById("date");
    var monthOfBirth=document.getElementById("month");
    var yearOfBirth=document.getElementById("year");
    
    if (dateOfBirth.value<0 || dateOfBirth.value >31) {
        document.getElementById("dateError").innerHTML="Please enter valid date";
        return false;
    } else {
        "";
    }
    if (monthOfBirth.value<0 || monthOfBirth.value>12) {
       document.getElementById("monthError").innerHTML="Please enter valid month";
        return false;
    } else {
        "";
    }
    if (yearOfBirth.value<0 || yearOfBirth.value>2020 ) {
        document.getElementById("yearError").innerHTML="Please enter valid year";
    } else {
        "";
    }
};
    var day=birthday.getDay();
    var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var maleNames=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
    var femaleNames=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];

    var mySecondFunction= function() {
        var male=document.getElementById("male");
        var female=document.getElementById("female");
        if (male.checked===true){
            return male.value;
        }else if (female.checked===true) {
            return female.value;
        }else {
            alert("Please select gender");
        }
    }
