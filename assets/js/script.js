// Global Variables.
let today = moment().format("MMMM Do, YYYY");
let timeNow = moment().format("H");
// console.log(timeNow);
const scheduleText = document.getElementsByClassName("col-10");
// console.log(scheduleText);

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
      changeColor(row, "ff6961");
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

//===============================

//Nine AM row code.
//Saves my user's input to row 9am of the schedule.
function saveSchedule9am() {
  //Grabs the users input into the schedule.
  const userSchedule9am = document.getElementById("9").value;
  console.log(userSchedule9am);

  //Creates key for local storage.
  let entry9 = { userSchedule9am: userSchedule9am };

  //Saves to local storage.
  localStorage.setItem("save9amToLocal", JSON.stringify(entry9));
}

//Retrieves from local storage my user's input to row 9 of the schedule.
function load9amSchedule() {
  //Loads the user's input from local storage.
  let stored9amSchedule = localStorage.getItem("save9amToLocal");
  let schedule9amParse = JSON.parse(stored9amSchedule);
  if (schedule9amParse) {
    let schedule9amEntry = schedule9amParse.userSchedule9am;
    document.getElementById("9").innerHTML = schedule9amEntry;
  }
}

//Combines my local storage functions for row 9 into one to be used for its' button click.
function addTo9amSchedule() {
  saveSchedule9am();
  load9amSchedule();
}

//Loads row 9's local storage if there is any.
load9amSchedule();

//Adds a click event listner to my 9amBtn that saves the user's input to local storage and keeps it on page.
document.getElementById("9amBtn").addEventListener("click", addTo9amSchedule);

//===============================

//Ten AM row code.
//Saves my user's input to row 10am of the schedule.
function saveSchedule10am() {
  //Grabs the users input into the schedule.
  const userSchedule10am = document.getElementById("10").value;
  console.log(userSchedule10am);

  //Creates key for local storage.
  let entry10 = { userSchedule10am: userSchedule10am };

  //Saves to local storage.
  localStorage.setItem("save10amToLocal", JSON.stringify(entry10));
}

//Retrieves from local storage my user's input to row 10 of the schedule.
function load10amSchedule() {
  //Loads the user's input from local storage.
  let stored10amSchedule = localStorage.getItem("save10amToLocal");
  let schedule10amParse = JSON.parse(stored10amSchedule);
  if (schedule10amParse) {
    let schedule10amEntry = schedule10amParse.userSchedule10am;
    document.getElementById("10").innerHTML = schedule10amEntry;
  }
}

//Combines my local storage functions for row 10 into one to be used for its' button click.
function addTo10amSchedule() {
  saveSchedule10am();
  load10amSchedule();
}

//Loads row 9's local storage if there is any.
load10amSchedule();

//Adds a click event listner to my 10amBtn that saves the user's input to local storage and keeps it on page.
document.getElementById("10amBtn").addEventListener("click", addTo10amSchedule);

//===============================

//Eleven AM row code.
//Saves my user's input to row 11am of the schedule.
function saveSchedule11am() {
  //Grabs the users input into the schedule.
  const userSchedule11am = document.getElementById("11").value;
  console.log(userSchedule11am);

  //Creates key for local storage.
  let entry11 = { userSchedule11am: userSchedule11am };

  //Saves to local storage.
  localStorage.setItem("save11amToLocal", JSON.stringify(entry11));
}

//Retrieves from local storage my user's input to row 11 of the schedule.
function load11amSchedule() {
  //Loads the user's input from local storage.
  let stored11amSchedule = localStorage.getItem("save11amToLocal");
  let schedule11amParse = JSON.parse(stored11amSchedule);
  if (schedule11amParse) {
    let schedule11amEntry = schedule11amParse.userSchedule11am;
    document.getElementById("11").innerHTML = schedule11amEntry;
  }
}

//Combines my local storage functions for row 11 into one to be used for its' button click.
function addTo11amSchedule() {
  saveSchedule11am();
  load11amSchedule();
}

//Loads row 11's local storage if there is any.
load11amSchedule();

//Adds a click event listner to my 11amBtn that saves the user's input to local storage and keeps it on page.
document.getElementById("11amBtn").addEventListener("click", addTo11amSchedule);

//===============================

//Twelve AM row code.
//Saves my user's input to row 12am of the schedule.
function saveSchedule12am() {
  //Grabs the users input into the schedule.
  const userSchedule12am = document.getElementById("12").value;
  console.log(userSchedule12am);

  //Creates key for local storage.
  let entry12 = { userSchedule12am: userSchedule12am };

  //Saves to local storage.
  localStorage.setItem("save12amToLocal", JSON.stringify(entry12));
}

//Retrieves from local storage my user's input to row 12 of the schedule.
function load12amSchedule() {
  //Loads the user's input from local storage.
  let stored12amSchedule = localStorage.getItem("save12amToLocal");
  let schedule12amParse = JSON.parse(stored12amSchedule);
  if (schedule12amParse) {
    let schedule12amEntry = schedule12amParse.userSchedule12am;
    document.getElementById("12").innerHTML = schedule12amEntry;
  }
}

//Combines my local storage functions for row 12 into one to be used for its' button click.
function addTo12amSchedule() {
  saveSchedule12am();
  load12amSchedule();
}

//Loads row 12's local storage if there is any.
load12amSchedule();

//Adds a click event listner to my 12amBtn that saves the user's input to local storage and keeps it on page.
document.getElementById("12amBtn").addEventListener("click", addTo12amSchedule);

//===============================

//One PM row code.
//Saves my user's input to row 1pm of the schedule.
function saveSchedule1pm() {
  //Grabs the users input into the schedule.
  const userSchedule1pm = document.getElementById("13").value;
  console.log(userSchedule1pm);

  //Creates key for local storage.
  let entry1 = { userSchedule1pm: userSchedule1pm };

  //Saves to local storage.
  localStorage.setItem("save1pmToLocal", JSON.stringify(entry1));
}

//Retrieves from local storage my user's input to row 1 of the schedule.
function load1pmSchedule() {
  //Loads the user's input from local storage.
  let stored1pmSchedule = localStorage.getItem("save1pmToLocal");
  let schedule1pmParse = JSON.parse(stored1pmSchedule);
  if (schedule1pmParse) {
    let schedule1pmEntry = schedule1pmParse.userSchedule1pm;
    document.getElementById("13").innerHTML = schedule1pmEntry;
  }
}

//Combines my local storage functions for row 1 into one to be used for its' button click.
function addTo1pmSchedule() {
  saveSchedule1pm();
  load1pmSchedule();
}

//Loads row 1's local storage if there is any.
load1pmSchedule();

//Adds a click event listner to my 1pmBtn that saves the user's input to local storage and keeps it on page.
document.getElementById("1pmBtn").addEventListener("click", addTo1pmSchedule);
