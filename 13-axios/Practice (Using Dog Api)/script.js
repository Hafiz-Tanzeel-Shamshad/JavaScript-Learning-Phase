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

