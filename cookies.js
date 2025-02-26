alert(document.cookie)
document.cookie = "name=dev1"
document.cookie = "name2=dev2"
document.cookie = "name3=dev3"
document.cookie = "name4=dev4"
document.cookie = "name5=dev5"
document.cookie = "name6=dev6"
document.cookie = "name=dev"
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`
alert(document.cookie)
