Caso queira visualizar como o banco de dados está se comportando, basta rodar o seguinte código no MySQL Workbench para criar uma instância do banco de dados utilizado na API:

CREATE DATABASE `lv79hage45wfl1qr` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;

CREATE TABLE `pedidos` (
  `id_pedidos` int NOT NULL AUTO_INCREMENT,
  `quantidade` smallint DEFAULT NULL,
  `id_produto` int NOT NULL,
  PRIMARY KEY (`id_pedidos`,`id_produto`),
  KEY `fk_pedidos_produtos_idx` (`id_produto`),
  CONSTRAINT `fk_pedidos_produtos` FOREIGN KEY (`id_produto`) REFERENCES `produtos` (`id_produto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE `produtos` (
  `id_produto` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `preco` float DEFAULT NULL,
  PRIMARY KEY (`id_produto`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;

credenciais para realizar a instância: 

MYSQL_HOST: h40lg7qyub2umdvb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com
MYSQL_USER: j3owxxv8ftnpckh1
MYSQL_PASSWORD: vefacmybz4gfuapr
MYSQL_PORT: 3306
