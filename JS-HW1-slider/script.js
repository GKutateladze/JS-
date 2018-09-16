var active_link = 0;
var img = document.getElementById("slider");
var img_source = [
    "https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-jump.png",
    "https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-on-foot.png",
    "https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-playground.png",
    "https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-top-view.png",
    "https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax.png"
];

window.addEventListener("load", function() {
    img.src = img_source[0];
});

setInterval(function(){
    if (active_link === img_source.length) {
        active_link = 0;
    }
    img.src = img_source[active_link]
    active_link += 1;
    console.log(active_link)
}, 5000);