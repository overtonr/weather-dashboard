var userForm = document.querySelector("#search-form");
//select from states
//https://api.openweathermap.org/geo/1.0/direct?q=portland,OR,us&limit=5&appid=891d5adf6f627c8e1d4185e6ee80e104

function formSubmit(event) {
  event.preventDefault();

  var searchVal = document.querySelector("#search-input").value;

  console.log(searchVal);

  if (!searchVal) {
    console.error('You need a search input value!');
    return;
  }
  // We use location.assign() to maintain correct functionality of the Back button in the browser—which wouldn't be the case if we were to use location.replace():
  var queryString = './search-res.html?q=' + searchVal;

  location.assign(queryString);
  console.log(queryString);
}



userForm.addEventListener("submit", formSubmit);
