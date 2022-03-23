const hamburgerMenuBtn = document.querySelector("#hammenu");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const fade_mob = document.querySelectorAll(".fade-mob");

hamburgerMenuBtn.addEventListener("click", function () {
    console.log("hamburgermenu");

    if (header.classList.contains("open")) {
        //close menu
        header.classList.remove("open");
        body.classList.remove("noscroll");
        fade_mob.forEach(function (element) {
            element.classList.remove("fade-in");
            element.classList.add("fade-out");
        });
    } else {
        //open menu
        header.classList.add("open");
        body.classList.add("noscroll");
        fade_mob.forEach(function (element) {
            element.classList.add("fade-in");
            element.classList.remove("fade-out");
        });
    }
});
