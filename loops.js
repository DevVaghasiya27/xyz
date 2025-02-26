// npm install prompt-sync for using prompt in Vs code
const prompt = require ("prompt-sync")({sigint: true})

// For loop: loop a block of code numbers of times


// // sum of first n number
// let sum = 0
// let n = prompt("enter the value of n: ")
// n = Number.parseInt(n)
// for (let i = 0; i <= n; i++) {
//     sum += (i)
// }
// console.log("sum of first " + n + " number is " + sum)

// // factorial of first n number
// let factorial = 1
// let x = prompt("enter the value of x: ")
// x = Number.parseInt(x)
// for (let i = 1; i <= x; i++) {
//     factorial *=(i)
// }
// console.log("factorial of first " + x + " number is " + factorial)


// For in loop: loop through the key of an object


// let obj = {
//     dev: 99,
//     meet: 74,
//     jay: 98,
//     nirav: 78,
//     vivek: 69
// }

// for(let a in obj){
//     console.log("Marks of " + a + " are " + obj[a])
// }


// for of loop: loop through the values of an object


// for(let d of "vaghasiya"){
//     console.log(d)
// }


// while loop: loop a block based on a specfic condition

// // sum of first n number

// let m = prompt("enter the value of m: ")
// let sum2 = 0
// m = Number.parseInt(m)
// let y=0
// while(y<=m){
//     sum2 += (y)
//     y++
// }
// console.log("sum of first " + m + " number is " + sum2)


// do while loop: while loop variants which runs atleast once

let n = prompt("enter the value of n: ")
n = Number.parseInt(n)
let sum=0
let i = 0
do{
    sum += (i)
    i++
}
while (i <= n)
console.log("sum of first " + n + " number is " + sum)
