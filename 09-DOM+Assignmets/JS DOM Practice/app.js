// let img = document.getElementById("description");

// let smallImages = document.getElementsByClassName("oldImg");

// for (let i = 0; i < smallImages.length; i++) {
//     console.dir(smallImages[i].src);
    
// }

// document.getElementsByTagName("p")[1];

//query selector(select single element)

console.dir(document.querySelector("h1"));

document.querySelectorAll("p");


//======================
//change heading style 
let heading = document.querySelector("h1");

heading.style.backgroundColor = "red";
heading.style.color = "yellow";

//======================
//change box(link) style 

let links = document.querySelectorAll(".box a");

for (const i of links) {
    i.style.color = "orange";  //inline style 
}
// for (let i = 0; i < links.length; i++) {
//     links[i].style.color = "red";
    
// }

//classlist.add() ---method 

let Class = document.querySelector("h2");

Class.classList.add("green") ;

//classlist.add() ---method 

let box = document.querySelector(".box");

box.classList.add("yellowbg");

//Navigation (indirectly change propery(uisng child/parent or sibling relation))

let img = document.querySelector("img");

img.previousElementSibling.style.color = "blue";

//create Element (for paragraph)

let newPara = document.createElement("p");
newPara.innerText = "Hi! this is a New Paragrapg...";

let body = document.querySelector("body");
body.appendChild(newPara);

newPara.append("This is new append() line");//add any thing with in newPara(add element in last)

//create Element 
let box1 = document.querySelector(".box");
box1.appendChild(newPara); 


//create Element  (for button)

let btn = document.createElement("button");
btn.innerText = "Click me";
box1.appendChild(btn); //add button in box

newPara.append(btn);  //append button with in newPara(add element in last)
newPara.append("do not click button"); 

box1.prepend(newPara);

//insertAdjacentElement()

let p = document.querySelector("p");
let btn1 = document.createElement("button");
btn1.innerHTML = "new button";
p.insertAdjacentElement( "beforebegin",btn1);
p.insertAdjacentElement("afterbegin",btn1);
p.insertAdjacentElement("beforeend",btn1);
p.insertAdjacentElement("afterend",btn1);

//removing Elements

body.removeChild(btn1);

btn.remove();
// p.remove();




