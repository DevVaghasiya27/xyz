const prompt = require("prompt-sync")({ sigint: true })

let user = prompt("Enter S, W or G: ")
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][cpuI]
let again;

do {
    const match = (cpu, user) => {
        if (cpu == user) {
            return "Match is Tied"
        } else if (cpu === "S" && user === "W") {
            return "cpu"
        } else if (cpu === "S" && user === "G") {
            return "user"
        } else if (cpu === "W" && user === "S") {
            return "user"
        } else if (cpu === "W" && user === "G") {
            return "cpu"
        } else if (cpu === "G" && user === "W") {
            return "user"
        } else if (cpu === "G" && user === "S") {
            return "cpu"
        }
    }
    let result = match(cpu, user)
    // alert("CPU: " + cpu + "\nUser: " + user + "\nThe Winner is " + result.toUpperCase())
    console.log("CPU: " + cpu)
    console.log("User: " + user)
    console.log("The Winner is " + result.toUpperCase())

    again = prompt("Do you want to continue Y or N: ")

    if(again == "Y"){
    user = prompt("Enter S, W or G: ")
    cpuI = Math.floor(Math.random() * 3);
    cpu = ["S", "W", "G"][cpuI]
    }

} while (again == "Y")