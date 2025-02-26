let a = new Date()
let h = a.getHours()
let m = a.getMinutes()
let s = a.getSeconds()
let d = a.getDate()
let mo = a.getMonth()
let y = a.getFullYear()
let day = a.getDay()
console.log(h, m, s, d, mo, y, day)
console.log(a)

setInterval(() => {
    let d = new Date()
    joke.innerHTML = d
}, 1000)