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
        alert("przygotowane odpowiedzi mają poprawną długość")
    } else {
        alert("przygotowane odpowiedzi nie mają poprawnej długości")
    }

    let isDifferent = false
    for (let i = 0; i < preparedAnswer.length; i++) {
        if (preparedAnswer[i] != "_") {
            isDifferent = true
        }
    }

    if (!isDifferent) {
        alert("przygotowane odpowiedzi mają poprawną wartość")
    } else {
        alert("przygotowane odpowiedzi nie mają poprawnej wartości")
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
        alert("checkEndGameCondition  Test nr.1 pokazuje wynik poprawnie")
    } else {
        alert("checkEndGameCondition  Test nr.1 pokazuje wynik niepoprawny")
    }
    testLeftLetters = 1
    testUserLifeNumber = 0
    preparedUserLifeNumber = functions.checkEndGameCondition(testUserLifeNumber, testLeftLetters, ifUsedInTest)
    if (preparedUserLifeNumber == true) {
        alert("checkEndGameCondition  Test nr.2 pokazuje wynik poprawnie")
    } else {
        alert("checkEndGameCondition  Test nr.2 pokazuje wynik niepoprawny")
    }
    testLeftLetters = 1
    testUserLifeNumber = 1
    preparedUserLifeNumber = functions.checkEndGameCondition(testUserLifeNumber, testLeftLetters, ifUsedInTest)
    if (preparedUserLifeNumber == false) {
        alert("checkEndGameCondition  Test nr.3 pokazuje wynik poprawnie")
    } else {
        alert("checkEndGameCondition  Test nr.3 pokazuje wynik niepoprawny")
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
        alert("checkWhichLettersWereUsed Test nr.1 pokazuje wynik poprawnie")
    } else {
        alert("checkWhichLettersWereUsed Test nr.1 pokazuje wynik niepoprawnie")
    }

    if (1 === arrayOfLetters.length) {
        alert("Test.1 Tabela ma taką samą długość jak ilość w niej liter")
    } else {
        alert("Test.1 Tabela nie ma takiej samej długości jak ilość w niej liter")
    }

    if (arrayOfLetters[0] === "A") {
        alert("Test.1 Literka znajduje się na miejscu na którym powinna być")
    } else {
        alert("Test.1 Literka nie znajduje się na miejscu na którym powinna być")
    }

    testShot = "b"
    testArrayOfLetters = ["a", "b"];
    ({ arrayOfLetters, foundLettersUsedTwice } = functions.whichLettersWereUsed(testShot, testArrayOfLetters))
    if (foundLettersUsedTwice == true) {
        alert("checkWhichLettersWereUsed Test nr.2 pokazuje wynik poprawnie")
    } else {
        alert("checkWhichLettersWereUsed Test nr.2 pokazuje wynik niepoprawnie")
    }

    if (2 === arrayOfLetters.length) {
        alert("Test.2 Tabela ma taką samą długość jak ilość w niej liter")
    } else {
        alert("Test.2 Tabela nie ma takiej samej długości jak ilość w niej liter")
    }

    if (arrayOfLetters[1] === "b") {
        alert("Test.2 Literka znajduje się na miejscu na którym powinna być")
    } else {
        alert("Test.2 Literka nie znajduje się na miejscu na którym powinna być")
    }

    testShot = "c"
    testArrayOfLetters = ["a", "b"];
    ({ arrayOfLetters, foundLettersUsedTwice } = functions.whichLettersWereUsed(testShot, testArrayOfLetters))
    if (foundLettersUsedTwice == false) {
        alert("checkWhichLettersWereUsed Test nr.3 pokazuje wynik poprawnie")
    } else {
        alert("checkWhichLettersWereUsed Test nr.3 pokazuje wynik niepoprawnie")
    }

    if (3 === arrayOfLetters.length) {
        alert("Test.3 Tabela ma taką samą długość jak ilość w niej liter")
    } else {
        alert("Test.3 Tabela nie ma takiej samej długości jak ilość w niej liter")
    }

    if (arrayOfLetters[2] === "c") {
        alert("Test.3 Literka znajduje się na miejscu na którym powinna być")
    } else {
        alert("Test.3 Literka nie znajduje się na miejscu na którym powinna być")
    }
}


export const tests = { checkPrepareTableOfAnswers, checkUsersLifeNumber, checkWhichLettersWereUsed }
