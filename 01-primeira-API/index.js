// importando o modulo do express
const express = require('express')

const app = express()

// construir logica(o contrato da minha api)
app.get("/hello", (req, res) => {
    res.send("salve mundo!")
})
app.get("/Nome", (req, res) => {
    res.send("Rafael Nobre!")
})


app.listen(30), () => {
console.log("Api iniciando! rodando em http://localhost:30")
}