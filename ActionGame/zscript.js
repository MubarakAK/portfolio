let car = document.getElementById("car");
var scorecard = document.querySelector(".score")
let obstacle = document.getElementsByClassName("obs")[0];
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

    // setTimeout(() => {
    //     scorecheck = 1
    // }, time * 500);

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

obstacle.addEventListener('animationiteration', (event) => {
    if (gameover == 0) {
        console.log('Animation ended');
        console.log('Animation name:', event.animationName);
        console.log('Elapsed time:', event.elapsedTime);
        anim = obstacle.getAnimations()[0]
        anim.cancel();
        obstacle.style.animationDuration = `${time}s`;
        anim.play();
    }
});

funcreq = setInterval(() => {

    if (begin = 0) {
        clearInterval(funcreq)
    }
    password = localStorage.getItem("Highscore")
    if (score > password) {
        localStorage.setItem("Highscore", score)
        highscore = 1
    }


    if (start) {

        check = getDistance(car, obstacle)
        if ((check[0] < 160) && (check[1] < 60)) {
            a = obstacle.getBoundingClientRect()
            b = `${a.left}px`
            obstacle.classList.remove("aniob")
            if (obstacle.getAnimations() != '') {
                ani = obstacle.getAnimations()[0]
                ani.cancel();
            }
            if (gameover == 0) {
                roads.forEach(element => {
                    a1 = element.getAnimations()[0]
                    a1.cancel();
                });
            }

            obstacle.style.left = b
            // car.style.animation = "shake 1s 1 linear"
            car.getAnimations()[0].cancel()
            wheels.forEach(element => {
                element.style.animation = "wheelrot 1000s infinite linear"
            });
            gameover = 1
            start = 0
            begin = 0
            clearInterval(funcreq)
            startagain = confirm("Do you want to play again")
            if (startagain) {
                window.location = window.location.href
                start = 1
                begin = 1

            }
            else {
                if (window.history.go(-1) && document.referrer != window.location.href) {
                    window.location = window.history.go(-1)
                }
                else {
                    window.location = 'https://mubarakak.github.io/portfolio/projects.html'
                    start = 0
                }

            }

        }
        else if (scorecheck == 1 && (check[0] > 1)) {

            score += 1
            scorecheck = 0

            if (score != 0) {
                anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
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
                else{
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

            setTimeout(() => {
                if (highscore == 1) {
                    scorecard.innerText = `High Score : ${score}`;

                }
                else {
                    scorecard.innerText = `Score : ${score}`;
                    highscore = 0
                }
            }, 1);
        }
    }
}, 100);



setTimeout(() => {

    if (window.location.href == document.referrer) {
        start = 1
    }
    else {
        start = confirm("Do you want to start playing Jumping Car")
    }

    if (start) {
        begin = 1
        setTimeout(() => {
            setInterval(funcreq)
            obstacle.classList.add("aniob")

        }, 1000);
    }
    else {
        if (window.history.go(-1)) {
            window.location = window.history.go(-1)
        }
        else {
            window.location = 'https://mubarakak.github.io/portfolio/projects.html'
            start = 0
        }
    }

}, 1000);




