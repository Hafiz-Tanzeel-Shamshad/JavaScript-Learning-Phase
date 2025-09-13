// async function greet() {
// //    throw "some random error"; //if you create error then use throw keyword
//     return "Hello";
// }

// greet()
// .then((result)=>{
//     console.log("Promise was resolved");
//     console.log("result was : ",result );
// })
// .catch((error)=>{
//     console.log("promise was rejected with error",error);
// })

//let damo = async ()=>{return 5;};
//console.log(damo());

//await keyword

// function getNum(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();

// }

//demo();

//change color with async / await or (try/catch) keyword 
let h1 = document.querySelector("h1");
function changeColor(color, delay) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      let num = Math.floor(Math.random() * 5) + 1;
      if (num > 3) {
        reject("promise reject");
      }

      h1.style.color = color;
      console.log("color was : ", color);
      resolve("promise resolve");
    }, delay);
  });
}

async function colorDemo() {
  try {
    await changeColor("red", 1000);
    await changeColor("green", 1000);
    await changeColor("blue", 1000);
    await changeColor("yellow", 1000);
  } catch (error) {
    console.log("error caught");
    console.log(error);
  }

  let a = 7;
  console.log(a);
  console.log("new number = ", a + 3);
}
colorDemo();
