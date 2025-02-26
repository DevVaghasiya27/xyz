async function dev() {
    let ahmedabadWeather = new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove("27 Deg")
        },2000)
    })

    let rajkotWeather = new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove("27 Deg")
        },4000)
    })

    // ahmedabadWeather.then(alert)
    // rajkotWeather.then(alert)

    console.log("Fatching Ahmedabad Weather Please Wait")
    let ahmedabadW = await ahmedabadWeather
    console.log("Featched Ahemdabad Weather: " + ahmedabadW)
    console.log("Fatching Rajkot Weather Please Wait")
    let rajkotW = await rajkotWeather
    console.log("Featched Rajkot Weather: " + rajkotW)
    return [ahmedabadW, rajkotW]
}

const vaghasiya = async () =>{
    console.log("Hey! I am Waiting")
}

// console.log("Welcome to control room")
// let a = dev()
// let b = vaghasiya()
// a.then((value) => {
//     console.log(value)
// })
const main1 = async () => {
    console.log("Welcome to control room")
    let a = await dev()
    let b = await vaghasiya()
}
main1()