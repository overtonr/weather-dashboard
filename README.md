# Challenge : Weather Dashboard


## Description:
This application uses a weather API, OpenWeather Map, to populate current and forecasted weather conditions. It allows users to search weather conditions by city, see the current and 5-day forecasted weather conditions, and click on previously searched cities to repopulate the forecast elements.
![Screenshot of search box](./assets/images/search-ss.png)
![Screenshot of saved cities](./assets/images/saved-ss.png)
![Screenshot of current conditions](./assets/images/current-ss.png)

## Usage:
Users are intially presented with a form that searches for weather conditions by city. Once the form is submitted, the city will be saved as a button that can be clicked again to repopulate the forecast conditions with that city's specific data. Users can see the current date, temperature, wind speed, and humidity. They are also presented with an icon that represents the given conditions. 

```
var getCurrent = function(citySearch){
    var currentAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=891d5adf6f627c8e1d4185e6ee80e104";
    fetch(currentAPI)
    .then(function(response){ 
    return response.json()})
    .then(function(data) {
});
};
getCurrent();
```

## Technologies Used:
* Github
* HTML
* CSS
* JavaScript
* OpenWeather Map API
* Bootstrap.js
* VS Code

## License:
Please refer to the license in the repository