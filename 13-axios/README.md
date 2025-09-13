# JavaScript Axios Practice Projects

This repository contains a series of hands-on mini-projects demonstrating the use of [Axios](https://axios-http.com/) for making HTTP requests in JavaScript. Each project covers a different aspect of working with APIs, including query strings, custom headers, and interacting with public APIs for data and images. All projects are written in vanilla JavaScript and are beginner-friendly.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Practice 1: Activity using Query String](#practice-1-activity-using-query-string)
- [Practice 2: Headers with API Request](#practice-2-headers-with-api-request)
- [Practice 3: Using Axios (Cat Facts)](#practice-3-using-axios-cat-facts)
- [Practice 4: Using Dog API (Random Dog Images)](#practice-4-using-dog-api-random-dog-images)
- [Axios Basics](#axios-basics)
- [License](#license)

---

## Project Structure

```
Practice (Activity using Query String)/
  app.js
  index.html
Practice (Headers with API  Request)/
  script.js
  index.html
Practice (Using Axios)/
  script.js
  index.html
Practice (Using Dog Api)/
  script.js
  index.html
  style.css
```

Each folder is a self-contained mini-project. Open the `index.html` file in your browser to run the project.

---

## Getting Started

1. **Clone or Download** this repository.
2. Open any project folder.
3. Open `index.html` in your browser.
4. All dependencies (Axios) are loaded via CDN, so no installation is required.

---

## Practice 1: Activity using Query String

**Files:**
- `Practice (Activity using Query String)/index.html`
- `Practice (Activity using Query String)/app.js`

**Description:**
Search for universities in a given country using the [Hipolabs Universities API](http://universities.hipolabs.com/).

**Features:**
- User enters a country name.
- On button click, fetches a list of universities in that country.
- Displays the university names in an ordered list.

**Key Code Snippet:**
```javascript
let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async()=>{
    let input = document.querySelector("input");
    let country = input.value;
    let dataArray = await getCountry(country);
    show(dataArray);
});

function show(collegeArray) {
    let ol = document.querySelector("ol")
    ol.innerText = "";
    for (const i of collegeArray) {
        let li = document.createElement("li");
        li.innerText = i.name;
        ol.appendChild(li);
    }
}

async function getCountry(country) {
    try {
        let response = await axios.get(url+country);
        return response.data;
    } catch (e) {
        console.log(e);
        return [];
    }
}
```

---

## Practice 2: Headers with API Request

**Files:**
- `Practice (Headers with API  Request)/index.html`
- `Practice (Headers with API  Request)/script.js`

**Description:**
Demonstrates how to send custom headers (e.g., `Accept: application/json`) with Axios requests. Fetches a random joke from [icanhazdadjoke.com](https://icanhazdadjoke.com/).

**Key Code Snippet:**
```javascript
const url = "https://icanhazdadjoke.com/";

async function getJoks(){
    try {
        const config = { headers: {Accept: "application/json"}};
        let response = await axios.get(url,config);
        return response.data;
    } catch (error) {
        return error;
    }
}

console.log(getJoks())
```

---

## Practice 3: Using Axios (Cat Facts)

**Files:**
- `Practice (Using Axios)/index.html`
- `Practice (Using Axios)/script.js`

**Description:**
Fetches random cat facts from [catfact.ninja](https://catfact.ninja/).

**Features:**
- Button to fetch a new cat fact.
- Displays the fact in a paragraph.

**Key Code Snippet:**
```javascript
let url = "https://catfact.ninja/fact";

async function getFacts(){
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (error) {
        return "Not A Fact..."
    }
}

let btn = document.querySelector("button");
btn.addEventListener("click", async()=>{
    let fact = await getFacts();
    let p = document.querySelector("p");
    p.innerText = fact;
})
```

---

## Practice 4: Using Dog API (Random Dog Images)

**Files:**
- `Practice (Using Dog Api)/index.html`
- `Practice (Using Dog Api)/script.js`
- `Practice (Using Dog Api)/style.css`

**Description:**
Fetches and displays a random dog image from [dog.ceo](https://dog.ceo/dog-api/).

**Features:**
- Button to fetch a new random dog image.
- Image is displayed in an `<img>` tag.
- Simple CSS for styling.

**Key Code Snippet:**
```javascript
let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");

async function getImage() {
    try {
        let res = await axios.get(url);
        return res.data.message;
    } catch (error) {
        return "No Image Found";
    }
}

btn.addEventListener("click", async()=>{
    let link = await getImage();
    let img = document.querySelector("img");
    img.setAttribute("src", link);
});
```

**CSS Example:**
```css
img {
    height: 500px;
    width: 500px;
}

body{
    background-color: antiquewhite;
}
```

---

## Axios Basics

- **What is Axios?**
  - Axios is a promise-based HTTP client for the browser and Node.js.
  - It makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations.
- **Why use Axios?**
  - Simpler syntax than `fetch()`
  - Automatic JSON data transformation
  - Supports older browsers
  - Easy to set headers, intercept requests/responses, and handle errors

**Basic Example:**
```javascript
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

---

## License

This project is open source and available under the [MIT License](LICENSE).
