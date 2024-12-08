// Importa o pacote mysql2
/*const mysql = require('mysql2');

// Configurações de conexão
const connection = mysql.createConnection({
  host: 'localhost', // Host onde o banco está rodando
  user: 'root', // Seu usuário do MySQL
  password: '', // Sua senha do MySQL
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
connection.end();*/
/*
const pesquisa = document.querySelector("#search");
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
    
    connection.end();
});*/

import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());



// Config. do banco de dados
const db = mysql.createConnection({
  host: 'localhost', // Host onde o banco está rodando
  user: 'root', // Seu usuário do MySQL
  password: '', // Sua senha do MySQL
  database: 'mercadopa' // Nome do banco de dados
});

// Conectar ao MySQL
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ' + err.stack);
    return;
  }
  console.log('Conectado ao banco de dados');
});

//Cadastro de produtos

app.post('/cadastrar', async(req,res)=>{
  
  const { codBarras_produtos, nome_produtos } = req.body;
  //let codBarras_produtos = 110;
  //let nome_produtos = "Aqui"
  console.log(codBarras_produtos);
  const query = 'INSERT INTO produtos (codBarras_produtos, nome_produtos) VALUES (?, ?)';

  db.query(query, [codBarras_produtos, nome_produtos], (err, res) => {
    if (err) {
      console.log(req);
      res.send('OK');
    }
    console.log(req);
    res.send('OK');
  });

  console.log(req);
  res.send('OK');
});

//Buscar produtos
app.get('/pesquisar',(req,res)=>{

  let search = "SELECT * FROM produtos";
  db.query(search, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Tudo certo");
    }
  });

  res.send('Beleza!')
});

app.listen(3000);