var audio = document.querySelector("audio");
var audioTitle = document.querySelector(".title");
var mediaplayer = document.querySelector(".mediaplayer");
var playButton = document.querySelector(".playstate");
var stopButton = document.querySelector(".stop");
var prevButton = document.querySelector(".back");
var nextButton = document.querySelector(".next");
var songs = [
    {
        name: "LA Chill Tour",
        src:
            "https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Chill%20Tour.mp3"
    },
    {
        name: "LA Fusion Jam",
        src:
            "https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Fusion%20Jam.mp3"
    },
    {
        name: "This is it band",
        src:
            "https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This%20is%20it%20band.mp3"
    }
];

playButton.onclick = playSong;
stopButton.onclick = stopSong;
nextButton.onclick = nextSong;
prevButton.onclick = prevSong;

function playSong() {
    mediaplayer.classList.toggle("play");

    if (mediaplayer.classList.contains("play")) {
        audio.play();
    } else {
        audio.pause();
    }
}

function stopSong() {
    audio.pause();
    audio.currentTime = 0;
    mediaplayer.classList.remove("play");
}

audio.src = songs[0].src;
let songIndex = 0;

function nextSong() {
    songIndex = songIndex + 1;
    if (songIndex >= songs.length) {
        songIndex = 0;
    }
    audio.src = songs[songIndex].src;
    audio.load();
    audioTitle.title = songs[songIndex].name;
    stopSong();
};

function prevSong() {
    songIndex = songIndex - 1;
    if (songIndex <= 0) {
        songIndex = songs.length - 1;
    }
    audio.src = songs[songIndex].src;
    audio.load();
    audioTitle.title = songs[songIndex].name;
    stopSong();
};
