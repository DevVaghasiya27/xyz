let a = () => {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove(233)
        }, 3000)
    })
}

(async () => {
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
}) ()