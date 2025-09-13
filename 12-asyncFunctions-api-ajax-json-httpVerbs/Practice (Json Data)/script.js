let jsonRespone = '{"fact":"A cat will tremble or shiver when it is extreme pain.","length":53}';

let validRespnse = JSON.parse(jsonRespone);//convert to JS object

console.log(validRespnse)


let stu = {
    name:"ali",
    marks:50,
    age : 30
}

let resonse = JSON.stringify(stu); //convert obj to Json format data
console.log(resonse)