let text = document.querySelector("#text");

text.addEventListener("input", function () {
    console.log(text.value);

    let span = document.querySelector("span");
    span.innerText = this.value;
});

