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

//Retrieves from local storage my user's input to 9am row of the schedule.
function load9amSchedule() {
  //Loads the user's input from local storage.
  let stored9amSchedule = localStorage.getItem("save9amToLocal");
  let schedule9amParse = JSON.parse(stored9amSchedule);
  if (schedule9amParse) {
    let schedule9amEntry = schedule9amParse.userSchedule9am;
    document.getElementById("9").innerHTML = schedule9amEntry;
  }
}

//Combines my local storage functions for 9am row into one to be used for its' button click.
function addTo9amSchedule() {
  saveSchedule9am();
  load9amSchedule();
}

//Loads row 9am's local storage if there is any.
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

//Retrieves from local storage my user's input to 10am row of the schedule.
function load10amSchedule() {
  //Loads the user's input from local storage.
  let stored10amSchedule = localStorage.getItem("save10amToLocal");
  let schedule10amParse = JSON.parse(stored10amSchedule);
  if (schedule10amParse) {
    let schedule10amEntry = schedule10amParse.userSchedule10am;
    document.getElementById("10").innerHTML = schedule10amEntry;
  }
}

//Combines my local storage functions for 10am row into one to be used for its' button click.
function addTo10amSchedule() {
  saveSchedule10am();
  load10amSchedule();
}

//Loads row 10am's local storage if there is any.
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

//Retrieves from local storage my user's input to 11am row of the schedule.
function load11amSchedule() {
  //Loads the user's input from local storage.
  let stored11amSchedule = localStorage.getItem("save11amToLocal");
  let schedule11amParse = JSON.parse(stored11amSchedule);
  if (schedule11amParse) {
    let schedule11amEntry = schedule11amParse.userSchedule11am;
    document.getElementById("11").innerHTML = schedule11amEntry;
  }
}

//Combines my local storage functions for 11am row into one to be used for its' button click.
function addTo11amSchedule() {
  saveSchedule11am();
  load11amSchedule();
}

//Loads row 11am's local storage if there is any.
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

//Retrieves from local storage my user's input to 12am row of the schedule.
function load12amSchedule() {
  //Loads the user's input from local storage.
  let stored12amSchedule = localStorage.getItem("save12amToLocal");
  let schedule12amParse = JSON.parse(stored12amSchedule);
  if (schedule12amParse) {
    let schedule12amEntry = schedule12amParse.userSchedule12am;
    document.getElementById("12").innerHTML = schedule12amEntry;
  }
}

//Combines my local storage functions for 12am row into one to be used for its' button click.
function addTo12amSchedule() {
  saveSchedule12am();
  load12amSchedule();
}

//Loads row 12am's local storage if there is any.
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

//Retrieves from local storage my user's input to 1pm row of the schedule.
function load1pmSchedule() {
  //Loads the user's input from local storage.
  let stored1pmSchedule = localStorage.getItem("save1pmToLocal");
  let schedule1pmParse = JSON.parse(stored1pmSchedule);
  if (schedule1pmParse) {
    let schedule1pmEntry = schedule1pmParse.userSchedule1pm;
    document.getElementById("13").innerHTML = schedule1pmEntry;
  }
}

//Combines my local storage functions for 1pm row into one to be used for its' button click.
function addTo1pmSchedule() {
  saveSchedule1pm();
  load1pmSchedule();
}

//Loads row 1pm's local storage if there is any.
load1pmSchedule();

//Adds a click event listner to my 1pmBtn that saves the user's input to local storage and keeps it on page.
document.getElementById("1pmBtn").addEventListener("click", addTo1pmSchedule);

//===============================

//Two PM row code.
//Saves my user's input to row 2pm of the schedule.
function saveSchedule2pm() {
  //Grabs the users input into the schedule.
  const userSchedule2pm = document.getElementById("14").value;
  console.log(userSchedule2pm);

  //Creates key for local storage.
  let entry2 = { userSchedule2pm: userSchedule2pm };

  //Saves to local storage.
  localStorage.setItem("save2pmToLocal", JSON.stringify(entry2));
}

//Retrieves from local storage my user's input to 2pm row of the schedule.
function load2pmSchedule() {
  //Loads the user's input from local storage.
  let stored2pmSchedule = localStorage.getItem("save2pmToLocal");
  let schedule2pmParse = JSON.parse(stored2pmSchedule);
  if (schedule2pmParse) {
    let schedule2pmEntry = schedule2pmParse.userSchedule2pm;
    document.getElementById("14").innerHTML = schedule2pmEntry;
  }
}

//Combines my local storage functions for 2pm row into one to be used for its' button click.
function addTo2pmSchedule() {
  saveSchedule2pm();
  load2pmSchedule();
}

//Loads row 2pm's local storage if there is any.
load2pmSchedule();

//Adds a click event listner to my 2pmBtn that saves the user's input to local storage and keeps it on page.
document.getElementById("2pmBtn").addEventListener("click", addTo2pmSchedule);

//===============================

//Three PM row code.
//Saves my user's input to row 3pm of the schedule.
function saveSchedule3pm() {
  //Grabs the users input into the schedule.
  const userSchedule3pm = document.getElementById("15").value;
  console.log(userSchedule3pm);

  //Creates key for local storage.
  let entry3 = { userSchedule3pm: userSchedule3pm };

  //Saves to local storage.
  localStorage.setItem("save3pmToLocal", JSON.stringify(entry3));
}

//Retrieves from local storage my user's input to 3pm row of the schedule.
function load3pmSchedule() {
  //Loads the user's input from local storage.
  let stored3pmSchedule = localStorage.getItem("save3pmToLocal");
  let schedule3pmParse = JSON.parse(stored3pmSchedule);
  if (schedule3pmParse) {
    let schedule3pmEntry = schedule3pmParse.userSchedule3pm;
    document.getElementById("15").innerHTML = schedule3pmEntry;
  }
}

//Combines my local storage functions for 3pm row into one to be used for its' button click.
function addTo3pmSchedule() {
  saveSchedule3pm();
  load3pmSchedule();
}

//Loads row 3pm's local storage if there is any.
load3pmSchedule();

//Adds a click event listner to my 3pmBtn that saves the user's input to local storage and keeps it on page.
document.getElementById("3pmBtn").addEventListener("click", addTo3pmSchedule);

//===============================

//Four PM row code.
//Saves my user's input to row 4pm of the schedule.
function saveSchedule4pm() {
  //Grabs the users input into the schedule.
  const userSchedule4pm = document.getElementById("16").value;
  console.log(userSchedule4pm);

  //Creates key for local storage.
  let entry4 = { userSchedule4pm: userSchedule4pm };

  //Saves to local storage.
  localStorage.setItem("save4pmToLocal", JSON.stringify(entry4));
}

//Retrieves from local storage my user's input to 4pm row of the schedule.
function load4pmSchedule() {
  //Loads the user's input from local storage.
  let stored4pmSchedule = localStorage.getItem("save4pmToLocal");
  let schedule4pmParse = JSON.parse(stored4pmSchedule);
  if (schedule4pmParse) {
    let schedule4pmEntry = schedule4pmParse.userSchedule4pm;
    document.getElementById("16").innerHTML = schedule4pmEntry;
  }
}

//Combines my local storage functions for 4pm row into one to be used for its' button click.
function addTo4pmSchedule() {
  saveSchedule4pm();
  load4pmSchedule();
}

//Loads row 4pm's local storage if there is any.
load4pmSchedule();

//Adds a click event listner to my 4pmBtn that saves the user's input to local storage and keeps it on page.
document.getElementById("4pmBtn").addEventListener("click", addTo4pmSchedule);

//===============================

//Five PM row code.
//Saves my user's input to row 5pm of the schedule.
function saveSchedule5pm() {
  //Grabs the users input into the schedule.
  const userSchedule5pm = document.getElementById("17").value;
  console.log(userSchedule5pm);

  //Creates key for local storage.
  let entry5 = { userSchedule5pm: userSchedule5pm };

  //Saves to local storage.
  localStorage.setItem("save5pmToLocal", JSON.stringify(entry5));
}

//Retrieves from local storage my user's input to 5pm row of the schedule.
function load5pmSchedule() {
  //Loads the user's input from local storage.
  let stored5pmSchedule = localStorage.getItem("save5pmToLocal");
  let schedule5pmParse = JSON.parse(stored5pmSchedule);
  if (schedule5pmParse) {
    let schedule5pmEntry = schedule5pmParse.userSchedule5pm;
    document.getElementById("17").innerHTML = schedule5pmEntry;
  }
}

//Combines my local storage functions for 5pm row into one to be used for its' button click.
function addTo5pmSchedule() {
  saveSchedule5pm();
  load5pmSchedule();
}

//Loads row 5pm's local storage if there is any.
load5pmSchedule();

//Adds a click event listner to my 5pmBtn that saves the user's input to local storage and keeps it on page.
document.getElementById("5pmBtn").addEventListener("click", addTo5pmSchedule);

//===============================

//Six PM row code.
//Saves my user's input to row 6pm of the schedule.
function saveSchedule6pm() {
  //Grabs the users input into the schedule.
  const userSchedule6pm = document.getElementById("18").value;
  console.log(userSchedule6pm);

  //Creates key for local storage.
  let entry6 = { userSchedule6pm: userSchedule6pm };

  //Saves to local storage.
  localStorage.setItem("save6pmToLocal", JSON.stringify(entry6));
}

//Retrieves from local storage my user's input to 6pm row of the schedule.
function load6pmSchedule() {
  //Loads the user's input from local storage.
  let stored6pmSchedule = localStorage.getItem("save6pmToLocal");
  let schedule6pmParse = JSON.parse(stored6pmSchedule);
  if (schedule6pmParse) {
    let schedule6pmEntry = schedule6pmParse.userSchedule6pm;
    document.getElementById("18").innerHTML = schedule6pmEntry;
  }
}

//Combines my local storage functions for 6pm row into one to be used for its' button click.
function addTo6pmSchedule() {
  saveSchedule6pm();
  load6pmSchedule();
}

//Loads row 6pm's local storage if there is any.
load6pmSchedule();

//Adds a click event listner to my 6pmBtn that saves the user's input to local storage and keeps it on page.
document.getElementById("6pmBtn").addEventListener("click", addTo6pmSchedule);
