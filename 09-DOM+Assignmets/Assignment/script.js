// Qs1. Create a new input and button element on the page using JavaScript only. Set the
// text of button to “Click me”;

let btn = document.createElement("button");
let input = document.createElement("input");

btn.innerText = "click me";

document.querySelector("body").append(input);
document.querySelector("body").append(btn);

// Qs2. Add following attributes to the element :
// - Change placeholder value of input to “username”
// - Change the id of button to “btn”.

btn.setAttribute("class", "btn");  //give id using setAttribute()
input.setAttribute("placeholder","User Name");

let b = document.querySelector("button");
b.getAttribute("id");

// Qs3. Access the btn using the querySelector and button id. Change the button
// background color to blue and text color to white.

let styleBtn  = document.querySelector(".btn")
styleBtn.classList.add("btn");//add css

// Qs4. Create an h1 element on the page and set its text to “DOM Practice” underlined.
// Change its color to purple.

let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";
let body= document.querySelector("body");

body.prepend(h1);

// Qs5. Create a p tag on the page and set its text to “Apna College Delta Practice”,
// where Delta is bold.

let  p  = document.createElement("p");
p.innerHTML = "<b>Apna College Delta Practice</b>"
document.querySelector("input").insertAdjacentElement("beforebegin",p);