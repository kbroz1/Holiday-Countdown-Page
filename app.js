// confirm ("Do you like fruit?");
// prompt ("What is your favorite type of fruit?")
// // browser objects

//this gets the exact time//
var currentTime= new Date();

var time= document.getElementById("cTime");
time.innerHTML= currentTime.toLocaleTimeString();

//.toLocaleTimeString - gets local time in short, easy to read format

//this gets the date//

var date= document.getElementById("cDate");
date.innerHTML= currentTime.toLocaleDateString();

//.toLocaleTimeString - gets local date in short, easy to read format

//this gets the days of the week//
var weekDays= new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");
var dow= document.getElementById("dayOfWeek");
dow.innerHTML= weekDays[currentTime.getDay()];
//dow=the variable

//from Sky:
runClock();
setInterval("runClock()",1000);
// function to create and run the countdown
function runClock() {
    // current time and date
    var currentDay= new Date();
    var dateStr= currentDay.toLocaleDateString();
    var timeStr= currentDay.toLocaleTimeString();
    // dispaly current date and time
    document.getElementById("cTime").innerHTML=
    dateStr + "   " + timeStr;
// ? (if) ;(else)
// 
    // calculate days until July 15
    var newDay = new Date("July 15, 2021 00:00:00");
    var nextDay = currentDay.getFullYear("cTime");
    newDay.setFullYear(nextDay);
    var daysLeft = (newDay- currentDay)/(1000*60*60*24);
    
    // calculate hoursleft
    var hoursleft = (daysLeft - Math.floor(daysLeft))*24;
    // calcuate minutes and secs
    var minLeft = (hoursleft - Math.floor(hoursleft))*60;
    var secsLeft = (minLeft - Math.floor(minLeft))*60;
    // dispay time left until new years
    document.getElementById("days").textContent = Math.floor(daysLeft);
    document.getElementById("hours").textContent = Math.floor(hoursleft);
    document.getElementById("minutes").textContent = Math.floor(minLeft);
    document.getElementById("seconds").textContent = Math.floor(secsLeft);
    setTimeout(countDown,1000);
}
countDown();

//from April: 

//when you want the countdown to end
//code: 
function countDown()
{
    //set the Time End Date
    var today = new Date();
    var eventDate= new Date("July 15,2021 00:00:00");

    //Gets Current Time
    var currentTime= today.getTime();
    var eventTime= eventDate.getTimezoneOffset();

    var remTime= eventTime - currentTime; //count down


    //Calculates Time
    var seconds= Math.floor(remTime/1000);
    var minutes= Math.floor(seconds/60);
    var hours= Math.floor(minutes/60);
    var days = Math.floor(hours/24);

    //hours in a day/ Minutes ini an hour / seconds in a minute(pag 702 in the book)

    hours= hours % 24;
    mninutes%= 60; 
    seconds%=60;
// ? means "if"  : means "else"
    hours=(hours<10) ? "0" + hours : hours;
    minutes=(minutes<10) ? "0" + minutes : minutes;
    seconds=(seconds<10) ? "0" + seconds : seconds;

    //connect to html IDs, Displays Time on page
    document.getElementById("days").innerHTML =days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;

    setTimeout(countDown,1000);
}

countDown();
countDown();//  

