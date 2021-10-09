const express = require('express')
const server = express();
server.use(express.json())
const teste = [];//criação da lista(vetor) teste

// Read(Get)
server.get('/teste', (req, res) =>{
    return res.json(teste);
});//get, onde mostramos a lista teste

// Create(Post)
server.post('/teste', (req, res) => {
const {name} = req.body;// passamos para name o valor inserido no body
teste.push(name);//empurramos os dados para a lista
return res.json(teste);//retornamos a lista teste
});//post, onde adicionamos itens a lista testes

// Update(Put)
server.put('/teste/:index', (req,res) =>{
    const {index} = req.params;//ele pega o index informado com os dados
    const {name} =  req.body;
    teste[index] = name;
    return res.json(teste);
});//put, onde fazemos atualizações na lista teste

//Delete
server.delete('/teste/:index', (req,res) => {
    const {index} = req.params;
    teste.splice(index, 1);//vai até o index informado e o deleta

    return res.send();
});//delete, onde deletamos elementos da lista teste

server.listen(3000); //define a porta em que será executado, no caso, localhost:3000