let codBarras = document.querySelector("#codbarras");
let nomeProdutos = document.querySelector("#nomep");
let marcaProdutos = document.querySelector("#marcap");
let precoProdutos = document.querySelector("#precop");
let volumeProdutos = document.querySelector("#volumep");
let mercadoProdutos = document.querySelector("#mercadop");
const cadastro = document.querySelector("#register");

cadastro.addEventListener('click',function cadastrar(){
    alert("Entrei cadastro");
    // Importa o pacote mysql2
    const mysql = require('mysql2');

    // Configurações de conexão
    const connection = mysql.createConnection({
      host: 'localhost', // Host onde o banco está rodando
      user: 'root', // Seu usuário do MySQL
      password: 'password', // Sua senha do MySQL
      database: 'mercadopa' // Nome do banco de dados
    });

    // Conectar ao MySQL
    connection.connect((err) => {
      if (err) {
        console.error('Erro ao conectar ao banco de dados: ' + err.stack);
        return;
      }
      console.log('Conectado ao banco de dados com ID ' + connection.threadId);
    });

    const codBarras_produtos = 45;
    const nome_produtos = "Cocada";

    // Query para inserir os dados
    const query = 'INSERT INTO produtos (codBarras_produtos,nome_produtos) VALUES (?,?)';

    // Executa a query para inserir os dados
    connection.query(query, [codBarras_produtos, nome_produtos], (err, results) => {
      if (err) {
        console.error('Erro ao inserir os dados: ' + err.stack);
        return;
      }
      console.log('Dados inseridos com sucesso, ID do cliente: ' + results.insertId);
    });
    connection.end();
});

// Importa o pacote mysql2
/*const mysql = require('mysql2');

// Configurações de conexão
const connection = mysql.createConnection({
  host: 'localhost', // Host onde o banco está rodando
  user: 'root', // Seu usuário do MySQL
  password: 'password', // Sua senha do MySQL
  database: 'mercadopa' // Nome do banco de dados
});

// Conectar ao MySQL
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ' + err.stack);
    return;
  }
  console.log('Conectado ao banco de dados com ID ' + connection.threadId);
});

const codBarras_produtos = 44;
const nome_produtos = "Cocada";

// Query para inserir os dados
const query = 'INSERT INTO produtos (codBarras_produtos,nome_produtos) VALUES (?,?)';

// Executa a query para inserir os dados
connection.query(query, [codBarras_produtos, nome_produtos], (err, results) => {
  if (err) {
    console.error('Erro ao inserir os dados: ' + err.stack);
    return;
  }
  console.log('Dados inseridos com sucesso, ID do cliente: ' + results.insertId);
});*/

// Fazer uma consulta ao banco de dados
/*connection.query('SELECT * FROM produtos', (err, results, fields) => {
  if (err) {
    console.error('Erro na consulta: ' + err.stack);
    return;
  }
  console.log('Resultados da consulta: ', results);
});*/

// Fechar a conexão
