let p1 = new Promise((reslove, reject) => {
    setTimeout(()=>{
        reslove("Value 1")
    },1000);
});

let p2 = new Promise((reslove, reject) => {
    setTimeout(()=>{
        reslove("Value 2")
        // reject(new Error("Error"))
    },2000);
});

let p3 = new Promise((reslove, reject) => {
    setTimeout(()=>{
        reslove("Value 3")
    },3000);
});

// p1.then((value)=>{
//     console.log(value)
// })

// p2.then((value)=>{
//     console.log(value)
// })

// p3.then((value)=>{
//     console.log(value)
// })

let promise_all = Promise.all([p1,p2,p3]) //wait for all promises to reslove and returns an arrey of their results

// let promise_all = Promise.allSettled([p1,p2,p3]) //wait fo rall promises to settle

// let promise_all = Promise.race([p1,p2,p3]) // wait for the first promises to settle

// let promise_all = Promise.any([p1,p2,p3]) // wait for the first promises to fulfil(not rejected) throws an aggregate error if all the promises are rejected

// let promise_all = Promise.resolve(27) // makes a resloved promise with given value

// let promise_all = Promise.reject(new Error("Hey")) // makes a rejected promise wit the given error


promise_all.then((value) => {
    console.log(value)
})
