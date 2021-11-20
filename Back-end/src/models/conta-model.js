const mongoose = require('mongoose');

const schemaservicos = new mongoose.Schema(
    {
        descricao: { type: String, required: true},
        valor: { type: Number, required: true},
        duracao: { type: Number , required: true}

    }
)

const schema = new mongoose.Schema(
    {
        name: {type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },  
        servicos: [schemaservicos]
    }

)
 
module.exports = mongoose.model('Conta', schema);