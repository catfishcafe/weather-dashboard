const srcForm = document.getElementById('srcFormEl');
const srcBar = document.getElementById('srcBarEl');

//capture the search once the button is clicked
//captured search will go to: http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

let srcSubmitHandler = function (event) {
    event.preventDefault();
    let city = srcBar.value.trim();
    // if (city) {
    //     getWeather(cityName);
    //⭐️⭐️Pass city into lon lat converter

    // }
    console.log(city);
};

// ⭐️ below: example
// var formSubmitHandler = function (event) {
//     event.preventDefault();
  
//     var username = nameInputEl.value.trim();
  
//     if (username) {
//       getUserRepos(username);
  
//       repoContainerEl.textContent = '';
//       nameInputEl.value = '';
//     } else {
//       alert('Please enter a GitHub username');
//     }
//   };
// end example ⭐️


//⭐️lat and lon are placeholders
let getWeather = function(city){
    let weatherURl = 'api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' 
    + lon + '&appid=765cbd98b5ddd0048eff53b809045cdc';
    fetch 
}

// var getUserRepos = function (user) {
//     var apiUrl = 'https://api.github.com/users/' + user + '/repos';
  
//     fetch(apiUrl)
//       .then(function (response) {
//         if (response.ok) {
//           response.json().then(function (data) {
//             displayRepos(data, user);
//           });
//         } else {
//           alert('Error: ' + response.statusText);
//         }
//       })
//       .catch(function (error) {
//         alert('Unable to connect to GitHub');
//       });
//   };
  
srcForm.addEventListener('submit', srcSubmitHandler);