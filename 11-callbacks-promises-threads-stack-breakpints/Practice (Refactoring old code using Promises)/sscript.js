let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("Color Chaned!");//if resolve then call again
    }, delay);
  });
}

changeColor("red", 1000)
  .then(() => {
    console.log("Red color was completed");
    return changeColor("green", 1000);
  })
  .then(() => {
    console.log("green color was completed");
    return changeColor("blue", 1000);
  })
  .then(() => {
    console.log("blue color was completed");
    return changeColor("pink", 1000);
  })
  .then(() => {
    console.log("pink color was completed");
    return changeColor("yellow", 1000);
  })
  .then(() => {
    console.log("yellow color was completed");
});

// changeColor("red", 1000, ()=>{
//     changeColor("green", 1000, ()=>{
//         changeColor("yellow", 1000)
//     })
// });
