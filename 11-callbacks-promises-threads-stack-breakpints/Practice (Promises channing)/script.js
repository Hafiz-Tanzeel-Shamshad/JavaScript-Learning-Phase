function saveToDB(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("sucess : data was saved");
    } else {
      reject("faliure : weak connection");
    }
  });
}

//promise channing
saveToDB("Hello")
  .then((result) => {
    console.log("Data 1 was saved");
    console.log("Promise result :  ",result);
    return saveToDB("Hi")
  }).then((result)=>{
    console.log("Data 2 was saved");
    console.log("Promise result : ",result);
    return saveToDB("college")
  }).then((result)=>{
    console.log("Data 3 was saved");
    console.log(result);
  })
  .catch((error) => {
    console.log("promise was rejected");
    console.log("error of Promise : ",error);
});
  

// saveToDB("Hello")
//   .then(() => {
//     console.log("Data 1 was saved");
//     saveToDB("Hi").then(()=>{
//         console.log("Data 2 was saved");
//     });
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//   });