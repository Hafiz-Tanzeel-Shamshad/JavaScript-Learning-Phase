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