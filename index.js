const express = require("express");
const server = express();

// const grupo = {
//   nome: 'Comando Baiano',
//   integrantes: ['Felipe', 'Caio', 'Jeferson'],
//   tempo: 1,
// };

server.use(express.static("public"));
server.use(express.json());

// const cadastrados = [];

const cadastro = [];

server.post("/user", (req, res) => {
  // console.log(req.body.senha);
  cadastro.push(req.body);
  console.log(cadastro);
});

server.get("/user", (req, res) => {
  res.json(cadastro);
});

// server.get('/', (req, res) => {
//   res.json(grupo);
// });

// server.get('/integrantes', (req, res) => {
//   res.json(grupo.integrantes);
// });

// server.get('/tempo', (req, res) => {
//   res.json(grupo.tempo);
// });

// server.post('/integrantes', (request, res) => {
//   const dados = request.body;
//   console.log(dados);
//   grupo.integrantes.push(dados.nome);
//   res.send('integrante adicionado');
// });

server.listen(3000);

//TODO Criar um array de pessoas, que contem nome email e senha.
//TODO Cria rotas para leitura desses array
//TODO Adicionar pessoas novas nesse array

//TODO No front end, enviar informações de pessoas novas para adicionar no array
//TODO Verificar se ja existe essa pessoa no array

//TODO Criar uma tela CRUD
