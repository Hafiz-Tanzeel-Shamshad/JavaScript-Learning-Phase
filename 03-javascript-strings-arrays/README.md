# 🟨 JavaScript Practice – Strings & Arrays

This project demonstrates **JavaScript basics** with **string methods, array methods, and practice questions**.

---

## 📄 HTML File (`index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Strings</title>
</head>
<body>
    <script src="script.js"></script>
</body>
</html>
```
## 📜 JavaScript File (`script.js`)

---

### 🔤 String Methods

- `.trim()` → removes spaces.  
- `.toLowerCase()` & `.toUpperCase()` → convert case.  
- `.indexOf()` → finds the index of first occurrence.  
- `.slice(start, end)` → extracts part of a string.  
- `.replace()` → replaces substring.  
- `.repeat(n)` → repeats the string `n` times.  

---

### 🧑‍🎓 Arrays

- Access characters inside strings in arrays: `stu[0][2]`.  

#### Array Methods
- `push()` → add at end  
- `pop()` → remove from end  
- `unshift()` → add at start  
- `shift()` → remove from start  
- `indexOf()` & `includes()` → search in array  
- `concat()` → merge arrays  
- `reverse()` → reverse array  
- `slice()` → copy portion  
- `splice()` → add/remove/change elements  
- `sort()` → sort array  

## 📝 Practice Questions

### 1. Get first n elements of an array
```javascript
let array = [7, 9, 0, -2];
console.log(array.splice(0, 3));  // [7, 9, 0]
```
### 2. Get last n elements of an array

```javascript
let array1 = [7, 9, 0, -2];
console.log(array1.splice(1));  // [9, 0, -2]
```
### 3. Check if a string is blank
```javascript
let st = "";
if (st.length == 0) console.log("blank string...");
```
### 4. Check if character is lowercase
```javascript
let char = "A";
if (char == char.toLowerCase()) console.log("Lowercase");
````
### 5. Trim spaces from a string
```javascript
let s = "  Hello  ";
console.log(s.trim());
```
### 6. Check if an element exists in an array
```javascript
let array3 = ["hello", "a", 23, 64, 99, -6];
let item = 64;
console.log(array3.indexOf(item) != -1 ? "exists" : "not exists");



