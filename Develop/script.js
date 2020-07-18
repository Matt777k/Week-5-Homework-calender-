var currentDay = document.querySelector("#currentDay");





//Current day and date is displayed at the top of the calender
const dateAndTime = moment().format("LLLL");
$(currentDay).html(dateAndTime);


//Scrolling down presents time blocks of standard business hours (9am-5pm)
    //break into 1 hour blocks
console.log(moment.duration(60, 'minutes').hours());
//each time block is color coded to indicate whether it is in the past, present, or future
    //past is gray, present is red, future is green
//Clicking in to a time block 
    //you cant enter an event
    //click save button for that timeblock (saves to loval storage)
//saved events persist through page refresh

