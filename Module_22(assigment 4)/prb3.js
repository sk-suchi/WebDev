function bestTeam(player1, player2) {
    if (typeof player1 !== "object" || typeof player2 !== "object" ||
        player1 === null || player2 === null ||
        typeof player1.foul !== "number" || typeof player1.cardY !== "number" || typeof player1.cardR !== "number" ||
        typeof player2.foul !== "number" || typeof player2.cardY !== "number" || typeof player2.cardR !== "number") {
        return "Invalid";
    }

    let total1 = player1.foul + player1.cardY + player1.cardR;
    let total2 = player2.foul + player2.cardY + player2.cardR;

    if (total1 < total2) {
        return player1.name;
    }
    else if (total2 < total1) {
        return player2.name;
    }
    else {
        return "Tie";
    }
}
const player1 = {
    name: "Alice",
    foul: 1,
    cardY: 1,
    cardR: 0
};

const player2 = {
    name: "Bob",
     foul: 1,
    cardY: 1,
    cardR: 0
};

console.log(bestTeam(player1, player2));
