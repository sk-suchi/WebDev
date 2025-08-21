function isLeapyear(year){
    if(year%4===0){
        console.log("This year is leap year")
    }
    else{
        console.log("This year is not a leap year")
    }
}
isLeapyear(2004);

/**
 * 1. those year that is not divisible by 100 and if the year is divisible by 4: then it will be a leap year
 * 2. if the year is divisible by 400, then it is a leap year
 * 3. else it is not a leap year
*/
function isLearYear2(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    else if (year % 400 === 0) {
        return true
    }
    else {
        return false;
    }
}
const isLeap = isLearYear2(2100);
const isLeap2 = isLearYear2(2400);