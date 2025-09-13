//debugging in browser sourse window
function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    return two() + one();
}

// three();

//Call Back Hell

let h1 = document.querySelector("h1");

function changeColor(color,delay) {
    setTimeout(()=>{
        h1.style.color = color;
    },delay);
};

// changeColor("red", 1000);
// changeColor("blue",2000);
// changeColor("green", 3000);



//let h1 = document.querySelector("h1");

function changeColor(color,delay,nextChangeColor) {
    setTimeout(()=>{
        h1.style.color = color;

        if (nextChangeColor) {
            nextChangeColor();
        }

    },1000);

}

changeColor("red", 1000, ()=>{
    changeColor("green", 1000,()=>{
        changeColor("blue", 1000,()=>{
            changeColor("yellow", 1000, ()=>{
                changeColor("pink", 1000,()=>{
                    changeColor("orange", 1000)
                });
            });
        });
    });
});

