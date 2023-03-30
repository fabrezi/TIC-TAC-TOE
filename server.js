const express = require('express')
const app = express()
const port = 8080
const cors = require('cors')
const path = require('path')

app.use(cors())

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

//this method doesnt work. It can be a chore to make the UI
//run with the express.static command.
//app.use(express.static(path.join(__dirname, 'index.html')))

app.listen(port, () => {
    console.log("Click here:" , `http://localhost:${port}`)
})