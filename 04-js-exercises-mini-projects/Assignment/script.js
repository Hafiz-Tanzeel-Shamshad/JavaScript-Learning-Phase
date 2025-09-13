// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]

let arr = [1,2,3,4,5,6,2,3] ;

for (let i = 0; i < arr.length; i++) {
    if (arr[i]==2) {
        arr.splice(i,1);
    }
    
}
console.log(arr);

// Qs2. Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6

let number = "287152";

for (let i of number) {
    console.log(i);
    var j=j++;
}
console.log(j);