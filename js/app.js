//Tamagotchi Class
class Tamagotchi {
    constructor(name, hunger, sleepiness, boredom) {
        this.name = name
        this.hunger = hunger
        this.sleepiness = sleepiness
        this.boredom = boredom
    }
    //Stats Intervals
    hungerInterval () {

    }
    sleepinessInterval () {

    }
    boredomInterval () {

    }
}

//Instantiate Tamagotchi
const character = new Tamagotchi("", 0, 0, 0)

//Game Class
class Game extends Tamagotchi{
    constructor(name, hunger, sleepiness, boredom) {
        super(name, hunger, sleepiness, boredom)
        this.name = name
        this.hunger = hunger
        this.sleepiness = sleepiness
        this.boredom = boredom
    }
    //Button Functions
    startButton () {
        let homescreen = document.querySelector(".homescreen")
        homescreen.style.display = "none"
    }
    feedButton () {

    }
    sleepButton () {

    }
    playButton () {

    }
}

//Event Listeners
document.querySelector("#start").addEventListener("click", startButton)