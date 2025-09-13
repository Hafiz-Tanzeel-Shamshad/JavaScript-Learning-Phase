# JavaScript Mini Projects

This repository contains several mini projects built using JavaScript, HTML, and CSS. Each project demonstrates different concepts and techniques in web development. Below you'll find a detailed overview of each project, including what the project is, what we do, how we do it, and what we learn from it.

---

## 1. Practice (Event Bubbling)

### What is this project?
A simple interactive demo to understand and visualize the concept of **event bubbling** in the DOM (Document Object Model).

### What do we do?
- Create nested HTML elements (e.g., divs inside divs).
- Attach event listeners to each element.
- Observe how events propagate from the innermost element to the outermost (bubbling up).

### How do we do it?
- Use `addEventListener` to attach click events to each nested element.
- Use `event.target` and `event.currentTarget` to see which element triggered the event and which is handling it.
- Optionally, use `event.stopPropagation()` to stop the bubbling process and observe the difference.

### What do we learn?
- The difference between event target and current target.
- How event bubbling works in the DOM.
- How to control event propagation using JavaScript.

---

## 2. Simon Game

### What is this project?
A browser-based version of the classic **Simon Game**, where players must repeat an increasingly long sequence of colors and sounds.

### What do we do?
- Generate a random sequence of colors.
- Play the sequence for the user to memorize.
- Let the user repeat the sequence by clicking colored buttons.
- Check if the user's input matches the sequence and increase the difficulty.

### How do we do it?
- Use arrays to store the game sequence and the user's input.
- Use event listeners for button clicks.
- Use timeouts to play the sequence visually and with sounds.
- Compare user input to the game sequence and handle success/failure.

### What do we learn?
- How to manage game state in JavaScript.
- Using arrays and event listeners for interactive games.
- Working with timeouts and user feedback.
- Basic game logic and user experience design.

---

## 3. Todo App Using DOM

### What is this project?
A simple **Todo List** application that allows users to add, complete, and remove tasks using only JavaScript and the DOM.

### What do we do?
- Add new todo items.
- Mark items as completed.
- Delete items from the list.
- Optionally, filter or persist todos.

### How do we do it?
- Use input fields and buttons to get user input.
- Dynamically create, update, and remove DOM elements.
- Use event listeners for user actions (add, complete, delete).
- Optionally, use localStorage to persist todos.

### What do we learn?
- Manipulating the DOM with JavaScript.
- Handling user input and events.
- Structuring code for small web applications.
- (Optional) Using browser storage for persistence.

---

## Summary

These projects are designed to help you:
- Understand core JavaScript and DOM concepts.
- Practice event handling, state management, and UI updates.
- Build confidence in creating interactive web applications from scratch.

Feel free to explore each folder for the source code and try running the projects in your browser!
