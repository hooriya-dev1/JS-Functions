// CALCULATE AGE
function calculationage(current, DOB){
    var myage = current - DOB
    console.log(myage/1000)
}

var current = new Date ();
var DOB = new Date(prompt("Enter Your Age" ,"OCTOBER 20, 2007"))
calculationage(current,DOB);

function calculationage(current, DOB){
    var age = current - DOB
    alert("Your Age is: "+Math.floor(age/(1000*60*60*60*24*365)))
}

var current = new Date ();
var DOB = new Date(prompt("Enter Your Age:" ,"OCTOBER 20, 2007"))
calculationage(current,DOB);

// CHECK CURRENT YEAR IS LEAP YEAR OR NOT
function checkleap(current){
    if(current % 4==0){
        alert("current year "+current+" is a leap year")
    }
    else{
         alert("current year "+current+" is not a leap year")
    }
}
var current = new Date();
checkleap(current.getFullyear());

// GENERATE OTP FUNCTION
function otpgenerator(){
    var otp = Math.round(Math.random()*78*200*365)
    alert("Your OTP is " + otp);
};
otpgenerator();

// CHECK UPCOMING NEXT 10 YEARS ARE LEAP OR NOT
function nextleap(year){
    var i, leap = [];
    for(i = currentYear +1; leapYears<10; i++){
        if(i % 4 == 0){
            leap.push(year)
        }
        else{
            i--;
        }
        year++;
    }
    return leapYears;
}
var nextTenLeapyears = getNextTenLeapYears();
console.log(nextTenLeapYears); 

// CAPITAL CASE
function toCap(user){
    return user.charAt(0).toUpperCase() + user.slice(1).toLowerCase();
}

var capitalized = toCap("hOOriYa")
console.log(capitalized);