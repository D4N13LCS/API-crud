const urlProduto = "http://localhost:3000/produtos";
const form = document.getElementById('formulario');
const btn_cdstr = document.getElementById('cdstr');
const btn_del = document.getElementById('del');
console.log(btn_cdstr.id)
btn_cdstr.addEventListener('mouseover', ()=>{
    document.getElementById('icode').removeAttribute('required');
});

btn_cdstr.addEventListener('mouseout', ()=>{
    document.getElementById('icode').setAttribute('required', 'required');
})

btn_del.addEventListener('mouseover', ()=>{
    document.getElementById('iprod_name').removeAttribute('required');
    document.getElementById('iprice').removeAttribute('required');
})

btn_del.addEventListener('mouseout', ()=>{
    document.getElementById('iprod_name').setAttribute('required', 'required');
    document.getElementById('iprice').setAttribute('required', 'required');
})

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const nome = document.getElementById('iprod_name').value;
    const preco = document.getElementById('iprice').value;
    
    const dados = { nome: nome, preco: preco };
    const btn = evt.submitter.id
    console.log(btn)
    if(btn === 'cdstr'){
        fetch("http://localhost:3000/produtos", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dados)
        })
        .then((res) => {
            if (res.ok) {
                window.alert('Produto cadastrado com sucesso');
            } else {
                console.log(res)
                window.alert('Erro ao cadastrar produto');
            }
        })
        .catch((error) => {
            console.error('Erro na requisição:', error);
            window.alert('Erro na requisição');
        });

    }  else if(btn === 'del'){
        fetch(urlProduto, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id_produto: document.getElementById('icode').value})
        })
        .then((res)=>{
            if(res.ok){
                alert('Produto deletado com sucesso!')
            }else{
                alert('produto não pôde ser deletado!')
            }
        })
        .catch((err)=>{
            alert('Erro na requisição')
        });
    }else if(btn == 'updt'){
        fetch(urlProduto, {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                id_produto: document.getElementById('icode').value,
                nome: nome,
                preco: preco
            })
        })
        .then((res)=>{
            if(res.ok){
                window.alert('Produto atualizado com sucesso!')
            }else{
                window.alert('Não foi possível atualizar o produto')
            }
        })
        .catch((err)=>{
            window.alert('Problema na requisição')
        })
    }
});

