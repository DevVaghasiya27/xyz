class Employee{
    login(){
        console.log(`Empolyee has been logged in`)
    }
    logout(){
        console.log(`Employee has logged out`);
    }
    requestLeaves(leaves){
        console.log(`Employee has requested for ${leaves} leaves`)
    }
}

class Programmer extends Employee{
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffees`)
    }
    requestLeaves(leaves){
        super.requestLeaves(4)
        console.log(`Employee has requested for ${leaves + 1} leaves (One extra)`)
    }
}

let e =new Programmer()
e.login()
e.requestLeaves(4)