//function that sets up the event listeners
function setUpEventListeners(){
  const submitButton = document.getElementById('submit-button');
  
  submitButton.addEventListener('click', addTextToReport);
}

//wait for dom to fully load
document.addEventListener('DOMContentLoaded', () => {
  setUpEventListeners();
})

//function that adds txt to report bx
function addTextToReport(){
  const reportBox = document.getElementById('report');
    reportBox.value= "Hello World!";
}