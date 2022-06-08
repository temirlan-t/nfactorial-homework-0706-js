// let, constl
let name = "Dalida"
const CLUB_NAME = "Dalida's football club";
let age = 18;
const ADDRESS = "Satpayev 22";

// data types
let coach= "Dalida";
let playersNumber = 5;
let clubIsWorking = true;
let clubIsOpened = false
let numbersOfFields = null;
console.log(numbersOfField); //undefined

// objects
let club = {
    numberOfCups : 2,
    country: "Kazakhstan",
    city: "Almaty",
};

alert(club.country);
alert(club.city);

// adding and deleting property
club.color = "blue";
delete club.color;

// variable as a key
let key = "label-color";
club[key] = "blue";

// some name property
let coachName = "Dalida";
let lastName = "Yerkuli";
let fullName = { coachName,lastName };

// functions in objects
club.print = function () {
    console.log(this.coachName + this.lastName);
}
club.print();

// check if property in object
alert("city" in club);

// for in 
for (key in club) {
    console.log(key);
}


// arrays
let playersName = ["Beknar", "Aidar", "Murat", "Aruzhan", "Yeskhan"];
let reservePlayers = ["Yerkebulan", "Madi", "Samat"];
console.log(playersName.length); // 5

playersName.push("Yerkebulan");
playersName.pop();

playersName.unshift("Zhanibek");
playersName.shift();

let totalPlayers = playersName.concat(reservePlayers);

playersName.slice(9, 14); // Aidar

//comparision REGULAR VS STRICT COMPARISON
alert(2 > 1);
alert(2 == 1);
alert(2 != 1);
alert("2" > 1);
alert("01" == 1);
alert("42" == 42);
alert(null == undefined);

alert("01" === 1);
alert("42" === 42);
alert(null === undefined);

// CONTROL FLOW.Ternary expression Условный оператор „?“

let result = 1 === "1" ? "true" : "false";
console.log(result);

// CONTROL FLOW.Coalescing operator Оператор нулевого слияния (??)
let selectedPlayaer;
let finalPlayer = selectedPlayaer ?? "Yerlan";
console.log(finalPlayer);

// CONTROL FLOW.TRUTHY FALSY VALUE Преобразование к логическому типу
let selectedReservePlayer = "Aidyn";
if (selectedReservePlayer) {
    console.log("play" + selectedReservePlayer);
} else {
    console.log ("You don't play");
}

// for, while, do for
 let playersCounted = 0;
 while (playersCounted < 7) {
     console.log("You're " + playersCounted + "player!");
 }
 console.log("let's goo");

 for (let goalkeeperSaves = 0; goalkeeperSaves < 25; goalkeeperSaves++ ) {
     console.log( "You did a great job "+ goalkeeperSaves + "saves!");
 }
 console.log("let's get started!");

// functions

function countPlayers () {
    return reservePlayers.length; 
}

countPlayers = 3

let enemies = ["Kairat", "Astana", "Tobyl"]
function choisedPlayer(playersName) {
    return enemies.includes(playersName);
}
choisedPlayer("Alikhan")
choisedPlayer("Beknar")

// destructuring
 let enemy = {
     enemiesClubName: "Kairat",
     enemiesCity: "Almaty"
 };

 function fullData (enemy) {
     console.log( `${enemy.enemiesClubName} is located in ${enemy.enemiesCity} city`);
 }

 function fullData (enemiesClubName, enemiesCity) {
     console.log(` ${enemiesClubName} is located ${enemiesCity} city`);
 }

 //function expression
 let countPlayers = function () {
     return playersName.length;
 };

 // arrow function
 let countPlayers = () => {
     return playersName.length;
 };
