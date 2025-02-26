let promise = new Promise((resolve, reject) => {
    console.log("Hello")
    resolve(233)
})

// console.log("Hello 1")
console.log("Good Mornig")
setTimeout(function(){
    console.log("My name is Dev")
},2000)

// console.log("My name is Hello 3")
console.log("Waht is your name")
console.log(promise)