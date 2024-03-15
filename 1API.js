// 
const http = require('http')

// ciando um servidor(backend - API ) atraves do modulo http
http.createServer((req, res) =>{

// Construindo a logica da API
    res.write("Ola, ")
    res.write("consegue me informa seu nome?")
    res.end()



// startanto o servidor (backend - api) para escutar a comunicações
// na porta 3000
}).listen(300)