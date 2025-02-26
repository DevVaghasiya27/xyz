const hello = (name, greeting) => console.log(greeting + " " + name)

const hello1 = name => {
    console.log("greeting " + name)
    console.log("hi")
}

const x = {
    name: "Dev",
    role: "Js Developer",
    exp: 4,
    // show: function() {
    //     console.log(`The name is ${this.name}\nThe role is ${this.role}\nThe expreince is ${this.exp} years.`)
    // }
    // show: function () {
    //     let that = this
    //     console.log(this)
    //     setTimeout(function () {
    //         console.log(`The name is ${that.name}\nThe role is ${that.role}\nThe expreince is ${this.exp} years.`)
    //     }, 2000)
    // }
    show: function () {
        setTimeout(()=> {
            console.log(`The name is ${this.name}\nThe role is ${this.role}\nThe expreince is ${this.exp} years.`)
        }, 2000)
    }
}
hello("Dev", "Good Morning")
hello1("Mr. Vaghasiya")
console.log(x.name, x.exp)
x.show()