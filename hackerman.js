let a = [
    "Intializing Hack tool...",
    "Connecting to Facebook...",
    "Connecting to server 1...",
    "Connecting to failed. Retrying...",
    "Connecting to server 2...",
    "Connecting to successfuly...",
    "Username iamdev...",
    "Trying Brute Force...",
    "200k passwords tried...",
    "Match not Found...",
    "Another 200k passwords tried...",
    "Match Found...",
    "Accessing Account...",
    "Hack Successful..."

]

const sleep = async (seconds) => {
    return new Promise((reslove, reject) => {
        setTimeout(() => {reslove(true)},seconds * 1000)
    })
}

const showHack = async (message) =>{
    await sleep(2)
    // console.log(message)
    need.innerHTML = need.innerHTML + message + "<br>"
}

// async iife function(immediately invoke function)

(async () => {
    for(let i=0; i<a.length; i++){
        await showHack(a[i])
    }
})()