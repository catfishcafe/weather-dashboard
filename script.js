//test
let lonLatApiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=raleigh&limit=1&appid=765cbd98b5ddd0048eff53b809045cdc'
fetch(lonLatApiUrl)
.then(response => response.json())
.then(searchedCity => 
    console.log('lon: ' + searchedCity[0].lon + 'lat: ' + searchedCity[0].lat)
    )
.catch(err => { throw err });

let weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=35.7803977&lon=-78.6390989&appid=765cbd98b5ddd0048eff53b809045cdc';
fetch(weatherUrl)
.then(response => response.json())
.then(city => 
    console.log(city)
    )
.catch(err => { throw err });
//test

const srcForm = document.getElementById('srcFormEl');
const srcBar = document.getElementById('srcBarEl');

let srcSubmitHandler = function (event) {
    event.preventDefault();
    let searchedCity = srcBar.value.trim();
    if (searchedCity){
        getCityLonLat(searchedCity);
        
        srcBar.value = '';
        //I need to clear the search results too but not sure how :/
    } else {
        alert('Please enter the name of a city.')
    }
};

let getCityLonLat = function(city){
    let lonLatApiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=1&appid=765cbd98b5ddd0048eff53b809045cdc'
    fetch(lonLatApiUrl)
    .then(response => response.json())
    .then(city => function(){
        let cityLon = city[0].lon;
        let cityLat =  city[0].lat;
        getWeather(cityLon, cityLat);
        console.log(getWeather);
    })
    .catch(function (error) {
  alert('Unable to connect to OpenWeather');
    });    
}

let getWeather = function(cityLon, cityLat){
    let weatherUrl = 'api.openweathermap.org/data/2.5/forecast?lat=' + cityLat + '&lon=' 
    + cityLon + '&appid=765cbd98b5ddd0048eff53b809045cdc';
    fetch(weatherUrl)
    .then(response => response.json())
    .then(city => function(){
        console.log(wait)
    })
}
  
srcForm.addEventListener('submit', srcSubmitHandler);