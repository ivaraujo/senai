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

connection.query('SELECT nome_produtos FROM produtos', (err, results, fields) => {
  if (err) {
  console.error('Erro na consulta: ' + err.stack);
  return;
  }
  console.log('Resultados da consulta: ', results);
});

/*const pesquisa = document.querySelector("#search");
let caixaCodbarras = document.querySelector("#produtos")

pesquisa.addEventListener('click',function pesquisar(){
    alert("Entrei na pesquisa");
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

    connection.query('SELECT * FROM produtos', (err, results, fields) => {
      if (err) {
      console.error('Erro na consulta: ' + err.stack);
      return;
      }
      console.log('Resultados da consulta: ', results);
    });
        
    caixaCodbarras.innerHTML = results;    
});*/

