-- CREATE THE DATABASE :
CREATE DATABASE IF NOT EXISTS bibliotheque;


-- USE THE DATABASE :
USE bibliotheque;


-- CREATE ABONNES TABLE :
CREATE TABLE abonne(
    id_abonne int NOT NULL AUTO_INCREMENT,
    prenom varchar(50) NOT NULL,
    PRIMARY KEY (id_abonne)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- INSERT DATA IN ABONNE TABLE :
INSERT INTO `abonne`(`prenom`) VALUES 
('Guillaume'),
('Benoit'),
('Chloe'),
('Laura');


-- CREATE LIVRE TABLE :
CREATE TABLE livre(
    id_livre int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    auteur varchar(50) NOT NULL,
    titre varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- INSERT DATA IN LIVRE TABLE :
INSERT INTO `livre`(`id_livre`,`auteur`, `titre`) VALUES 
('100','GUY DE MAUPASSANT','Une vie'),
('101','GUY DE MAUPASSANT','Bel-Ami'),
('102','HONORE DE BALZAC','Le pere Goriot'),
('103','ALPHONSE DAUDET','Le Petit chose'),
('104','ALEXANDRE DUMAS','La Reine Margot'),
('105','ALEXANDRE DUMAS','Les Trois Mousquetaires');


-- CREATE EMPRUNT TABLE :
CREATE TABLE emprunt (
    id_emprunt INT NOT NULL AUTO_INCREMENT,
    date_sortie DATE NOT NULL,
    date_rendu DATE NULL,
    PRIMARY KEY (id_emprunt),
    FOREIGN KEY(id_livre) REFERENCES livre(id_livre),
    FOREIGN KEY(id_abonne) REFERENCES abonnes(id_abonne)
) ENGINE=InnoDB;


-- INSERT DATA IN EMPRUNT TABLE :
INSERT INTO `emprunt`(`date_sortie`, `date_rendu`, `id_livre`, `id_abonne`) VALUES 
('2016-12-07','2016-12-11','100','1'),
('2016-12-07','2016-12-18','101','2'),
('2016-12-11','2016-12-19','100','3'),
('2016-12-12','2016-12-22','103','4'),
('2016-12-15','2016-12-30','104','1'),
('2017-01-02','2017-01-15','105','2'),
('2017-02-15',NULL ,'105','3'),
('2017-02-20',NULL ,'100','5');


-- LOOK ALL TABLES :
SHOW TABLES;