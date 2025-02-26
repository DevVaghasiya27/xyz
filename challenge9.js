// problem 1

// const loadScript = async (src) => {
//     return new Promise((reslove, reject) => {
//         let script = document.createElement("script")
//         script.src = src
//         script.onload = () => {
//             reslove("Done Success " + src)
//         }
//         document.body.append(script)
//     })
// }

// let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
// a.then((value) => {
//     console.log(value)
// })


// problem 2

// const loadScript = async (src) => {
//     return new Promise((reslove, reject) => {
//         let script = document.createElement("script")
//         script.src = src
//         script.onload = () => {
//             reslove("Done Success " + src)
//         }
//         document.body.append(script)
//     })
// }

// const main1 = async () => {
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
//     console.log(a)
// }

// main1()

// peoblem 3

// let p = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("error"))
//         }, 200)
//     })
// }

// let a = async () => {
//     try {
//         let c = await p()
//         console.log(c)
//     } catch (err) {
//         console.log("This error has been hendale")
//     }
// }

// a()

// problem 4

let p1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, 1000)
    })
}

let p2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20)
        }, 2000)
    })
}

let p3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30)
        }, 3000)
    })
}

// take 6 seconds to complete(wait for all the process to complete one by one)

// const run = async () => {
//     console.time("run")
//     let a1 = await p1()
//     let a2 = await p2()
//     let a3 = await p3()
//     console.log(a1,a2,a3)
//     console.timeEnd("run")
// }

// take 3 seconds to complete(process work parallel after every process complete output will come)

const run = async () => {
    console.time("run")
    let a1 = p1()
    let a2 = p2()
    let a3 = p3()
    let a1a2a3 = await Promise.all([a1,a2,a3])
    console.log(a1a2a3)
    console.timeEnd("run")
}

run()