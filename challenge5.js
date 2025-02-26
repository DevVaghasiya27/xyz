const prompt = require ("prompt-sync")({sigint: true})

// problrm no 1

let num=[1,2,3,4,5]
let n = prompt("Enter number you wish to add: ")
n = Number.parseInt(n)
num.push(n)
console.log(num)

// problem no 2

// let num=[1,2,3,4,5]
// let n;

// do{
//     n = prompt("Enter number you wish to add: ")
//     n = Number.parseInt(n)
//     num.push(n)
// }while(n!=0);

// console.log(num)

// problem no 3

// let arr = [10, 24, 20 ,36, 40]
// let a = arr.filter((value) => {
//     return value % 10 == 0
// })
// console.log(a)

// problem no 4

// let arr2 = [1, 2, 3, 4, 5, 6]
// let a2 = arr2.map((n) => {
//     return n * n
// })
// console.log(a2)

// problem no 5

// let arr3 = [1, 2, 3, 4, 5, 6]
// let a3 = arr3.reduce((n1, n2) => {
//     return n1 * n2
// })
// console.log(a3)