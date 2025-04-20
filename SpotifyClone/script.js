console.log("hi quantify")
let audioelem = new Audio("/audios/4.mp3");
console.log(audioelem.src)

let playbutseek = document.getElementsByClassName("icplay")[0];
let songitems = Array.from(document.getElementsByClassName("songitem"));
let songplays = Array.from(document.getElementsByClassName("playpause"));
let previous = document.getElementsByClassName("icprev")[0];
let next = document.getElementsByClassName("icnext")[0];


playbutseek.addEventListener("click", (e) => {
   if (audioelem.paused || audioelem.currentTime <= 0) {
      audioelem.play()
      playbutseek.innerText = "Pause"

   }
   else {
      audioelem.pause()
      playbutseek.innerText = "Play"
   }

})

let songs = [
   { songname: "Bewafa Nikli hai", coverpath: "/images/image5.jpeg", filepath: "/audios/0.mp3" },
   { songname: "Tum meri aasmaan", coverpath: "/images/image1.jpeg", filepath: "/audios/1.mp3" },
   { songname: "Despacito", coverpath: "/images/image2.jpeg", filepath: "/audios/2.mp3" },
   { songname: "AAj Ki Raat", coverpath: "/images/image3.jpeg", filepath: "/audios/3.mp3" },
   { songname: "mm hmm hmmm", coverpath: "/images/image4.jpeg", filepath: "/audios/4.mp3" },
   { songname: "tum meri asmaan", coverpath: "/images/image1.jpeg", filepath: "/audios/6.mp3" },
   { songname: "Despacito", coverpath: "/images/image2.jpeg", filepath: "/audios/7.mp3" },
   { songname: "AAj Ki Raat", coverpath: "/images/image3.jpeg", filepath: "/audios/8.mp3" },
   { songname: "mm hmm hmmm", coverpath: "/images/image4.jpeg", filepath: "/audios/9.mp3" },
   { songname: "Bewafa Nikli hai", coverpath: "/images/image5.jpeg", filepath: "/audios/10.mp3" },
]

progressbar = document.getElementById("ran");
console.log(progressbar)

audioelem.addEventListener("timeupdate", () => {
   progress = parseFloat(audioelem.currentTime / audioelem.duration * 1000)
   progressbar.value = progress
})


progressbar.addEventListener("change", () => {
   audioelem.pause()
   changedprogress = parseFloat(progressbar.value * audioelem.duration / 1000)
   audioelem.currentTime = changedprogress
   console.log(changedprogress);
   audioelem.play()

})

let makepause = (text) => {
   songitems.forEach((element, i) => {
      audioelem.pause()
      element.getElementsByClassName("playpause")[0].innerText = text
   })
}


songitems.forEach((element, i) => {
   // console.log(element, i)
   element.getElementsByTagName("div")[0].innerText = songs[i].songname;
   element.getElementsByTagName("img")[0].src = songs[i].coverpath
})


songplays.forEach((element, i) => {
   element.addEventListener("click", (e) => {

      if (element.innerText == "Pause") {
         audioelem.pause()
         element.innerText = "Play"
      }
      else {
         makepause("Play")
         indexsong = i
         if (audioelem.src == `http://127.0.0.1:5500/audios/${indexsong}.mp3`) {
            currpurr = audioelem.currentTime
         }
         else {
            audioelem.src = `http://127.0.0.1:5500/audios/${indexsong}.mp3`
            currpurr = 0
         }

         if (audioelem.paused || audioelem.currentTime <= 0) {
            element.innerText = "Pause"
            audioelem.currentTime = currpurr
            audioelem.play()

         }
      }
   })
})

previous.addEventListener("click", (e) => {
   if (indexsong != 0) {
      audioelem.src = songs[indexsong - 1].filepath
      indexsong = indexsong - 1
      makepause("Play")

      if (audioelem.paused || audioelem.currentTime <= 0) {
         audioelem.play()
      }
   }
   else {
      alert("This is the first song to be made in history! Stop you novelty finder")
      audioelem.play()
   }

})

next.addEventListener("click", (e) => {
   if (indexsong != 9) {
      audioelem.src = songs[indexsong + 1].filepath
      indexsong = indexsong + 1
      makepause("Play")

      if (audioelem.paused || audioelem.currentTime <= 0) {
         audioelem.play()
      }
   }
   else {
      alert("This was the last song to be made in history! Dont get greedy")
      audioelem.play()
   }

})
