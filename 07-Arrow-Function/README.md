# JavaScript Concepts Learned

This module covers several important JavaScript concepts, including the `this` keyword, arrow functions, callback functions, and timer functions like `setTimeout` and `setInterval`. Below is a summary of what we learned, with code examples from the practice files.

---

## 1. The `this` Keyword

The value of `this` depends on how a function is called:

```js
let stu = {
	name: "ali",
	age: 25,
	add () {
		console.log(this.name); // 'ali'
		console.log(this.age);  // 25
	}
}
stu.add();
```

In regular functions, `this` refers to the object before the dot. In arrow functions, `this` is inherited from the parent scope (lexical scoping).

```js
const student = {
	name: "Ali",
	marks: 75,
	getName: function(){
		console.log(this); // student object
		return this.name;
	},
	getMarks: ()=>{
		console.log(this); // window or parent scope
		return this.marks;
	},
}
```

---

## 2. Arrow Functions

Arrow functions provide a concise syntax and do not have their own `this`.

```js
let print = () => {
	console.log("Arrow function");
}
print();

let sum = (a, b) => (
	a + b
);
console.log(sum(1, 3)); // 4
```

---

## 3. Callback Functions

Functions can be passed as arguments to other functions and executed later.

```js
add = () => {
	console.log("Call Back Functions");
}
setTimeout(add, 4000); // Calls add after 4 seconds
```

---

## 4. Timer Functions: `setTimeout` and `setInterval`

```js
setTimeout(() => {
	console.log("hello");
}, 4000); // Runs once after 4 seconds

let id = setInterval(() => {
	console.log("Hello World");
}, 2000); // Runs every 2 seconds

setTimeout(() => {
	clearInterval(id);
	console.log("Stop");
}, 10000); // Stops interval after 10 seconds
```

---

## 5. try...catch Error Handling

```js
try {
	console.log(a); // ReferenceError
} catch (error) {
	console.log(error);
	console.log("error will throw...");
}
```

---

## 6. Practice Questions

**Arrow Function for Square:**
```js
const square = (n) => n * n;
console.log(square(2)); // 4
```

**Callback and this Example:**
```js
let length = 5;
function callback () {
	console.log(this.length);
}
const object = {
	length: 5,
	method (callback) {
		callback();
	},
};
object.method(callback, 1, 2);
```

---

This summary covers the main concepts and code patterns practiced in this module.