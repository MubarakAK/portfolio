car = document.getElementById("car");
obstacle = document.getElementsByClassName("obs")[0];
wheels = Array.from(document.getElementsByClassName("tyr"))
gameover = 0
score = 0

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

    let distance = Math.sqrt(Math.pow(center2.x - center1.x, 2) + Math.pow(center2.y - center1.y, 2));
    let intersectx = obst2.left - car1.right
    let intersecty = obst2.top - car1.bottom

    if (intersectx < 0) {
        gameover = 1
        return gameover
    }
    else {
        score += 10
    }

    console.log(intersectx, intersecty)

}

jump = () => {
    car.style.animation = "shake 30s infinite linear, jumper 2s 1 linear"
    wheels.forEach(element => {
        element.style.animation = "wheelrot 10s infinite linear"

    });

    console.log("You jumped")
    setTimeout(() => {
        car.style.animation = "shake 30s infinite linear"
        wheels.forEach(element => {
            element.style.animation = "wheelrot .03s infinite linear"

        });
    }, "2000");


}

// while (gameover == 0) {
//     check = getDistance(car, obstacle)
//     if (check == 1) {
//         obstacle.style.animation = ""
//         console.log(obstacle.style.animation)
//         diststop = car.style.right
//         obstacle.style.left = `${diststop}`
//     }
// }

document.body.addEventListener("keyup", (Element) => {
    if ((Element.key == "ArrowUp" || " " || "w") && gameover == 0) {
        console.log("You Presed Down" + Element.key)
        check = getDistance(car, obstacle)
        jump()
    }
})


