const openApi =
{
    key:"7e3f21edee540e6110af347b55eb1ab2",
    base:"https://api.openweathermap.org/data/2.5/"

}

const city_input =document.getElementById("city")
city_input.addEventListener("keypress",getWeatherDetails);


function getWeatherDetails(evnt)
{
    if(evnt.keyCode==13)
    {
    getWeatherInfo(city_input.value)
}
}
function getWeatherInfo(cityName)
{
  //  alert("Key pressed " +city_input.value)

  //fetch("https://api.openweathermap.org/data/2.5/weather?q="+city_input.value+"&appid=7e3f21edee540e6110af347b55eb1ab2");
    fetch(`${openApi.base}weather?q=${cityName}&appid=${openApi.key}`)
    .then(weather=>
        {
            return weather.json();
        })
        .then(response=>
            {
                console.log(response)
                displayResponse(response);
            })

            

}

function displayResponse(weather)
{
    let city =document.getElementById("location")
    city.innerText=`${weather.name},${weather.sys.country}`

    let now =new Date();
    let dt =document.getElementById("curr_timestamp")

    
    dt.innerText=dateBuilder(now)

    let temp =document.getElementById("temp")
    temp.innerHTML=`${Math.round(weather.main.temp)} <span>&deg;C</span>`

    let whether =document.getElementById("weather")
    whether.innerText=weather.weather[0].main

    let highlow =document.getElementById("high-low")

    highlow.innerHTML=`${Math.round(weather.main.temp_min)} <span>&deg;C</span> / ${Math.round(weather.main.temp_max)} &deg;C`

}


function dateBuilder(currentDate)
{
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"]
    let days=["Sunday","Monday","Tuesday","Wednesday","Thurday","Friday","Saturday"]
    let day =days[currentDate.getDay()];
    let date =currentDate.getDate();
    let month =months[currentDate.getMonth()];
    let year=currentDate.getFullYear();
    return `${day} ${date} ${month} ${year}`;



}