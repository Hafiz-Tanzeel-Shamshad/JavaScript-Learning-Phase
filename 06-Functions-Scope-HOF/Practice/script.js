function sum(a,b) {
    return a+b;
}

let s=sum(sum(2, 5), 2); //call fun with in fun
console.log(s);

//functions Expression

let add = function (a,b) {
    return a+b;
}

console.log(add(1, 3));


//methods in objects

let calc = {
//  key: value
    name: "ali",
    age: 25,
    fun: function abc() {
        console.log("Hello")
    },
    add(x){
        console.log(1+2);      
    }
};

calc.fun();
calc.add();
