let url = "https://catfact.ninja/fact";

async function getFacts(){
    try {
        let res = await axios.get(url);
        console.log(res.data.fact);
        return res.data.fact;
    } catch (error) {
        console.log("error - ",error);
        return "Not A Fact..."
    }
    
}

//console.log(getFacts());
//getFacts();


let btn = document.querySelector("button");

btn.addEventListener("click", async()=>{
    let fact = await getFacts();

    let p = document.querySelector("p");
    p.innerText = fact;
})


