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
        let interval = setInterval(() => {
            this.hunger += 1
            hungerNumber.innerText = this.hunger
            if(character.hunger >= 10) {
                clearInterval(interval)
            }
        }, 1000)
    }
    sleepinessInterval () {
        let interval = setInterval(() => {
            this.sleepiness += 1
            sleepinessNumber.innerText = this.sleepiness
            if(character.sleepiness >= 10) {
                clearInterval(interval)
            }
        }, 1000)
    }
    boredomInterval () {
        let interval = setInterval(() => {
            this.boredom += 1
            boredomNumber.innerText = this.boredom
            if(character.boredom >= 10) {
                clearInterval(interval)
            }
        }, 1000)
    }
}

//Instantiate Tamagotchi
let character = new Tamagotchi("", 0, 0, 0)

//Game Class
class Game{

}

//Functions
function startButton () {
    homescreen.style.display = "none"
    start.style.display = "none"
    let username = prompt("Please enter your new pet's name")
    character = new Tamagotchi(username, 0, 0, 0)
}
function feedButton () {

}
function sleepButton () {

}
function playButton () {

}

//HTML Classes, Tags, IDs
const homescreen = document.querySelector(".homescreen")
const rules1 = document.querySelector("#rules1")
const rules2 = document.querySelector("#rules2")
const rules3 = document.querySelector("#rules3")
const rules4 = document.querySelector("#rules4")
const buttons = document.querySelector(".buttons")
const start = document.querySelector("#start")
const feed = document.querySelector("#feed")
const sleep = document.querySelector("#sleep")
const play = document.querySelector("#play")
const stats = document.querySelector(".stats")
const hungerNumber = document.querySelector("#hunger-number")
const sleepinessNumber = document.querySelector("#sleepiness-number")
const boredomNumber = document.querySelector("#boredom-number")

//Event Listeners
start.addEventListener("click", () => {
    startButton()
    character.hungerInterval()
    character.sleepinessInterval()
    character.boredomInterval()
})