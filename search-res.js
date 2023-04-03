var userForm = document.querySelector("#user-form");
var cityInput = document.querySelector("#city-input");
var currentContainer = document.querySelector("#current-container");
// var forecastContainer =  document.querySelector("#forecast-container");



// var getCurrent = function(citySearch){
//     var currentAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=891d5adf6f627c8e1d4185e6ee80e104";
//     // console.log(currentAPI);
//     fetch(currentAPI)
//     .then(function(response){
//     return response.json();
//     console.log(response.json())
// })
//     .then(function(response) {
//     for (var i = 0; i < response.length; i++) {
//         var listItem = document.createElement('li');
//         listItem.textContent = response[i];
//         currentContainer.appendChild(listItem);
// };
//     })};
// getCurrent();

//takes the long and lat values from the weatherAPI and concatonates them in the forecastAPI
//weatherAPI : coord.lon, coord.lat

// var getForecast = function(lat,lon){
//     var forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=891d5adf6f627c8e1d4185e6ee80e104";
//     fetch(forecastAPI)
//     .then(function(response){
//     return response.json()})
//     .then(function(data) {
//     // console.log(data)
// });
// };
// getForecast();

// var displayCurrent = function(cityInput){
//     cityInput.textContent = cityInput;
//     var currentEl = currentContainer.createElement("p");
//     currentEl.classList = "list-item flex-row justify-space-between align-center";
//     currentEl.textContent = cityInput;

//     currentEl.appendChild(cityInput);

// }

// function searchForecast(city){

//     var weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=pacifica&appid=891d5adf6f627c8e1d4185e6ee80e104";
//     var forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?lat=37.6138&lon=-122.4869&appid=891d5adf6f627c8e1d4185e6ee80e104";
//     fetch(forecastAPI)
//         .then(function(response){
//         return response.json()})
//         .then(function(data) {
//         console.log(data)
//     });
// };
// searchForecast();

// fetch(requestUrl)
//   .then(function (response) {
//     console.log(response);
//     return response.json();
//   })
//   .then(function (data) {
//     console.log("data", data)
//     console.log('Github Repo Issues \n----------');
//     for (var i = 0; i < data.length; i++) {
//       console.log(data[i]);
//       console.log(data[i].url);
//       console.log(data[i].user.login);
//     }
//   });

// need to define var savedCityButton : ID of stored city once it is appended
//class="btn-outline-secondary rounded ml-1 m-2"
// userForm.addEventListener("submit",formSubmit);
// savedCityButton.addEventListener("click", buttonClick);

//user input city -- API call for coordinates

//http://api.openweathermap.org/geo/1.0/direct?q=san+francisco&limit=5&appid=891d5adf6f627c8e1d4185e6ee80e104

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

// calls to Geocoding API to get the cordinates of a city based on the user's form input val
function getCord(city) {
  var corQueryUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=891d5adf6f627c8e1d4185e6ee80e104";

  console.log(corQueryUrl);
  fetch(corQueryUrl)
    .then(function (response) {
    // status in the range 200-299
      if (response.ok) {
        response.json().then(function (data) {
          //only retrieves the data from the first result
          console.log( data[0].lat, data[0].lon);
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
};


function getForecast(searchLat, searchLon){
    var forQueryUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + searchLat + "&lon=" + searchLon + "&units=imperial&appid=891d5adf6f627c8e1d4185e6ee80e104";
    console.log(forQueryUrl);
    fetch(forQueryUrl)
        .then(function(response){
            response.json().then(function (data) {
            console.log(data.list[0].main.temp);
        //   return data[0].lat , data[0].lon;
        })
    
})};


userForm.addEventListener("submit", formSubmitHandler);

//after API for coordinates made, API for forecast using the values from the prev call
// function that renders data for searched city onto screem
// buttons appended allow for users to search for prev searches
