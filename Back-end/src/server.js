require('dotenv').config();

const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

const mongoose = require('mongoose');
const { response } = require('express');

app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/",  (req, res)=>{
    res.send("TADS API Rodando...")
});

require('./routes/conta-routes.js')(app)

app.listen(port, () => {
    console.log(`APP listening at http://localhost:${port}`)
});