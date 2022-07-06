//Tamagotchi Class
class Tamagotchi {
    
}

//Game Class
class Game extends Tamagotchi {

}

//Stats Intervals
function hungerInterval () {
}
function sleepinessInterval () {

}
function boredomInterval () {

}

//Button Functions
function startButton () {
    let homescreen = document.querySelector(".homescreen")
    homescreen.style.display = "none"
    setInterval(hungerInterval, 1000)
}
function feedButton () {

}
function sleepButton () {

}
function playButton () {

}

//Stats Counter
function hungerCounter () {

}
function sleepinessCounter () {

}
function boredomCounter () {

}

//Event Listeners
document.querySelector("#start").addEventListener("click", startButton)