let arr = [1, 2, 3, 4, 5, 6];

let print = function (i) {
//   console.log(i);
};

arr.forEach(print);

arr.forEach(function (i) {
//   console.log(i);
});

//arrow func using for each loop
arr.forEach((i) => {
  //console.log(i);
});

let stu = [
  {
    name: "ali",
    marks: 25,
  },
  {
    name: "Hadi",
    marks: 21,
  },
  {
    name: "Khan",
    marks: 28,
  },
];


stu.forEach((i)=>{
   // console.log(i.name);
});

stu.forEach(function(i){
    //console.log(i.marks);
})


//map() --func (not change in original array)
let a = [4,5,66,7,8,4];
let double = a.map((i)=>{
    // console.log(i*2);
    return i*2;
})
console.log(double);

let gpa = stu.map((i)=>{
    return i.marks/2;
});
console.log(gpa);

//filter()

let marks =  [2,4,56,8,3];

let newArr = marks.filter((i)=>{
    return i%2!=0;
});

console.log(newArr);

//Every() (if all condition true then give true)

let flag = marks.every((i)=>{
    return i%2==0;
});
console.log("every()",flag);
//some() (if any condition true then give true)
let flag2 = marks.some((i)=>{
    return i%2==0;
});
console.log("Some()",flag2);

// reduce(accomlatr , iterator) --method

let elem = [1,2,3,4,5,9];

let finalArr = elem.reduce((result,i)=>(
    result+i
));

console.log("Final Value :",finalArr)

////find max number

let largerNum = elem.reduce((max,i)=>{
    if(max < i){
        return i;
    }else{
        return max;
    }
});

console.log(`largerNum = ${largerNum} `);

//spread operator with array[] literls ...

let abc = [1,2,3,4,5,];
let def = ["a","b","c","d"];
console.log(...abc);

let NewArr = [...abc,...def]; //merge two arrays using spraed (...) operator 

console.log(NewArr);

//spread operator with object{} literls ...

let obj_1 = {
  name: "ali",
  city: "Lahore"
};

let obj_2 = {
  ...obj_1, //copy data of obj_1
  ..."HELLO",
  age: 24
};

console.log(obj_2);

//rest (take multiple arguments as input)

function rest(...args){
    console.log(args);
}

rest(1,2,3,1,1,1);

function collection(){
  console.log(arguments);
}
collection(1,2,3);

//destructuring Arrays[] (store arrays values into multiple variables )

let names = ["apple","mango","orange","banana","Lemon","grapes"];

let [var_1 ,var_2,...others] = names ;

console.log(var_1);
console.log(var_2);
console.log(others);


let employee = {
  name: "ali",
  age: 25,
  fruit: ["apple","mango","orange"],
  username: "karan@gmail",
  password: "abc"

};

let {name: empName ,age :year =14 ,...remaningProperties} = employee;

console.log(remaningProperties);
console.log(year);