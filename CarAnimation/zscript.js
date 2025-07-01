let car = document.getElementById("car");
let wheels = Array.from(document.getElementsByClassName("tyr"))
let roads = Array.from(document.getElementsByClassName("rd"))

var scorecheck = 0
let gameover = 0
let start = 1
var score = 0
let time = 7
let secs = 7 / 1.5
let tyrspeed1 = 1
let tyrspeed2 = 20
let highscore
let funcreq
let begin

jump = (secs, time) => {
    car.style.animation = `shake 30s infinite linear, jumper ${secs}s 1 linear`
    wheels.forEach(element => {
        element.style.animation = `wheelrot ${tyrspeed2}s infinite linear`
    });
    setTimeout(() => {
        car.style.animation = "shake 30s infinite linear"
        wheels.forEach(element => {
            element.style.animation = `wheelrot ${tyrspeed1}s infinite linear`
        });
        scorecheck = 1
    }, secs * 1000);
    scoreup()

}

function getDistance(element1, element2) {
    let car1 = element1.getBoundingClientRect();
    let obst2 = element2.getBoundingClientRect();
    let center1 = {
        x: car1.left + car1.width / 2,
        y: car1.top + car1.height / 2
    };
    let center2 = {
        x: obst2.left + obst2.width / 2,
        y: obst2.top + obst2.height / 2
    };
    let intersectx = Math.abs(center2.x - center1.x, 2)
    let intersecty = Math.abs(center2.y - center1.y, 2)
    return [intersectx, intersecty]
}

document.body.addEventListener("keydown", (Element) => {

    if ((Element.key == "ArrowUp" || Element.key == "w") && gameover == 0) {
        jump(secs, time)
    }
    if ((Element.key == "ArrowLeft" || Element.key == "a") && gameover == 0) {
        c = car.getBoundingClientRect()
        d = `${c.left - 100}px`
        car.style.left = d
    }
    if ((Element.key == "ArrowRight" || Element.key == "d") && gameover == 0) {
        e = car.getBoundingClientRect()
        f = `${e.left + 100}px`
        car.style.left = f
    }
})


function scoreup() {

    if (scorecheck == 1) {

        score += 1
        scorecheck = 0

        if (score != 0) {
            if (score < 11) {
                time = 7 - score * 0.2;
                secs = time / 1.5
            }
            else if (score < 21) {
                time = 5 - score * 0.05;
                secs = time / 1.8
            }
            else if (score < 41) {
                time = 4 - score * 0.025;
                secs = time / 2.3
            }
            else if (score < 81) {
                time = 3 - score * 0.0125;
                secs = time / 2.6
            }
            else if (score < 161) {
                time = 2 - score * 0.00625;
                secs = time / 3
            }
            else if (score < 321) {
                time = 1.01 - score * 0.00625;
                secs = time / 3.5
            }
            else {
                time = 0.015;
                secs = time / 4
            }


            if (score < 100) {
                tyrspeed1 = 0.01 + (100 - score) / 100
                tyrspeed2 = (20 - 0.30 / tyrspeed1) * (20 - 0.30 / tyrspeed1) / (20 - 0.30 / tyrspeed1)
            }
            else {
                tyrspeed1 = 0.02 - (score - 100) / 10000
                tyrspeed2 = (10 - 0.10 / tyrspeed1) * (10 - 0.10 / tyrspeed1) / (10 - 0.10 / tyrspeed1)
            }

        }
    }
    console.log(time,secs)
}