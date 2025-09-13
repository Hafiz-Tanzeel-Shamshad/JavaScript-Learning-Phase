# 🎯 JavaScript Learning Projects  

A collection of JavaScript applications and exercises demonstrating **fundamental programming concepts** including **objects, arrays, random number generation, and user interaction**.  

---

## 📁 Project Structure  

```
├── app.js # Number Guessing Game
├── index.html # HTML template for Guessing Game
└── script.js # JavaScript object manipulation exercises
```
---

---

## 🎮 Number Guessing Game  

### 📄 Files  
- **`app.js`** – Game logic implementation  
- **`index.html`** – HTML structure for the game  

### ▶️ How to Play  
The game generates a random number **between 1–10** and prompts the user to guess it.  
The game provides hints if the guess is too **high** or too **low**.  

```javascript
// Game Logic
const random = Math.floor(Math.random() * 10) + 1;
let guess = prompt("guess the number");

while (true) {
    if (guess === "quit") {
        console.log("User quit");
        break;
    }
    // ... game logic continues
}
```
### ✨ Features
- Random number generation
- User input validation
- Hint system (too high / too low)
- Option to quit the game
- Success message when correct

### 📚 JavaScript Object Exercises
### 📄 File: script.js

```javascript
1. Basic Object Manipulation
let student = {
    name: "ali",
    age: 23,
    class: "12th",
    color: ["red", "pink"]
};
// Adding and deleting properties
student.gender = "Male";
delete student.age;
console.log(student);
```


2. Object Property Access

```javascript
// Different ways to access object properties
console.log(student["name"]);
console.log(student.name);
console.log(student.color[0]);
```
3. Special Keys in Objects

```javascript
const obj = {
    1: "a",
    2: "b",
    null: "c",
    true: "d",
    undefined: "e"
};
```
4. Nested Objects

```javascript
const classInfo = {
    ali: {
        grade: "A+",
        city: "Dehli"
    },
    ahmed: {
        grade: "A",
        city: "Pune"
    }
};
```

5. Array of Objects

```javascript
const Info = [
    { name: "haris", age: 22 },
    { name: "Khan", age: 22 },
    { name: "ali", age: 21 }
];
```
# 📝 educational-value
Perfect for learning:

- JavaScript object fundamentals  
- Game development basics  
- User interaction patterns  
- Debugging with console.log  
- Data structure design  

# 🆓 license
Free for educational use.  
Feel free to modify and expand upon these examples for learning purposes.  
