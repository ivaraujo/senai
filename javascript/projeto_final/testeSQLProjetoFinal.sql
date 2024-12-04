SELECT * FROM precos;
SELECT * FROM marcas;
SELECT * FROM mercados;
SELECT * FROM produtos;

INSERT INTO produtos (codBarras_produtos,nome_produtos) VALUES (1233,"Óleo de soja");
INSERT INTO marcas (nome_marcas) VALUES ("Soya");
INSERT INTO mercados (nome_mercados) VALUES ("Gbarbosa");
INSERT INTO precos (produtos_idprodutos,marcas_idmarcas,preco_precos,quantidade_precos,mercados_idmercados) 
VALUES ((SELECT idprodutos FROM produtos WHERE nome_produtos LIKE 'Óleo de soja'),(SELECT idmarcas FROM marcas WHERE nome_marcas LIKE 'Soya'),9.90,"1L",
(SELECT idmercados FROM mercados WHERE nome_mercados LIKE 'Gbarbosa'));