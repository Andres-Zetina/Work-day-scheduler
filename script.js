// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
var timeBlocks = document.querySelectorAll(".time-block");
var currentHour = dayjs().hour();
timeBlocks.forEach(function(timeBlock){
  var timeBlockHour = parseInt(timeBlock.id.slice(-2));
  if(timeBlockHour < currentHour) {
    timeBlock.classList.add("past");
  } else if (timeBlockHour === currentHour){
    timeBlock.classList.add("present");
  }else {
    timeBlock.classList.add("future");
  }
})
//SAVES users text input into each time slot 
var saveButtons = document.querySelectorAll('.saveBtn');
window.onload = function(){
  var saveButtons = document.querySelectorAll(".saveBtn");
}

saveButtons.forEach(function(button) {
  button.addEventListener("click", function(event){

    var timeBlock = event.target.parentNode;
    var input = timeBlock.querySelector("textarea.description").value;

    localStorage.setItem(timeBlock.id, input);
  })
})
var textareas = document.querySelectorAll("textarea.description");
textareas.forEach(function(textarea){
  var timeBlockId = textarea.parentNode.id;
  var savedValue = localStorage.getItem(timeBlockId);
  if(savedValue){
    textarea.value = savedValue;
  }
  
})
// sets the current day 
var currentDay = document.getElementById("currentDay");

function updateDate(){
  var today = dayjs();

  var dateString = today.format('MMMM, D, YYYY'); 
console.log(dateString)
  currentDay.innerHTML = dateString;
}
window.onload = function() {
  updateDate();

setInterval(updateDate, 86400000)
}


