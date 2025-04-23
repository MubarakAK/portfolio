dots = Array.from(document.getElementsByClassName("time"))
needles = Array.from(document.getElementsByClassName("hands"))
hourhand = document.getElementById("hour")
minhand = document.getElementById("minute")
sechand = document.getElementById("second")
mshand = document.getElementById("ms")

let height = 30
let angle = 30
let dist = 0
let template = ``
let position = 0
let now = new Date();
let hours = now.getHours();
let deghr = hours * 15
let minutes = now.getMinutes();
let degmin = minutes * 6
let seconds = now.getSeconds();
let degsec = seconds * 6
let milliseconds = now.getMilliseconds();
let degms = milliseconds * 6

dots.forEach(element => {
    position += 30;
    Object.assign(element.style, {
        transform: `rotate(${position}deg) translateY(-21vh) rotate(-${position}deg)`,

    })
});


setInterval(() => {
    now = new Date();
    hours = now.getHours();
    if (hours > 12) {
        hours = hours - 12
    }
    minutes = now.getMinutes();
    seconds = now.getSeconds();
    milliseconds = now.getMilliseconds();
    deghr = (hours + (minutes/60)) * 30
    degmin = (minutes + (seconds/60)) * 6
    degsec = (seconds + (milliseconds/1000)) * 6
    degms = milliseconds * 0.36

    needles.forEach(element => {

        if (element.id == "hour") {
            angle = deghr 
            dist = 7
            height = dist * 2
        }

        if (element.id == "minute") {
            angle = degmin 
            dist = 9.33
        }
    
        if (element.id == "second") {
            angle = degsec
            dist = 11.33
            height = dist * 2
        }

        if (element.id == "ms") {
            angle = degms
            dist = 3.33
            height = dist * 2
            console.log(milliseconds, degms)
        }
        Object.assign(element.style, {
            transform: `rotate(${angle}deg) translateY(-${dist}vh) `,
    
        })
    });

}, 200);

