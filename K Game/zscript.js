let turn = ["K"]
let gameover = 0
let gridboxes = Array.from(document.getElementsByClassName("gridchild"))
let boxes = Array.from(document.getElementsByClassName("boxos"))
let winner = ""
scorex = 0
scorexcard = document.getElementsByClassName("xcard")[0]
scorexcard.innerText = scorex
scoreo = 0
scoreycard = document.getElementsByClassName("ycard")[0]
scoreycard.innerText = scoreo
playagain = document.getElementById("playgain")
resetstats = document.getElementById("resetstat")

wincombs = [1, 6, 11, 16, 21, 4, 24, 8, 18, 12]

wincombs.forEach(element => {
    Object.assign(boxes[element - 1].style, {
        border: "0.5vh #F1D3B2 solid",
    })
    
})

cellbackschange = (boxid,prev,nex) => {
    prevarray = prev
    nexarray = nex
    boxrow = Math.ceil(parseFloat(boxid / 5))
    boxes.forEach((element, cell) => {
        cellrow = Math.ceil(parseFloat((cell + 1) / 5))
        if ((cell + 1) % 5 != 0) {
            nexcell = cell + 1;
        } else if ((cell + 1) % 5 == 0) {
            nexcell = cell - 4
        }
        if ((cell) % 5 != 0) {
            prevcell = cell - 1
        } else if (((cell) % 5 == 0)) {
            prevcell = cell + 4
        }
        nexelemen = boxes[nexcell]
        prevelemen = boxes[prevcell]
        if (element.classList.contains('changed') & cellrow != boxrow) {
            prevarray.push(cell);
        }
    })

    prevarray.forEach((element, i) => {
        if ((element + 1) % 5 == 0) {
            newelem = element - 4
        }
        else {
            newelem = element + 1
        }
        nexarray.push(newelem)
    })


    boxes.forEach((element, cell) => {
        cellrow = Math.ceil(parseFloat((cell + 1) / 5))
        if (cellrow != boxrow) {
            element.classList.remove("changed")
            for (k of nexarray) {
                if (cell == k) {
                    console.log(nexarray, k, cell)
                    element.classList.add("changed")
                }
            }
        }
    })


}



iswin = () => {
    black = 0;
    white = 0;
    whiteagain = 0;

    for (i of wincombs) {
        if (boxes[i - 1].classList.contains('changed')) {
            winintermediate = true
            white += 1
        }
        else {
            winintermediate = false
            return winintermediate;
        }
    }

    boxes.forEach((element, cell) => {
        if (!element.classList.contains("changed")) {
            black += 1;
        }
        else {
            whiteagain += 1
        }
    })

    if (whiteagain == white & white == 10 & black == 15) {
        gameover = 1
        return winintermediate
    }
}


gridboxes.forEach(element => {
    element.addEventListener("click", () => {
        gridno = parseInt(element.classList.value[4] + element.classList.value[5])
        reqelement = element.getElementsByClassName("boxos")[0]
        arr1 = []
        arr2 = []
        if (gameover == 0 & !reqelement.classList.contains('changed')) {
            reqelement.classList.add("changed")

            cellbackschange(gridno,arr1, arr2)

            check = iswin()
            if (check == true & gameover == 1) {
                scorex += 1
                alert("You Won Player, You Rock")
                scorexcard.innerText = scorex
            }
            else if (gameover == 0 && check == false) {
                console.log("Go on")
            }
        }
    })
})


playagain.addEventListener("click", () => {
    boxes.forEach(element => {
        element.classList.remove("changed")
    })
    gameover = 0
})

resetstats.addEventListener("click", () => {
    boxes.forEach(element => {
        element.classList.remove("changed")
    })
    scorex = 0
    scorey = 0
    gameover = 0
    scoreycard.innerText = 0
    scorexcard.innerText = 0

})