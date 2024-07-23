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