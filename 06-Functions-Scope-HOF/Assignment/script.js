//Qs1. Write a JavaScript function that returns array elements larger than a number

let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;

function getElement(arr,num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>num) {
            console.log(arr[i]);
        }
        
    }
}

// getElement(arr, num);

// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh”
// ans = “abcdefgh”

let str = "abcdabcdefgggh";

function uniqueStr(str) {
    let ans = "";

    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
       if (ans.indexOf(currChar)==-1) {
            ans += currChar;
       }
        
    }
    return ans;
}

console.log(uniqueStr(str));

// Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"]
// output : "United States of America"


let country = ["Australia", "Germany", "United States of America"];

function longestCountryName(country) {
    let longestName = country[0]; // Initialize with the first country name

    for (let i = 1; i < country.length; i++) {
        if (country[i].length > longestName.length) {
            longestName = country[i]; // Update with the longer country name
        }
    }

    return longestName;
}

console.log(longestCountryName(country));

// Qs5. Write a JavaScript function to generate a random number within a range (start,end).

let start = 100;
let end = 200;

function generateRandom(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}

console.log(generateRandom(start, end));