const { request, response } = require('express');
const bodyParser = require('body-parser')
const express = require('express')
const app = express();
app.use(bodyParser.json())
const port = 3333

app.get('/',(request, response)=>{
    return response.end('Bem vindo ao Super Servidor do Lucas')

});

app.get('/somar',(request, response)=>{
    const body = request.body
    
    const soma = body.n1 + body.n2
    
    return response.send(`O resultado da soma é ${soma}`)

})

app.post('/cliente',(request, response)=>{
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