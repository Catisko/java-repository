const chooseRandomWord = function (tableOfWords) {  //1. 3,  2. 4. 5.
    return tableOfWords[Math.floor(Math.random() * tableOfWords.length)]
}

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

const showCurrentScore = function (answers, arrayOfLetters) {  //1. 3. 2. 5.
    alert("Bieżący stan gry " + answers.join(" ") + " , użyte dotychczas literki to: " + arrayOfLetters.join(","))
}

const loadPlayerShot = function (steps, shot) {  //1. 3 2. 5.
    shot = prompt("podaj literę")
    steps = steps + 1
    return shot
}
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

const showAnswersAndCongratulate = function (randomWord) {  //1.
    alert("Dobra robota, szukane słowo to " + randomWord)
}

const initialStateOfLife = function () {  //1. 3  4.
    let usersLifeNumber = prompt("Podaj ilość żyć")
    if (usersLifeNumber === null) {  //1. 3. 
        usersLifeNumber = 3
        alert("Wartość żyć została domyślnie ustawiona na 3.")  //1. 3. 5.
    }
    return usersLifeNumber  //1. 3 
}

const checkEndGameCondition = function (usersLifeNumber, leftLetters, randomWord, steps, ifUsedInTest) {  //1. 3 
    if (usersLifeNumber <= 0) {
        if (ifUsedInTest == false) {
            alert("Skończyły ci się życia! Dziekuje za gre. Szukane słowo to " + randomWord)
        }
        return true //3 
    } else if (leftLetters === 0) {
        if (ifUsedInTest == false) {
            alert("odgadles haslo w tylu krokach:  " + steps)
            alert("Dobra robota, szukane słowo to " + randomWord)
        } //1.
        return true  //1.
    } else { //1. //3.
        return false //1. 3. 
    }
}

export const functions = { chooseRandomWord, prepareTableOfAnswers, whichLettersWereUsed, showCurrentScore, loadPlayerShot, updateGameState, showAnswersAndCongratulate, initialStateOfLife, checkEndGameCondition }
