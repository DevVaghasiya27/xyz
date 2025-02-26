// const prompt = require ("prompt-sync")({sigint: true})

let again;
do{
    let todo = prompt("what you want to do add or delete : ");

if(todo == "add" ){
    let task = prompt("Enter your work name : ")
    let  description = prompt("Enter your work description : ")
    localStorage.setItem(task, description)
    console.log(`The task at ${task} is ${localStorage.getItem(task)}`)
}

if (todo == "delete"){
    let task = prompt("Enter your work name : ")
    console.log(`The task completed is ${task} which is ${localStorage.getItem(task)}`)
    localStorage.removeItem(task)
}

again = prompt("do you want to add or delete anything? : ")

} while(again == "Y")
console.log(localStorage)