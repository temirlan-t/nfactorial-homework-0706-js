let countPlayers = () => playersName.length;
let choisedPlayer = (reservePlayers) => totalPlayers.length.includes(reservePlayers);

// named export
export  {countPlayers, choisedPlayer};

// export as
export {countPlayers as cP, choisedPlayer as chP};

// go to import