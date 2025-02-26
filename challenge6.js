// problem no 1

// let age = prompt("Enter your age: ")
// age = Number.parseInt(age)

// const candrive = (age) =>{
//     return age<18?true:false
// }

// if(candrive(age)){
//    alert("Sorry! You can not drive")
// }else{
//     alert("Yeah! You can drive")
// }

// problem no 2

// let runAgain = true;

// const candrive = (age) =>{
//     return age<18?true:false
// }

// while(runAgain){
//     let age = prompt("Enter your age: ")
//     age = Number.parseInt(age)
//     if(candrive(age)){
//         alert("Sorry! You can not drive")
//     }else{
//         alert("Yeah! You can drive")
//     }
//     runAgain = confirm("Do you want to play again?")
// }

// problem no 3 (This code cannot be run becuase "confirm" is not defined in VSCode)

// age = prompt("Enter your age: ")
// age = Number.parseInt(age)
// let runAgain = true;

// const candrive = (age) =>{
//     return age<18?true:false
// }

// while(runAgain){
//     if(age<0){
//         console.error("Age can not be Negative")
//         break;
//     }
//     if(candrive(age)){
//         alert("Sorry! You can not drive")
//     }else{
//         alert("Yeah! You can drive")
//     }
//     runAgain = confirm("Do you want to play again?")
// }

// problem no 4 

let num = prompt("Enter your Number: ")
num = Number.parseInt(num)

if(num > 4){
    location.href = "https://google.com"
}


// problem no 5

// let color = prompt("Enter your Color: ")
// document.body.style.background = color