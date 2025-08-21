function evenNumber(nums) {
    const evens = [];
    for (const num of nums) {
        if (num % 2 === 0) {
            console.log(num);
            evens.push(num);
        }
    }
    return evens;
}
const nums = [5, 8, 91, 24, 6];
const evens = evenNumber(nums);
console.log('even numbers are', evens)

//conditional return
function isOdd(number){
    if(number%2 ===1){
        return true;
    }
    return false;
}
console.log(isOdd(3));