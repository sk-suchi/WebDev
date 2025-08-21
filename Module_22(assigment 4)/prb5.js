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
console.log(resultReport([])); 
console.log(resultReport([98, 87, 67, 91, 92, 33, 87])); 
console.log(resultReport([99, 87, 67, 12 ,87])); 
console.log(resultReport([99])); 
console.log(resultReport(100));