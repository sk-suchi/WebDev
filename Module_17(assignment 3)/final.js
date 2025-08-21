/** Problem -01 ( Divide the Asset ) */
var area = 100;
//write your code here
var divide = area/2;
console.log(divide);

/** Problem -02 ( Cycle or Laptop ) */
var money = 45000;
//write your code here
if(money >= 25000){
    console.log("Laptop");
}
else if(money >= 10000){
    console.log("Cycle")
}
else{
    console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 4 ;
//write your code here
for (var i = 1; i <= lastDay; i++) {
  if (i % 3 === 0) {
    console.log(i + " - medicine");
  } else {
    console.log(i + " - rest");
  }
}

/** Problem 04 - (Delete / Store) */
var fileName = "#pdfData.jpg";
//write your code here
if (
    fileName.startsWith("#") || fileName.endsWith(".pdf") || fileName.endsWith(".docx")
) {
    console.log("Store");
} else {
    console.log("Delete");
}

/** Problem 05 - ( PH Email Generator )  */
var student= { name: "monu" , roll: 99 ,department: "eee" };
//write your code here
var emailGenerator = student.name + student.roll + "." + student.department + "@ph.ac.bd";
console.log(emailGenerator); 

/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 15000;
//write your code here
var currentsalary = startingSalary;
for (var i = 1; i <= experience; i++) {
  currentsalary = currentsalary + (currentsalary * 0.05);
}
console.log(currentsalary.toFixed(2));