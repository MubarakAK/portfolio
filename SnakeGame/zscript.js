let grid = document.getElementsByClassName("gridmaster")[0]
let gameover = 0
let gamelost = 0
let gridboxes = Array.from(document.getElementsByClassName("gridchild"))
let boxes = Array.from(document.getElementsByClassName("boxos"))
let winner = ""
score = 0
scorexcard = document.getElementsByClassName("xcard")[0]
scorexcard.innerText = score
playagain = document.getElementById("playgain")
resetstats = document.getElementById("resetstat")
caption = document.getElementById("caption1")
caption2 = document.getElementById("caption2")
caption0 = document.getElementById("caption0")
snake = [[0, 231], [1, 232]]
direction = 1
snakedirection = 0
let iter = 0
let time = 220
let end = 0
let food = 0
let foodfield = []
let burger = 256
let leftborder = []
let rightborder = []
let downborder = []
let topborder = []
let get = localStorage.getItem("Highscore")
if (get == "") {
    localStorage.setItem("Highscore", 0)
}


for (let index = -16; index < 272; index++) {
    if ((index + 1) % 16 == 0) {
        leftborder.push(index);
    }
    if (index % 16 == 0) {
        rightborder.push(index);
    }
    if (index < 0) {
        topborder.push(index);
    }
    if (index > 255) {
        downborder.push(index);
    }
}

document.body.addEventListener("keydown", (Element) => {

    if ((Element.key == "ArrowUp" || Element.key == "w") && gameover == 0) {
        (snakedirection != 3) ? direction = 1 : direction = direction;
    }
    if ((Element.key == "ArrowDown" || Element.key == "w") && gameover == 0) {
        (snakedirection != 1) ? direction = 3 : direction = direction;
    }
    if ((Element.key == "ArrowRight" || Element.key == "d") && gameover == 0) {
        (snakedirection != 4) ? direction = 2 : direction = direction;
    }
    if ((Element.key == "ArrowLeft" || Element.key == "a") && gameover == 0) {
        (snakedirection != 2) ? direction = 4 : direction = direction;
    }
})

let snakemove = (snake, direction) => {
    oldsnake = snake
    newsnake = []
    length = oldsnake.length
    start = 0

    oldsnake.forEach(element => {
        snakeid = element[0]
        snakepos = element[1]
        if (snakeid == 0) {
            headid = element[0]
            headpos = element[1]
        }
        if (snakeid == 1) {
            head1id = element[0]
            head1pos = element[1]
        }
    })
    if (head1pos - headpos == 16) { snakedirection = 1 }
    if (headpos - head1pos == 1) { snakedirection = 2 }
    if (headpos - head1pos == 16) { snakedirection = 3 }
    if (head1pos - headpos == 1) { snakedirection = 4 }

    if (direction == 1 && snakedirection != 3 && iter == 0) {
        iter = 1
        start = 1;
        newhead = [headid, headpos - 16]
        newsnake.unshift([headid, headpos - 16])
    }
    else if (direction == 2 && snakedirection != 4 && iter == 0) {
        iter = 1
        start = 1;
        newhead = [headid, headpos + 1]
        newsnake.unshift([headid, headpos + 1])
    }
    else if (direction == 3 && snakedirection != 1 && iter == 0) {
        iter = 1
        start = 1;
        newhead = [headid, headpos + 16]
        newsnake.unshift([headid, headpos + 16])
    }
    else if (direction == 4 && snakedirection != 2 && iter == 0) {
        iter = 1
        start = 1;
        newhead = [headid, headpos - 1]
        newsnake.unshift([headid, headpos - 1])
    }

    if (headpos == 0 || headpos == 256) {
        start = 0;
    }

    oldsnake.forEach(element => {
        snakeid = element[0]
        snakepos = element[1]
       
        if (snakeid == length - 1) {
            tailid = element[0]
            tailpos = element[1]
        }
        else {
            newsnake.push([snakeid + 1, snakepos])
        }
    })
    

    if ((food == 1) && (burger == newhead[1])) {
        newsnake.push([tailid + 1, tailpos])
        gridboxes.forEach((element, cell) => {
            reqelement = element.getElementsByClassName("boxos")[0]
            if ((gameover == 0) && (food == 1) && (cell == burger)) {
                reqelement.classList.remove("burger")
            }
        })
        food = 0
        score += 1
        scorexcard.innerText = score
    }

    if (direction == 1) {
        topborder.forEach(element => {
            if (element == headpos - 16) {
                start = 0;
                gameover = 1
                console.log(element, headpos - 16, 'top')
                highscore = localStorage.getItem("Highscore")
                if (score > highscore) {
                    localStorage.setItem("Highscore", score)
                    caption2.innerText = `New Highscore ${score}, Congratulations!`
                }
                else {
                    caption2.innerText = `Your score ${score}, Highscore ${highscore}`
                }
                return oldsnake
            }
        })
    }

    if (direction == 2) {
        rightborder.forEach(element => {
            if (element == headpos + 1) {
                start = 0;
                gameover = 1
                console.log(element, headpos + 1, 'right')
                highscore = localStorage.getItem("Highscore")
                if (score > highscore) {
                    localStorage.setItem("Highscore", score)
                    caption2.innerText = `New Highscore ${score}, Congratulations!`
                }
                else {
                    caption2.innerText = `Your score ${score}, Highscore ${highscore}`
                }
                return oldsnake
            }
        })
    }

    if (direction == 3) {
        downborder.forEach(element => {
            if (element == headpos + 16) {
                start = 0;
                gameover = 1
                console.log(element, headpos + 16, "down")
                highscore = localStorage.getItem("Highscore")
                if (score > highscore) {
                    localStorage.setItem("Highscore", score)
                    caption2.innerText = `New Highscore ${score}, Congratulations!`
                }
                else {
                    caption2.innerText = `Your score ${score}, Highscore ${highscore}`
                }
                return oldsnake
            }
        })
    }

    if (direction == 4) {
        leftborder.forEach(element => {
            if (element == headpos - 1) {
                start = 0;
                gameover = 1
                highscore = localStorage.getItem("Highscore")
                if (score > highscore) {
                    localStorage.setItem("Highscore", score)
                    caption2.innerText = `New Highscore ${score}, Congratulations!`
                }
                else {
                    caption2.innerText = `Your score ${score}, Highscore ${highscore}`
                }
                return oldsnake
            }
        })
    }

    if (start == 1) {
        returnsnake = newsnake;
    }
    else {
        returnsnake = oldsnake;
    }

    returnsnake.forEach(element => {
        snakeid = element[0]
        snakepos = element[1]
        if (snakeid == 0) {
            headid = element[0]
            headpos = element[1]
        }
    })
    returnsnake.forEach(element => {
        snakeid = element[0]
        snakepos = element[1]

        if ((snakeid != 0) && (snakepos == headpos)) {
            start = 0;
            gameover = 1
            highscore = localStorage.getItem("Highscore")
            if (score > highscore) {
                localStorage.setItem("Highscore", score)
                caption2.innerText = `New Highscore ${score}, Congratulations!`
            }
            else {
                caption2.innerText = `Your score ${score}, Highscore ${highscore}`
            }
            return oldsnake
        }

    })

    returnsnake.forEach(element => {
        snakeid = element[0]
        snakepos = element[1]
        if (snakeid == 0) {
            headid = element[0]
            headpos = element[1]
        }
        if (snakeid == 1) {
            head1id = element[0]
            head1pos = element[1]
        }
    })
    if (head1pos - headpos == 16) { snakedirection = 1 }
    if (headpos - head1pos == 1) { snakedirection = 2 }
    if (headpos - head1pos == 16) { snakedirection = 3 }
    if (head1pos - headpos == 1) { snakedirection = 4 }

    return returnsnake;
}

let foodmachine = () => {
    for (let index = 0; index < 256; index++) {
        if (!foodfield.includes(index))
            foodfield.push(index);
    }

    snake.forEach(elem => {
        snakeid = elem[0]
        snakepos = elem[1]

        let index = foodfield.indexOf(snakepos);
        if (index > -1) {
          foodfield.splice(index, 1); 
        }

    })

    foodmax = foodfield.length
    let i = parseInt(Math.random() * foodmax)
    burger = foodfield[i]

    gridboxes.forEach((element, cell) => {
        reqelement = element.getElementsByClassName("boxos")[0]
        if ((gameover == 0) && (food == 0) && (cell == burger)) {
            reqelement.classList.add("burger")
            food = 1
            console.log(foodfield,snake)
            foodfield = []
        }
    })
}

let Game = () => {
    if (food == 0) {
        foodfield = []
        foodmachine()
    }
    snake = snakemove(snake, direction)
    iter = 0
    gridboxes.forEach((element, cell) => {
        reqelement = element.getElementsByClassName("boxos")[0]
        reqelement.classList.remove("changed")
        reqelement.classList.remove("head")
    })
    gridboxes.forEach((element, cell) => {
        reqelement = element.getElementsByClassName("boxos")[0]
        snake.forEach(elem => {
            snakeid = elem[0]
            snakepos = elem[1]
            if ((gameover == 0) && (cell == snakepos)) {
                reqelement.classList.add("changed")
                if ((gameover == 0) && (snakeid == 0)) {
                    reqelement.classList.remove("changed")
                    reqelement.classList.add("head")
                }
            }
        })
    })

    time -= 1
}

let intervalid = setInterval(() => {
    if (gameover == 0) {
        Game()
    }
    else {
        caption0.innerText = "Game Over - Bloody Mess"
        caption.innerText = "Play Again"
        grid.style.border = "0.5vh red solid"
        grid.style.backgroundColor = "red"
        gridboxes.forEach((element, cell) => {
            element.style.border = "0vh white solid"
            reqelement = element.getElementsByClassName("boxos")[0]
            snake.forEach(elem => {
                snakeid = elem[0]
                snakepos = elem[1]
                if (cell == snakepos) {
                    reqelement.classList.add("changed")

                    if (snakeid == 0) {
                        reqelement.classList.remove("changed")
                        reqelement.classList.add("head")
                    }
                }
            })
        })
    }

}, time)






playagain.addEventListener("click", () => {
    boxes.forEach(element => {
        element.classList.remove("changed")
    })
    score = 0
    scorexcard.innerText = 0
    direction = 1
    iter = 0
    time = 200
    gameover = 0
    snake = [[0, 233], [1, 234]]
    caption0.innerText = "Feed the snake to win"
    caption.innerText = `Highscore ${localStorage.getItem("Highscore")}`
    caption2.innerText = ""
    grid.style.backgroundColor = "#1dc604"

})

resetstats.addEventListener("click", () => {
    score = 0
    scorexcard.innerText = 0
    localStorage.setItem("Highscore", 0)
})































////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let intervalId;
// let intervalTime = 1000; // Initial interval time in milliseconds

// function startInterval() {
//   intervalId = setInterval(myFunction, intervalTime);
// }

// function stopInterval() {
//   clearInterval(intervalId);
// }

// function myFunction() {
//   console.log("Function executed after " + intervalTime + "ms");
// }

// function changeIntervalTime(newTime) {
//   intervalTime = newTime;
//   stopInterval();
//   startInterval();
// }

// // Start the interval with the initial time
// startInterval();

// // Change the interval time after 5 seconds
// setTimeout(function() {
//   changeIntervalTime(2000); // Change to 2000ms (2 seconds)
// }, 5000);

// // Change the interval time again after another 7 seconds
// setTimeout(function() {
//   changeIntervalTime(500); // Change to 500ms (0.5 seconds)
// }, 12000);

