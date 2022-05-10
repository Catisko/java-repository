
function disp(text) {
    console.log(text)
}


var długiłańcuch = "Mój długi łańcuch jest długi";
długiłańcuch.slice(1, 10);
disp(długiłańcuch.slice(1, 10))


"Hej tam co ty wyprawiasz".toUpperCase();
disp("Hej tam co ty wyprawiasz".toUpperCase())

var Javascriptjestsuper = true;
disp(Javascriptjestsuper);

var prysznicwzięty = true
var plecakspakowany = false
prysznicwzięty && plecakspakowany
disp(prysznicwzięty && plecakspakowany)



var mamyweekend = true
var prysznicwzięty = true
var jablkowplecaku = false
var pomaranczwplecaku = true
var trzebaiscdoszkoly = !mamyweekend && prysznicwzięty &&
    (jablkowplecaku || pomaranczwplecaku)
disp('56' == true)


var wzrost = 165
var limitwzrostu = 150
var wynik = wzrost >= limitwzrostu
disp(wynik)

var mojatajnaliczba = 15
var strzalbolka = 8
var strzaltoli = 9
var strzallolka = 15
var prawda = mojatajnaliczba === strzallolka
disp(prawda)



var dinozaury = [
    "Tyranozaur",
    "Welociraptor",
    "Stegozaur",
    "Triceraptors",
    "Brachiozaur",
    "Pteranodon",
    "Apatozaur"
]
dinozaury[25] = "Apatozaur"
dinozaury
disp(dinozaury)


var Zwierzęta = [
    "kot", "Pies", "małpa", "miś"
]
Zwierzęta.push("kotki")
disp(Zwierzęta)


var Zwierzętaidinozaury = Zwierzęta.concat(dinozaury)
disp(Zwierzętaidinozaury)


var dinozaury
dinozaury.join(" * ")
disp(dinozaury.join(" * "))

var punktyorientacyjne = []
punktyorientacyjne.push("mój dom")
punktyorientacyjne.push("ścieżka przed domem")
punktyorientacyjne.push("migajaca lampa")
punktyorientacyjne.push("cieknacy hydrant")
punktyorientacyjne.push("straz pozarna")
disp(punktyorientacyjne)

var matma = Math.random() * 10
disp(matma)

disp(Math.floor(5.3895879))


var losoweslowa = ["wybuch", "pies", "ksiezniczka", "ogr"]
var losowyindeks = Math.floor(Math.random() * 4)
disp(losoweslowa[losowyindeks])


var zdania = [
    "brzmi dobrze",
    "Tak, zdecydowanie",
    "Nie jestem pewien",
    "może nie dzisiaj?",
    "komputer mówi nie",
    "brzmi wspaniale",
    "jest super-duper",
    "bonkmaster"
]
//Powiniem zrobić sobie drinka?
disp(zdania[Math.floor(Math.random() * zdania.length)])


var kot = {
    "łapy": 4,
    "imie": "rademenes",
    kolor: "kruczoczarny"
}
disp(kot.łapy)

disp(Object.keys(kot))


var pies = {
    łapy: 4,
    imię: "Kapsel",
    kolor: "Czarny",
    jestkochany: true
}
disp(Object.keys(pies))




var ania = { imie: "ania", wiek: 11, szczesliweliczby: [2, 4, 6, 10] }
var Wojtek = { imie: "Wojtek", wiek: 17, szczesliweliczby: [3, 7, 11, 21] }
var amelka = { imie: "Amelka", wiek: 15, szczesliweliczby: [11, 21, 37, 68] }
var przyjaciele = [ania, Wojtek, amelka]
disp(przyjaciele[0])


var policzoneowce = 0
for (policzoneowce = 0; policzoneowce < 10; policzoneowce++) {
    console.log("owca numer " + policzoneowce + " juz policzone")
}
console.log("Chrrrrrrr")

for (var x = 2; x < 100000000000000; x = x * 5) {
    console.log(x)
}



var cześć = function (imie) {
    console.log("cześć " + imie + "!")
}
disp(cześć("Wojtek"))


var rysujwielerazy = function (ilerazy, corysować) {
    for (var i = 0; i < ilerazy; i++) {
        console.log(i + " " + corysować)
    }
}
disp(rysujwielerazy(9, "kotki"))



const min = 5;
const max = 15;

//dzięki zmiennym poprawia mi się czytelność kodu i łatwiej go zmieniać
const random = Math.floor(Math.random() * (max - min + 1) + min);
console.log(random);



for (let i = 10; i > 0; i--) {
    console.log("Trwa odliczanie", i);
}



var firstOurFunction = function () {
    console.log("do something")
}

firstOurFunction("do something")


var saySomething = function (Name) {
    console.log("Hey " + Name + "!")
}
saySomething("Asia")


var drawCats = function (howMany) {
    for (var i = 0; i < howMany; i++) {
        console.log(i + " =^.^= ")
    }
}
drawCats(5)


var drawManyTimes = function (howMany, drawWhat) {
    for (var i = 0; i < howMany; i++) {
        console.log(i + " " + drawWhat)
    }
}

drawManyTimes(5, "<3")


drawManyTimes(10, ">_<")

var doubleUp = function (number) {
    return number * 2
}

disp(doubleUp(doubleUp(6)))


var takeRandomWords = function (words) {
    return words[Math.floor(Math.random() * words.length)]
}
var randomWords = [
    "Kapsel",
    "kwiat",
    "rzepak",
    "pociąg"

]
disp(takeRandomWords(randomWords))

var randomBodyParts = ["head", "shoulders", "arm",]
var randomAdjectives = ["dirty", "stupid", "beautiful"]
var randomWords = ["fly", "monkey", "dog", "kitty"]

var randomChain = "Your " + takeRandomWords(randomBodyParts) + " its like " + takeRandomWords(randomAdjectives) + " " + takeRandomWords(randomWords) + "!!!"
disp(randomChain)


generateRandomOffense = function () {
    var randomBodyParts = ["head", "shoulders", "arm",]
    var randomAdjectives = ["dirty", "stupid", "beautiful"]
    var randomWords = ["fly", "monkey", "dog", "kitty"]

    var randomChain = "Your " + takeRandomWords(randomBodyParts) + " its like " + takeRandomWords(randomAdjectives) + " " + takeRandomWords(randomWords) + "!!!"
    return randomChain
}

disp(generateRandomOffense())


var letterFive = function (name) {
    if (name.length < 1) {
        return
    }
    return "five letter of your name is " + name[5] + "."
}
disp(letterFive("Wojtek"))

var medalForScore = function (score) {
    if (score < 3)
        return "Bronze"
    if (score < 7) {
        return "Silver"
    }
    return "Gold"
}

disp(medalForScore(1))



function doubleUp(number) {
    return number * 2
}

disp(doubleUp(5))


function add(number1, number2) {
    var score = number1 + number2
    return score
}
var value = add(57, 12)
disp(value)

function mnożenie(number, number2) {
    return number * number2
}
disp(mnożenie("36325", "9824"))










