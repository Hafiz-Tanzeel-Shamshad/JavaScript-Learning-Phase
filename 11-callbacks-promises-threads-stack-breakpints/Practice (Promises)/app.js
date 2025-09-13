function saveToDB(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      console.log(internetSpeed);
      resolve(`sucess : Data was saved... ${data}`);
    } else {
      console.log(internetSpeed);
      reject("faliure :  data was not saved");
    }
  });
}

saveToDB("Hello")
  .then(() => {
    console.log("promese was resolved");
 
  })
  .catch(() => {
    console.log("promese was rejected");
   
});
