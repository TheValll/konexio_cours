-- SQLBook: Code
----------------------FONCTIONS PREDEFINIES----------------------*/

-- Une fonction prédefinie est une fonction qui est déjà définie dans le langage

SELECT DATABASE(); -- Permet de savoir sur quelle base de données on est actuellement

SELECT VERSION(); -- Permet de savoir quelle version de MySQL on utilise
INSERT INTO `employes`(`id_employes`, `prenom`, `nom`, `sexe`, `service`, `date_embauche`, `salaire`) VALUES ('DUPOUX', 'Jean', 'Paul', 'm', 'informatique', '2018-02-20', '2000');
SELECT LAST_INSERT_ID(); -- Permet de récupérer le dernier ID inséré dans la base de données

-- DATE_ADD() permet d'ajouter un intervalle de temps à une date

SELECT DATE_ADD(CURDATE(), INTERVAL 31 DAY); -- Permet d'ajouter 31 jours à la date du jour

SELECT DATE_ADD(CURDATE(), INTERVAL 4 MONTH); -- Permet d'ajouter 4 mois à la date du jour

SELECT ADDDATE(CURDATE(),20); -- Permet d'ajouter 20 jours à la date du jour

-- DATEDIFF() permet de calculer la différence entre deux dates

SELECT DATEDIFF('2023-02-01', '2018-01-14'); -- Permet de calculer la différence entre deux dates

SELECT CURDATE(); -- Permet de récupérer la date du jour

SELECT CURDATE() + 0; -- Permet de récupérer la date du jour au format numérique

SELECT CURTIME(); -- Permet de récupérer l'heure du jour

SELECT NOW(); -- Permet de récupérer la date et l'heure du jour

-- DATE_FORMAT() permet de formater une date

SELECT DATE_FORMAT(NOW(), '%d/%M/%Y - %H:%i:%s'); -- Permet de récupérer la date du jour au format français

-- Y permet de récupérer l'année sur 4 chiffres
-- y permet de récupérer l'année sur 2 chiffres
-- m permet de récupérer le mois sur 2 chiffres
-- M permet de récupérer le mois en toutes lettres
-- d permet de récupérer le jour sur 2 chiffres
-- H permet de récupérer l'heure sur 2 chiffres (format 24h)
-- h permet de récupérer l'heure sur 2 chiffres (format 12h)
-- i permet de récupérer les minutes sur 2 chiffres
-- s permet de récupérer les secondes sur 2 chiffres

SELECT DAYNAME('2018-01-14'); -- Permet de récupérer le jour de la semaine
SELECT DAYNAME(NOW()); -- Permet de récupérer le jour de la semaine

SELECT DAYOFYEAR(NOW()); -- Permet de récupérer le jour de l'année

--CONCAT() permet de concaténer des chaines de caractères

SELECT CONCAT('Bonjour', 'tout le monde'); -- Permet de concaténer des chaines de caractères

-- CONCAT_WS() permet de concaténer des chaines de caractères en spécifiant un séparateur
SELECT CONCAT_WS(' - ', 'Bonjour', 'tout le monde'); -- Permet de concaténer des chaines de caractères en spécifiant un séparateur

-- LOCATE() permet de trouver la position d'une chaine de caractères dans une autre chaine de caractères

SELECT LOCATE('o', 'Bonjour'); -- Permet de trouver la position d'une chaine de caractères dans une autre chaine de caractères


-- REPLACE() permet de remplacer une chaine de caractères par une autre dans une chaine de caractères

SELECT REPLACE('www.google.fr', 'google', 'konexio');

-- ###### TABLES VIRTUELLES ou VUES ######

-- Une table virtuelle ou vue est une table qui n'existe pas physiquement dans la base de données mais qui est créée à la volée par une requête SQL. Elle permet de simplifier l'écriture de requêtes complexes. Elle peut être utilisée comme une table classique.Elle est pratique pour isoler des données.
-- Toutes modifications sur la table d'origine se répercutent sur la table virtuelle.

SELECT * FROM employes;

CREATE VIEW liste_hommes AS
SELECT prenom,nom,sexe
FROM employes
WHERE sexe = 'm';

SELECT * FROM liste_hommes;

CREATE VIEW emprunts_2016 AS
SELECT a.prenom , l.titre, e.date_sortie
FROM abonne a,livre l, emprunt e 
WHERE l.id_livre =e.id_livre
AND e.id_abonne = a.id_abonne
AND e.date_sortie LIKE '2016%';

DROP VIEW liste_hommes; -- Permet de supprimer une table virtuelle

-- ###### TABLES TEMPORAIRES ######

-- Une table temporaires est une table qui n'existe pas physiquement dans la base de données mais qui est créée à la volée par une requête SQL. Elle permet de stocker des données de manière temporaire. La table temporaires est supprimée automatiquement à la fin de la session. Elle possède des données qui sont propres à la session.Tout changement sur la table d'origine ne se répercutent pas sur la table temporaire.

CREATE TEMPORARY TABLE emprunt2016 AS
SELECT a.prenom , l.titre, e.date_sortie
FROM abonne a,livre l, emprunt e 
WHERE l.id_livre =e.id_livre
AND e.id_abonne = a.id_abonne
AND e.date_sortie LIKE '2016%';

SELECT * FROM emprunt2016;

DROP TEMPORARY TABLE emprunt2016; -- Permet de supprimer une table temporaire

-- ##### DIFFERENCES ENTRE TABLES VIRTUELLES ET TABLES TEMPORAIRES #####

-- Dans la table temporaire on stocke les données alors que dans la table virtuelle on stocke la requête qui permet de récupérer les données.



--- ####### LES TRANSACTONS #######

-- Une transaction est une unité logique qui permet de passer la BDD d'un état cohérent à un état cohérent.(Si une requête échoue, toutes les requêtes sont annulées Ou si toutes les requêtes réussissent, toutes les requêtes sont validées)

-- Une transaction commence par la commande START TRANSACTION et se termine par la commande COMMIT ou ROLLBACK

-- COMMIT valide les requêtes
-- ROLLBACK annule les requêtes

START TRANSACTION; -- Permet de commencer une transaction
SELECT * FROM employes; -- Permet de récupérer les données de la table employes
UPDATE employes SET salaire = salaire * 2; -- Permet de doubler le salaire de tous les employés
SELECT * FROM employes; -- Permet de récupérer les données de la table employes
ROLLBACK; -- Permet d'annuler les requêtes


START TRANSACTION; -- Permet de commencer une transaction
SELECT * FROM employes;
UPDATE employes SET salaire = salaire * 2 WHERE sexe = 'f';
SELECT * FROM employes;
COMMIT; -- Permet de valider les requêtes


-- ###### LES TRANSACTIONS AVEC SAVEPOINT ######

-- SAVEPOINT permet de créer un point de sauvegarde dans une transaction. Il permet de revenir à un point précis dans une transaction.

START TRANSACTION;
    SELECT * FROM employes;
    SAVEPOINT point1;

    UPDATE employes SET salaire = salaire * 2 WHERE id_employes = 415;
    SELECT * FROM employes;
    SAVEPOINT point2;

    UPDATE employes SET salaire = salaire * 3 WHERE id_employes = 415;
    SELECT * FROM employes;
    SAVEPOINT point3;


    UPDATE employes SET salaire = salaire * 4 WHERE id_employes = 415;
    SELECT * FROM employes;
    SAVEPOINT point4;

    UPDATE employes SET salaire = salaire * 5 WHERE id_employes = 415;
    SELECT * FROM employes;
    SAVEPOINT point5;

    ROLLBACK TO point3;
    SELECT * FROM employes;

COMMIT;


