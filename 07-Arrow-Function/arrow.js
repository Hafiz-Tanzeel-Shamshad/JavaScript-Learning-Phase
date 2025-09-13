//arrow func window or paernt object

const student = {
    name: "Ali",
    marks: 75,
    prop: this, //global scope
    getName: function(){
        console.log(this);
        return this.name;
    },
    getMarks: ()=>{
        console.log(this);//parent's Scope
        return this.marks;
    },
    getInfo1: function(){
        setTimeout(()=>{
            console.log(this);  //student  object
        },2000);
    },
    getInfo2: function(){
        setTimeout(function () {
            console.log(this);//window object
        },2000);
    },
};

//Practice Qs

const square = (n)=>{
    return n*n;
};

console.log(square(2));
//Qs

let id = setInterval(()=>{
    console.log("Hello World");
},2000);

setTimeout(()=>{
    clearInterval(id);
    console.log("Stop")
},10000);


