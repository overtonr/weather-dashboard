var userForm = document.querySelector("#search-form");

function formSubmit(event) {
  event.preventDefault();

  var searchVal = document.querySelector("#search-input").value;
  console.log(searchVal);

  if (!searchVal) {
    console.error("please enter a city name");
    return;
  }

  //   var queryString = './search-res.html?q=' + searchVal ;

  //   location.assign(queryString);
  else console.log("search for " + searchVal);
}

console.log("hello");

userForm.addEventListener("submit", formSubmit);
