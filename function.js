// npm install prompt-sync for using prompt in Vs code
// const prompt = require ("prompt-sync")({sigint: true})

// function oneplusavg(x,y){
//     return 1 + (x + y)/2
// }

// let a = 2
// let b = 4
// let c = 6

// console.log("one plus avrage of a and b is " + oneplusavg(a,b))
// console.log("one plus avrage of c and b is " + oneplusavg(c,b))
// console.log("one plus avrage of a and c is " + oneplusavg(a,c))

// other method for fuction

    // const sum = (p,q) => {
    //     return p+q
    // }

    // console.log(sum(7,8))

//     const hello =()=>{
//         console.log("hello how are you")
//         return "hi"
//     }

//     // hello();
//    let v = hello();
//    console.log(v)

const compare = (a,b) =>{
    return a-b
}
let marks = [68, 98,67 ,87, 88]
marks.sort(compare)
console.log(marks)

marks.forEach((mark) =>{
    console.log(mark + mark)
})

// // Anonymous Function
// console.log(function(a,b){
//     return a+b;
// }(4,5));