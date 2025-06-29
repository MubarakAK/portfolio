let taskbar = document.getElementsByClassName("button1")[0]
let startmenu = document.getElementsByClassName("start")[0]
let bg = document.getElementsByClassName("bg")[0]
let no = 1
taskbar.addEventListener("click", ()=>{
    console.log("clicked")
    if(startmenu.style.bottom == '-70vh')
    {
        startmenu.style.bottom = '6vh'
    }
    else{
        startmenu.style.bottom = '-70vh'
    }
})

setInterval(() => {
    bg.style.backgroundImage = `url(Images/${no}.jpg)`
    
    if(no==2){
        no =1
    }
    else{
        no = 2
    }


}, 5000);