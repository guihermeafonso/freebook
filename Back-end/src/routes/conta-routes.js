const express = require('express')
const router = express.Router()
const ContaService = require('../services/conta-service.js')
const contaService = new ContaService()

router.post('/conta/incluir', async (req, res) => {
    let data = { name: req.body.name, email: req.body.email, password: req.body.password, servicos: [{}]}
    try {
        let conta = await contaService.save(data)
        res.json(conta)
    } catch (error) {
        let e = { msg: 'Erro ao salvar!', internal: error.message, status: 500 }
        res.status(500).json(e)
    }
})

router.put('/conta/alterar/:id', async (req, res) => {
    //let id = req.params.id
    let update = { name: req.body.name, email: req.body.email, password: req.body.password, servicos: req.body.servicos }
    await contaService.change('614e69e265135f3427e21bcb', update)
    res.send('Alterado com sucesso')
})

module.exports = (app) => app.use('/', router)