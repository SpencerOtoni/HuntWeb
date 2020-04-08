const port = 3001

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

// Iniciando o APP
const app = express()
app.use(express.json())
app.use(cors())

// Iniciando o BD
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useUnifiedTopology: true,
    useNewUrlParser: true})
    .then (() => console.log ('DB Connected!'))
    .catch (err => {
        console.log (`DB Connection Error: ${err.message}`);
    });

require('./src/models/Product')

// Rotas
app.use('/api', require('./src/routes'))

app.listen(port, ()=>{
    console.log("Servidor rodando.")
})