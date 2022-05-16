import { functions } from './functions.js'

// 1. odgadniecie wszystkich liter hasła bez pomyłki i zakonczenie gry (caly czas poprawne litery)
// 2. nacisniecie przycisku anuluj konczy gre (po dodaniu zyc przez uzytkownika nacisnij anuluj)
// 3. utracenie wszystkich żyć, konczy gre (caly czas niepoprawne)
// 4. wyłączenie strony z grą
// 5. podawanie caly czas liczby liter wiekszej od 1 (w polu podaj litere)

const checkPrepareTableOfAnswers = function () {
    let word = "monitor"
    let preparedAnswer = functions.prepareTableOfAnswers(word)

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

// 1. testuje usersLifeNumber = 0 leftLetters = 1 sprawdzenie czy zwróci true 
// 2. testuje usersLifeNumber = 1 leftLetters = 0 sprawdzenie czy zwróci true
// 3. testuje usersLifeNumber = 1 leftLetters = 1 sprawdzemie czy zwróci false 

const checkUsersLifeNumber = function () {
    let testLeftLetters = 0
    let testUserLifeNumber = 1
    let ifUsedInTest = true
    let preparedUserLifeNumber = functions.checkEndGameCondition(testUserLifeNumber, testLeftLetters, ifUsedInTest)
    if (preparedUserLifeNumber == true) {
        alert("funkcja działa dobrze 1")
    } else {
        alert("Funkcja nie działa dobrze")
    }
    testLeftLetters = 1
    testUserLifeNumber = 0
    preparedUserLifeNumber = functions.checkEndGameCondition(testUserLifeNumber, testLeftLetters, ifUsedInTest)
    if (preparedUserLifeNumber == true) {
        alert("funkcja działa dobrze 2")
    } else {
        alert("Funkcja nie działa dobrze")
    }
    testLeftLetters = 1
    testUserLifeNumber = 1
    preparedUserLifeNumber = functions.checkEndGameCondition(testUserLifeNumber, testLeftLetters, ifUsedInTest)
    if (preparedUserLifeNumber == false) {
        alert("funkcja działa dobrze 3")
    } else {
        alert("Funkcja nie działa dobrze")
    }
}

// 1. test shot = 'a' arrayOfLetters = [] arrayOfLetters= ['a'], foundLettersUsedTwice=false
// 2. test shot = 'b'  arrayOfLetters = ['a' 'b'] arrayOfLetters= ['a' 'b'],  foundLettersUsedTwice=true
// 3. test shot = 'c'  arrayOfLetters = ['a' 'b']  arrayOfLetters = ['a' 'b' 'c'], foundLettersUsedTwice=false

const checkWhichLettersWereUsed = function () {
    let testShot = "A"
    let testArrayOfLetters = []
    let arrayOfLetters
    let foundLettersUsedTwice;

    ({ arrayOfLetters, foundLettersUsedTwice } = functions.whichLettersWereUsed(testShot, testArrayOfLetters))
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
    ({ arrayOfLetters, foundLettersUsedTwice } = functions.whichLettersWereUsed(testShot, testArrayOfLetters))
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
    ({ arrayOfLetters, foundLettersUsedTwice } = functions.whichLettersWereUsed(testShot, testArrayOfLetters))
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

export const tests = { checkPrepareTableOfAnswers, checkUsersLifeNumber, checkWhichLettersWereUsed }
