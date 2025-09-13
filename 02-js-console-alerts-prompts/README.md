# 🌐 JavaScript Basics with HTML

This project demonstrates how to **link JavaScript with HTML** and perform some basic operations like logging, alerts, prompts, and string/number comparison.

---

## 📄 HTML File (`index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript</title>
    <link rel="icon" href="web_3178370.png">
</head>
<body>
    <h1>Hello World</h1>

    <!-- Place script at the end of the body -->
    <script src="script.js"></script>
</body>
</html>

```
## 📜 JavaScript File (script.js)

```Javascript
 
console.log("Hello");

let sum = 2 + 3;
console.log(`The sum = ${sum}`);  // Template Literals

let str1 = 1;
let str2 = "Hello";
let result = str1 === str2;

console.log(result);

alert("Msg");            // Alert popup
console.error("Error");  // Error message in console
console.warn("warn");    // Warning in console

let Name = prompt("Enter name");  // User input
console.log(Name);
```
# 🔑 Key Concepts

## 1. Console Methods
- `console.log()` → Prints messages.  
- `console.error()` → Shows error in console.  
- `console.warn()` → Shows warning in console.  

---

## 2. Template Literals
- Use backticks (``) to embed variables inside strings.  
- **Example:**
```javascript
let sum = 2 + 3;
console.log(`The sum = ${sum}`);
```

## 3. Comparison Operator
- `===` checks both **value and type**.  

**Example:**
```javascript
1 === "1";  // false (number vs string)
```
## 4. Alerts & Prompts

- `alert("Msg")` → Displays a popup message.  
- `prompt("Enter name")` → Asks for user input and returns the value.  
