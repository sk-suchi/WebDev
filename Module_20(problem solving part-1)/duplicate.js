const numbers=[1,4,7,22,66,23,4,1,78];

function noDuplicate(array){
    const unique=[];
    for(const item of array){
        if(unique.includes(item)===false){
            unique.push(item)
        }
    }
    return unique;
}
console.log(numbers);
const uniqueArray = noDuplicate(numbers);
console.log(uniqueArray);