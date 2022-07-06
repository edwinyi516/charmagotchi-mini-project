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
        this.hunger += 1
    }
    sleepinessInterval () {
        this.sleepiness += 1
    }
    boredomInterval () {
        this.bredom += 1
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
        homescreen.style.display = "none"
    }
    feedButton () {

    }
    sleepButton () {

    }
    playButton () {

    }
}

//HTML Classes, Tags, IDs
const homescreen = document.querySelector(".homescreen")
const rules1 = document.querySelector("#rules1")
const rules2 = document.querySelector("#rules2")
const rules3 = document.querySelector("#rules3")
const rules4 = document.querySelector("#rules4")
const buttons = document.querySelector(".buttons")
const startButton = document.querySelector("#start")
const feedButton = document.querySelector("#feed")
const sleepButton = document.querySelector("#sleep")
const playButton = document.querySelector("#play")
const stats = document.querySelector(".stats")
const hungerNumber = document.querySelector("#hunger-number")
const sleepinessNumber = document.querySelector("#sleepiness-number")
const boredomNumber = document.querySelector("#boredom-number")

//Event Listeners
document.querySelector("#start").addEventListener("click", () => {
    let interval = setInterval(() => {
        character.hungerInterval()
        character.sleepinessInterval()
        character.boredomInterval()
        character.startButton()
        if(character.hunger >= 10 || character.sleepiness >= 10 || character.boredom >= 10) {
            clearInterval(interval)
        }
    }, 1000)
})