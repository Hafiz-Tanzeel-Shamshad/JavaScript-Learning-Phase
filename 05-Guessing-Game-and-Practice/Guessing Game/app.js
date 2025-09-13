const max = prompt("enter the max number");

const random = Math.floor(Math.random() * 10) + 1;

let guess = prompt("guess the number");

while (true) {
    if (guess === "quit") {
        console.log("User quit");
        break;
    }

    if (guess == random) {
        console.log("you are right...congrats!!", "random number is ", random);
        break;
    }
    else if (guess < random) {
        guess = prompt("Hint : your guess was too small, Try Again")
    }
    else if (guess > random) {
        guess = prompt("Hint : your guess was too large, Try Again")
    }
    else {
        guess = prompt("your guess was wrong .Try Again...");

    }
}