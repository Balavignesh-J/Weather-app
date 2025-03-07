const key = "ae7f43753327477606ea8b9811cb5384";
/* https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key} */
const link = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const input = document.querySelector(".card input");
const btn = document.querySelector(".card button");


async function checkweather(city){
    const response = await fetch(link + city +`&appid=${key}`);
    
    if (response.status == "404") {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".con").style.display = "none";
    }
    else{
        document.querySelector(".error").style.display = "none";
        document.querySelector(".con").style.display = "block";
    }

    var data = await response.json();
    document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector("#c-name").innerHTML = data.name;
    document.querySelector("#temp-h").innerHTML = data.main.humidity + " %";
    document.querySelector("#w-speed").innerHTML = data.wind.speed + " KM/H";

    if (data.weather[0].main == "Clouds") {
        document.querySelector("#padam").src = "./assets/img/clouds.png";
    }

    if (data.weather[0].main == "Clear") {
        document.querySelector("#padam").src = "./assets/img/clear.png";
    }

    if (data.weather[0].main == "Drizzle") {
        document.querySelector("#padam").src = "./assets/img/drizzle.png";
    }

    if (data.weather[0].main == "Mist") {
        document.querySelector("#padam").src = "./assets/img/mist.png";
    }

    if (data.weather[0].main == "Rain") {
        document.querySelector("#padam").src = "./assets/img/rain.png";
    }

    if (data.weather[0].main == "Snow") {
        document.querySelector("#padam").src = "./assets/img/snow.png";
    }

    document.querySelector(".con").style.display = "block";
}

btn.addEventListener("click" ,()=>{
    checkweather(input.value);
})
