let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", function () {
    // Trim the input value to remove leading and trailing whitespaces
   //let inputValue = input.value.trim();

    // Check if the input value is not empty
    if (input.value !== "") {
        let li = document.createElement("li");
        li.innerText = input.value ;
        ul.appendChild(li);
        input.value = "";

        let delBtn = document.createElement("button");
        delBtn.innerHTML = "delete";
        li.appendChild(delBtn);
        delBtn.classList.add("delete"); // Add CSS class
    }
});

// //use event bubbling concept (event.target property define the specific target to click)
ul.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
       // console.dir(event.target);
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});

