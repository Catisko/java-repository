import { functions } from './functions.js'
import { tests } from './tests_szubienica.js'

let steps = 0
let arrayOfLetters = []
let foundLettersUsedTwice = false
let tableOfWords = [ //1. 2. 3. 4. 5. 
    "javascript",
    "monter",
    "niesamowity",
    "piłka",
    "zakola",
    "kapsel",
    "geniusz",
    "monitor"
]
let usersLifeNumber = functions.initialStateOfLife() //1. 2. 3. 4. 5.
let randomWord = functions.chooseRandomWord(tableOfWords) //1. 2. 3. 5.
let answers = functions.prepareTableOfAnswers(randomWord) //1. 2. 3. 5.
let leftLetters = randomWord.length; //1. 2. 3. 5.


while (true) { //1. 2. 3. 5. 
    functions.showCurrentScore(answers, arrayOfLetters) //1. 2. 3. 5.

    let shot = functions.loadPlayerShot(steps) //1. 3. 5.
    steps = steps + 1
    if (shot === null) {//2.
        alert('Pusia')
        break //2.
    }
    else if (shot.length !== 1) { //5.
        alert("Proszę podaj tylko jedną literę.")
    }
    else {
        ({ arrayOfLetters, foundLettersUsedTwice } = functions.whichLettersWereUsed(shot, arrayOfLetters))
        if (!foundLettersUsedTwice) {
            ({ answers, leftLetters, usersLifeNumber } = functions.updateGameState(shot, randomWord, answers, leftLetters, usersLifeNumber)) //1. 3.

            if (functions.checkEndGameCondition(usersLifeNumber, leftLetters, randomWord, steps, false)) { //1. 3.
                break
            }
        }
    }
}


//Tests 
tests.checkPrepareTableOfAnswers()
tests.checkUsersLifeNumber()
tests.checkWhichLettersWereUsed()
