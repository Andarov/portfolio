const elsDay = document.querySelectorAll(".input-day");
const elsNight = document.querySelectorAll(".input-night");

const toggleMode = function(){
    document.body.classList.toggle("dark-mode");
}

elsDay.forEach(function(item,index) {
    item.addEventListener("click", function () {
        toggleMode()
    })
})

elsNight.forEach(function(item,index) {
    item.addEventListener("click", function () {
        toggleMode()
    })
})