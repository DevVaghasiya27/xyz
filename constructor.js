class RailwayForm{
    constructor(givenname, trainno, address){
        console.log("Construction Called... " + givenname + " " + trainno + " " + address)
        this.name = givenname
        this.trainno = trainno
        this.address = address
    }
    preview() {
        // alert(this.name + ": Your form is submitted for train no: " + this.trainno)
        console.log(this.name + ": Your form is for train no: " + this.trainno + " Your address is: "+ this.address)
    }
    submit() {
        // alert(this.name + ": Your form is submitted for train no: " + this.trainno)
        console.log(this.name + ": Your form is submitted for train no: " + this.trainno + " Your address is: "+ this.address)
    }
    cancel() {
        // alert(this.name + ": Your form is cancelled for train no: " + this.trainno)
        console.log(this.name + ": Your form is cancelled for train no: " + this.trainno + " Your address is: "+ this.address)
    }
}

let devForm = new RailwayForm("Dev" , 123456, "Rajkot")

devForm.preview()
devForm.submit()
devForm.cancel()
devForm.preview()