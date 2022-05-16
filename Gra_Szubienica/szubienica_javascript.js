import { functions } from './functions.js'


let steps = 0
let arrayOfLetters = []
let foundLettersUsedTwice = false
// Utwórz tablicę ze słowami
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

//Wybierz słowo losowe
let randomWord = functions.chooseRandomWord(tableOfWords) //1. 2.  3. 5.

//Skonfiguruj tablicę z odpowiedziami
let answers = functions.prepareTableOfAnswers(randomWord) //1. 2.  3. 5.
let leftLetters = randomWord.length; //1. 2. 3. 5.


//Główna pętla gry 
while (true) { //1. 2. 3. 5. 
    //Pokaż graczowi bieżący wynik
    functions.showCurrentScore(answers, arrayOfLetters) //1. 2. 3. 5.

    //Wczytaj strzał gracza
    let shot = functions.loadPlayerShot(steps) //1. 3. 5.
    steps = steps + 1
    if (shot === null) {//2.
        alert('Pusia')
        //Wyjdź z głównej pętli gry
        break //2.
    }
    else if (shot.length !== 1) { //5.
        alert("Proszę podaj tylko jedną literę.")
    }
    else {
        ({ arrayOfLetters, foundLettersUsedTwice } = functions.whichLettersWereUsed(shot, arrayOfLetters))
        if (!foundLettersUsedTwice) {
            ({ answers, leftLetters, usersLifeNumber } = functions.updateGameState(shot, randomWord, answers, leftLetters, usersLifeNumber)) //1. 3.

            if (functions.checkEndGameCondition(usersLifeNumber, leftLetters, randomWord, steps)) {   //1. 3.
                break
            }
        }
        //Koniec głównej pętli gry 
    }
}
//pokaż odpowiedzi i pogratuluj


import { testowanie } from "./functions.js"

const checkPrepareTableOfAnswers = function () {
    let word = "monitor"
    let preparedAnswer = testowanie.prepareTableOfAnswers(word)

    if (preparedAnswer.length === word.length) {
        alert("przygotowane odpowiedzi maja poprawna dlugosc")
    } else {
        alert("przygotowane odpowiedzi nie maja poprawnej dlugosci")
    }

    let isDifferent = false
    for (let i = 0; i < preparedAnswer.length; i++) {
        if (preparedAnswer[i] != "_") {
            isDifferent = true
        }
    }

    if (!isDifferent) {
        alert("przygotowane odpowiedzi maja poprawna wartosc")
    } else {
        alert("przygotowane odpowiedzi nie maja poprawnej wartosci")
    }
}

// checkPrepareTableOfAnswers()


// 1. testuje usersLifeNumber = 0 leftLetters = 1 sprawdzenie czy zwróci true 
// 2. testuje usersLifeNumber = 1 leftLetters = 0 sprawdzenie czy zwróci true
// 3. testuje usersLifeNumber = 1 leftLetters = 1 sprawdzemie czy zwróci false 
const checkUsersLifeNumber = function () {

    let testLeftLetters = 0
    let testUserLifeNumber = 1
    let preparedUserLifeNumber = testowanie.checkEndGameCondition(testUserLifeNumber, testLeftLetters)
    if (preparedUserLifeNumber == true) {
        alert("funkcja działa dobrze 1")
    } else {
        alert("Funkcja nie działa dobrze")
    }
    testLeftLetters = 1
    testUserLifeNumber = 0
    preparedUserLifeNumber = testowanie.checkEndGameCondition(testUserLifeNumber, testLeftLetters)
    if (preparedUserLifeNumber == true) {
        alert("funkcja działa dobrze 2")
    } else {
        alert("Funkcja nie działa dobrze")
    }
    testLeftLetters = 1
    testUserLifeNumber = 1
    preparedUserLifeNumber = testowanie.checkEndGameCondition(testUserLifeNumber, testLeftLetters)
    if (preparedUserLifeNumber == false) {
        alert("funkcja działa dobrze 3")
    } else {
        alert("Funkcja nie działa dobrze")
    }

}

// checkUsersLifeNumber()



// 1. test shot = 'a' arrayOfLetters = [] arrayOfLetters= ['a'], foundLettersUsedTwice=false
// 2. test shot = 'b'  arrayOfLetters = ['a' 'b'] arrayOfLetters= ['a' 'b'],  foundLettersUsedTwice=true
// 3. test shot = 'c'  arrayOfLetters = ['a' 'b']  arrayOfLetters = ['a' 'b' 'c'], foundLettersUsedTwice=false

const checkWhichLettersWereUsed = function () {
    let testShot = "A"
    let testArrayOfLetters = []
    let arrayOfLetters
    let foundLettersUsedTwice;

    ({ arrayOfLetters, foundLettersUsedTwice } = testowanie.whichLettersWereUsed(testShot, testArrayOfLetters))
    if (foundLettersUsedTwice == false) {
        alert("funkcja działa prawidłowo 1")
    } else {
        alert("funkcja nie działa prawidłowo " + foundLettersUsedTwice)
    }

    if (1 === arrayOfLetters.length) {
        alert("Tabela ma taką samą długość")
    } else {
        alert("Tabela nie ma takiej samej długości")
    }

    if (arrayOfLetters[0] === "A") {
        alert("Literka znajduje sie na tym miejscu")
    } else {
        alert("Literka nie znajduje sie na tym miejscu")
    }



    testShot = "b"
    testArrayOfLetters = ["a", "b"];
    ({ arrayOfLetters, foundLettersUsedTwice } = testowanie.whichLettersWereUsed(testShot, testArrayOfLetters))
    if (foundLettersUsedTwice == true) {
        alert("funkcja działa prawidłowo 2")
    } else {
        alert("funkcja nie działa prawidłowo")
    }

    if (2 === arrayOfLetters.length) {
        alert("Tabela ma taką samą długość")
    } else {
        alert("Tabela nie ma takiej samej długości")
    }

    if (arrayOfLetters[1] === "b") {
        alert("Literka znajduje sie na tym miejscu")
    } else {
        alert("Literka nie znajduje sie na tym miejscu")
    }


    testShot = "c"
    testArrayOfLetters = ["a", "b"];
    ({ arrayOfLetters, foundLettersUsedTwice } = testowanie.whichLettersWereUsed(testShot, testArrayOfLetters))
    if (foundLettersUsedTwice == false) {
        alert("funkcja działa prawidłowo 3")
    } else {
        alert("funkcja nie działa prawidłowo")
    }

    if (3 === arrayOfLetters.length) {
        alert("Tabela ma taką samą długość")
    } else {
        alert("Tabela nie ma takiej samej długości")
    }

    if (arrayOfLetters[2] === "c") {
        alert("Literka znajduje sie na tym miejscu")
    } else {
        alert("Literka nie znajduje sie na tym miejscu")
    }


}

// checkWhichLettersWereUsed()








