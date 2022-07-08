//Tamagotchi Class
class Tamagotchi {
    constructor(name, hunger, sleepiness, boredom, age) {
        this.name = name
        this.hunger = hunger
        this.sleepiness = sleepiness
        this.boredom = boredom
        this.age = age
    }
    //Stats Intervals
    hungerInterval () {
        let interval = setInterval(() => {
            this.hunger += 1
            hungerNumber.innerText = this.hunger
            if(character.hunger >=10 || character.sleepiness >= 10 || character.boredom >= 10) {
                clearInterval(interval)
                alert(`${character.name} died of hunger! Stop eating all the food!`)
                location.reload()
            }
        }, 7000)
    }
    sleepinessInterval () {
        let interval = setInterval(() => {
            this.sleepiness += 1
            sleepinessNumber.innerText = this.sleepiness
            if(character.hunger >=10 || character.sleepiness >= 10 || character.boredom >= 10) {
                clearInterval(interval)
                alert(`${character.name} died from being too tired! Quit hogging the bed!`)
                location.reload()
            }
        }, 12000)
    }
    boredomInterval () {
        let interval = setInterval(() => {
            this.boredom += 1
            boredomNumber.innerText = this.boredom
            if(character.hunger >=10 || character.sleepiness >= 10 || character.boredom >= 10) {
                clearInterval(interval)
                alert(`${character.name} died of boredom! Get off of your phone and play with your pet!`)
                location.reload()
            }
        }, 5000)
    }
    ageInterval () {
        let interval = setInterval(() => {
            this.age += 1
            ageNumber.innerText = this.age
            if (character.age === 1) {
                alert(`Your egg hatched into a Charmander!`)
                egg.setAttribute("class", "character")
                charmander.setAttribute("class", "selected-char")
                charmanderSound.volume = .1
                charmanderSound.play()
            }
            else if (character.age === 16) {
                alert(`${character.name} evolved into a Charmeleon!`)
                charmander.setAttribute("class", "character")
                charmeleon.setAttribute("class", "selected-char")
                charmeleonSound.volume = .1
                charmeleonSound.play()
            }
            else if (character.age === 36) {
                alert(`${character.name} evolved into a Charizard!`)
                charmander.setAttribute("class", "character")
                charizard.setAttribute("class", "selected-char")
                charizardSound.volume = .1
                charizardSound.play()
            }
        }, 10000)
        if (character.hunger >=10 || character.sleepiness >= 10 || character.boredom >= 10) {
            clearInterval(interval)
        }
    }
    eggMaker () {
        if (character.age === 0) {
            egg.setAttribute("class", "selected-char")
        }
    }
}

//Instantiate Tamagotchi
let character = new Tamagotchi("", 0, 0, 0, 0)

//Game Object with Methods
let game = {
    startButton () {
        homescreen.style.display = "none"
        start.style.display = "none"
        tips.style.display = "block"
        feed.style.display = "flex"
        play.style.display = "flex"
        lights.style.display = "inline-flex"
        stats.style.display = "flex"
        let username = prompt("Please enter your new pet's name")
        while (username === "" || username === null) {
            alert(`Your pet needs a name!`)
            username = prompt("Please enter your new pet's name")
        }
        character = new Tamagotchi(username, 0, 0, 0, 0)
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
    },
    lightsButton () {
        if (body.getAttribute("class") == "daybg") {
            body.setAttribute("class", "nightbg")
            sleep.style.display = "flex"
            feed.style.display = "none"
            play.style.display = "none"
            body.style.color = "white"
        }
        else {
            body.setAttribute("class", "daybg")
            sleep.style.display = "none"
            feed.style.display = "flex"
            play.style.display = "flex"
            body.style.color = "black"
        }
    }
}


//DOM Elements
const body = document.body
const allContent = document.querySelector("#content")
const homescreen = document.querySelector(".homescreen")
const rules1 = document.querySelector("#rules1")
const rules2 = document.querySelector("#rules2")
const rules3 = document.querySelector("#rules3")
const rules4 = document.querySelector("#rules4")
const gameClass = document.querySelector(".game-class")
const tips = document.querySelector(".tips")
const buttons = document.querySelector(".buttons")
const start = document.querySelector("#start")
const feed = document.querySelector("#feed")
const sleep = document.querySelector("#sleep")
const play = document.querySelector("#play")
const lights = document.querySelector("#lights")
const stats = document.querySelector(".stats")
const nameClass = document.querySelector(".name")
const nameValue = document.querySelector("#name-value")
const hungerNumber = document.querySelector("#hunger-number")
const sleepinessNumber = document.querySelector("#sleepiness-number")
const boredomNumber = document.querySelector("#boredom-number")
const ageNumber = document.querySelector("#age-number")
const egg = document.querySelector("#egg")
const charmander = document.querySelector("#charmander")
const charmeleon = document.querySelector("charmeleon")
const charizard = document.querySelector("#charizard")
const charmanderSound = new Audio("sounds/charmander-sound.ogg")
const charmeleonSound = new Audio("sounds/charmeleon-sound.ogg")
const charizardSound = new Audio("sounds/charizard-sound.ogg")

//Event Listeners
start.addEventListener("click", () => {
    game.startButton()
    character.eggMaker()
    character.hungerInterval()
    character.sleepinessInterval()
    character.boredomInterval()
    character.ageInterval()
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
lights.addEventListener("click", () => {
    game.lightsButton()
})