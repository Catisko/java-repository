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