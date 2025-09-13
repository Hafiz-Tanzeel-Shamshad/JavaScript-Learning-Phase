# JavaScript Callbacks, Promises, and Refactoring Examples

This repository demonstrates key JavaScript concepts including callback hell, promise chaining, and refactoring callback-based code to use promises. Each folder contains a focused example with both HTML and JavaScript files.

## Folder Structure

- **Practice (Call back Hell Example)**
  - `app.js`: Demonstrates callback hell using nested callbacks to simulate saving data to a database with random success/failure.
  - `index.html`: Loads `app.js`.

- **Practice (Call Back Hell func)**
  - `script.js`: Shows callback hell in UI color changes, then refactors to use a callback-based function for sequential color changes.
  - `index.html`: Loads `script.js` and displays a heading.

- **Practice (Promises channing)**
  - `script.js`: Refactors the callback hell example to use promises and demonstrates promise chaining for sequential async operations.

- **Practice (Promises)**
  - `app.js`: Basic example of using a promise to simulate saving data, with `.then` and `.catch` for handling results.
  - `index.html`: Loads `app.js` (empty file, but included for completeness).

- **Practice (Refactoring old code using Promises)**
  - `sscript.js`: Refactors the color-changing callback hell example to use promises for sequential color changes.
  - `index.html`: Loads `sscript.js` and displays a heading.

## Key Concepts Illustrated

### Callback Hell
- Deeply nested callbacks make code hard to read and maintain.
- Example: Saving data with random success/failure, or changing UI colors in sequence.

### Promises
- Promises provide a cleaner way to handle async operations.
- `.then()` and `.catch()` allow chaining and error handling.
- Refactored examples show how to convert callback hell into promise chains.

### Refactoring
- Shows how to move from callback-based async code to promise-based code for better readability and maintainability.

## How to Run
1. Open any `index.html` file in your browser.
2. Open the browser console to view logs and see the async operations in action.
3. For color-changing examples, observe the heading color changes on the page.

## Credits
- Examples inspired by common JavaScript async patterns and educational resources.

---

Feel free to explore each folder and file to understand the evolution from callbacks to promises in JavaScript!