//mouse events
let btn = document.querySelector("button");

btn.addEventListener("dblclick", (event)=>{
    console.log(event);
    console.log("button clicked!")
});

//keyboard events

let inp = document.querySelector("input");

inp.addEventListener("keyup",  (event)=>{
    console.log(`key = ${event.key}`);
    console.log(`keyCode = ${event.code}`);
    console.log("key was Prassed!");
});

//form events

let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();//it will stop default action url

    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");

    let user = this.elements[0]; //form.elements[0]
    let pass = this.elements[1];
    
    console.log(user.value);
    console.log(pass.value);
    console.dir(form);
    alert(`Hi ${user.value} , your password is set to ${pass.value}`);
   
});

