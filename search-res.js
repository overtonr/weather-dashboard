var userForm = document.querySelector("#user-form");
var cityInput = document.querySelector("#city-input");
var currentContainer = document.querySelector("#current-container");
var forecastContainer =  document.querySelector("#forecast-container");



var formSubmit = function(event){
    // preventDefault();
    //trim excess spaces (leading and trailing),if there is still is a space, it is between words in the city, replace with "+"
    var city = cityInput.value.trim();
    var citySearch = city.replace(" ","+")
    if (citySearch) {
        getCurrent(citySearch);
        cityInput.value ="";
    }
    return citySearch;
};

var getCurrent = function(citySearch){
    var currentAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=891d5adf6f627c8e1d4185e6ee80e104";
    // console.log(currentAPI);
    fetch(currentAPI)
    .then(function(response){ 
    return response.json();
    console.log(response.json())
})
    .then(function(response) {
    for (var i = 0; i < response.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = response[i];
        currentContainer.appendChild(listItem);
};
    })};
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
userForm.addEventListener("submit",formSubmit);
// savedCityButton.addEventListener("click", buttonClick);