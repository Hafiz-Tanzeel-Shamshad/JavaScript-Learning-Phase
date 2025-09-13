let todo = [];

let req = prompt("please enter your request");

while (true) {
    if (req == "quit") {
        console.log("Quitting App");
        break;
    }
    //display
    if (req == "list") {
        console.log("______________________");
        for (let i = 0; i < todo.length; i++) {
            console.log(i,".",todo[i]);
        }
        console.log("______________________");
    //add elemet
    } else if (req == "add") {
        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("Task Added...");
    //delete element
    } else if (req == "delete") {
        let index = prompt("Please enter the task index");
        todo.splice(index, 1);
        console.log("Task Deleted...");

    } else {
        console.log("Rong Request");
    }
     
    req = prompt("please enter your request");
}
