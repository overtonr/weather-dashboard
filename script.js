var userForm = document.querySelector("#search-form");
//select from states
//https://api.openweathermap.org/geo/1.0/direct?q=portland,OR,us&limit=5&appid=891d5adf6f627c8e1d4185e6ee80e104

function formSubmit(event) {
  event.preventDefault();

  var searchVal = document.querySelector("#search-input").value;
//   var stateInpV = document.querySelector('#state-input').value;
  console.log(searchVal);

  if (!searchVal) {
    console.error("please enter a city name");
    return;
  }

  //   var queryString = './search-res.html?q=' + searchVal ;
//   var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

  //   location.assign(queryString);
  else console.log("search for " + searchVal);
}

console.log("hello");

userForm.addEventListener("submit", formSubmit);
