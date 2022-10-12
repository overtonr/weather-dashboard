var userForm = document.querySelector("#user-form");
var cityInput = document.querySelector("#city-input");
var currentContainer = document.querySelector("#current-container");
var forecastContainer =  document.querySelector("#forecast-container");


var formSubmit = function(event){
    event.preventDefault();
    var city = cityInput.value.trim();
    var citySearch = city.replace(" ","+")
    if (city) {
        retrieveCityData(city);
        currentContainer.textContent = "";
        cityInput.value ="";
    }
};

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
