function saveToDB(data, sucess, faliure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 4) {
    sucess();
  } else {
    faliure();
  }
}

saveToDB(
  "Heloo",
  () => {
    //call back Hell
    console.log("sucess : your data was saved");
    saveToDB(
      "Hi", 
      () => {
        console.log("sucess 2 : your data was saved");
        saveToDB(
          "Hadi",
          () => {
            console.log("sucess 3 : your data was saved");
          },
          () => {
            console.log("faliure 3 : weak connection");
          }
        );
      },
      () => {
        console.log("faliure 2 : weak connection");
      }
    );
  },
  () => {
    console.log("faliure : connection was week . not save data");
  }
);
