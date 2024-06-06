const express = require('express');
const router = express.Router(); 
const db = require('../db').pool;

// Retorna todos os produtos
router.get('/', (req, res, next)=>{
    db.getConnection((erro, conex)=>{
        if(erro){return res.send(500).send({ erro: erro})}
        conex.query(
            "select * from produtos",
            (erro, resultado, field)=>{
                if(erro){return res.send(500).send({ erro: erro})}
                const response = {
                    quantidade: resultado.length,
                    produtos: resultado.map((prod)=>{
                        return {
                            id_produto: prod.id_produto,
                            nome: prod.nome,
                            preco: prod.preco,
                            produto_imagem: prod.imagem_produtos,
                            request: {
                                tipo: 'GET',
                                descricao: 'Retorna os detalhes de um produto específico',
                                url: 'http://localhost:3000/produtos/' + prod.id_produto
                            }
                        }
                    })
                }
                return res.status(200).send({response})
            }
        
        )
    })

  
});

// Insere um produto
router.post('/',(req, res, next)=>{
    console.log(req.file);
    db.getConnection((erro, conex)=>{
            conex.query(
                'INSERT INTO produtos (nome, preco) VALUES (?, ?)', 
                [req.body.nome, 
                req.body.preco
                ], 
                (erro, resultado, field)=>{
                    conex.release();

                if(erro){
                    return res.status(500).send({
                        error: erro,
                        response: null
                    })
                }
                const response = {
                    mensagem: 'Produto inserido com sucesso',
                    produtoCriado: {
                        id_produto: resultado.insertId,
                        nome: req.body.nome,
                        preco: req.body.preco,
                        request: {
                            tipo: 'GET',
                            descricao: 'Retorna todos os produtos',
                            url: 'http://localhost:3000/produtos'
                        }
                    }
                }
                return res.status(201).send(response);
            })
    })

});

// Retorna os dados de um produto
router.get('/:id', (req, res, next)=>{ 
    db.getConnection((erro, conex)=>{
        const id = req.params.id
        if(erro){ return res.status(500).send({erro: erro})}
        conex.query(`select * from produtos WHERE id_produto = (?)`,
        [id], 
        (erro, resultado, field)=>{
            if(erro){ return res.status(500).send({erro: erro})}
            if(resultado.length == 0){
                return res.status(404).send(
                    {mensagem: 'Nenhum registro encontrado'}
                )
            }
            const response = {
                produto: {
                    id_produto: resultado[0].id_produto,
                    nome: resultado[0].nome,
                    preco: resultado[0].preco,
                    imagem_produto: resultado[0].imagem_produtos,
                    request: {
                        tipo: 'GET',
                        descricao: 'Retorna todos os produtos',
                        url: 'http://localhost:3000/produtos'
                    }
                }
            }
            return res.status(200).send(response);
        }
    )
    })
})
  
//Altera um produto
router.patch('/', (req, res, next)=>{ 
    const novo_produto = {
        id_produto: req.body.id_produto,
        nome: req.body.nome, 
        preco: req.body.preco
    }
    db.getConnection((erro, conex)=>{
        if(erro){ return res.status(500).send({ erro: erro})}
        conex.query('update produtos set nome = ?, preco = ? where id_produto = ?',
        [novo_produto.nome, novo_produto.preco, novo_produto.id_produto],
        (erro, resultado)=>{
            conex.release()
            if(erro){ return res.status(500).send({erro: erro})}
            const response = {
                mensagem: 'Produto atualizado com sucesso',
                produtoAtualizado: {
                    id_produto: req.body.id_produto,
                    nome: req.body.nome,
                    preco: req.body.preco,
                    request: {
                        tipo: 'GET',
                        descricao: 'Retorna os detalhes de um produto específico',
                        url: 'http://localhost:3000/produtos/' + req.body.id_produto
                    }
                }
            }
            return res.status(202).send(response)
        }
        )
    })
})

//Exclui um produto
router.delete('/',(req, res, next)=>{ 
    const info = {
        id_produto: req.body.id_produto,
    }
    db.getConnection((erro, conex)=>{
        conex.query('DELETE FROM produtos WHERE id_produto = ?', 
        [info.id_produto], 
        (erro, resultado)=>{
            if(erro){ return res.status(500).send({erro: erro})}
            const response = {
                mensagem: 'Produto removido com sucesso',
                request: {
                    tipo: 'POST',
                    descricao: 'Insere um produto',
                    url: "http://localhost:3000/produtos",
                    body:{
                        nome: 'String',
                        preco: 'Number'
                    }
                }
            }
            return res.status(202).send(response)
        })
    })
})


module.exports = router;
