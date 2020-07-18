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










var myFirstFunction= function(){
    var birthday= new Date();
    var dateOfBirth=parseInt(document.getElementById("date").value);
    var monthOfBirth=parseInt(document.getElementById("month").value);
    var yearOfBirth=parseInt(document.getElementById("year").value);
    
    if (date <0 || date >31) {
        document.getElementsByClassName("dateError").innerHTML="Please enter valid date";
        return false;
    } else {
        birthday.setDate(dateOfBirth)
    }
    if (month<0 || month>12) {
        document.getElementsByClassName("monthError").innerHTML="Please enter valid month";
        return false;
    } else {
        birthday.setMonth(monthOfBirth);
    }
    if (year<0) {
        document.getElementsByClassName("yearError").innerHTML="Please enter valid year";
        return false;
    } else {
        birthday.setFullYear(yearOfBirth);
    }

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
}