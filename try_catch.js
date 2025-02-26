setTimeout(() => {
    console.log("Hacking wifi.... Please wait...")
}, 1000)

// simple try and catch block

// try{
//     console.log(dev)
// }catch(error){
//     console.log("error ocured " + error)
// }

// this try and catch block will show error thats beacuse function itself executrd later, when the engine has alresdy left the try... catch block 

// try {
//     setTimeout(() => {
//         console.log(dev)
//     }, 1000)
// } catch (error) {
//     console.log("error ocured " + error)
// }

// this try catch block will not show error becuse the next error has its try catch block

try {
    setTimeout(() => {
        try {
            console.log(dev)
        } catch (error) {}
    }, 1000)
} catch (error2) {
    console.log("error ocured " + error)
}

setTimeout(() => {
    console.log("Fatching username and password.... Please wait...")
}, 1000)

setTimeout(() => {
    console.log("Hacking facebook id.... Please wait...")
}, 1000)

setTimeout(() => {
    console.log("Username and password fatched.... Please wait...")
}, 1000)