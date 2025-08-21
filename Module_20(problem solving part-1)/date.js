const today = new Date();  //if run today: Mon Aug 11 2025 17:25:12 GMT+0600 (Bangladesh Standard Time).
const date = new Date('2062-10-19')
console.log(date.getMonth()); //.getMonth() returns the month as a number (0–11), where 0 = January, 9 = October, etc.
console.log(date.getDay()); //.getDay() returns the day of the week (0–6), where 0 = Sunday, 1 = Monday, etc.
const specificDate = new Date(2091, 0, 26)
console.log(specificDate)
specificDate.setMonth(10);
console.log(specificDate.toLocaleString('en-GB'));
