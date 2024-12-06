SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `mercadoPA` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE IF NOT EXISTS `mercadoPA`.`produtos` (
  `idprodutos` INT(11) NOT NULL AUTO_INCREMENT,
  `codBarras_produtos` INT(13) NOT NULL,
  `nome_produtos` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idprodutos`),
  UNIQUE INDEX `codBarras_produtos_UNIQUE` (`codBarras_produtos` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `mercadoPA`.`marcas` (
  `idmarcas` INT(11) NOT NULL AUTO_INCREMENT,
  `nome_marcas` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idmarcas`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `mercadoPA`.`mercados` (
  `idmercados` INT(11) NOT NULL AUTO_INCREMENT,
  `nome_mercados` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idmercados`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `mercadoPA`.`precos` (
  `idprecos` INT(11) NOT NULL AUTO_INCREMENT,
  `produtos_idprodutos` INT(11) NULL DEFAULT NULL,
  `marcas_idmarcas` INT(11) NULL DEFAULT NULL,
  `preco_precos` FLOAT(11) NULL DEFAULT NULL,
  `quantidade_precos` VARCHAR(5) NULL DEFAULT NULL,
  `mercados_idmercados` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`idprecos`),
  INDEX `fk_precos_produtos_idx` (`produtos_idprodutos` ASC) VISIBLE,
  INDEX `fk_precos_marcas1_idx` (`marcas_idmarcas` ASC) VISIBLE,
  INDEX `fk_precos_mercados1_idx` (`mercados_idmercados` ASC) VISIBLE,
  CONSTRAINT `fk_precos_produtos`
    FOREIGN KEY (`produtos_idprodutos`)
    REFERENCES `mercadoPA`.`produtos` (`idprodutos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_precos_marcas1`
    FOREIGN KEY (`marcas_idmarcas`)
    REFERENCES `mercadoPA`.`marcas` (`idmarcas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_precos_mercados1`
    FOREIGN KEY (`mercados_idmercados`)
    REFERENCES `mercadoPA`.`mercados` (`idmercados`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
