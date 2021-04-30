// confirm ("Do you like fruit?");
// prompt ("What is your favorite type of fruit?")
// // browser objects

//this gets the exact time//
var currentTime= new Date();

var time= document.getElementById("cTime");
time.innerHTML= currentTime.toLocaleTimeString();

//this gets the date//

var date= document.getElementById("cDate");
date.innerHTML= currentTime.toLocaleDateString();

//this gets the days of the week//
var weekDays= new Array("Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun");
var dow= document.getElementById("dayOfWeek");
dow.innerHTML= weekDays[currentTime.getDay()];