//Arquivo de Configuração
//Realizar a Importação do body-parser e express
//Inicializar um servidor escutando na porta 3003

const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

//Todas as requisições que chegaram no servidor passará pelo BodyParser
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function(){
    console.log(`BACKEND FUNCIONANDO BEM NA PORTA ${port}.`)
})

module.exports = server