var active_link = 0;
var img = document.getElementById("currentPhoto");
var img_source = [
    "https://netology-code.github.io/hj-homeworks/browser/gallery/i/breuer-building.jpg",
    "https://netology-code.github.io/hj-homeworks/browser/gallery/i/guggenheim-museum.jpg",
    "https://netology-code.github.io/hj-homeworks/browser/gallery/i/headquarters.jpg",
    "https://netology-code.github.io/hj-homeworks/browser/gallery/i/IAC.jpg",
    "https://netology-code.github.io/hj-homeworks/browser/gallery/i/new-museum.jpg"
];

window.addEventListener("load", function() {
    img.src = img_source[0];
});

function nextImg() {
    if (active_link === img_source.length - 1) {
        active_link = 0;
        img.src = img_source[active_link];
    } else {
        active_link += 1;
        img.src = img_source[active_link];
    }
}

function prevImg() {
    if (active_link === 0) {
        active_link = img_source.length-1;
        img.src = img_source[active_link];
    } else {
        active_link -= 1;
        img.src = img_source[active_link];
    }
}

const nextPhoto = document.getElementById("nextPhoto");
nextPhoto.addEventListener("click", nextImg);

const prevPhoto = document.getElementById("prevPhoto");
prevPhoto.addEventListener("click", prevImg);
