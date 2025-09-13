// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array

let arr = [1,2,3,4,5];
let square = arr.map((i)=>{
    return i*i;
});

console.log("Square array elements : ",square);

let sum = arr.reduce((acc,i)=>{
    return acc + i;
});

console.log("sum = ",sum)
let avg = sum/arr.length;

console.log("Average = ",avg);

// Qs2. Create a new array using the map function whose each element is equal to the
// original element plus 5.

let elem = [1,2,3,4,5];

let newArr = elem.map((i)=>
    i+5
);

console.log(newArr);

// Qs3. Create a new array whose elements are in uppercase of words present in the
// original array.

let str = ["ali","ahmed","khan"];

let uppercase = str.map((i)=>{
    return i.toUpperCase();
});
console.log(uppercase);

// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled.

const doubleAndReturnArgs = (arr, ...args) => [
    ...arr.map((i)=>i+2),...args.map((v) => v * 2),
];


console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)); // [1,2,3,8,8]
doubleAndReturnArgs([2], 10, 4); // [2, 20, 8]

// Qs5. Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object. 

let obj_1 ={
    name:"Ali",
    age:25
};

let obj_2 = {
    city : "Lahore",
    gender:"Male"
}

let mergeObj = {...obj_1,...obj_2};;

console.log(mergeObj);

//2nd Method

const mergeObjects = (obj1, obj2) => (
    { ...obj1, ...obj2 }
);

console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 })); //call func()  // {a:1, b:2, c:3, d:4}



