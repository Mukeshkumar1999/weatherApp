const form = document.querySelector('form');
const weather = document.getElementById('weather')
const search = document.getElementById('search');
const body = document.querySelector('body');
const API_KEY = '3265874a2c77ae4a04bb96236a642d2f';

const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data);
  showWeather(data);
};

const showWeather = (data) => {
  console.log('inside showWeather', data);
  if (data.cod == 404) {
    weather.innerHTML = '<h2>opps! city not found</h2>';
    return
  }

  weather.innerHTML = `
    <div>
    <img
      src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
      alt="weather"
    />
  </div>
  <div>
    <h2>${data.main.temp} ℃</h2>
    <h4>${data.weather[0].main}</h4>
  </div>
    
    
    `;


};

body.onload = () => {
  weather.innerHTML = `
  <div>
  <img
  src="https://openweathermap.org/img/wn/50n@2x.png"
  alt="weather"
  />
</div>
<div>
  <h2>32℃</h2>
  <h4>clear</h4>
</div>
  
  `;
}




form.addEventListener('submit', function (event) {
  console.log('city name:', search.value);
  getWeather(search.value);
  event.preventDefault();
})