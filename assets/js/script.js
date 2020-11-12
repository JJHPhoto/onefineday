// Global Variables.
let today = moment().format("MMMM Do, YYYY");
let timeNow = moment().format("H");
console.log(timeNow);
let nine = $("#9").val();
console.log(nine);
const scheduleText = document.getElementsByClassName("col-10");
console.log(scheduleText);

//Current date displayed in Jumbotron
$("#currentDay").text(today);

//Changes the color of the row in the schedule based on time of day.
Array.from(scheduleText).forEach((row) => {
  let rowSelector = row.id,
    rowSchedule;
  if (rowSelector) {
    rowSchedule = parseInt(rowSelector);
  }
  if (rowSchedule) {
    if (timeNow === rowSchedule) {
      changeColor(row, "blue");
    } else if (timeNow < rowSchedule && timeNow > rowSchedule - 12) {
      changeColor(row, "#77dd77");
    } else if (timeNow > rowSchedule && timeNow < rowSchedule + 12) {
      changeColor(row, "#d3d3d3");
    } else {
      changeColor(row, "#ff6961");
    }
  }
});

function changeColor(element, color) {
  element.style.backgroundColor = color;
}

//Saving "textarea" to local storage

// $("#9").html();
// localStorage.setItem();

//TEXT INPUT for events during the day
//ADD text to local storage with save button.

//Testing
//====
//Put a console.log on button to test "click."
//Event delegation to click any "save" button.
