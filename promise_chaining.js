// Pyramid of doom solution

// let p1 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         console.log("Resloved After 2 seconds")
//         resolve(233)
//     },2000)
// })

// p1.then((value) => {
//     console.log(value)
//     let p2 = new Promise((reslove, reject) => {
//         setTimeout(() => {
//             reslove("Promise 2")
//         }, 2000)
//     })
//     return p2
//     // return new Promise((reslove, reject) => {
//     //     setTimeout(() => {
//     //         reslove("Promise 2")
//     //     }, 2000)
//     // })
// }).then((value) => {
//     console.log("we are done")
//     return 2
// }).then((value) =>{
//     console.log("now we are finally done")
// })

const loadScript = (src) => {
    return new Promise((reslove,Reject) => {
        let script = document.createElement("script")
        script.src = src;
        document.body.appendChild(script);
        script.onload = ()=>{
            reslove("Script has been loaded")
        }
        script.onerror = ()=>{Reject(0)}
    })
    }
    let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
    // let p1 = loadScript("https://cdn.jsdevlivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
    
    // p1.then((value) =>{
    //     console.log(value)
    // }).catch((error)=>{
    //     console.log("problem loading the scrpit")
    // })

    p1.then((value) =>{
        console.log(value)
        return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
    }).then((value)=>{
        console.log("Second Script is ready")
    }).catch((error)=>{
        console.log("problem loading the scrpit")
    })