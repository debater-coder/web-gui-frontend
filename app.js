const express = require('express')
const app = express()
const port = 3000
const helmet = require('helmet')
app.use(helmet())
app.use(express.static('static'))

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))