// problem 1,2,4

class Complex{
    constructor(real, imaginary){
        this.real = real
        this.imaginary = imaginary
    }
    add(num){
        this.real = a.real + b.real
        this.imaginary = a.imaginary + b.imaginary
    }
    get real(){
        return this._real
    }
    get imaginary(){
        return this._imaginary
    }
    set imaginary(newImaginary){
        this._imaginary = newImaginary
    }
    set real(newreal){
        this._real = newreal
    }
}

// let a = new Complex(2,4)
// let b = new Complex(2,4)

// let add_real = a.real + b.real
// let add_imaginary = a.imaginary + b.imaginary

// console.log(add_real, add_imaginary)


let a = new Complex(2,4)
console.log(a.real, a.imaginary)
a.real = 10
a.imaginary = 10
console.log(a.real, a.imaginary)
let b = new Complex(2,4)
a.add(b)
console.log(`${a.real} + ${a.imaginary}i`)

// problem 3

class Human {
    eat() {
        console.log("Human eats")
    }
}

class Student extends Human{
    study() {
        console.log("Students study")
    }
    eat(){
        console.log("students eat during lunch break")
    }
}

let h = new Human
h.eat()

let s = new Student
s.eat()