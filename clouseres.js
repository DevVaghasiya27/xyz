message = "Hello World!"
function hello1(){
    let message = "Good Morning"
    console.log("Hello 1: " + message)
    let c = function hello2(){
        console.log("I am c " + message)
    }
    return c
}

c = hello1()
c()

// function init(){
//     var name = 'Dev';
//     function displayName(){
//         console.log(name);   
//     }
//     name = "Vaghasiya"
//     return displayName;
// }
// let c = init();
// c()

// function returnFunc() {
//     const x = () => {
//         let a = 1
//         console.log(a)
//         const y = () => {
//             let a = 2
//             console.log(a)
//             const z = () => {
//                 let a = 3
//                 console.log(a)
//             }
//             z()
//         }
//         // a = 999
//         y()
//     }
//     return x
// }

// let a = returnFunc()
// a()