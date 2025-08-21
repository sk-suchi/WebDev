function totalFine(fare) {
    if (fare <= 0 || typeof fare !== "number") {
        return "invalid";
    }
    else {
        let fine = fare + 0.2 * fare + 30;
        return fine;
    }
}

function onlyCharacter(str) {
    if (typeof str !== "string") {
        return "invalid";
    }
    else {
        let string = str.replace(/\s/g, "").toUpperCase();
        return string;
    }
}

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

function isSame(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    for(let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

function resultReport(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }
    if (marks.length === 0) {
        return { finalScore: 0, pass: 0, fail: 0 };
    }
    let totalMarks = 0;
    let passed = 0;
    let failed = 0;
    for (let mark of marks) {
        totalMarks = totalMarks + mark;
        if (mark >= 40) {
             passed++;
        }
         else {
             failed++;
        }
    }

    let average = totalMarks / marks.length;
    average = Math.round(average); 
    return {
        finalScore: average,
        pass: passed,
        fail: failed
    };
}