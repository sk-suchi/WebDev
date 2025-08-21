function sumNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
        console.log(number);
        sum = sum + number;
    }
    return sum;
}
const num = [2, 4, 54, 76, 9];
const sum = sumNumbers(num);
console.log('Sum of numbers:', sum);