var myGenderFunction=function() {
    var maleUser= document.getElementById("male");
    var femaleUser=document.getElementById("female");
    if (maleUser.checked===true){
        alert("Your gender has been recorded as male. Please confirm details below.");
    }else if (femaleUser.checked===true){
        alert("Your gender has been recorded as female.Please confirm details below.");
    }else{
        alert("Gender is required!");
        return false;
    }
};


var myBirthdayFunction= function(){
    var dateOfBirth=document.getElementById("date");
    var monthOfBirth=document.getElementById("month");
    var yearOfBirth=document.getElementById("year");
    
    if (dateOfBirth.value<0 || dateOfBirth.value >31) {
        document.getElementById("dateError").innerHTML="*Please enter valid date";
        return false;
    } else if(dateOfBirth.value==="" || dateOfBirth.value=== null) {
        document.getElementById("dateError").innerHTML="*This field is required!";
        return false;
    } else {
        document.getElementById("dateError").innerHTML="*Response recorded.Please confirm details below";
    }
    if(monthOfBirth.value<0 || monthOfBirth.value>12) {
       document.getElementById("monthError").innerHTML="*Please enter valid month";
        return false;
    } else if(monthOfBirth.value==="" || monthOfBirth.value===null) {
        document.getElementById("monthError").innerHTML="*This field is required!";
        return false;
    } else {
        document.getElementById("monthError").innerHTML="*Response recorded.Please confirm details below";
    }
    if(yearOfBirth.value<0) {
        document.getElementById("yearError").innerHTML="*Please enter valid year";
        return false;
    } else if(yearOfBirth.value==="" || yearOfBirth.value===null) {
        document.getElementById("yearError").innerHTML="*This field is required!";
        return false;
    } else {
        document.getElementById("yearError").innerHTML="*Response recorded. Please confirm details below!";
 
    };
    alert("Your response has been recorded. Please confirm details below.");
    
};

var getAkanName= function(){
    var maleUser=document.getElementById("maleUser");
    var femaleUser=document.getElementById("femaleUser");
    
    var c= (parseInt(document.getElementById("yearOfBirth").value))/100; //represents century;
    var y= (parseInt(document.getElementById("yearOfBirth").value))%100; // represents year born
    var m=parseInt(document.getElementById("monthOfBirth").value);//represents the month the user was born
    var dt=parseInt(document.getElementById("dateOfBirth").value);//represents the date of the month the user was born
    var dayOfWeek= (((c/4)-2*c-1)+((5*y/4))+((26*(m+1)/10))+dt)%7

    var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var maleNames=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
    var femaleNames=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
    
    
    if (maleUser.checked===true && dayOfWeek<=0) {
        alert("Your akan name is "+ maleNames[0]);
    } else if (maleUser.checked===true && dayOfWeek<=1) {
        alert("Your akan name is "+ maleNames[1]);
    } else if (maleUser.checked===true && dayOfWeek<=2) {
        alert("Your akan name is "+ maleNames[2]);
    } else if (maleUser.checked===true && dayOfWeek<=3) {
        alert("Your akan name is "+ maleNames[3]);
    } else if (maleUser.checked===true && dayOfWeek<=4) {
        alert("Your akan name is "+ maleNames[4]);
    } else if (maleUser.checked===true && dayOfWeek<=5) {
        alert("Your akan name is "+ maleNames[5]);
    } else if (maleUser.checked===true && dayOfWeek<=6) {
        alert("Your akan name is "+maleNames[6]);
    } else if (maleUser.checked===true && dayOfWeek<=7) {
        alert("Your akan name is "+ maleNames[0]);
    } else if (femaleUser.checked===true && dayOfWeek<=0) {
        alert("Your akan name is "+ femaleNames[0]);
    } else if (femaleUser.checked===true && dayOfWeek<=1) {
        alert("Your akan name is "+ femaleNames[1]);
    } else if (femaleUser.checked===true && dayOfWeek<=2) {
        alert("Your akan name is "+ femaleNames[2]);
    } else if (femaleUser.checked===true && dayOfWeek<=3) {
        alert("Your akan name is "+femaleNames[3]);
    } else if (femaleUser.checked===true && dayOfWeek<=4) {
        alert("Your akan name is "+femaleNames[4]);
    } else if (femaleUser.checked===true && dayOfWeek<=5) {
        alert("Your akan name is "+femaleNames[5]);
    } else if (femaleUser.checked===true && dayOfWeek<=6) {
        alert("Your akan name is "+ femaleNames[6]);
    } else if (femaleUser.checked===true && dayOfWeek<=7) {
        alert("Your akan name is "+femaleNames[0]);
    } else {
        alert("Error!");
    };
    
};