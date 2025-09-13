// let url = "https://catfact.ninja/fact";
//async using then/catch methods
fetch(url)
    .then((res) => {
        return res.json();
    }).then((data) => {
        console.log("Data 1 : ", data.fact);
        return fetch(url);
    }).then((res) => {
        return res.json();
    }).then((data) => {
        console.log("Data 2 : ", data.fact);
    })
    .catch((err) => {
        console.log("ERROR - ", err);
    });

//aync using async/await method 

async function getfacts () {
    try {
        let resp = await fetch(url);
        let data = await resp.json();
        console.log(data);

        let resp2 = await fetch(url);
        let data2 = await resp2.json();
        console.log(data2);

    } catch (error) {
        console.log(error);
    }

    console.log("bye");
}

getfacts ();