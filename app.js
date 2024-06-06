const express = require('express');
const app = express(); 

const rotaDeProdutos = require('./routes/produtos');
const bodyParser = require('body-parser');

app.use('/uploads', express.static('uploads')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); 

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*') 
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )

    if(req.method === 'OPTIONS'){ 
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET'); 
        return res.status(200).json({});
    }

    next();
});

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

//https://api-crud-daniel-7c967317f81f.herokuapp.com/