const elDay = document.querySelector(".input-day");
const elNight = document.querySelector(".input-night");

elDay.addEventListener("click", function () {
    document.body.classList.remove("dark-mode");
});

elNight.addEventListener("click", function () {
    document.body.classList.add("dark-mode");
});