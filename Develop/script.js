



// //Scrolling down presents time blocks of standard business hours (9am-5pm)
//     //break into 1 hour blocks
// //console.log(moment.duration(60, 'minutes').hours());
// //each time block is color coded to indicate whether it is in the past, present, or future
// function colorTimeBlock() {
//     for (i = 0; i < 9; i++) {
//       let blockTime = $("#hour-" + i);
//       let dataHour = blockTime.attr("data-hour");
//       let colorBlock = $("#timeText-" + i);
//       if (currentTime > dataHour) {
//         colorBlock.attr("class", "col-8 text past description");
//       } else if (currentTime == dataHour) {
//         colorBlock.attr("class", "col-8 text present description");
//       } else {
//         colorBlock.attr("class", "col-8 text future description");
//       }
//     }
// }
// colorTimeBlock();

// // $(".calender-rows").ready(function (){
// //     for(var i=0; i<timeArray.length; i++) {
// //         console.log(timeArray[i]);
// //        if(dateAndTime == timeArray[i]) {

// //     }
// //     }
// // })



//     //past is gray, present is red, future is green
//     //if dateAndTime is greater than time of the blocks, turn grey
//     //if dateAndTime is within the same hour of the block, turn red
//     //if dateAndTime is less than time of the blocks, turn green
//     Clicking in to a time block 
//     //you cant enter an event
//     //click save button for that timeblock (saves to loval storage)
//     saved events persist through page refresh

