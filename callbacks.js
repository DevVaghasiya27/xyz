// const prompt = require ("prompt-sync")({sigint: true})

// // Synchronous programing
// let a = prompt("What Is Your Name: ");
// let b = prompt("What IS Your Age: ");
// let c = prompt("What Is Your Favorite Color: ");
// console.log(a + " is " + b + " year old and his favorite color is " + c)

// Asynchronous programing
// console.log("Start")

// setTimeout(function (){
//     console.log("Hey I am Dev");
// },3000)

// console.log("End")

// Callbacks
function loadScript(src, callback){
    var script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("Loaded script with SRC: " + src)
        callback(null, src);
    }
    script.onerror = function(){
        console.log("Error loading script with SRC: " + src);
        callback(new Error("Src got some error"))
    }
    document.body.appendChild(script);
}

function hello(error, src) {
    if(error){
        console.log(error)
        return
    }
    alert('Hello World! ' + src);
}

function good(error, src) {
    if(error){
        console.log(error)
        return
    }
    alert('Good Morning ' + src);
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", hello)
// loadScript("https://cdn.jsdevlivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", hello)