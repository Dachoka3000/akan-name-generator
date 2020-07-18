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
        document.getElementById("dateError").innerHTML="*Please enter valid date";
        return false;
    } else {
        "";
    }
    if (monthOfBirth.value<0 || monthOfBirth.value>12) {
       document.getElementById("monthError").innerHTML="*Please enter valid month";
        return false;
    } else {
        "";
    }
    if (yearOfBirth.value<0 || yearOfBirth.value>2020 ) {
        document.getElementById("yearError").innerHTML="*Please enter valid year";
        return false;
    } else {
        "";
    };
};

var getAkanName= function(){
    
    var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var maleNames=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
    var femaleNames=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
    var maleUser=document.getElementById("male");
    var femaleUser=document.getElementById("female");
    
    var c= (document.getElementById("year").value)/100; //represents century;
    var y= (document.getElementById("year").value)%100; // represents year born
    var m=document.getElementById("month").value;//represents the month the user was born
    var dt=document.getElementById("date").value;//represents the date of the month the user was born
    var dayOfWeek= (((c/4)-2*c-1)+((5*y/4))+((26*(m+1)/10))+dt)%7;
    
    if (maleUser.checked===true && dayOfWeek<=0) {
        return days[0];
        alert("Your akan name is "+ maleNames[0]);
    } else if (maleUser.checked===true && dayOfWeek<=1)
    
    
}