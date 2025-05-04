car = document.getElementById("car");
obstacle = document.getElementsByClassName("obs")[0];
wheels = Array.from(document.getElementsByClassName("tyr"))
gameover = 0
score = 0

jump = () => {
    car.style.animation = "shake 30s infinite linear, jumper 1s 1 linear"
    wheels.forEach(element => {
        element.style.animation = "wheelrot 10s infinite linear"
    });
    setTimeout(() => {
        car.style.animation = "shake 30s infinite linear"
        wheels.forEach(element => {
            element.style.animation = "wheelrot .03s infinite linear"
        });
    }, "2000");
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
    // console.log(intersectx, intersecty)
    return [intersectx, intersecty]
}

document.body.addEventListener("keyup", (Element) => {
    if ((Element.key == "ArrowUp" || Element.key == "w") && gameover == 0) {
        jump()
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
    if ((check[0] < 160) && (check[1] < 90)) {
        a = obstacle.getBoundingClientRect()
        b = `${a.left}px`
        obstacle.classList.remove("aniob")
        obstacle.style.left = b
        car.style.animation = "shake 1s 1 linear"
        wheels.forEach(element => {
            element.style.animation = "wheelrot 1000s infinite linear"
        });
        }
}, 100);

setInterval(() => {
obstacle = document.getElementsByClassName("obs")[0];
console.log(obstacle.style.animationDuration)
}, 1000);





