// named import
import { countPlayers, choisedPlayer } from "./export.js";
countPlayers ();
choisedPlayer ("Beknar");

// import as 
import { countPlayers as cP, choisedPlayer as chP } from "./export.js";
cP();
chP("Beknar");

// import all
import * as totalPlayers from "./code.js";
totalPlayers.countPlayers();
totalPlayers.choisedPlayer("Beknar");

// import default
import totalPlayers from "./exportDefault.js";

console.log(totalPlayers.length);