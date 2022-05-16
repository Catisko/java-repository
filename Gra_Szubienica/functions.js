


//ok
const chooseRandomWord = function (tableOfWords) {  //1. 3,  2. 4. 5.
    return tableOfWords[Math.floor(Math.random() * tableOfWords.length)]
}

//ok 
const prepareTableOfAnswers = function (word) {  //1. 3 2. 4. 5.
    let answers = []
    for (let i = 0; i < word.length; i++) {  //1. 3 2. 4. 5.
        answers[i] = "_"
    }
    return answers //1. 3 2. 4. 5.
}

const whichLettersWereUsed = function (shot, arrayOfLetters) {

    let foundLettersUsedTwice = false
    arrayOfLetters = arrayOfLetters
    for (let i = 0; i < arrayOfLetters.length; i++) {
        if (arrayOfLetters[i] === shot) {
            foundLettersUsedTwice = true
        }

    }
    if (foundLettersUsedTwice != true) {
        arrayOfLetters.push(shot)
    } else {
        // alert("Literka juz zostala uzyta.")
    }
    return { arrayOfLetters, foundLettersUsedTwice }
}


//ok
const showCurrentScore = function (answers, arrayOfLetters) {  //1. 3. 2. 5.
    alert("Bieżący stan gry " + answers.join(" ") + " , użyte dotychczas literki to: " + arrayOfLetters.join(","))
}

//ok
const loadPlayerShot = function (steps, shot) {  //1. 3 2. 5.
    shot = prompt("podaj literę")
    steps = steps + 1
    return shot
}


//ok
const updateGameState = function (shot, randomWord, answers, leftLetters, usersLifeNumber) {  //1. 3  5.
    let leftLettersTemp = leftLetters
    for (let i = 0; i < randomWord.length; i++) {  //1. 3  5.
        if (randomWord[i] === shot) {  //1. 3  5.
            answers[i] = shot
            leftLetters = leftLetters - 1
        }
    }

    if (leftLettersTemp == leftLetters) {  //3 
        usersLifeNumber = usersLifeNumber - 1
        alert("Niepoprawna odpowiedz.") //3 
    }
    else {
        alert("Poprawna odpowiedz.")  //1.
    }
    return { answers, leftLetters, usersLifeNumber }  //1. 3 
}

//ok
const showAnswersAndCongratulate = function (randomWord) {  //1.
    alert("Dobra robota, szukane słowo to " + randomWord)
}

//ok
const initialStateOfLife = function () {  //1. 3  4.
    let usersLifeNumber = prompt("Podaj ilość żyć")
    if (usersLifeNumber === null) {  //1. 3. 
        usersLifeNumber = 3
        alert("Wartość żyć została domyślnie ustawiona na 3.")  //1. 3. 5.
    }
    return usersLifeNumber  //1. 3 
}

//ok
const checkEndGameCondition = function (usersLifeNumber, leftLetters, randomWord, steps) {  //1. 3 
    if (usersLifeNumber <= 0) { //3 
        alert("Skończyły ci się życia! Dziekuje za gre. Szukane słowo to " + randomWord)
        return true //3 
    } else if (leftLetters === 0) {  //1.
        alert("odgadles haslo w tylu krokach:  " + steps)
        alert("Dobra robota, szukane słowo to " + randomWord)  //1.
        return true  //1.
    } else { //1. //3.
        return false //1. 3. 
    }
}

// 1. testuje usersLifeNumber = 0 leftLetters = 1 sprawdzenie czy zwróci true 
// 2. testuje usersLifeNumber = 1 leftLetters = 0 sprawdzenie czy zwróci true
// 3. testuje usersLifeNumber = 1 leftLetters =  sprawdzemie czy zwróci false 









// dodanie ilości żyć domyślnie i z opcją wyboru ilości przez gracza. (komunikat o utracie żyć)
// co strzał informuje o trafieniu true/false błędna odp = -1 życie (wyświetla komunikat o końcu żyć i kończy oraz podaje hasło)
// informuje o tym czy literka została użyta ponownie, zapamiętuje już użyte literki (wystawia komunikat)
// liczy kroki w ilu gracz odgadł hasło(wystawia komunikat)




//tutaj zapytaj o zycia i przypisz do jakiejs zmiennej np usersLifeNumber









export const testowanie = { prepareTableOfAnswers, checkEndGameCondition, whichLettersWereUsed }
export const functions = { chooseRandomWord, prepareTableOfAnswers, whichLettersWereUsed, showCurrentScore, loadPlayerShot, updateGameState, showAnswersAndCongratulate, initialStateOfLife, checkEndGameCondition }



