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

//Saves the user's input to local storage.
function saveSchedule() {
  //Grabs the users input into the schedule.
  const userSchedule = document.getElementById("9").value;
  console.log(userSchedule);

  //Adds a key to my userSchedule that I can get value from.
  let entry = { userSchedule: userSchedule };

  //Saves to local storage.
  localStorage.setItem("saveToLocal", JSON.stringify(entry));
}

function loadSchedule() {
  //Loads the user's input from local storage.
  let storedSchedule = localStorage.getItem("saveToLocal");
  let scheduleParse = JSON.parse(storedSchedule);
  let scheduleEntry = scheduleParse.userSchedule;
  console.log(scheduleEntry);
  document.getElementById("9").innerHTML = scheduleEntry;
}

//Combines my local storage functions into one to be used in one button click.
function addToSchedule() {
  saveSchedule();
  loadSchedule();
}

loadSchedule();

document.getElementById("9amBtn").addEventListener("click", addToSchedule);
