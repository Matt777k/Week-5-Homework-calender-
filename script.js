$("#currentDay").text(moment().format("LLLL"));

//Scrolling down presents time blocks of standard business hours (9am-5pm)
//break into 1 hour blocks

//each time block is color coded to indicate whether it is in the past, present, or future

var currentTime = moment().hours();
var userTextArray = [];

function colorTimeBlock() {
  for (i = 9; i <= 17; i++) {
    var blockTime = $("#hour-" + i);
    var colorBlock = $("#timeText-" + i);
    var dataHour = blockTime.attr("data-hour");
    if (currentTime > dataHour) {
      colorBlock.attr("class", "col-8 text past description");
    } else if (currentTime == dataHour) {
      colorBlock.attr("class", "col-8 text present description");
    } else if (currentTime < dataHour) {
      colorBlock.attr("class", "col-8 text future description");
    } else {
      colorBlock.attr("class", "col-8 text past description");
    }
  }
}
colorTimeBlock();

//     Clicking in to a time block
//     //you can enter an event
//     //click save button for that timeblock (saves to loval storage)
$(".saveBtn").click(function (event) {
  event.stopImmediatePropagation();
  var hourBlock = $(this).attr("data-click");
  var userText = $("#timeText-" + hourBlock).val();
  console.log(userText);

  var userTextObject = {
    userText: userText,
    hour: hourBlock,
  };

  userTextArray.push(userTextObject);
  localStorage.setItem("userText", JSON.stringify(userTextArray));
});

// saved events persist through page refresh
function loadUserText() {
  if (localStorage.getItem("userText") !== null) {
    var storedText = JSON.parse(window.localStorage.getItem("userText"));
    for (var i = 0; i < storedText.length; i++) {
      $("#timeText-" + storedText[i].hour).val(storedText[i].userText);
      let userTextObject = {
        userText: storedText[i].userText,
        hour: storedText[i].hour,
      };
      userTextArray.push(userTextObject);
    }
  }
}
loadUserText();
