//function that sets up the event listeners
function setUpEventListeners(){
  const submitButton = document.getElementById('submit-button');
  
  submitButton.addEventListener('click', clickSubmit);
}

//wait for dom to fully load
document.addEventListener('DOMContentLoaded', () => {
  setUpEventListeners();
})



//for some reason this works now and I swear I had the same exact code I am going to bed gn.
function clickSubmit(){
  const reportBox = document.getElementById('report');
  const userInput = document.getElementById('city_name');
  reportBox.value = userInput.value;
}
