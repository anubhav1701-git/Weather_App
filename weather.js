const apikey ="e68b6e3ed2fdd8a21479e6a6d19a982d";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkweather(city){
    const response = await fetch(apiurl+city +`&appid=${apikey}`);
    var data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temperature").innerHTML =Math.round(data.main.temp)+"°C";
document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
document.querySelector(".wind").innerHTML = data.wind.speed+"km/h";


  if(data.weather[0].main=="Clouds"){
    weathericon.src = "image/clouds.png";
   }
   else if(data.weather[0].main=="Clear"){
    weathericon.src = "image/clear.png";
   }
    else if(data.weather[0].main=="Rain"){
    weathericon.src = "image/rain.png";
   }
   else if(data.weather[0].main=="Drizzle"){
    weathericon.src = "image/drizzle.png";
   } 
   else if(data.weather[0].main=="Mist"){
    weathericon.src = "image/mist.png";
   }
   document.querySelector(".weather").style.display = "block";
}


searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})   

