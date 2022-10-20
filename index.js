const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const multer = require('multer');
const formParser = multer();

app.use(express.static('./public_html'))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(formParser.array());

app.get('/getEstrategia', (req,res) => {
    res.json(
        [{
            nome: "Estrategia 5",
            percent: "50",
            id: 12345
        },
        {
            nome: "Estrategia 55",
            percent: "50",
            id: 12345
        }]
    )
})

app.post('/setData', (req,res) => {
    console.log("Passei")
    console.log(req.body)
    res.json('Passei')
})

app.listen(3000, () => console.log('Rodando no http://localhost:3000'))