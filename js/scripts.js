function fn() {}
    var d= new Date();

    var gender= document.getElementsByName("gender");
    var date= parseInt(document.getElementById("date").value);
    var month= parseInt(document.getElementById("month").value);
    var year= parseInt(document.getElementById("year").value);
    var form1= document.getElementById("genderForm");




    if(date<0 || date>31) {
        document.getElementsByClassName("error").innerHtml = "Enter a valid date";
        return false;
    } else {
        d.setDate(date);
    }



















var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku','Yaw', 'Kofi', 'Kwame'];
