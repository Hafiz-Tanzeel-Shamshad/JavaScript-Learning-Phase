//get data in json format using headers

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