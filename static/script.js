//function that sets up the event listeners
function setUpEventListeners(){
  //First set up event listeners for the submit button.
  const submitButton = document.getElementById('submit-button');
  //Click event listener, calls the click submit button.
  submitButton.addEventListener('click', clickSubmit);

  //Enter keypress event listener, esentially clicks the button.
  const cityInput = document.getElementById('city_name');
  cityInput.addEventListener('keydown', function(event){
  if(event.key === 'Enter'){ //if the user presses enter after typing their city.
    //prevent the default action (look this up in chatgpt or on docs)
    event.preventDefault();
    //Click the generate report button
    submitButton.click();
  }
});
}


//Wait for the dom to fully load prior to hooking up the event listeners.
document.addEventListener('DOMContentLoaded', () => {
  setUpEventListeners();
})


//Function to determine what actions to take when the user submits their city.
function clickSubmit(){
  //All this does is types whatever the user has typed, and copys and pastes it into the report text box.
  const reportBox = document.getElementById('report');
  const userInput = document.getElementById('city_name');
  let searchCity = userInput.value;
  
  //If the users city has whitespace in it... eliminate it.
  if(searchCity.includes(' ')){
    searchCity = eliminateWhitespace(searchCity);
  }
  //display the city in the report box, correctly formatted for API call now.
  reportBox.value = searchCity;

}

//Function to eliminateWhitespace within the user's input string, works for front back and middle.
function eliminateWhitespace(userString){
  return userString.trim().replaceAll((' '), "%20");
}