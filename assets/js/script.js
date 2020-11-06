var currentDay = document.querySelector("#currentDay");
var row = document.querySelector(".row");

var today = moment();
var hour = today.format("H");

// displays the current date in jumbotron
$("#currentDay").text(today.format("dddd, MMMM Do"));

// displays the day of the week above the calendar
$(".curDate").text(today.format("dddd"));

console.log(hour);

function presentFuture() {
  if (hour == 9) $("#row-9").css("background-color", "#cdb4db");

  if (hour == 10) $("#row-10").css("background-color", "#cdb4db");

  //   if (hour == 11)
  //   $("#row-11").css("background-color", "#cdb4db");
  // //   future hours
  //   $("#row-12").css("background-color", "#60d394");
  //   $("#row-1").css("background-color", "#60d394");
  //   $("#row-2").css("background-color", "#60d394");
  //   $("#row-3").css("background-color", "#60d394");
  //   $("#row-4").css("background-color", "#60d394");
  //   $("#row-5").css("background-color", "#60d394");
  //   $("#row-6").css("background-color", "#60d394");

  //   if (hour == 12)
  //   $("#row-12").css("background-color", "#cdb4db");
  //   // future hours
  //   $("#row-1").css("background-color", "#60d394");
  //   $("#row-2").css("background-color", "#60d394");
  //   $("#row-3").css("background-color", "#60d394");
  //   $("#row-4").css("background-color", "#60d394");
  //   $("#row-5").css("background-color", "#60d394");
  //   $("#row-6").css("background-color", "#60d394");

  if (hour == 13) $("#row-1").css("background-color", "#cdb4db");
  // future hours
  $("#row-2").css("background-color", "#60d394");
  $("#row-3").css("background-color", "#60d394");
  $("#row-4").css("background-color", "#60d394");
  $("#row-5").css("background-color", "#60d394");
  $("#row-6").css("background-color", "#60d394");

  if (hour == 14)
    // present hour
    $("#row-2").css("background-color", "#cdb4db");
  // future hours
  $("#row-3").css("background-color", "#60d394");
  $("#row-4").css("background-color", "#60d394");
  $("#row-5").css("background-color", "#60d394");
  $("#row-6").css("background-color", "#60d394");

  if (hour == 15) $("#row-3").css("background-color", "#cdb4db");
  // future hours
  $("#row-4").css("background-color", "#60d394");
  $("#row-5").css("background-color", "#60d394");
  $("#row-6").css("background-color", "#60d394");

  if (hour == 16) $("#row-4").css("background-color", "#cdb4db");
  //   future hours
  $("#row-5").css("background-color", "#60d394");
  $("#row-6").css("background-color", "#60d394");

  if (hour == 17) $("#row-5").css("background-color", "#cdb4db");
  //   future hours
  $("#row-6").css("background-color", "#60d394");

  if (hour === 18) $("#row-6").css("background-color", "#cdb4db");
}
presentFuture();
