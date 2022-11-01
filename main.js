const elsDay = document.querySelectorAll(".btn--day");
const elsNight = document.querySelectorAll(".btn--night");

const modeLocal = localStorage.getItem('mode')

if(modeLocal){
    document.body.classList.add("dark-mode");
    elsDay.forEach(function(item){
        item.classList.toggle('visually-hidden')
    })
    elsNight.forEach(function(item){
        item.classList.toggle('visually-hidden')
    })
}

const toggleMode = function(){
    document.body.classList.toggle("dark-mode");
    elsDay.forEach(function(item){
        item.classList.toggle('visually-hidden')
    })
    elsNight.forEach(function(item){
        item.classList.toggle('visually-hidden')
    })
}
elsDay.forEach(function(item,index) {
    item.addEventListener("click", function () {
        toggleMode()
        localStorage.setItem('mode', '')
    })
})

elsNight.forEach(function(item,index) {
    item.addEventListener("click", function () {
        toggleMode()
        localStorage.setItem('mode', 'dark-mode')
    })
})