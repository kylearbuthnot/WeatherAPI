//function that sets up the event listeners
function setUpEventListeners(){
  const submitButton = document.getElementById('submit-button');
  
  submitButton.addEventListener('click', clickSubmit);
}

//wait for dom to fully load
document.addEventListener('DOMContentLoaded', () => {
  setUpEventListeners();
})

//todo find out why the elements are not being captured properly. 
//double check names again on css, html, and here.

//function that activates when the user clicks the submit button.
function clickSubmit(){
  const inputCityName = document.getElementById('city_name');
  console.log(inputCityName.value)
}