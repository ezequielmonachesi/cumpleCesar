let audio = new Audio('./audio/sientemeAsi.mp3');

let btnPlay = document.getElementById('btn-play');
let btnPause = document.getElementById('btn-pause')

btnPlay.addEventListener('click', reproducirMusica);
btnPause.addEventListener('click', pausarMusica);

function reproducirMusica(){
    audio.play();
    btnPlay.classList.add('d-none');
    btnPause.classList.remove('d-none');
}

function pausarMusica(){
    audio.pause();
    btnPause.classList.add('d-none');
    btnPlay.classList.remove('d-none');
}