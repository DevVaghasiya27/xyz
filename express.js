const express = require('express')
const app = express()
const port = 3000

app.get('/',(req, res) => {
    // console.log(req)
    // console.log(req.query)
    res.send('Hello World!')
})

app.get('/about',(req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
})

app.get('/contact',(req, res) => {
    res.send('contact')
})

app.listen(port, () => {
    console.log(`Example app listing on port http://localhost:${port}`)
})