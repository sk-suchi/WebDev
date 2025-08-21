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
console.log(isSame([1, 2, 3], [1, 2, 3])); // true
console.log(isSame([1, 2, 3], [3, 2, 1])); // false (order matters)
console.log(isSame([1, 2, 3], [1, 2, 3, 4])); // false (length differs) 