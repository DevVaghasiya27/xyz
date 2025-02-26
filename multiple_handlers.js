let p1 = new Promise((reslove, reject) => {
    // alert ("Hey I am not resolved")
    setTimeout(() =>{
        reslove(1);
    },2000)
})

p1.then(() =>{
    console.log("Congratulation this promise is now resloved")
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove(27)
        }, 5000)
    }).then((value)=>{console.log(value)})
})

p1.then(()=>{
     console.log("Hurray")
})