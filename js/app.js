//Tamagotchi Class
class Tamagotchi {
    constructor(name, hunger, sleepiness, boredom, level) {
        this.name = name
        this.hunger = hunger
        this.sleepiness = sleepiness
        this.boredom = boredom
        this.level = level
    }
    //Stats Intervals
    hungerInterval () {
        let interval = setInterval(() => {
            if(character.hunger >=10) {
                clearInterval(interval)
                alert(`${character.name} died of hunger! Stop eating all the food!`)
                location.reload()
            }
            else if (character.sleepiness >= 10 || character.boredom >= 10) {
                clearInterval(interval)
            }
            this.hunger += 1
            hungerNumber.innerText = this.hunger
        }, 7000)
    }
    sleepinessInterval () {
        let interval = setInterval(() => {
            if(character.sleepiness >= 10) {
                clearInterval(interval)
                alert(`${character.name} died from being too tired! Quit hogging the bed!`)
                location.reload()
            }
            else if (character.hunger >= 10 || character.boredom >= 10) {
                clearInterval(interval)
            }
            this.sleepiness += 1
            sleepinessNumber.innerText = this.sleepiness
        }, 10000)
    }
    boredomInterval () {
        let interval = setInterval(() => {
            if(character.boredom >= 10) {
                clearInterval(interval)
                alert(`${character.name} died of boredom! Get off of your phone and play with your pet!`)
                location.reload()
            }
            else if (character.hunger >=10 || character.sleepiness >= 10) {
                clearInterval(interval)
            }
            this.boredom += 1
            boredomNumber.innerText = this.boredom
        }, 8000)
    }
    levelInterval () {
        let interval = setInterval(() => {
            if (character.hunger >=10 || character.sleepiness >= 10 || character.boredom >= 10) {
                clearInterval(interval)
            }
            this.level += 1
            levelNumber.innerText = this.level
            if (character.level === 1) {
                alert(`Your egg hatched into a Charmander!`)
                egg.style.display = "none"
                charmander.style.display = "block"
                charmanderSound.play()
            }
            else if (character.level === 16) {
                alert(`${character.name} evolved into a Charmeleon!`)
                charmander.style.display = "none"
                charmeleon.style.display = "block"
                charmeleonSound.play()
            }
            else if (character.level === 36) {
                alert(`${character.name} evolved into a Charizard!`)
                charmeleon.style.display = "none"
                charizard.style.display = "block"
                charizardSound.play()
            }
        }, 5000)
    }
    eggMaker () {
        if (character.level === 0) {
            egg.style.display = "block"
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
        statsData.style.display = "flex"
        let username = prompt("Please enter your new pet's name")
        while (username === "" || username === null) {
            alert(`Your pet needs a name!`)
            username = prompt("Please enter your new pet's name")
        }
        character = new Tamagotchi(username, 0, 0, 0, 0)
        nameValue.innerText = username
    },
    muteButton () {
        if (audioOn.getAttribute("class") == "audio-selected") {
            audioOn.setAttribute("class", "audio-not-selected")
            audioMute.setAttribute("class", "audio-selected")
            charmanderSound.volume = 0
            charmeleonSound.volume = 0
            charizardSound.volume = 0
            owlSound.volume = 0
            birdSound.volume = 0
            gameboySound.volume = 0
            daybgm.volume = 0
            nightbgm.volume = 0
        }
        else if (audioMute.getAttribute("class") == "audio-selected") {
            audioMute.setAttribute("class", "audio-not-selected")
            audioOn.setAttribute("class", "audio-selected")
            charmanderSound.volume = .2
            charmeleonSound.volume = .2
            charizardSound.volume = .2
            owlSound.volume = 1
            birdSound.volume = 1
            gameboySound.volume = .3
            daybgm.volume = .2
            nightbgm.volume = .1
        }
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
            stats.setAttribute("class", "stats-night")
            sleep.style.display = "flex"
            feed.style.display = "none"
            play.style.display = "none"
            body.style.color = "white"
            daybgm.pause()
            daybgm.currentTime = 0
            owlSound.play()
            setTimeout(() => {
                nightbgm.play()
            },1000)
        }
        else {
            body.setAttribute("class", "daybg")
            stats.setAttribute("class", "stats")
            sleep.style.display = "none"
            feed.style.display = "flex"
            play.style.display = "flex"
            body.style.color = "black"
            nightbgm.pause()
            nightbgm.currentTime = 0
            birdSound.play()
            setTimeout(() => {
                daybgm.play()
            },1000)
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
const statsData = document.querySelector(".stats-data")
const nameClass = document.querySelector(".name")
const nameValue = document.querySelector("#name-value")
const hungerNumber = document.querySelector("#hunger-number")
const sleepinessNumber = document.querySelector("#sleepiness-number")
const boredomNumber = document.querySelector("#boredom-number")
const levelNumber = document.querySelector("#level-number")
const egg = document.querySelector("#egg")
const charmander = document.querySelector("#charmander")
const charmeleon = document.querySelector("#charmeleon")
const charizard = document.querySelector("#charizard")
const audioOn = document.querySelector("#audio-on")
const audioMute = document.querySelector("#audio-mute")
const charmanderSound = new Audio("sounds/charmander-sound.ogg")
const charmeleonSound = new Audio("sounds/charmeleon-sound.ogg")
const charizardSound = new Audio("sounds/charizard-sound.ogg")
const owlSound = new Audio("sounds/owl.mp3")
const birdSound = new Audio("sounds/birds.mp3")
const gameboySound = new Audio("sounds/gameboy-sound.mp3")
const daybgm = new Audio("https://vgmsite.com/soundtracks/pokemon-red-green-blue-yellow/ilqgmmwzfl/13%20Route%201.mp3")
const nightbgm = new Audio("https://vgmsite.com/soundtracks/pokemon-red-green-blue-yellow/lnoaxnzruq/04%20Pallet%20Town.mp3")
daybgm.loop = true
nightbgm.loop = true

//Event Listeners
start.addEventListener("click", () => {
    game.startButton()
    character.eggMaker()
    character.hungerInterval()
    character.sleepinessInterval()
    character.boredomInterval()
    character.levelInterval()
    if (audioOn.getAttribute("class") == "audio-selected") {
        charmanderSound.volume = .2
        charmeleonSound.volume = .2
        charizardSound.volume = .2
        owlSound.volume = 1
        birdSound.volume = 1
        gameboySound.volume = .3
        daybgm.volume = .2
        nightbgm.volume = .1
    }
    else if (audioMute.getAttribute("class") == "audio-selected") {
        charmanderSound.volume = 0
        charmeleonSound.volume = 0
        charizardSound.volume = 0
        owlSound.volume = 0
        birdSound.volume = 0
        gameboySound.volume = 0
        daybgm.volume = 0
        nightbgm.volume = 0
    }
    gameboySound.play()
    setTimeout(() => {
        daybgm.play()
    },1000)
})
audioOn.addEventListener("click", () => {
    game.muteButton()
})
audioMute.addEventListener("click", () => {
    game.muteButton()
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
    lights.disabled = true
    game.lightsButton()
    setTimeout(() => {
        lights.disabled = false
    },1001)
})