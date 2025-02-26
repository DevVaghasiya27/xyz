class RailwayForm{
    submit() {
        // alert(this.name + ": Your form is submitted for train no: " + this.trainno)
        console.log(this.name + ": Your form is submitted for train no: " + this.trainno)
    }
    cancel() {
        // alert(this.name + ": Your form is cancelled for train no: " + this.trainno)
        console.log(this.name + ": Your form is cancelled for train no: " + this.trainno)
    }
    fill(givenname, trainno) {
        this.name = givenname
        this.trainno = trainno
    }
}

let dev = new RailwayForm()
dev.fill("Dev" , 123456)
let vaghasiya = new RailwayForm()
let vaghasiya2 = new RailwayForm()
vaghasiya.fill("Vaghasiya" , 987654)
vaghasiya2.fill("Vaghasiya" , 456789)
dev.submit()
vaghasiya.submit()
vaghasiya2.submit()
vaghasiya2.cancel()