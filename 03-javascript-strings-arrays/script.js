let msg = "   hello   ";
console.log("trim(): ", msg.trim()); //remove spaces (create new string)

let Name = "Tanzeel";
console.log(Name.toLowerCase());
console.log(Name.toUpperCase());

console.log("indexOf('n') :", Name.indexOf("n")); //search first occurce of string

let newMsg = msg.trim().toUpperCase();
console.log("trim()+toUpperCase : ", newMsg);

console.log("slice(2,5) : ", Name.slice(2, 5));
console.log(Name.slice(2));
console.log(Name.slice(-2)); //6-2=4 index sy agy sari string print ho jay ge

console.log("replace('ee', 'i') : ", Name.replace("ee", "i"));

// repeat method
let fruit = "Mango";
console.log("repeat(count) : ", fruit.repeat(3));

//Practice Q

let variable = "ApnaCollege";

console.log(variable.slice(4).replace("l", "t").replace("l", "t"));

//Arrays

let stu = [ "Ali", "Haris", "Hadi" ];

console.log(stu[ 0 ][ 2 ]); //output : i
console.log(stu[ 1 ].length); //output : 5

//push
stu.push("Ahmed"); //push in last place
stu.pop(); //pop last element
stu.unshift("Kamran"); //pust at first place
stu.shift(); //delete from start

//indexOf

console.log(stu.indexOf("Hadi")); //index = 2
console.log(stu.includes("Ali")); //if element present -->true else -->false
//concatinate Array Method
//merge two arrays
let primary = [ "red", "green", "blue" ];
let secondary = [ "yellow", "red", "white" ];

console.log(primary.concat(secondary));
//reverse array elements ( change its original array)
console.log(primary.reverse());

//slice(peace of array (return copy of array))

console.log(primary.slice(2, 3)); //provide copy
console.log(secondary.slice(secondary.length - 1)); //last index
console.log(secondary.slice(-2)); //3-2=1(start from 1 index)

//splice (change it original array)
let car = [ "audi", "bmu", "xuv", "honda" ];
console.log(car.splice(3)); //remove at last element
console.log(car);
console.log(car.splice(0, 1)); //remove at specific index
console.log(car);
car.push("maruti");
console.log(car.splice(0, 0, "civic")); //splice(add,remove,add-element)

console.log(car);

car.splice(1, 0, "Honda"); //add element at 1st index
console.log(car);

car.splice(1, 1, "Mahran");
console.log(car);

//sort()
//sort with strings
console.log(car.sort());

// Practice Qs (using splice)

let arr = [ "january", "july", "march", "august" ];

arr.splice(0, 2, "july", "june");
console.log(arr);

let lang = [ "C", "C++", "html", "javascript", "python", "java", "C#" ];
lang.push("sql");
console.log(lang.reverse().indexOf("javascript"));

//practice

//Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
// positive number].
//For example: for array [7, 9, 0, -2] and n=3 Print, [7, 9, 0]

let array = [ 7, 9, 0, -2 ];

console.log(array.splice(0, 3));
console.log(array);

//For example: for array [7, 9, 0, -2] and n=3Print, [9, 0, -2 ]

let array1 = [ 7, 9, 0, -2 ];
// console.log(array1.splice(array1.length-3));
console.log(array1.splice(1));

//Qs3. Write a JavaScript program to check whether a string is blank or not
let st = "";
if (st.length == 0) {
    console.log("blank string...");
} else {
    console.log("not a blank string...");
}

//Qs4. Write a JavaScript program to test whether the character at the given (character)
//index is lower case.
let char = "A";
if (char == char.toLowerCase()) {
    console.log("Yes Lower Case");
} else {
    console.log("No it's Upper Case");
}

//Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.
let s = "  Hello  ";
console.log(`original string = ${s}`);
console.log(`string without spaces = ${s.trim()}`);

// Qs6. Write a JavaScript program to check if an element exists in an array or not.

let array3 = [ "hello", "a", 23, 64, 99, -6 ];
let item = 64;
if (array3.indexOf(item) != -1) {
    console.log("element exists in array");
} else {
    console.log("element doesn't exist in array");
}
