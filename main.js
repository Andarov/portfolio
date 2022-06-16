const elsDay = document.querySelectorAll(".input-day");
const elsNight = document.querySelectorAll(".input-night");

// elDay.addEventListener("click", function () {
//     document.body.classList.remove("dark-mode");
// });

// elNight.addEventListener("click", function () {
//     document.body.classList.add("dark-mode");
// });

elsDay.forEach(function(item,index) {
    item.addEventListener("click", function () {
        document.body.classList.remove("dark-mode");
    })
})

elsNight.forEach(function(item,index) {
    item.addEventListener("click", function () {
        document.body.classList.add("dark-mode");
    })
})