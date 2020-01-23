
//Faz o mapeamento de Obj Javascript para Documentos para o MongoDB
const mongoose = require('mongoose')

//Setando a API do Promise do Node para o Mongoose
mongoose.Promise = global.Promise

//Exporta uma Conexao com o MongoDB
module.exports = mongoose.connect('mongodb://localhost/todo')