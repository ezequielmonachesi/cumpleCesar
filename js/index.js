let audio = new Audio('./audio/sientemeAsi.mp3');

let btnPlay = document.getElementById('btn-play');
let btnPause = document.getElementById('btn-pause');


btnPlay.addEventListener('click', ()=>{
    audio.play();
})
