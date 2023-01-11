
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


