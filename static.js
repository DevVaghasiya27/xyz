class Animal{
    constructor(name){
        this.name = Animal.captialize(name)
    }
    walk(){
        console.log("Animal " + this.name + " is walking")
    }
    static captialize(name){
        return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
}

j= new Animal("jack")
j.walk()