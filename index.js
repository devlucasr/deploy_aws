const { request, response } = require('express');
const bodyParser = require('body-parser')
const express = require('express')
const app = express();
app.use(bodyParser.json())
const port = 8080

app.get('/',(request, response)=>{
    return response.end('Bem vindo ao nosso micro-serviço')

});

app.post('/somar',(request, response)=>{
    const body = request.body
    
    const soma = body.n1 + body.n2
    
    return response.send(`O resultado da soma é ${soma}`)

})

app.get('/cliente',(request, response)=>{
    return response.json(
    { 
        "Cliente": "Lucas",
        "Cidade":"Aracatuba",
        "Idade": 21
    })
});

app.listen(port, ()=>{
    console.log('Servidor Iniciado com Sucesso')
})