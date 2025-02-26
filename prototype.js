// javascript object have a sepical propertycalled "Prototype" that is either null or "refrences to another object"
// Prototype refrences to another object

let a = {
    name: "Dev",
    surname: "Vaghasiya",
    run: () => {
        console.log("run")
        // alert("run")
    }
}

console.log(a)

let p = {
    run: () => {
        console.log("run")
        // alert("run")
    }
}

p.__proto__ = {
    name2: "DEV"
}

a.__proto__ = p
a.run()
console.log(a.name2)