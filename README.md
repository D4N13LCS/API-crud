Caso queira visualizar como o banco de dados está se comportando, basta rodar o seguinte código no MySQL Workbench para criar uma instância do banco de dados utilizado na API:

CREATE DATABASE `Nome de um banco de dados qualquer`;

CREATE TABLE `produtos` (
  `id_produto` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `preco` float DEFAULT NULL,
  PRIMARY KEY (`id_produto`)
);

CREATE TABLE `pedidos` (
  `id_pedidos` int NOT NULL AUTO_INCREMENT,
  `quantidade` smallint DEFAULT NULL,
  `id_produto` int NOT NULL,
  PRIMARY KEY (`id_pedidos`,`id_produto`),
  KEY `fk_pedidos_produtos_idx` (`id_produto`),
  CONSTRAINT `fk_pedidos_produtos` FOREIGN KEY (`id_produto`) REFERENCES `produtos` (`id_produto`)
);

credenciais para realizar a instância: 

No arquivo db.js que está no root do projeto, altere as informações de acordo com o seu banco de dados.

Será algo como:

const db = require('mysql');

var pool = db.createPool(
    {
    "user": "seu usuário",
    "password": "sua senha",
    "database": "sua database",
    "host": "localhost",
    "port": 3306,
}
);

exports.pool = pool;

OBS: O projeto funciona normalmente, essas instruções devem ser seguidas caso queira uma confirmação do funcionamento da aplicação.
