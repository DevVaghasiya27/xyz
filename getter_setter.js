class Animal {
    constructor(name) {
        this._name = name
    }
    fly() {
        console.log("I am flying")
    }
    get name(){
        return this._name
    }
    set name(newName){
        this._name = newName
    }
}

class Rabbit extends Animal{
    eat(){
        console.log("eating carrot")
    }
}

let a = new Rabbit("Bruno")
a.fly()
console.log(a.name)
a.name = "jack"
console.log(a.name)
let c = 2
console.log(a instanceof Animal)
console.log(a instanceof Rabbit)
console.log(c instanceof Animal)