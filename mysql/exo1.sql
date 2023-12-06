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
INSERT INTO abonne (prenom) VALUES 
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
INSERT INTO livre(id_livre,auteur,titre) VALUES 
(100, 'GUY DE MAUPASSANT', 'Une vie'),
(101, 'GUY DE MAUPASSANT', 'Bel-Ami'),
(102, 'HONORE DE BALZAC', 'Le père Goriot'),
(103, 'ALPHONSE DAUDET', 'Le petit chose'),
(104, 'ALEXANDRE DUMAS', 'La Reine Margot'),
(105, 'ALEXANDRE DUMAS', 'Les Trois Mousquetaires');


-- CREATE EMPRUNT TABLE :
CREATE TABLE emprunt(
    id_emprunt int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_abonne int DEFAULT NULL,
    id_livre int DEFAULT NULL,
    date_sortie date NOT NULL,
    date_rendu date DEFAULT NULL,
    FOREIGN KEY (id_abonne) REFERENCES abonne(id_abonne),
    FOREIGN KEY (id_livre) REFERENCES livre(id_livre)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- INSERT DATA IN EMPRUNT TABLE :
INSERT INTO emprunt (id_emprunt, id_livre, id_abonne, date_sortie, date_rendu) VALUES
(1, 100, 1, '2016-12-07', '2016-12-11'),
(2, 101, 2, '2016-12-07', '2016-12-18'),
(3, 100, 3, '2016-12-11', '2016-12-19'),
(4, 103, 4, '2016-12-12', '2016-12-22'),
(5, 104, 1, '2016-12-15', '2016-12-30'),
(6, 105, 2, '2017-01-02', '2017-01-15'),
(7, 105, 3, '2017-02-15', NULL),
(8, 100, 2, '2017-02-20', NULL);


-- -- LOOK ALL TABLES :
-- SHOW TABLES;


-- ##### COURS  #####

-- 1. Afficher tous les livres

-- SELECT * FROM livre;

-- 2. id des livres qui n'ont pas été rendus

-- SELECT id_livre FROM emprunt WHERE date_rendu IS NULL;

-- ## Requêtes imbriquées

-- 3. titre qui n'ont pas été rendus

-- SELECT titre FROM livre WHERE id_livre IN (SELECT id_livre FROM emprunt WHERE date_rendu IS NULL);

-- 4. Prénom des abonnés qui n'ont pas rendu de livre

-- SELECT prenom FROM abonne WHERE id_abonne IN (SELECT id_abonne FROM emprunt WHERE date_rendu IS NULL);

-- 5. Numéro des livres que Chloé a emprunté

-- SELECT id_livre FROM emprunt WHERE id_abonne IN (SELECT id_abonne FROM abonne WHERE prenom = 'Chloe');

-- 6 . Prénom des abonnés ayant emprunté un livre le 11/12/2016

-- SELECT prenom FROM abonne WHERE id_abonne IN (SELECT id_abonne FROM emprunt WHERE date_sortie = "2016-12-11");

-- 7. Nombre de livre emprrunté par Guillaume

-- SELECT COUNT(*) FROM emprunt WHERE id_abonne IN (SELECT id_abonne FROM abonne WHERE prenom = 'Guillaume');

-- 8. Liste des abonnés ayant emprunté un livre de ALPHONE DAUDET

-- SELECT prenom FROM abonne WHERE id_abonne IN (SELECT id_abonne FROM emprunt WHERE id_livre IN (SELECT id_livre FROM livre WHERE auteur = 'ALPHONSE DAUDET'));

-- 9. Titre des livres empruntés par Chloé

-- SELECT titre FROM livre WHERE id_livre IN (SELECT id_livre FROM emprunt WHERE id_abonne IN (SELECT id_abonne FROM abonne WHERE prenom = "Chloe"));

-- 10. Titre des livres que Chloé n'a pas emprunté

-- SELECT titre FROM livre WHERE id_livre NOT IN (SELECT id_livre FROM emprunt WHERE id_abonne IN (SELECT id_abonne FROM abonne WHERE prenom = "Chloe"));

-- 11. Qui a emprunté le plus de livres ?

-- SELECT prenom FROM abonne WHERE id_abonne = (SELECT id_abonne FROM emprunt GROUP BY id_abonne ORDER BY COUNT(*) DESC LIMIT 1);

-- 12. Titre des livre que Chloé n'a pas encore rendu ?

-- SELECT titre FROM livre WHERE id_livre = (SELECT id_livre FROM emprunt WHERE date_rendu IS NUll AND id_abonne IN (SELECT id_abonne FROm abonne WHERE prenom = "Chloe"));

-- 13. Quels sont les livres qui n'ont jamais été empruntés ?

-- SELECT titre FROM livre WHERE id_livre NOT IN (SELECT id_livre FROM emprunt);



-- ######### LES JOINTURES ##### ------

-- Une jointure permet de combiner les données de plusieurs tables en une seule requête pour former un résultat unique. 

-- Différence entre jointure et sous-requête : Une jointure est possible dans tous les cas , une sous-requête n'est possible quz dans le cas où le résultat de la sous-requête ne contient qu'une seule colonne.

-- 14. Afficher les dates de sortie et de rendu des livres empruntés par Guillaume

-- SELECT abonne.prenom , emprunt.date_sortie, emprunt.date_rendu 
-- FROM abonne, emprunt
-- WHERE abonne.id_abonne = emprunt.id_abonne 
-- AND abonne.prenom = 'Guillaume';

-- SELECT a.prenom , e.date_sortie, e.date_rendu 
-- FROM abonne a, emprunt e
-- WHERE a.id_abonne = e.id_abonne 
-- AND a.prenom = 'Guillaume';

-- INNER JOIN : jointure interne

-- SELECT a.prenom , e.date_sortie, e.date_rendu 
-- FROM abonne a
-- INNER JOIN emprunt e
-- ON a.id_abonne = e.id_abonne 
-- WHERE a.prenom = 'Guillaume';

-- 15. Date de sortie et de rendu des livres dont l'auteur est ALPHONSE DAUDET

-- SELECT l.auteur, e.date_sortie, e.date_rendu 
--     FROM livre l
--     INNER JOIN emprunt e
--     ON l.id_livre = e.id_livre 
--     WHERE l.auteur = 'ALPHONSE DAUDET';

-- 16. Qui a emprrunté le livre "Une vie"  en 2016 ?

-- SELECT a.prenom
--     FROM livre l
--     INNER JOIN emprunt e
--     ON l.id_livre = e.id_livre
--     INNER JOIN abonne a
--     ON e.id_abonne = a.id_abonne
--     WHERE l.titre = "Une vie"  AND e.date_sortie LIKE "2016%";

-- 17. Nombre de livre emprunté par chaque abonné

-- SELECT a.prenom, COUNT(*)
--     FROM abonne a
--     INNER JOIN emprunt e
--     ON a.id_abonne = e.id_abonne
--     GROUP BY a.id_abonne;

-- 18. Nombre de livre à rendre par chaque abonné

-- SELECT a.prenom,COUNT(e.id_livre)
--     FROM abonne a 
--     INNER JOIN emprunt e 
--     ON a.id_abonne = e.id_abonne
--     WHERE e.date_rendu IS NULL 
--     GROUP BY e.id_abonne;

-- DO $$
-- BEGIN
--     RAISE NOTICE 'log------------';
-- END $$;


-- 19. Qui a emprunté quoi et quand ?(Titre du livre, prénom de l'abonné, date de sortie)

-- SELECT l.titre, a.prenom, e.date_sortie
--     FROM emprunt e
--     INNER JOIN abonne a
--     ON e.id_abonne = a.id_abonne
--     INNER JOIN livre l
--     ON l.id_livre = e.id_livre;

-- 20. Prénom des abonnés avec les id des livres qu'ils ont emprunté

-- SELECT l.id_livre, a.prenom
--     FROM emprunt e
--     INNER JOIN abonne a
--     ON e.id_abonne = a.id_abonne
--     INNER JOIN livre l
--     ON l.id_livre = e.id_livre;

-- 21. Insérer un nouvel abonné

-- INSERT INTO `abonne`(`prenom`) VALUES ('Simon');



-- LEFT JOIN : jointure externe gauche
-- SELECT l.id_livre , a.prenom
-- FROM livre l
-- RIGHT JOIN emprunt e
-- ON l.id_livre = e.id_livre
-- RIGHT JOIN abonne a
-- ON e.id_abonne = a.id_abonne;

-- SELECT  a.prenom,e.id_livre
-- FROM abonne a
-- LEFT JOIN emprunt e
-- ON a.id_abonne = e.id_abonne;


-- ## UNION & UNION ALL
-- UNION : permet de combiner les résultats de plusieurs requêtes SELECT en un seul résultat

-- UNION ALL se comporte comme UNION mais ne supprime pas les doublons

-- SELECT prenom FROM abonne
-- UNION 
-- SELECT titre FROM livre;

-- SELECT auteur FROM livre
-- UNION
-- SELECT prenom FROM abonne;