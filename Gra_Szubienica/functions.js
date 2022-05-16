const chooseRandomWord = function (tableOfWords) {
    return tableOfWords[Math.floor(Math.random() * tableOfWords.length)]
}

const prepareTableOfAnswers = function (word) {
    let answers = []
    for (let i = 0; i < word.length; i++) {
        answers[i] = "_"
    }
    return answers
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
        alert("Literka juz zostala uzyta.")
    }
    return { arrayOfLetters, foundLettersUsedTwice }
}

const showCurrentScore = function (answers, arrayOfLetters) {
    alert("Bieżący stan gry " + answers.join(" ") + " , użyte dotychczas literki to: " + arrayOfLetters.join(","))
}

const loadPlayerShot = function (steps, shot) {
    shot = prompt("podaj literę")
    steps = steps + 1
    return shot
}

const updateGameState = function (shot, randomWord, answers, leftLetters, usersLifeNumber) {
    let leftLettersTemp = leftLetters
    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === shot) {
            answers[i] = shot
            leftLetters = leftLetters - 1
        }
    }

    if (leftLettersTemp == leftLetters) {
        usersLifeNumber = usersLifeNumber - 1
        alert("Niepoprawna odpowiedz.")
    }
    else {
        alert("Poprawna odpowiedz.")
    }
    return { answers, leftLetters, usersLifeNumber }
}

const showAnswersAndCongratulate = function (randomWord) {
    alert("Dobra robota, szukane słowo to " + randomWord)
}

const initialStateOfLife = function () {
    let usersLifeNumber = prompt("Podaj ilość żyć")
    if (usersLifeNumber === null) {
        usersLifeNumber = 3
        alert("Wartość żyć została domyślnie ustawiona na 3.")
    }
    return usersLifeNumber
}

const checkEndGameCondition = function (usersLifeNumber, leftLetters, randomWord, steps, ifUsedInTest) {
    if (usersLifeNumber <= 0) {
        if (ifUsedInTest == false) {
            alert("Skończyły ci się życia! Dziekuje za gre. Szukane słowo to " + randomWord)
        }
        return true
    } else if (leftLetters === 0) {
        if (ifUsedInTest == false) {
            alert("odgadles haslo w tylu krokach:  " + steps)
            alert("Dobra robota, szukane słowo to " + randomWord)
        }
        return true
    } else {
        return false
    }
}

export const functions = { chooseRandomWord, prepareTableOfAnswers, whichLettersWereUsed, showCurrentScore, loadPlayerShot, updateGameState, showAnswersAndCongratulate, initialStateOfLife, checkEndGameCondition }
