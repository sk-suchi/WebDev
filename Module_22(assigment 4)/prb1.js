function totalFine(fare) {

    if (fare <= 0 || typeof fare !== "number") {
        return "invalid";
    }

    let fine = fare + 0.2 * fare + 30;
    return fine;

}
console.log(totalFine("50"));