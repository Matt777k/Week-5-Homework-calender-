var currentDay = document.querySelector("#currentDay");
var nineAM = document.getElementById("9am");
var tenAM = document.getElementById("10am");
var elevenAM = document.getElementById("11am");
var twelvePM = document.getElementById("12pm");
var onePM= document.getElementById("1pm");
var twoPM = document.getElementById("2pm");
var threePM = document.getElementById("3pm");
var fourPM = document.getElementById("4pm");
var fivePM = document.getElementById("5pm");
var calenderRows = document.getElementsByClassName("calender-rows");

nineAM = 9;
tenAM = 10;
elevenAM = 11;
twelvePM = 12;
onePM = 13;
twoPM = 14;
threePM = 15;
fourPM = 16;
fivePM = 17;

timeArray = [nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM];





//Current day and date is displayed at the top of the calender
const dateAndTime = moment().format("LLLL");
$(currentDay).html(dateAndTime);


//Scrolling down presents time blocks of standard business hours (9am-5pm)
    //break into 1 hour blocks
//console.log(moment.duration(60, 'minutes').hours());
//each time block is color coded to indicate whether it is in the past, present, or future
$(".calender-rows").ready(function (){
    for(var i=0; i<timeArray.length; i++) {
        console.log(timeArray[i]);
       if(dateAndTime == timeArray[i]) {
        
    }
    }
})
    //past is gray, present is red, future is green
    //if dateAndTime is greater than time of the blocks, turn grey
    //if dateAndTime is within the same hour of the block, turn red
    //if dateAndTime is less than time of the blocks, turn green
//Clicking in to a time block 
    //you cant enter an event
    //click save button for that timeblock (saves to loval storage)
//saved events persist through page refresh

