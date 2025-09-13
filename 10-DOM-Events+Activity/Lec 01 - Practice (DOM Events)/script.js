let btn = document.querySelector("button");

btn.onclick = function () {
    // console.log("Hello");
   // alert("HELLO....");
}


function print() {
//    console.log("SAY HELLO....");
   alert("SAY HELLO")
}

//btn.onclick = print;

let btns = document.querySelectorAll("button");

for (btn of btns) {
   // btn.onclick = print;         //call event if click on mouse
   // btn.onmouseenter = print;   //call event if hover on mouse

    btn.addEventListener("click", print);
    btn.addEventListener("click", ()=>{
        alert("Alert....");
    });
}

