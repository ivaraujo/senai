import express from 'express';
import mysql from 'mysql2/promise';
import path from 'path';

const app = express();
// Caso tenham duvida sobre qualquer estrutura utilizada, utilize-se da documentação
// tanto do NodeJS (você também pode executar o node no terminal e testa cada uma)
// Quanto do ExpressJS e da biblioteca MySQL2, os dois são facilmente encontrados no google
// MySQL2 -> https://sidorares.github.io/node-mysql2/pt-BR/docs
// Express -> https://expressjs.com/en/starter/static-files.html

// Configura o Express para fazer encode de dados vindos do front-end
app.use(express.urlencoded({ extended: true }));

// Configura o Express para utilizar JSON
app.use(express.json());

// Configura o Express para utilizar a pasta public como raiz de arquivos estáticos
// Ex: CSS, imagens, ícones e etc...
app.use(express.static('../public'));

// Config. do banco de dados
const db = mysql.createPool({
  host: 'localhost', // Host onde o banco está rodando
  user: 'root', // Seu usuário do MySQL
  password: 'Dark@14756', // Sua senha do MySQL
  database: 'mercadopa', // Nome do banco de dados
});

// Rota para mandar os HTML's para o cliente

// HTML da home
app.get('/', (req, res) => {
  // Utiliza o método path.join() para criar umas string de local do arquivo
  // a path.resolve() pega o da raiz do projeto e a string ao lado busca o html desejado
  res.sendFile(path.join(path.resolve(), '../index.html'));
});

// HTML do cadastro
app.get('/cadastro', (req, res) => {
  // Utiliza o método path.join() para criar umas string de local do arquivo
  // a path.resolve() pega o da raiz do projeto e a string ao lado busca o html desejado
  res.sendFile(path.join(path.resolve(), '../pages/cadastro.html'));
});

//Cadastro de produtos
app.post('/cadastrar', async (req, res) => {
  // Captura os valores vindo do body
  const data = req.body;

  // Busca o id do mercado utilizando a chave do nome do mercado
  // OBS: Traz todas chaves com o mesmo nome do banco então caso queira o id utiliza idmercados
  const [mercado] = await db.query(`SELECT * FROM mercadopa.mercados WHERE nome_mercados like '%${data.mercadop}%'`);
  console.log('ID do mercado -> ', mercado[0].idmercados);

  // Query Para inserir o produto no banco de dados
  const query = 'INSERT INTO mercadopa.produtos (codBarras_produtos, nome_produtos) VALUES (?, ?)';

  try {
    const resultsProduto = await db.query(query, [data.codbarras, data.nomep]);
    console.log(resultsProduto[0].insertId);
  } catch (err) {
    res.send(err.message);
  }

  res.send('OK');
});

//Buscar produtos
app.get('/pesquisar', (req, res) => {
  let search = 'SELECT * FROM produtos';
  db.query(search, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      res.send('Tudo certo');
    }
  });

  res.send('Beleza!');
});

app.listen(3001, () => {
  console.log(`URL: http://localhost:3001`);
});
