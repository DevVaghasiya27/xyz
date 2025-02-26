let arr = [12, 43, 554, 535, 2, 4]
let a = arr.map((value, index, array) => {
    console.log(value, index, array)
    return value + 1
})
console.log(a)

let arr2 = [12, 43, 554, 535, 2, 4]
let a2 = arr.filter((a) => {
    return a < 10
})
console.log(a2)

let arr3 = [12, 43, 554, 535, 2, 4]
let a3 = arr.reduce((a , b) => {
    return a+b
})
console.log(a3)

let arr4 = [1, 2 , 3, 4, 5]
const reduce_function = (a , b) => {
    return a + b
}
let a4 = arr4.reduce(reduce_function)
console.log(a4)