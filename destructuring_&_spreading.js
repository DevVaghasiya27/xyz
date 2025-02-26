let arr = [3, 5, 7, 8, 9, 12]
// let [a, b, c, ...rest] = arr
// console.log(a, b, c, rest)
// let [a, , , b, ...rest] = arr
// console.log(a, b, rest)
let { a, b } = { a: 1, b: 5}
// console.log(a, b)

// Spread Operator
let arr1 = [3,5,8]
let obj1 = {...arr1}
console.log(obj1)

function sum(v1 , v2 , v3){
    return v1 + v2 + v3
}
console.log(sum(...arr1))

let obj2 = {
    name: "Dev",
    collage: "Indus",
    address: "Sardardham"
}
console.log({...obj2, name: "Dev Vaghasiya"})
console.log({name: "Dev Vaghasiya", ...obj2}) // This will print without changing