let option = document.getElementsByClassName("options")[0]
let togglers = Array.from(document.getElementsByClassName("toggler"))
let left = document.getElementsByClassName("left")[0]
let middle = document.getElementsByClassName("middle")[0]

let position = 0

option.addEventListener("click", ()=>{
    togglers.forEach(element => {
        element.classList.toggle("visibility")
        if(element.classList.contains("visibility"))
        {
           position = 1;
        }
    });


    if(position == 1){
        left.style.width = '3%'
        middle.style.width = '97%'
        position = 0
    }
    else if(position == 0){
        left.style.width = '13%'
        middle.style.width = '87%'
        position = 1
    }

})