import { functions } from './functions.js'
import { tests } from './tests_szubienica.js'

let steps = 0
let arrayOfLetters = []
let foundLettersUsedTwice = false
let tableOfWords = [
    "javascript",
    "monter",
    "niesamowity",
    "piłka",
    "kanapka",
    "kapsel",
    "geniusz",
    "monitor"
]

let usersLifeNumber = functions.initialStateOfLife()
let randomWord = functions.chooseRandomWord(tableOfWords)
let answers = functions.prepareTableOfAnswers(randomWord)
let leftLetters = randomWord.length;


while (true) {
    functions.showCurrentScore(answers, arrayOfLetters)

    let shot = functions.loadPlayerShot(steps)
    steps = steps + 1
    if (shot === null) {
        2.
        alert('Pusia')
        break
    }
    else if (shot.length !== 1) {
        alert("Proszę podaj tylko jedną literę.")
    }
    else {
        ({ arrayOfLetters, foundLettersUsedTwice } = functions.whichLettersWereUsed(shot, arrayOfLetters))
        if (!foundLettersUsedTwice) {
            ({ answers, leftLetters, usersLifeNumber } = functions.updateGameState(shot, randomWord, answers, leftLetters, usersLifeNumber))

            if (functions.checkEndGameCondition(usersLifeNumber, leftLetters, randomWord, steps, false)) {
                break
            }
        }
    }
}


//Tests
// tests.checkPrepareTableOfAnswers()
// tests.checkUsersLifeNumber()
// tests.checkWhichLettersWereUsed()
tests.checkUpdateGameState()