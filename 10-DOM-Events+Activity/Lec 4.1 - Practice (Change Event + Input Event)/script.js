let from = document.querySelector("form");

from.addEventListener("submit", function (event) {
    event.preventDefault();
});

let user = document.querySelector("#user");
//let pass = document.querySelector("#pass");

user.addEventListener("change", function () {
    console.log("input chaned!");
    console.log("Final Value = ",this.value);
});

user.addEventListener("input", function () {
    console.log("input chaned!");
    console.log("Final Value = ",this.value);
});


