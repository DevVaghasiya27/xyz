const prompt = require ("prompt-sync")({sigint: true})


// let marks = {
//     dev: 99,
//     meet: 74,
//     jay: 98,
//     nirav: 78,
//     vivek: 69
// }

// problem no 1

// for(let i=0; i<Object.keys(marks).length; i++){
//     console.log("Marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
// }

// problem no 2

// for (let key in marks){
//     console.log("marks of " +key+ " are " +marks[key])
// }

// problem no 3

// value = 5
// let i
// while (i != value){
//     i = prompt("enter your number: ")
//     console.log("try again!")
// }
// console.log("you entered the correct number")

// problem no 4

// function avgof5(a,b,c,d,e){
//     return (a+b+c+d+e)/5
// }
// console.log(avgof5(1,2,3,4,5))

// Extra Challenge

let marks = [68, 98,67 ,87, 88]
for(let i=0; i<marks.length; i++){
    console.log(marks[i])
}

let name = "dev"
let a = Array.from(name)
console.log(a)