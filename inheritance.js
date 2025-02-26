class Animal{
    constructor(name, color){
        this.name = name
        this.color = color
    }
    run(){
        console.log(this.name + " running " + this.color)
    }
    shout() {
        console.log(this.name + " shouting")
    }
}

class Monkey extends Animal{
    eat(){
        console.log(this.name + " eats banana")
    }
}

let ani = new Animal("Bruno" , "white")
let m = new Monkey("Chimpu", "orange")

ani.run()
m.eat()
m.run()