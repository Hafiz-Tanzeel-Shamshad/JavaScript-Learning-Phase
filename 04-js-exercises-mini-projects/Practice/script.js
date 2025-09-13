// const favMovie = "avatar";

// let guess = prompt("guess your favrite movie");

// while (guess!=favMovie) {
//     if (guess=="quit") {
//         console.log("You quit this game!");
//         break;
//     }
//     guess = prompt("try again. wrong guess");
// }

// if (guess==favMovie) {
//     console.log("congraulations!!");

// }   

// let stu = [["ALi",45],["Khan",50],["Hadi",75]];

// for (let i = 0; i< stu.length; i++) {
//     console.log(`info of student ${i}`)
//     for (let j = 0; j < stu[i].length; j++) {
//         console.table(stu[i][j]);

//     }

// }

//forof loop
let fruits = [ "apple", "mango", "banana" ];
for (arrs of fruits) {//global scope
    console.log(arrs);
}
console.log(arrs); //global scope
//nested forof loop

let arr = [
    [ "apple", "mango", "orange" ],
    [ "biskets", "cake", "chocklet" ],
]

for (row of arr) {
    for (col of row) {
        console.log(col);
    }
}