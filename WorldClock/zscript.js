// projet is under build, as a free version api for this exact purpose needs to be found, im looking till then the project is put on hold

let content = document.getElementsByClassName("first")[0]
let inp = document.getElementById("inp");
let inpbutton = document.getElementById("inpbutton");
let require, url, city, answer
let timezone, datetime, date, year, month, day, hour, minute, second, day_of_week, timeline, sunside
let forecast = []
let months
let timecheck = 0;
city = 'Berlin'
urltime = `https://api.api-ninjas.com/v1/worldtime?city=london`

months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
temptime = {
    "timezone": "Europe/London",
    "datetime": "2022-09-18 19:16:43",
    "date": "2022-09-18",
    "year": "2022",
    "month": "09",
    "day": "18",
    "hour": "19",
    "minute": "16",
    "second": "43",
    "day_of_week": "Sunday"
}


async function fetchtime() {
    if (inp.value) {
        city = inp.value
    }
    url = `https://api.api-ninjas.com/v1/worldtime?city=${city}`
    answer = temptime
    // require = await fetch(url, {
    //     method: 'GET',
    //     headers: {
    //         'X-Api-Key': 'bsBcNO5DBmThCZ+5416zig==iaSWuRUO7ngsoG7K'
    //     }
    // })
    answer = await require.json()
    console.log(require, answer)
}

function processtime() {
    if (answer && answer != 0) {
        timezone = answer.timezone
        datetime = answer.datetime
        year = answer.year
        date = answer.date
        month = answer.month
        day = answer.day
        hour = answer.hour
        sunside = 'AM'
        if (hour = '12') {
            sunside = 'PM'
        }
        if (parseInt(hour) > 12) {
            hour = parseInt(hour) - 12
            hour = hour.toString()
            sunside = 'PM'
            if (hour = '12') {
                sunside = 'AM'
            }
        }
        minute = answer.minute
        second = answer.second
        day_of_week = answer.day_of_week
        timeline = day + ' ' + months[parseInt(month)] + ' ' + year
        time = hour + " : " + minute + " : " + second + ' ' + sunside
    }
}


function disptime() {
    content.innerHTMl = ``
    if (answer && answer != 0) {
        result = `  <b><div class="conty 0">
                        <p>Location : ${city}</p>
                        <p>Time : ${time}</p>
                        <p>Day : ${day_of_week}</p>
                        <p>Date : ${timeline}</p>
                        <p>Timezone : ${timezone}</p>
                </div></b>`
    }
    else {
        result = `<b>
                    <div class="conty 0">
                        Result Not Found
                    </div></b>`

    }
    content.innerHTML = result
    answer = 0
}



inpbutton.addEventListener("click", () => {
    fetchtime()
    processtime()
    disptime()
    timecheck = 1
})



//////////////////////////////////// display analog
dots = Array.from(document.getElementsByClassName("time"))
needles = Array.from(document.getElementsByClassName("hands"))
hourhand = document.getElementById("hour")
minhand = document.getElementById("minute")
sechand = document.getElementById("second")

let height = 30
let angle = 30
let dist = 0
let template = ``
let position = 0
let now = datetime
let hours = hour;
let minutes = minute;
let seconds = second
let deghr = hours * 15
let degmin = minutes * 6
let degsec = seconds * 6
let sup = document.getElementsByClassName("sup")[0]

dots.forEach(element => {
    position += 30;
    Object.assign(element.style, {
        transform: `rotate(${position}deg) translateY(-13.3vh) rotate(-${position}deg)`,
    })
});


setInterval(() => {
    fetchtime()
    processtime()
    disptime()

    now = datetime;
    hours = parseInt(hour);
    if (hours > 12) {
        hours = hours - 12
    }
    minutes = parseInt(minute);
    seconds = parseInt(second);
    deghr = (hours + (minutes / 60)) * 30
    degmin = (minutes + (seconds / 60)) * 6
    degsec = (seconds) * 6

    if (timecheck == 1) {
        needles.forEach(element => {

            if (element.id == "hour") {
                angle = deghr
                dist = 4.9
                height = dist * 2
            }

            if (element.id == "minute") {
                angle = degmin
                dist = 6.53
            }

            if (element.id == "second") {
                angle = degsec
                dist = 7.33
                height = dist * 2
            }

            Object.assign(element.style, {
                transform: `rotate(${angle}deg) translateY(-${dist}vh) `,

            })
        });
        sup.classList.remove("sup")
    }

}, 1000);





//////////////////////////////////////////////////////// Alarm setting
//  1. get current apitime
//  2. convert required time set into current timeline system time(find difference)
//  3. get input from user for alarm time in required citys timeline
//  4. Set timeout alarm timeline so that audio plays at that time of req timeline + difference