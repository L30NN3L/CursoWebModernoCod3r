const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) // serve todos os arquivos estáticos
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// app.get('/teste', (req, res) => res.send('Ok'))
app.listen(8080, () => console.log('Executando...'))
