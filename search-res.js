var userForm = document.querySelector("#user-form");
var cityInput = document.querySelector("#city-input");
var currentContainer = document.querySelector("#current-container");
// var forecastContainer =  document.querySelector("#forecast-container");

// need to define var savedCityButton : ID of stored city once it is appended
//class="btn-outline-secondary rounded ml-1 m-2"
// userForm.addEventListener("submit",formSubmit);
// savedCityButton.addEventListener("click", buttonClick);

// function that captures the value of the form input from the user
var formSubmitHandler = function (event) {
  event.preventDefault();
  var cityName = document.querySelector("#city-input").value.trim();

  if (cityName) {
    getCord(cityName);
    cityInput.value = "";
  } else {
    console.log("Please enter a city");
  }
};

/*console.log(data.list[0].main.temp + " temp");
console.log(data.list[0].dt_txt + " time");
console.log(data.city.name + " city");
console.log(data.list[0].main.humidity + " humidity");
console.log(data.list[0].wind.speed + " wind speed");
console.log(data.list[0].weather[0].icon + " icon id"); */

//renders the date for the city's current conditions
function renderCurrent(currentObj) {
    currentContainer.innerHTML = "";
  var currentCard = document.createElement("div");
  currentCard.classList.add("card", "mb-3", "ml-5");
  var currentHeader = document.createElement("div");
  currentHeader.classList.add("card-header");

//   var formattedDate = (currentObj.list[0].dt * 1000).toDateString();

  currentHeader.innerHTML =
    currentObj.city.name +
    "<br />" 
    +
    // formattedDate +
    "<br />" +
    '<img src ="https://openweathermap.org/img/wn/' +
    currentObj.list[0].weather[0].icon +
    '@2x.png">';

  var cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  var cardTemp = document.createElement("h5");
  cardTemp.classList.add("card-title");
  cardTemp.innerHTML = "temp: " + currentObj.list[0].main.temp + "°F";
  var cardConditions = document.createElement("p");
  cardConditions.classList.add("card-text");
  cardConditions.innerHTML =
    "wind: " +
    currentObj.list[0].wind.speed +
    "<br />" +
    "humidity: " +
    currentObj.list[0].main.humidity +
    "%";

  currentContainer.append(currentCard);
  currentCard.append(currentHeader);
  currentCard.append(cardBody);
  cardBody.append(cardTemp);
  cardBody.append(cardConditions);
}

// calls to Geocoding API to get the cordinates of a city based on the user's form input val
function getCord(city) {
  var corQueryUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    city +
    "&limit=5&appid=891d5adf6f627c8e1d4185e6ee80e104";

  console.log(corQueryUrl);
  fetch(corQueryUrl)
    .then(function (response) {
      // status in the range 200-299
      if (response.ok) {
        response.json().then(function (data) {
          //only retrieves the data from the first result
          console.log(data[0].lat, data[0].lon);
          var searchLat = data[0].lat;
          var searchLon = data[0].lon;

          getForecast(searchLat, searchLon);
        });
      } else {
        console.log("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  // getForecast(searchLat, searchLon);
}

function getForecast(searchLat, searchLon) {
  var forQueryUrl =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    searchLat +
    "&lon=" +
    searchLon +
    "&units=imperial&appid=891d5adf6f627c8e1d4185e6ee80e104";
  console.log(forQueryUrl);
  fetch(forQueryUrl).then(function (response) {
    response.json().then(function (data) {
      //   return data[0].lat , data[0].lon;
      renderCurrent(data);
    });
  });
}

userForm.addEventListener("submit", formSubmitHandler);

//after API for coordinates made, API for forecast using the values from the prev call
// function that renders data for searched city onto screem
// buttons appended allow for users to search for prev searches
