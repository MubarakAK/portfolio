let car = document.getElementById("car");
var scorecard = document.querySelector(".score")
let obstacle = document.getElementsByClassName("obs")[0];
let wheels = Array.from(document.getElementsByClassName("tyr"))
let roads = Array.from(document.getElementsByClassName("rd"))

var scorecheck = 1
let gameover = 0
var score = 0
let time = 4
let secs = 1

jump = (secs, time) => {
    car.style.animation = `shake 30s infinite linear, jumper ${secs}s 1 linear`
    wheels.forEach(element => {
        element.style.animation = "wheelrot 10s infinite linear"
    });
    setTimeout(() => {
        car.style.animation = "shake 30s infinite linear"
        wheels.forEach(element => {
            element.style.animation = "wheelrot .03s infinite linear"
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
        f = `${e.right - 100}px`
        car.style.left = f
    }
})

setInterval(() => {
    check = getDistance(car, obstacle)
    if ((check[0] < 162) && (check[1] < 90)) {
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
        car.style.animation = "shake 1s 1 linear"
        wheels.forEach(element => {
            element.style.animation = "wheelrot 1000s infinite linear"
        });
        gameover = 1
    }
    else if (scorecheck == 1 && (check[0] > 1)) {

        score += 1
        scorecheck = 0

        if (score != 0) {
            anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            time = anidur - 0.02;
            secs = time / 2.6
        }

        setTimeout(() => {
            scorecard.innerText = `Score = ${score}`;
        }, 1);
    }

}, 100);


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






