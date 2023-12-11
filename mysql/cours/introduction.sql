-- Pour accéder à la console mysql sur MAC(WAMP) : /Applications/MAMP/Library/bin/mysql --host=localhost -uroot -proot

-- Pour accéder à la console mysql sur windows(WAMP) : C:\wamp64\bin\mysql\mysql8.2.0\bin\mysql.exe -uroot -proot OU Cliquer sur l'icone WAMP en bas à droite, puis MySQL, puis MySQL console

-- Pour accéder à la console mysql sur windows(XAMPP) : C:\xampp\mysql\bin\mysql.exe -uroot -proot OU Cliquer sur l'icone XAMPP en bas à droite, puis MySQL, puis MySQL console

-- Pour apprndre SQL (doc : https://sql.sh/)
-- ####### LES COMMANDES DE BASE ####### --

-- Pour voir la version de MySQL :
SHOW VARIABLES LIKE "%version%";

-- Pour voir le port de MySQL :
SHOW VARIABLES LIKE "%port%";

-- Afficher la liste des bases de données :
SHOW DATABASES;

-- Créer une base de données :

CREATE DATABASE  if not exists `nom_de_la_base`;
-- Exemple : CREATE DATABASE  if not exists entreprise;

-- Supprimer une base de données :
DROP DATABASE `nom_de_la_base`;
-- Exemple : DROP DATABASE entreprise;

-- Utiliser une base de données :
USE `nom_de_la_base`;
-- Exemple : USE entreprise;

-- Creation d'une table :

CREATE TABLE `nom_de_la_table` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(50) NOT NULL,
    `prenom` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE employes (
    id_employe INT NOT NULL AUTO_INCREMENT,
    prenom VARCHAR(50) NOT NULL,
    nom VARCHAR(50) NOT NULL,
    sexe ENUM('m', 'f') NOT NULL,
    service VARCHAR(50) NOT NULL,
    date_embauche DATE  NOT NULL,
    salaire INT NOT NULL,
    PRIMARY KEY (id_employe)
)ENGINE=InnoDB;

-- Voir une table :
DESC `nom_de_la_base`;
-- Exemple : DESC entreprise;


-- Insérer des infos :
INSERT INTO `nom_de_la_table`(`key`) VALUES(`key_values`);
-- -- Exemple : 
-- INSERT INTO employes (id_employe, prenom, nom, sexe, service, date_embauche, salaire) VALUES
-- (350, 'Jean-pierre', 'Laborde', 'm', 'direction', '2010-12-09', 5000),
-- (388, 'Clement', 'Gallet', 'm', 'commercial', '2010-12-15', 2300),
-- (415, 'Thomas', 'Winter', 'm', 'commercial', '2011-05-03', 3550),
-- (417, 'Chloe', 'Dubar', 'f', 'production', '2011-09-05', 1900),
-- (491, 'Elodie', 'Fellier', 'f', 'secretariat', '2011-11-22', 1600),
-- (509, 'Fabrice', 'Grand', 'm', 'comptabilite', '2011-12-30', 2900),
-- (547, 'Melanie', 'Collier', 'f', 'commercial', '2012-01-08', 3100),
-- (592, 'Laura', 'Blanchet', 'f', 'direction', '2012-05-09', 4500),
-- (627, 'Guillaume', 'Miller', 'm', 'commercial', '2012-07-02', 1900),
-- (655, 'Celine', 'Perrin', 'f', 'commercial', '2012-09-10', 2700),
-- (699, 'Julien', 'Cottet', 'm', 'secretariat', '2013-01-05', 1390),
-- (701, 'Mathieu', 'Vignal', 'm', 'informatique', '2013-04-03', 2500),
-- (739, 'Thierry', 'Desprez', 'm', 'secretariat', '2013-07-17', 1500),
-- (780, 'Amandine', 'Thoyer', 'f', 'communication', '2014-01-23', 2100),
-- (802, 'Damien', 'Durand', 'm', 'informatique', '2014-07-05', 2250),
-- (854, 'Daniel', 'Chevel', 'm', 'informatique', '2015-09-28', 3100),
-- (876, 'Nathalie', 'Martin', 'f', 'juridique', '2016-01-12', 3550),
-- (900, 'Benoit', 'Lagarde', 'm', 'production', '2016-06-03', 2550),
-- (933, 'Emilie', 'Sennard', 'f', 'commercial', '2017-01-11', 1800),
-- (990, 'Stephanie', 'Lafaye', 'f', 'assistant', '2017-03-01', 1775);



-- ##### REQUETES SQL ###### --

-- #### SELECT #### --

SELECT Permet de selectionner des données dans une table. 

-- Sa syntaxe est la suivante :
    SELECT `les_champs` FROM `nom_de_la_table`;

-- Récupétation de toutes les informations de la table employes :
SELECT id_employes, prenom, nom, sexe, service, date_embauche, salaire FROM employes;
-- ou
SELECT * FROM employes;

--Enlever les doublons
SELECT DISTINCT `les_champs` FROM `nom_de_la_table`
-- Exemple : SELECT DISTINCT service FROM employes;


-- ### WHERE ### --

-- WHERE permet de mettre une condition sur une requête SELECT

-- Sa syntaxe est la suivante :
    SELECT `les_champs` FROM `nom_de_la_table` WHERE `condition`;

-- Afficher les nom des employés qui travaillent dans le service informatique :

SELECT nom FROM employes WHERE service = "informatique";


-- ## BETWEEN .... AND... ## OR... IN... ## LIKE...## --

-- BETWEEN permet de selectionner une plage de valeurs entre deux bornes

-- Sa syntaxe est la suivante :
    SELECT `les_champs` FROM `nom_de_la_table` WHERE `champ` BETWEEN `borne1` AND `borne2`;
-- Afficher les nom et prénoms des employés qui ont été embauchés depuis 2015-01-01 et 2023-12-04 dans le service informatique :
SELECT * FROM employes WHERE date_embauche BETWEEN '2015-01-01' AND '2023-12-04' AND service="informatique";

-- Afficher les nom et prénoms des employés qui ont été embauchés le 2010-12-15 et le 2011-05-03 dans le service commercial :
SELECT * FROM employes WHERE (date_embauche = '2010-12-15' OR date_embauche = '2011-05-03') AND service="commercial";

-- Afficher les femmes et les prénoms des employés dans le service commercial :
SELECT * FROM employes WHERE sexe IN ( 'f' ) AND service="commercial";

-- Afficher les employés dont la premières lettre de leurs prénoms est E :
SELECT * FROM employes WHERE prenom LIKE 'E%';

-- Afficher les employés dont la dernière lettre de leurs prénoms est e :
SELECT * FROM employes WHERE prenom LIKE '%e';

-- Afficher les employés qui contient la lettre a dans leurs prénoms :
SELECT * FROM employes WHERE prenom LIKE '%a%';

-- Afficher les employés qui contient la lettre a dans leurs prénoms et travaillent dans le  commercial:
SELECT * FROM employes WHERE prenom LIKE '%a%' AND service="commercial";

-- Afficher tous les employés sauf ceux qui travaillent dans l'informatique et avec un salaire supérieur à 2000e:
SELECT * FROM employes WHERE salaire > 2000 AND service!="informatique";

-- Afficher les employés dont leurs salaire est égal à  3100e:
SELECT * FROM employes WHERE salaire LIKE '3100';

-- Afficher les employés avec les salaires dans l'ordre décroissant:
SELECT * FROM employes ORDER BY salaire DESC;

-- Afficher les employés avec les nom dans l'ordre alphabétique:
SELECT * FROM employes ORDER BY nom ASC;

-- Afficher 1 employé maximum:
SELECT * FROM employes LIMIT 1;

-- Afficher 1 employé maximum dans la position 5:
SELECT * FROM employes LIMIT 1 OFFSET 5;

-- Afficher 5 employé maximum à partir de la position 5:
SELECT * FROM employes LIMIT 0, 5; 



-- ### AS alias ### --

-- AS permet de donner un alias à une table ou à un champ
SELECT prenom, salaire*12  FROM employes;

-- Créer une nouvelle colonne temporaire
SELECT prenom, salaire*12 AS salaire_annuel FROM employes;


-- ## Fonction d'ahgregation : SUM(), AVG(), COUNT(), MIN(), MAX() ## --

-- Afficher la masse salariale de l'entreprise :
SELECT SUM(salaire*12) AS salaire_annuel_all FROM employes;

-- Afficher le salary moyen de l'entreprise :
SELECT AVG(salaire) AS salaire_moyen FROM employes;

-- Afficher le nombre de femmes dans l'entreprise :
SELECT COUNT(sexe) AS number_of_woman FROM employes WHERE sexe='f';
SELECT * FROM employes WHERE sexe = 'f';


-- Afficher le salaire le plus bas de l'entreprise :
SELECT MIN(salaire) AS min_salary FROM employes;
SELECT * FROM employes WHERE salaire = (SELECT MIN(salaire) FROM employes);


-- Afficher le salaire le plus haut de l'entreprise :
SELECT MAX(salaire) AS max_salary FROM employes;
SELECT * FROM employes WHERE salaire = (SELECT MAX(salaire) FROM employes);

-- Afficher le salaire le plus haut + le plus bas de l'entreprise :
SELECT (SELECT MAX(salaire) FROM employes) + (SELECT MIN(salaire) FROM employes) AS max_plus_min;


-- ### IN ### --

-- IN permet de selectionner des enregistrements dont la valeur d'un champ est égale à l'une des valeurs d'une liste

-- Sa syntaxe est la suivante :
    SELECT `les_champs` FROM `nom_de_la_table` WHERE `champ` IN ('valeur1', 'valeur2', 'valeur3');

-- Afficher les employés masculin qui travaillent dans le service commercial ou dans le service informatique dans l'ordre alphabétique :
SELECT * FROM employes WHERE service IN ('commercial', 'informatique') AND sexe='m' ORDER BY nom ASC;

-- Afficher les employés avec un salaire de 3100e dans l'ordre alphabétique:
SELECT * FROM employes WHERE salaire IN (3100) ORDER by nom ASC;


-- ### OR ### --

-- OR permet de combiner plusieurs conditions dans une requête SELECT

-- Nom, prenom et salaire des employés qui travaillent dans le service commercial et qui ont un salaire de 1900€ ou 2300€ dans l'ordre alphabétique:
SELECT nom, prenom, salaire FROM employes WHERE service="commercial" AND (salaire=1900 OR salaire=2300) ORDER BY nom ASC;


-- ## GROUP BY ## --

-- GROUP BY permet de regrouper les résultats d'une requête SELECT selon une valeur commune

-- Sa syntaxe est la suivante :
    SELECT `les_champs` FROM `nom_de_la_table` GROUP BY `champ`;

-- Afficher le nombre d'employés par service :

SELECT COUNT(*) AS nombre_employes, service FROM employes GROUP BY service;

-- HAVING permet de filtrer les résultats d'une requête GROUP BY

-- Sa syntaxe est la suivante :
    SELECT `les_champs` FROM `nom_de_la_table` GROUP BY `champ` HAVING `condition`;
    

-- Afficher le nombre d'employés par service avec plus de 2 personnes:

SELECT COUNT(*) AS nombre_employes, service FROM employes GROUP BY service HAVING nombre_employes > 2;
SELECT COUNT(*) AS nombre_employes, service FROM employes GROUP BY service HAVING COUNT(*) > 2;



---------- LES REQUTES D'INSERTION ----------

-- INSERT INTO permet d'insérer des données dans une table

-- Sa syntaxe est la suivante :
    INSERT INTO `nom_de_la_table` (`champ1`, `champ2`, `champ3`) VALUES ('valeur1', 'valeur2', 'valeur3');  

INSERT INTO `employes`(`prenom`, `nom`, `sexe`, `service`, `date_embauche`, `salaire`) VALUES ('Jean', 'Dupont', 'm', 'commercial', '2017-01-01', 2000);
INSERT INTO `employes`(`prenom`, `nom`, `sexe`, `service`, `date_embauche`, `salaire`) VALUES ('Simon', 'Dupont', 'm', 'hacker pro', '2023-12-04', 9000);


---------- LES REQUTES DE MODIFICATION ----------

-- UPDATE permet de modifier des données dans une tableS

-- Sa syntaxe est la suivante :
    UPDATE `nom_de_la_table` SET `champ1` = 'valeur1', `champ2` = 'valeur2', `champ3` = 'valeur3' WHERE `condition`;

UPDATE `employes` SET `salaire` = 2500 WHERE `id_employes` = 992;

-- Modifier le salaire de Guillaume à 2500€ et son service à 'Informatique' :
UPDATE `employes` SET `salaire` = 250000 , `service` = 'informatique' WHERE `id_employes` = 627;


-- REPLACE INTO : Elle permet de remplacer un enregistrement par un autre. Si l'enregistrement n'existe pas, il est créé.

-- Sa syntaxe est la suivante :
    REPLACE INTO `nom_de_la_table` (`champ1`, `champ2`, `champ3`) VALUES ('valeur1', 'valeur2', 'valeur3');

REPLACE INTO `employes`(`id_employes`, `prenom`, `nom`, `sexe`, `service`, `date_embauche`, `salaire`) VALUES (992, 'Romy', 'KLK', 'm', 'DEV', '2012-07-02', 2500);

---------- LES REQUTES DE SUPPRESSION ----------

-- DELETE permet de supprimer des données dans une table

-- Sa syntaxe est la suivante :
    DELETE FROM `nom_de_la_table` WHERE `condition`;

DELETE FROM `employes` WHERE `id_employes` = 997;

-- Supprimer tous les employés qui travaillent dans le service commercial  et qui ont un salaire inférieur à 2000€ :
DELETE FROM employes WHERE service = 'commercial' AND salaire < 2000;


-- 1 -- Afficher la profession de l'employé 547.
SELECT service FROM employes WHERE id_employe = 547;
-- +------------+
-- | service    |
-- +------------+
-- | commercial |
-- +------------+
-- 1 row in set (0.00 sec)


-- 2 -- Afficher la date d'embauche d'Amandine.
SELECT date_embauche FROM employes WHERE prenom = "Amandine";
-- +---------------+
-- | date_embauche |
-- +---------------+
-- | 2014-01-23    |
-- +---------------+
-- 1 row in set (0.00 sec)

-- 3 -- Afficher le nom de famille de Guillaume
SELECT nom FROM employes WHERE prenom = "Guillaume";
-- +--------+
-- | nom    |
-- +--------+
-- | Miller |
-- +--------+
-- 1 row in set (0.00 sec)

-- 4 -- Afficher le nombre de personne ayant un n° id_employes commençant par le chiffre 5.
SELECT COUNT(*) FROM employes WHERE id_employe LIKE "5%";
-- +----------+
-- | COUNT(*) |
-- +----------+
-- |        3 |
-- +----------+
-- 1 row in set (0.00 sec)

-- 5 -- Afficher le nombre de commerciaux.
SELECT COUNT(*) AS nombre FROM employes WHERE service="commercial";
-- +--------+
-- | nombre |
-- +--------+
-- |      6 |
-- +--------+
-- 1 row in set (0.00 sec)

-- 6 -- Afficher le salaire moyen des informaticiens (+arrondie).
SELECT round(AVG(salaire)) FROM employes WHERE service="informatique";
-- +---------------------+
-- | round(AVG(salaire)) |
-- +---------------------+
-- |                2617 |
-- +---------------------+
-- 1 row in set (0.00 sec)

-- 7 -- Afficher les 5 premiers employés après avoir classer leur nom de famille par ordre alphabétique.
SELECT * FROM employes ORDER BY nom ASC LIMIT 5;
-- +------------+---------+----------+------+--------------+---------------+---------+
-- | id_employe | prenom  | nom      | sexe | service      | date_embauche | salaire |
-- +------------+---------+----------+------+--------------+---------------+---------+
-- |        592 | Laura   | Blanchet | f    | direction    | 2012-05-09    |    4500 |
-- |        854 | Daniel  | Chevel   | m    | informatique | 2015-09-28    |    3100 |
-- |        547 | Melanie | Collier  | f    | commercial   | 2012-01-08    |    3100 |
-- |        699 | Julien  | Cottet   | m    | secretariat  | 2013-01-05    |    1390 |
-- |        739 | Thierry | Desprez  | m    | secretariat  | 2013-07-17    |    1500 |
-- +------------+---------+----------+------+--------------+---------------+---------+
-- 5 rows in set (0.00 sec)

-- 8 -- Afficher le coût des commerciaux sur 1 année.
SELECT SUM(salaire*12) FROM employes WHERE service="commercial";
-- +-----------------+
-- | SUM(salaire*12) |
-- +-----------------+
-- |          184200 |
-- +-----------------+
-- 1 row in set (0.00 sec)

-- 9 -- Afficher le salaire moyen par service. (service + salaire moyen)
SELECT service, round(AVG( salaire )) FROM employes GROUP BY service ORDER BY service ASC;  
-- +---------------+-----------------------+
-- | service       | round(AVG( salaire )) |
-- +---------------+-----------------------+
-- | assistant     |                  1775 |
-- | commercial    |                  2558 |
-- | communication |                  2100 |
-- | comptabilite  |                  2900 |
-- | direction     |                  4750 |
-- | informatique  |                  2617 |
-- | juridique     |                  3550 |
-- | production    |                  2225 |
-- | secretariat   |                  1497 |
-- +---------------+-----------------------+
-- 9 rows in set (0.00 sec)

-- 10 -- Afficher le nombre de recrutement sur l'année 2010 (+alias).
SELECT COUNT(*) FROM employes WHERE date_embauche BETWEEN "2010-01-01" AND "2010-12-31";
-- +----------+
-- | COUNT(*) |
-- +----------+
-- |        2 |
-- +----------+
-- 1 row in set (0.00 sec)

-- 11 -- Afficher le salaire moyen appliqué lors des recrutements sur la période allant de 2012 a 2014
SELECT AVG(salaire) FROM employes WHERE date_embauche BETWEEN "2012-01-01" AND "2014-12-31";
-- +--------------+
-- | AVG(salaire) |
-- +--------------+
-- |    2437.7778 |
-- +--------------+
-- 1 row in set (0.00 sec)

-- 12 -- Afficher le nombre de service différent
SELECT COUNT(DISTINCT(service)) FROM employes;
-- +--------------------------+
-- | COUNT(DISTINCT(service)) |
-- +--------------------------+
-- |                        9 |
-- +--------------------------+
-- 1 row in set (0.00 sec)

-- 13 -- Afficher tous les employés (sauf ceux du service production et secrétariat)
SELECT nom, prenom FROM employes WHERE service!="production" AND service!="secretariat";
-- +----------+-------------+
-- | nom      | prenom      |
-- +----------+-------------+
-- | Laborde  | Jean-pierre |
-- | Gallet   | Clement     |
-- | Winter   | Thomas      |
-- | Grand    | Fabrice     |
-- | Collier  | Melanie     |
-- | Blanchet | Laura       |
-- | Miller   | Guillaume   |
-- | Perrin   | Celine      |
-- | Vignal   | Mathieu     |
-- | Thoyer   | Amandine    |
-- | Durand   | Damien      |
-- | Chevel   | Daniel      |
-- | Martin   | Nathalie    |
-- | Sennard  | Emilie      |
-- | Lafaye   | Stephanie   |
-- +----------+-------------+
-- 15 rows in set (0.00 sec)

-- 14 -- Afficher conjoitement le nombre d'homme et de femme dans l'entreprise
SELECT sexe, COUNT(*) FROM employes GROUP BY sexe;
-- +------+----------+
-- | sexe | COUNT(*) |
-- +------+----------+
-- | m    |       11 |
-- | f    |        9 |
-- +------+----------+
-- 2 rows in set (0.00 sec)

-- 15 -- Afficher les commerciaux ayant été recrutés avant 2015 de sexe masculin et gagnant un salaire supérieur a 2500 €
SELECT nom, prenom FROM employes WHERE date_embauche < "2015-01-01" AND sexe = "m" AND salaire > 2500 AND service="commercial";
-- +--------+--------+
-- | nom    | prenom |
-- +--------+--------+
-- | Winter | Thomas |
-- +--------+--------+
-- 1 row in set (0.00 sec)

-- 16 -- Qui a été embauché en dernier
SELECT * FROM employes WHERE date_embauche = (SELECT MAX(date_embauche) FROM employes);
-- +------------+-----------+--------+------+-----------+---------------+---------+
-- | id_employe | prenom    | nom    | sexe | service   | date_embauche | salaire |
-- +------------+-----------+--------+------+-----------+---------------+---------+
-- |        990 | Stephanie | Lafaye | f    | assistant | 2017-03-01    |    1775 |
-- +------------+-----------+--------+------+-----------+---------------+---------+
-- 1 row in set (0.00 sec)

-- 17 -- Afficher les informations sur l'employé du service commercial gagnant le salaire le plus élevé
SELECT * FROM employes WHERE service="commercial" AND salaire = (SELECT MAX(salaire) FROM employes WHERE service="commercial");
-- +------------+--------+--------+------+------------+---------------+---------+
-- | id_employe | prenom | nom    | sexe | service    | date_embauche | salaire |
-- +------------+--------+--------+------+------------+---------------+---------+
-- |        415 | Thomas | Winter | m    | commercial | 2011-05-03    |    3650 |
-- +------------+--------+--------+------+------------+---------------+---------+
-- 1 row in set (0.00 sec)

-- 18 -- Afficher le prénom du comptable gagnant le meilleur salaire
SELECT prenom FROM employes WHERE salaire = (SELECT MAX(salaire) FROM employes WHERE service="comptabilite");
-- +---------+
-- | prenom  |
-- +---------+
-- | Fabrice |
-- +---------+
-- 1 row in set (0.00 sec)

-- 19 -- Afficher le prénom de l'informaticien ayant été recruté en premier
SELECT * FROM employes WHERE service="informatique" AND date_embauche = (SELECT MIN(date_embauche) FROM employes WHERE service="informatique");
-- +------------+---------+--------+------+--------------+---------------+---------+
-- | id_employe | prenom  | nom    | sexe | service      | date_embauche | salaire |
-- +------------+---------+--------+------+--------------+---------------+---------+
-- |        701 | Mathieu | Vignal | m    | informatique | 2013-04-03    |    2500 |
-- +------------+---------+--------+------+--------------+---------------+---------+
-- 1 row in set (0.00 sec)

-- 20 -- Augmenter chaque employé de 100 €
UPDATE `employes` SET `salaire` = salaire + 100;
-- +------------+-------------+----------+------+---------------+---------------+---------+
-- | id_employe | prenom      | nom      | sexe | service       | date_embauche | salaire |
-- +------------+-------------+----------+------+---------------+---------------+---------+
-- |        350 | Jean-pierre | Laborde  | m    | direction     | 2010-12-09    |    5100 |
-- |        388 | Clement     | Gallet   | m    | commercial    | 2010-12-15    |    2400 |
-- |        415 | Thomas      | Winter   | m    | commercial    | 2011-05-03    |    3650 |
-- |        417 | Chloe       | Dubar    | f    | production    | 2011-09-05    |    2000 |
-- |        491 | Elodie      | Fellier  | f    | secretariat   | 2011-11-22    |    1700 |
-- |        509 | Fabrice     | Grand    | m    | comptabilite  | 2011-12-30    |    3000 |
-- |        547 | Melanie     | Collier  | f    | commercial    | 2012-01-08    |    3200 |
-- |        592 | Laura       | Blanchet | f    | direction     | 2012-05-09    |    4600 |
-- |        627 | Guillaume   | Miller   | m    | commercial    | 2012-07-02    |    2000 |
-- |        655 | Celine      | Perrin   | f    | commercial    | 2012-09-10    |    2800 |
-- |        699 | Julien      | Cottet   | m    | secretariat   | 2013-01-05    |    1490 |
-- |        701 | Mathieu     | Vignal   | m    | informatique  | 2013-04-03    |    2600 |
-- |        739 | Thierry     | Desprez  | m    | secretariat   | 2013-07-17    |    1600 |
-- |        780 | Amandine    | Thoyer   | f    | communication | 2014-01-23    |    2200 |
-- |        802 | Damien      | Durand   | m    | informatique  | 2014-07-05    |    2350 |
-- |        854 | Daniel      | Chevel   | m    | informatique  | 2015-09-28    |    3200 |
-- |        876 | Nathalie    | Martin   | f    | juridique     | 2016-01-12    |    3650 |
-- |        900 | Benoit      | Lagarde  | m    | production    | 2016-06-03    |    2650 |
-- |        933 | Emilie      | Sennard  | f    | commercial    | 2017-01-11    |    1900 |
-- |        990 | Stephanie   | Lafaye   | f    | assistant     | 2017-03-01    |    1875 |
-- +------------+-------------+----------+------+---------------+---------------+---------+
-- 20 rows in set (0.00 sec)

-- 21 -- Supprimer les employés du service secrétariat
DELETE FROM `employes` WHERE `service` = 'secretariat';
-- +------------+-------------+----------+------+---------------+---------------+---------+
-- | id_employe | prenom      | nom      | sexe | service       | date_embauche | salaire |
-- +------------+-------------+----------+------+---------------+---------------+---------+
-- |        350 | Jean-pierre | Laborde  | m    | direction     | 2010-12-09    |    5100 |
-- |        388 | Clement     | Gallet   | m    | commercial    | 2010-12-15    |    2400 |
-- |        415 | Thomas      | Winter   | m    | commercial    | 2011-05-03    |    3650 |
-- |        417 | Chloe       | Dubar    | f    | production    | 2011-09-05    |    2000 |
-- |        509 | Fabrice     | Grand    | m    | comptabilite  | 2011-12-30    |    3000 |
-- |        547 | Melanie     | Collier  | f    | commercial    | 2012-01-08    |    3200 |
-- |        592 | Laura       | Blanchet | f    | direction     | 2012-05-09    |    4600 |
-- |        627 | Guillaume   | Miller   | m    | commercial    | 2012-07-02    |    2000 |
-- |        655 | Celine      | Perrin   | f    | commercial    | 2012-09-10    |    2800 |
-- |        701 | Mathieu     | Vignal   | m    | informatique  | 2013-04-03    |    2600 |
-- |        780 | Amandine    | Thoyer   | f    | communication | 2014-01-23    |    2200 |
-- |        802 | Damien      | Durand   | m    | informatique  | 2014-07-05    |    2350 |
-- |        854 | Daniel      | Chevel   | m    | informatique  | 2015-09-28    |    3200 |
-- |        876 | Nathalie    | Martin   | f    | juridique     | 2016-01-12    |    3650 |
-- |        900 | Benoit      | Lagarde  | m    | production    | 2016-06-03    |    2650 |
-- |        933 | Emilie      | Sennard  | f    | commercial    | 2017-01-11    |    1900 |
-- |        990 | Stephanie   | Lafaye   | f    | assistant     | 2017-03-01    |    1875 |
-- +------------+-------------+----------+------+---------------+---------------+---------+
-- 17 rows in set (0.00 sec)