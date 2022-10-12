console.log("hello");


function searchForecast(city){


    var weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=pacifica&appid=891d5adf6f627c8e1d4185e6ee80e104";
    var forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?lat=37.6138&lon=-122.4869&appid=891d5adf6f627c8e1d4185e6ee80e104";
    fetch(forecastAPI)
        .then(function(response){ 
        return response.json()})
        .then(function(data) {
        console.log(data)
    });
};
searchForecast();