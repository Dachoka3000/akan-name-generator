var myFirstFunction= function(){
    var birthday= new Date();
    var dateOfBirth=parseInt(document.getElementById("date"));
    var monthOfBirth=parseInt(document.getElementById("month"));
    var yearOfBirth=parseInt(document.getElementById("year"));
    
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
}