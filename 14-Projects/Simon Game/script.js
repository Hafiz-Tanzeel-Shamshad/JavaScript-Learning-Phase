// Initialize game variables
let gameSeq = [];
let userSeq = [];

// Available button colors
let btns = ["yellow", "red", "green", "purple"];

// Game state variables
let started = false;
let level = 0;
let highestScore = 0; // Variable to track highest score

// Reference to the heading element in HTML
let h2 = document.querySelector("h2");

// Event listener for starting the game on keypress
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;

        levelUP();
    }
});

// Function to flash a game button
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 1000);
}

// Function to flash a user button
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 200);
}

// Function to increase the level and generate a new sequence
function levelUP() {
    userSeq = []; // Reset user sequence
    level++;
    h2.innerText = ` Level ${level} `;

    // Choose a random button color
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameFlash(randBtn);
    gameSeq.push(randColor);

    console.log(gameSeq);
}

// Function to check user input against the game sequence
function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            // Check if the current level is the highest score
            if (level > highestScore) {
                highestScore = level;
            }
            setTimeout(levelUP, 1000);
        }
    } else {
        h2.innerHTML = `Game Over!<b> Your score was ${level}. Highest score: ${highestScore}</b> <br> Press any key to start game.`;
        document.querySelector("body").style.backgroundColor = "red";

        // Flash red background briefly
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);

        reset(); // Reset the game
    }
}

// Function to handle user button presses
function userBtnPress() {
    let btn = this;
    userFlash(btn);

    // Get the color of the clicked button
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

// Add click event listeners to all buttons
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", userBtnPress);
}

// Function to reset the game state
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
