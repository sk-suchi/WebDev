/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 15000;
//write your code here
var currentsalary = startingSalary;
for (var i = 1; i <= experience; i++) {
  currentsalary = currentsalary + (currentsalary * 0.05);
}
console.log(currentsalary.toFixed(2));