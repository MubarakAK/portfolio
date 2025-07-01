let turn = ["X", "O"]
let gameover = 0
let boxes = Array.from(document.getElementsByClassName("boxos"))
let winner = ""
let cracker, inter
let stopper = 1
scorex = 0
scorexcard = document.getElementsByClassName("xcard")[0]
scoreycard = document.getElementsByClassName("ycard")[0]
resetstats = document.getElementById("resetstat")
playagain = document.getElementById("playgain")
scorexcard.innerText = scorex
scoreo = 0
scoreycard.innerText = scoreo

wincombs =
    [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]

    ]

iswin = () => {
    winner=""
    stopper=1
    wincombs.forEach(element => {
        if (boxes[element[0]].innerText == boxes[element[1]].innerText && boxes[element[2]].innerText == boxes[element[1]].innerText && boxes[element[2]].innerText != "") {
            gameover = 1
            winner = boxes[element[0]].innerText
            console.log(winner)
        }
    })

    boxes.forEach(element => {
        if(element.innerText!="")
        {
        }
        else{
            stopper=0
        }
    });

    if(stopper!=0)
    {
        gameover=1
        console.log("checky")
    }
}



boxes.forEach(element => {
    element.addEventListener("click", () => {
        let texttoadd = turn[0]
        if (gameover == 0 && element.innerText == '') {
            element.innerText = texttoadd
            inter = turn[0]
            turn[0] = turn[1]
            turn[1] = inter
            iswin()
            console.log(winner)

            if (gameover == 1 && winner == "X") {
                scorex += 2
                alert("Player X Won")
                scorexcard.innerText = scorex
            }
            else if (gameover == 1 && winner == "O") {
                scoreo += 2
                alert("Player O Won")
                scoreycard.innerText = scoreo

            }
            else if (gameover == 1 && winner == "") {
                scoreo += 1
                scorex += 1
                alert("Players Drew Circular Pyramids :)")

            }
        }
    })
})


playagain.addEventListener("click", () => {
    boxes.forEach(element => {
        element.innerText = ""
    })
    gameover = 0
})

resetstats.addEventListener("click", () => {
    boxes.forEach(element => {
        element.innerText = ""
    })
    scorex = 0
    scorey = 0
    gameover = 0
    scoreycard.innerText = 0
    scorexcard.innerText = 0

})