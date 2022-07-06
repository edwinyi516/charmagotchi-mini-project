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
                allContent.innerHTML = "" //Change to dead and reset screen later
                alert(`${character.name} died of hunger! Stop eating all the food!`)
            }
        }, 7000)
    }
    sleepinessInterval () {
        let interval = setInterval(() => {
            this.sleepiness += 1
            sleepinessNumber.innerText = this.sleepiness
            if(character.sleepiness >= 10) {
                clearInterval(interval)
                allContent.innerHTML = "" //Change to dead and reset screen later
                alert(`${character.name} died from being too tired! Quit hogging the bed!`)
            }
        }, 12000)
    }
    boredomInterval () {
        let interval = setInterval(() => {
            this.boredom += 1
            boredomNumber.innerText = this.boredom
            if(character.boredom >= 10) {
                clearInterval(interval)
                allContent.innerHTML = "" //Change to dead and reset screen later
                alert(`${character.name} died of boredom! Get off of your phone and play with your pet!`)
            }
        }, 5000)
    }
}

//Instantiate Tamagotchi
let character = new Tamagotchi("", 0, 0, 0)

//Game Object with Methods
let game = {
    startButton () {
        homescreen.style.display = "none"
        start.style.display = "none"
        tips.style.display = "inline-block"
        nameClass.style.display = "inline-block"
        stats.style.display = "inline-block"
        feed.style.display = "inline-block"
        sleep.style.display = "inline-block"
        play.style.display = "inline-block"
        let username = prompt("Please enter your new pet's name")
        character = new Tamagotchi(username, 0, 0, 0)
        nameValue.innerText = username
    },
    feedButton () {
        if (character.hunger > 0) {
            character.hunger -= 1
            character.sleepiness += 1
            hungerNumber.innerText = character.hunger
            sleepinessNumber.innerText = character.sleepiness
        }
        else {
            alert(`${character.name} isn't hungry!`)
        }
    },
    sleepButton () {
        if (character.sleepiness > 0) {
            character.sleepiness -= 1
            sleepinessNumber.innerText = character.sleepiness
        }
        else {
            alert(`${character.name} isn't sleepy!`)
        }
    },
    playButton () {
        if (character.boredom > 0) {
            character.boredom -= 1
            character.hunger += 1
            boredomNumber.innerText = character.boredom
            hungerNumber.innerText = character.hunger
        }
        else {
            alert(`${character.name} isn't bored!`)
        }
    }
}

//DOM Elements
const allContent = document.querySelector("#content")
const homescreen = document.querySelector(".homescreen")
const rules1 = document.querySelector("#rules1")
const rules2 = document.querySelector("#rules2")
const rules3 = document.querySelector("#rules3")
const rules4 = document.querySelector("#rules4")
const tips = document.querySelector(".tips")
const buttons = document.querySelector(".buttons")
const start = document.querySelector("#start")
const feed = document.querySelector("#feed")
const sleep = document.querySelector("#sleep")
const play = document.querySelector("#play")
const stats = document.querySelector(".stats")
const nameClass = document.querySelector(".name")
const nameValue = document.querySelector("#name-value")
const hungerNumber = document.querySelector("#hunger-number")
const sleepinessNumber = document.querySelector("#sleepiness-number")
const boredomNumber = document.querySelector("#boredom-number")

//Event Listeners
start.addEventListener("click", () => {
    game.startButton()
    character.hungerInterval()
    character.sleepinessInterval()
    character.boredomInterval()
})
feed.addEventListener("click", () => {
    game.feedButton()
})
sleep.addEventListener("click", () => {
    game.sleepButton()
})
play.addEventListener("click", () => {
    game.playButton()
})