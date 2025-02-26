// // problem 1

// const a = async (text, n=2) => {
//     return new Promise((reslove, reject) => {
//         setTimeout(() => {
//             reslove(text)
//         }, 1000*n)
//     })
// }
// (
//     async () => {
//         let text = await a("Hello")
//         console.log(text)
//         text = await a("World")
//         console.log(text)
//     }
// )()

// // problem 2

// function sum(a, b, c){
//     return a + b + c
// }

// let x= [2, 3, 5]
// console.log(sum(...x));

// // problem 3

// (
//     async () => {
//         let text = await a("I am resloving after 1 seconds", 1)
//         console.log(text)
//         text = await a("I am resloving after 3 seconds", 3)
//         console.log(text)
//     }
// )()

// problem 4

function simpleInterest(p,r,n){
    return p*r*n/100
}

let i = [10000, 3, 2]
console.log(simpleInterest(...i))

// console.log(simpleInterest(100, 5, 1))
