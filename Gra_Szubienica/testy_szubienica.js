import { testowanie } from "./functions"



//TESTY

// 1. odgadniecie wszystkich liter hasła bez pomyłki i zakonczenie gry (caly czas poprawne litery)
// 2. nacisniecie przycisku anuluj konczy gre (po dodaniu zyc przez uzytkownika nacisnij anuluj)
// 3. utracenie wszystkich żyć, konczy gre (caly czas niepoprawne)
// 4. wyłączenie strony z grą
// 5. podawanie caly czas liczby liter wiekszej od 1 (w polu podaj litere)

//ok



const checkPrepareTableOfAnswers = function () {
    var word = "monitor"
    var preparedAnswer = testowanie.prepareTableOfAnswers(word)

    if (preparedAnswer.length === word.length) {
        alert("przygotowane odpowiedzi maja poprawna dlugosc")
    } else {
        alert("przygotowane odpowiedzi nie maja poprawnej dlugosci")
    }

    var isDifferent = false
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



const checkUsersLifeNumber = function () {
    // 1. testuje usersLifeNumber = 0 leftLetters = 1 sprawdzenie czy zwróci true 
    // 2. testuje usersLifeNumber = 1 leftLetters = 0 sprawdzenie czy zwróci true
    // 3. testuje usersLifeNumber = 1 leftLetters = 1 sprawdzemie czy zwróci false 
    var testLeftLetters = 0
    var testUserLifeNumber = 1
    var preparedUserLifeNumber = testowanie.checkEndGameCondition(testUserLifeNumber, testLeftLetters)
    if (preparedUserLifeNumber == true) {
        alert("funkcja działa dobrze 1")
    } else {
        alert("Funkcja nie działa dobrze")
    }
    var testLeftLetters = 1
    var testUserLifeNumber = 0
    preparedUserLifeNumber = testowanie.checkEndGameCondition(testUserLifeNumber, testLeftLetters)
    if (preparedUserLifeNumber == true) {
        alert("funkcja działa dobrze 2")
    } else {
        alert("Funkcja nie działa dobrze")
    }
    var testLeftLetters = 1
    var testUserLifeNumber = 1
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
    var testShot = "A"
    var testArrayOfLetters = []
    var arrayOfLetters
    var foundLettersUsedTwice;

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



    // Poznanie i wykonywanie testów białoskrzynkowych w prostej grze.

    //////////////// liczy długość i pokazuje na ktorym jest miejscu

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

export const testy = { checkPrepareTableOfAnswers, checkUsersLifeNumber, checkWhichLettersWereUsed }




