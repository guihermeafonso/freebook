const Conta = require('../models/conta-model.js')

module.exports = class ContaService {
    async save(data) {
        return await Conta(data).save() // await 
    } 

    async delete(id) {
        return await Conta.findByIdAndDelete(id)
    }

    async change(id, update) {
        return await Conta.findByIdAndUpdate(id, update)
    }
}