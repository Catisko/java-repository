'use strict'

function disp(text) {
    console.log(text)
}
 
 
 var długiłańcuch = "Mój długi łańcuch jest długi";
długiłańcuch.slice (1, 10);
disp(długiłańcuch.slice (1, 10))


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
dinozaury[25]="Apatozaur"
dinozaury
disp(dinozaury)


var Zwierzęta = [
    "kot", "Pies", "małpa","miś"
]
Zwierzęta.shift("kot")
disp(Zwierzęta)


var Zwierzętaidinozaury = Zwierzęta.concat(dinozaury)
disp(Zwierzętaidinozaury)


var dinozaury
dinozaury.join(" * ")
disp(dinozaury.join(" * "))

var punktyorientacyjne =[]
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
    "łapy" : 4,
    "imie" : "rademenes",
    kolor : "kruczoczarny"
}
disp(kot.łapy)


