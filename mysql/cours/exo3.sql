-- Question 1 : Affichez le nom des agences

SELECT nom FROM agence;
-- +---------------------+
-- | nom                 |
-- +---------------------+
-- | logic-immo          |
-- | century21           |
-- | laforet             |
-- | fnaim               |
-- | orpi                |
-- | foncia              |
-- | guy-hoquet          |
-- | seloger             |
-- | bouygues immobilier |
-- +---------------------+


-- Question 2 : Affichez le numéro de l'agence "Orpi".

SELECT idAgence FROM agence WHERE nom="Orpi";

-- +----------+
-- | idAgence |
-- +----------+
-- |   608870 |
-- +----------+

-- Question 3 : Affichez le premier enregistrement de la table logement

SELECT * FROM logement LIMIT 1;
-- +------------+-------------+-------+--------+------------+-----------+
-- | idLogement | genre       | ville | prix   | superficie | categorie |
-- +------------+-------------+-------+--------+------------+-----------+
-- |       5067 | appartement | paris | 685000 |         61 | vente     |
-- +------------+-------------+-------+--------+------------+-----------+

-- Question 4 : Affichez le nombre de logements (Alias : Nombre_de_logements)
-- +---------------------+
-- | nombre de logements |
-- +---------------------+
-- |                  28 |
-- +---------------------+

SELECT COUNT() AS Nombre_de_logements
FROM logement;


-- -- Question 5 : Affichez les logements à vendre à moins de 150 000 € dans l'ordre croissant des prix:
-- +------------+-------------+----------+--------+------------+-----------+
-- | idLogement | genre       | ville    | prix   | superficie | categorie |
-- +------------+-------------+----------+--------+------------+-----------+
-- |       5860 | appartement | bordeaux |  98000 |         18 | vente     |
-- |       5249 | appartement | lyon     | 110000 |         16 | vente     |
-- |       5089 | appartement | paris    | 115000 |         15 | vente     |
-- |       5378 | appartement | bordeaux | 121900 |         26 | vente     |
-- +------------+-------------+----------+--------+------------+-----------+

SELECT idLogement, genre, ville, prix, superficie, categorie
FROM logement
WHERE prix < 150000 AND categorie = 'vente'
ORDER BY prix ASC;


-- Question 6 : Affichez le nombre de logements à la location (alias : nombre)
-- +--------+
-- | nombre |
-- +--------+
-- |      8 |
-- +--------+

SELECT COUNT() AS nombre
FROM logement
WHERE categorie = 'location';

-- Question 7 : Affichez les villes différentes recherch�es par les personnes demandeuses d'un logement

SELECT DISTINCT ville FROM demande;

+----------+
| ville    |
+----------+
| paris    |
| bordeaux |
| lyon     |
+----------+

-- Question 8 : Affichez le nombre de biens à vendre par ville

SELECT ville, COUNT(*)
FROM demande
WHERE categorie = 'vente'
GROUP BY ville;

-- +----------+---------------+
-- | ville    | nombre_ventes |
-- +----------+---------------+
-- | paris    |            10 |
-- | lyon     |             3 |
-- | bordeaux |             7 |
-- +----------+---------------+


-- Question 9 : Quelles sont les id des logements destinés à la location ?

SELECT idLogement FROM logement WHERE categorie = 'location';

-- Question 10 : Quels sont les id des logements entre 20 et 30 mètres carrés?

SELECT idLogement FROM logement WHERE superficie BETWEEN 20 AND 30;
-- +------------+
-- | idLogement |
-- +------------+
-- |       5336 |
-- |       5378 |
-- |       5786 |
-- +------------+

-- Question 11 : Quel est le prix vendeur (hors commission) du logement le moins cher à vendre ? (Alias : prix minimum)

SELECT MIN(prix) AS prix_minimum
FROM logement
WHERE categorie = 'vente';

-- Question 12 : Dans quelles villes se trouve les maisons à vendre ?

SELECT DISTINCT ville
FROM logement
WHERE categorie = 'vente' AND genre = 'maison';

-- Question 13 : L'agence Orpi souhaite diminuer les frais qu'elle applique sur le logement ayant l'id  5246. Passer les frais de ce logement de 800 à 730€.

UPDATE logement_agence
SET frais = 730
WHERE idLogement = 5246 AND idAgence = (SELECT idAgence FROM agence WHERE nom = 'orpi');
SELECT * FROM logement_agence;

-- Question 14 : Quels sont les logements gérés par l'agence laforet 

SELECT l.idLogement
FROM logement l
LEFT JOIN logement_agence la ON l.idLogement = la.idLogement
LEFT JOIN agence a ON la.idAgence = a.idAgence AND a.nom = 'laforet'
WHERE a.idAgence IS NOT NULL;


-- Question 15 : Affichez le nombre de propriétaires dans la ville de Paris (Alias :nombre ) 
SELECT COUNT(DISTINCT idPersonne) AS nombre

FROM logement_personne
WHERE idLogement IN (SELECT idLogement FROM logement WHERE ville = 'paris');

-- Question 16 : Affichez les informations des trois premieres personnes souhaitant acheter un logement

SELECT *
FROM demande
WHERE categorie = 'vente'
ORDER BY idDemande
LIMIT 3;
Question 17 : Affichez le prénom du vendeur pour le logement ayant la référence  5770 

SELECT p.prenom
FROM personne p
INNER JOIN logement_personne lp ON p.idPersonne = lp.idPersonne
INNER JOIN logement l ON lp.idLogement = l.idLogement
WHERE l.idLogement = 5770;


-- Question 18 : Affichez les prénoms des personnes souhaitant accéder à un logement sur la ville de Lyon

SELECT DISTINCT p.prenom
FROM personne p
INNER JOIN demande d ON p.idPersonne = d.idPersonne
WHERE d.ville = 'lyon';

-- Question 19 : Affichez les prénoms des personnes souhaitant accéder à un logement en location sur la ville de Paris

SELECT DISTINCT p.prenom
FROM personne p
INNER JOIN demande d ON p.idPersonne = d.idPersonne
WHERE d.ville = 'paris' AND d.categorie = 'location';

-- Question 20 : Affichez les prénoms des personnes souhaitant acheter un logement de la plus grande à la plus petite superficie

SELECT p.prenom, d.superficie 
FROM personne p, demande d
WHERE p.idPersonne = d.idPersonne
ORDER BY d.superficie DESC;

-- Question 21 : Quel sont les prix finaux propos�s par les agences pour la maison à la vente ayant la référence  5091  ? (Alias : prix avec frais d'agence)


SELECT (l.prix + x.frais)
AS "prix avec frais d'agence"
FROM logement_agence x
INNER JOIN logement l ON l.idLogement = x.idLogement
INNER JOIN agence a ON a.idAgence = x.idAgence
WHERE x.idLogement = 5091;

-- Question 22 : Indiquez les frais ajoutés par l'agence immobilière pour le logement ayant la référence  5873 ?

SELECT l.idLogement, l.prix, la.frais, (l.prix + la.frais) AS "prix total"
FROM logement l 
INNER JOIN logement_agence la ON l.idlogement = la.idLogement
WHERE l.idLogement = 5873;

-- Question 28 : Affichez le prix et le prénom des vendeurs dont les logements sont proposés à 130000 € ou moins en prix final avec frais appliqués par les agences (alias : prix final, classement : ordre croissant des prix finaux) :

SELECT DISTINCT p.prenom, (l.prix + la.frais) AS prix_final
FROM logement_personne lp
INNER JOIN logement l ON lp.idLogement = l.idLogement
INNER JOIN logement_agence la ON l.idLogement = la.idLogement
INNER JOIN personne p ON lp.idPersonne = p.idPersonne
INNER JOIN demande d ON l.categorie = d.categorie
WHERE (l.prix + la.frais) <= 130000 AND d.categorie = 'vente'
ORDER BY prix_final ASC;

-- Question 29 : Affichez le nombre de logements à la vente dans la ville de recherche de hugo  (alias : nombre)

SELECT COUNT(*)
FROM demande d
INNER JOIN logement l ON l.categorie = d.categorie
INNER JOIN personne p ON d.idPersonne = p.idPersonne
WHERE p.prenom = 'hugo' 
AND l.categorie = 'vente' 
AND l.ville = d.ville;


-- Question 30 : Affichez le nombre de logements à la vente dans la ville de recherche de  hugo  et dans la superficie minimum qu'il attend ou dans une superficie supérieure (alias : nombre):

SELECT COUNT(*)
FROM demande d
INNER JOIN logement l ON l.categorie = d.categorie
INNER JOIN personne p ON d.idPersonne = p.idPersonne
WHERE p.prenom = 'hugo' 
AND l.categorie = 'vente' 
AND l.ville = d.ville 
AND l.superficie >= d.superficie;

-- Question 31 : Affichez le nombre d'opportunités d'achats dans la ville de recherche de  hugo  dans la superficie minimum qu'il attend ou dans une superficie supérieure et en prenant en compte tous ses autres critères de sélection (alias : nombre):

SELECT COUNT(*) AS nombre
FROM logement l
INNER JOIN demande d ON l.categorie = d.categorie
INNER JOIN personne p ON d.idPersonne = p.idPersonne
AND l.ville = d.ville
AND l.superficie >= d.superficie
AND l.prix <= d.budget
WHERE p.prenom = 'hugo'
AND l.categorie = 'vente';

-- Question 32 : Affichez les pr�noms des personnes souhaitant accéder à un logement en location sur la ville de Paris

SELECT DISTINCT p.prenom
FROM personne p
INNER JOIN demande d ON d.idPersonne = p.idPersonne
INNER JOIN logement l ON l.categorie = d.categorie
WHERE d.ville = 'paris' AND d.categorie = 'location';

-- Question 33 : En prenant en compte le  fichier client  avec leurs critères de sélection répertoriés sur la table  demande , quelle est l'agence immobilière susceptible de faire le plus de ventes ? (alias : nombre)

SELECT a.nom, COUNT(*)
FROM agence a
INNER JOIN logement_agence la
ON a.idAgence = la.idAgence
INNER JOIN logement l
ON la.idLogement = l.idLogement
INNER JOIN demande d
ON d.superficie = l.superficie
WHERE d.ville = l.ville 
AND l.prix <= d.budget 
AND l.categorie = d.categorie 
AND l.superficie >= d.superficie
GROUP BY a.nom
ORDER BY COUNT(*) DESC
LIMIT 1;