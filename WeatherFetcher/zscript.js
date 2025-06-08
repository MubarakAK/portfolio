let content = document.getElementsByClassName("content")[0]
let inp = document.getElementById("inp");
let inpbutton = document.getElementById("inpbutton");
let require, url, city, answer
let temp, wind, description, tempanswer, tempanswer1, tempanswer2, tempanswer3, no
let forecast = []
city = 'Berlin'
urltime = `https://api.api-ninjas.com/v1/worldtime?city=london`
urlcurrency = ` `
urlweather = `https://goweather.xyz/weather/${city}`

tempanswer = {
    "temperature": "21 °C",
    "wind": "21 km/h",
    "description": "Light rain shower",
    "forecast":
        [
            { "day": "1", "temperature": "21 °C", "wind": "24 km/h" },
            { "day": "2", "temperature": "+12 °C", "wind": "28 km/h" },
            { "day": "3", "temperature": "+14 °C", "wind": "26 km/h" }
        ]
}


async function fetchweather() {
    if (inp.value) {
        city = inp.value
    }
    url = `https://goweather.xyz/weather/${city}`
    // answer = tempanswer
    require = await fetch(url)
    answer = await require.json()
}

function processweather() {
    if(answer && answer!=0){
    temp = answer.temperature
    wind = answer.wind
    description = answer.description
    forecast = answer.forecast
    tempanswer1 = forecast[0]
    tempanswer2 = forecast[1]
    tempanswer3 = forecast[2]
    }

}

function dispweather() {
    content.innerHTMl = ``
    if(answer && answer!=0){
    result = `  <b><div class="first">
                    <div class="conty 0">
                            <p>Today</p>
                            <p>Location : ${city}</p>
                            <p>Temperature : ${temp}</p>
                            <p>Wind : ${wind}</p>
                            <p>Description : ${description}</p>
                    </div>
                </div>
                <div class="second">
                        Forecast
                        <div class="conty 1">
                            <p>Tomorrow</p>
                            <p>Temperature : ${tempanswer1.temperature}</p>
                            <p>Wind : ${tempanswer1.wind}</p>
                        </div>
                        <div class="conty 2">
                            <p>Day 2</p>
                            <p>Temperature : ${tempanswer2.temperature}</p>
                            <p>Wind : ${tempanswer2.wind}</p>
                        </div>
                        <div class="conty 3">
                            <p>Day 3</p>
                            <p>Temperature : ${tempanswer3.temperature}.temperature</p>
                            <p>Wind : ${tempanswer3.wind}</p>
                        </div>
                </div></b>`
    }
    else {
        result =`<b><div class="first">
                    <div class="conty 0">
                        Result Not Found
                    </div>
                </div>
                <div class="second">
                        Forecast
                        <div class="conty 1">
                        Forecast Not Found
                        </div>
                </div></b>`
    }

    content.innerHTML = result
    answer = 0
}




inpbutton.addEventListener("click", () => {
    fetchweather()
    processweather()
    dispweather()
})


// tempweather = {"temperature":"21 °C","wind":"21 km/h","description":"Light rain shower","forecast":[{"day":"1","temperature":"21 °C","wind":"24 km/h"},{"day":"2","temperature":"+12 °C","wind":"28 km/h"},{"day":"3","temperature":"+14 °C","wind":"26 km/h"}]}
// urlweather = `https://goweather.xyz/weather/${city}`