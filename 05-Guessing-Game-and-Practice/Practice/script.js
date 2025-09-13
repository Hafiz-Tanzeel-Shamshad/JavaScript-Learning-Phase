let student = {
    name: "ali",
    age: 23,
    class: "12th",
    color: ["red","pink"] //allow to create array
};
student.gender = "Male";//add a new property
delete student.age;//delete any property
console.log(student)
console.log(student["name"]);
console.log(student.name);
console.log(student.color[0]);

const obj ={
    1:"a",
    2:"b",
    null:"c",
    true:"d",
    undefined:"e"
};

console.log(obj[1]);

//nested objects

const classInfo = {
    ali:{
        grade: "A+",
        city: "Dehli"
    },
    ahmed:{
        grade: "A",
        city: "Pune"
    },
    haris:{
        grade: "o",
        city: "Lahore"
    }
};

console.log(classInfo);
console.log(classInfo.ali.grade);

//Array of objects

const Info = [
    {
        name: "haris",
        age: 22
    },
    {
        name: "Khan",
        age: 22
    },
    {
        name: "ali",
        age: 21
    }
];

console.log(Info);

console.log(Info[0]);
console.log(Info[1].name);
Info[1].city = "Islamabad"; //add any thing
console.log(Info[1]);

//Math objects

Math.abs(-56);

Math.floor((Math.random()*10)+1); //generate any random number 1to10

Math.floor((Math.random()*10)+20); //generate any random number 20to30