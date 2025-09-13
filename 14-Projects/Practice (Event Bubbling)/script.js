let div = document.querySelector("div")
let ul = document.querySelector("ul")
let lis = document.querySelectorAll("li");

div.addEventListener("click", (event)=>{
    event.stopPropagation();//it will
    console.log("div was clicked")
});

ul.addEventListener("click", (event)=>{
    event.stopPropagation();
    console.log("ul was clicked")
});

for (const list of lis) {
    list.addEventListener("click", (event)=>{
        event.stopPropagation();
        console.log(`list item was clicked`);
    });
}
