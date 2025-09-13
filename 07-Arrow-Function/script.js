//this key word

let stu = {
    name: "ali",
    age: 25,
    add () {
        console.log(this.name);
        console.log(this.age);
    }
}

stu.add();

//try catch

console.log("a");
try {
    console.log(a);
} catch (error) {
    console.log(error);
    console.log("error will throw...");
}
console.log("a")
console.log("a")

//arrow function

let print = () => {
    console.log("Arrow function");
}

print();

//arrow function with implicit(without) return

let sum = (a,b) =>(
    a+b
);
console.log(sum(1,3))


//set time out function

setTimeout(()=>{
    console.log("hello");
},4000);

//call back functions
add=()=>{
    console.log("Call Back Functions");
}

setTimeout(add,4000);


//set interval

let id = setInterval(() => {
    console.log("set interval")
}, 2000);

clearInterval(id);

