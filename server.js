const express = require('express')
const app = express()
const port = 7777
const cors = require('cors')
const path = require('path')

app.use(cors())

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})