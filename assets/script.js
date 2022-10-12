var userForm = document.querySelector("#user-form");
var cityInput = document.querySelector("#city-input");
var currentContainer = document.querySelector("#current-container");
var forecastContainer =  document.querySelector("#forecast-container");


var formSubmit = function(event){
    event.preventDefault();
    //trim excess spaces (leading and trailing),if there is still is a space, it is between words in the city, replace with "+"
    var city = cityInput.value.trim();
    var citySearch = city.replace(" ","+")
    if (citySearch) {
        getCurrent(citySearch);
        cityInput.value ="";
    }
};

var getCurrent = function(citySearch){
    var currentAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=891d5adf6f627c8e1d4185e6ee80e104";
    // console.log(currentAPI);
    fetch(currentAPI)
    .then(function(response){ 
    return response.json()})
    .then(function(data) {
    // console.log(data)
});
};
getCurrent();


//takes the long and lat values from the weatherAPI and concatonates them in the forecastAPI 
    //weatherAPI : coord.lon, coord.lat

var getForecast = function(lat,lon){
    var forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=891d5adf6f627c8e1d4185e6ee80e104";
    fetch(forecastAPI)
    .then(function(response){ 
    return response.json()})
    .then(function(data) {
    // console.log(data)
});
};
getForecast();

var displayCurrent = function(cityInput){
    cityInput.textContent = cityInput;
    var currentEl = currentContainer.createElement("p");
    currentEl.classList = "list-item flex-row justify-space-between align-center";
    currentEl.textContent = cityInput;

    currentEl.appendChild(cityInput);

}


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


// GIVEN a weather dashboard with form inputs : form to search city by name
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

//curent conditions : uses var weatherAPI to get the current weather conditions for that city : trim function, if there is a space replace it with a "+"
//future conditions : uses var forecastAPI to get the 5 day weather conditions (probably 1200) : takes the long and lat values from the weatherAPI and concatonates them in the forecastAPI 
    //weatherAPI : coord.lon, coord.lat
//search history: button appended with city name as text value: clicking uses local storage to populate containers with weather details again

// WHEN I view current weather conditions for that city
// WHEN I view future weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
    // Name
    // Date
    // Emoji representation: what are all of the possible values? ("main") and emojis for each (weather.icon)
//https://openweathermap.org/img/wn/{weather.icon}@2x.png
    // Temperature
    // Humidity
    // Wind speed


// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city ; retrieve from local storage



// need to define var savedCityButton : ID of stored city once it is appended
    //class="btn-outline-secondary rounded ml-1 m-2"
userForm.addEventListener("submit",formSubmit);
savedCityButton.addEventListener("click", buttonClick);