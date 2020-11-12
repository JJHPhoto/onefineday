// Global Variables.
let today = moment().format("MMMM Do, YYYY");
let timeNow = moment().format("H");
console.log(timeNow);
let nine = $("#9").val();
console.log(nine);
const savedText = document.getElementsByClassName("col-10");
console.log(savedText);
// const rowColor = document.getElementsByClassName("hour");
// let cycleThrough;

//Current date displayed in Jumbotron
$("#currentDay").text(today);

//Saving "textarea" to local storage

//Changes the color of the row in the schedule based on time of day.
Array.from(savedText).forEach((row) => {
  let rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    if (timeNow === rowHour) {
      setColor(row, "red");
    } else if (timeNow < rowHour && timeNow > rowHour - 6) {
      setColor(row, "#77dd77");
    } else if (timeNow > rowHour && timeNow < rowHour + 6) {
      setColor(row, "#d3d3d3");
    } else {
      setColor(row, "#ff6961");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}

// $("#9").html();
// localStorage.setItem();

//Function that changes "textarea" based on past, present or future time.
// function timeBackground() {
//   $();
// }

//TEXT INPUT for events during the day
//ADD text to local storage with save button.

//Testing
//====
//Put a console.log on button to test "click."
//Event delegation to click any "save" button.

//Tried code
//===
// $(document).ready(function(){
//   var saveOnSchedule = document.getElementById("saveOnSchedule");
//   for (var i =1; i < 11; i++) {
//     $("saveOnSchedule")
//   }
// })
