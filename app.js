const express = require('express')
const app = express()
const port = 3000
const helmet = require('helmet')
app.use(helmet())

app.get('/', (req, res) => res.sendFile('index.html'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))