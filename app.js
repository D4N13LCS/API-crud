const express = require('express');
const app = express(); 
const cors = require('cors');
const rotaDeProdutos = require('./routes/produtos');
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); 


app.use('/produtos', rotaDeProdutos);



app.use((req, res, next)=>{
    const error = new Error('Página não encontrada');
    error.status = 404;
    next(error); 
});

app.use((erro, req, res, next)=>{
    res.status(erro.status || 500);
    return res.send({
        erro: erro.message
    });
});

module.exports = app;