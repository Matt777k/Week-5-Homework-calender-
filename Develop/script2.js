//Current day and date is displayed at the top of the calender
$("#currentDay").text(moment().format("LLLL"));

//Scrolling down presents time blocks of standard business hours (9am-5pm)
  //break into 1 hour blocks


//each time block is color coded to indicate whether it is in the past, present, or future

let currentTime = moment().hours();

function colorTimeBlock() {
    for (i = 9; i <= 17; i++) {
      let blockTime = $("#hour-" + i);
      let dataHour = blockTime.attr("data-hour");
      let colorBlock = $("#timeText-" + i);
      if (currentTime > dataHour) {
        colorBlock.attr("class", "col-8 text past description");
      } else if (currentTime == dataHour) {
        colorBlock.attr("class", "col-8 text present description");
      } else if (currentTime < dataHour) {
        colorBlock.attr("class", "col-8 text future description");
      }
      else {
        colorBlock.attr("class", "col-8 text past description");
      }
    }
}
colorTimeBlock();


//     Clicking in to a time block 
//     //you cant enter an event
//     //click save button for that timeblock (saves to loval storage)
//     saved events persist through page refresh