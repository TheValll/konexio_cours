-- Qui conduit la voiture 503 ?

SELECT c.prenom
    FROM conducteur c
INNER JOIN association_vehicule_conducteur a
ON c.id_conducteur = a.id_conducteur
INNER JOIN vehicule v
ON a.id_vehicule = v.id_vehicule
WHERE v.id_vehicule = '503';

-- +----------+
-- | prenom   |
-- +----------+
-- | Philippe |
-- +----------+
-- 1 row in set (0.00 sec)


-- Qui conduit quoi ?

SELECT v.modele, c.prenom
    FROM vehicule v 
INNER JOIN association_vehicule_conducteur a
ON v.id_vehicule = a.id_vehicule
INNER JOIN conducteur c
ON a.id_conducteur = c.id_conducteur;

-- +--------+----------+
-- | modele | prenom   |
-- +--------+----------+
-- | 807    | Julien   |
-- | C8     | Morgane  |
-- | Cls    | Philippe |
-- | Touran | Amelie   |
-- | 807    | Philippe |
-- +--------+----------+
-- 5 rows in set (0.00 sec)

-- Ajoutez vous dans la liste des conducteurs.

INSERT INTO `conducteur`(`prenom`, `nom`) VALUES ('Valentin','Massonniere');

-- +---------------+----------+-------------+
-- | id_conducteur | prenom   | nom         |
-- +---------------+----------+-------------+
-- |             1 | Julien   | Avigny      |
-- |             2 | Morgane  | Alamia      |
-- |             3 | Philippe | Alamia      |
-- |             4 | Amelie   | Blondelle   |
-- |             5 | Alex     | Richy       |
-- |             6 | Valentin | Massonniere |
-- +---------------+----------+-------------+
-- 6 rows in set (0.00 sec)


-- Afficher tous les conducteurs (meme ceux qui n'ont pas de correspondance) ainsi que les vehicules

SELECT c.prenom, v.modele
    FROM conducteur c
LEFT JOIN association_vehicule_conducteur a
ON c.id_conducteur = a.id_conducteur
LEFT JOIN vehicule v
ON a.id_vehicule = v.id_vehicule;

-- +----------+--------+
-- | prenom   | modele |
-- +----------+--------+
-- | Julien   | 807    |
-- | Morgane  | C8     |
-- | Philippe | Cls    |
-- | Philippe | 807    |
-- | Amelie   | Touran |
-- | Alex     | NULL   |
-- | Valentin | NULL   |
-- +----------+--------+
-- 7 rows in set (0.00 sec)

-- Ajoutez un nouvel enregistrement dans la table des véhicules.    

INSERT INTO `vehicule`(`marque`, `modele`, `couleur`, `immatriculation`) VALUES ('RENAULT','Scenic','bleu', 'TG-727-HI');

-- +-------------+------------+---------+---------+-----------------+
-- | id_vehicule | marque     | modele  | couleur | immatriculation |
-- +-------------+------------+---------+---------+-----------------+
-- |         501 | Peugeot    | 807     | noir    | AB-355-CA       |
-- |         502 | Citroen    | C8      | bleu    | CE-122-AE       |
-- |         503 | Mercedes   | Cls     | vert    | FG-953-HI       |
-- |         504 | Volkswagen | Touran  | noir    | SO-322-NV       |
-- |         505 | Skoda      | Octavia | gris    | PB-631-TK       |
-- |         506 | Volkswagen | Passat  | gris    | XN-973-MM       |
-- |         508 | RENAULT    | Scenic  | bleu    | TG-727-HI       |
-- +-------------+------------+---------+---------+-----------------+
-- 7 rows in set (0.00 sec)


-- Afficher les conducteurs et tous les vehicules (meme ceux qui n'ont pas de correspondance)

SELECT c.prenom, v.modele
    FROM vehicule v
LEFT JOIN association_vehicule_conducteur a
ON v.id_vehicule = a.id_vehicule
LEFT JOIN conducteur c
ON a.id_conducteur = c.id_conducteur;

-- +----------+---------+
-- | prenom   | modele  |
-- +----------+---------+
-- | Julien   | 807     |
-- | Philippe | 807     |
-- | Morgane  | C8      |
-- | Philippe | Cls     |
-- | Amelie   | Touran  |
-- | NULL     | Octavia |
-- | NULL     | Passat  |
-- | NULL     | Scenic  |
-- +----------+---------+

-- 8 rows in set (0.00 sec)

-- Afficher tous les conducteurs et tous les vehicules, peut importe les correspondances

SELECT c.prenom, v.modele
FROM conducteur c
LEFT JOIN association_vehicule_conducteur a ON c.id_conducteur = a.id_conducteur
LEFT JOIN vehicule v ON a.id_vehicule = v.id_vehicule
UNION
SELECT c.prenom, v.modele
FROM vehicule v
LEFT JOIN association_vehicule_conducteur a ON v.id_vehicule = a.id_vehicule
LEFT JOIN conducteur c ON a.id_conducteur = c.id_conducteur;

-- +----------+---------+
-- | prenom   | modele  |
-- +----------+---------+
-- | Julien   | 807     |
-- | Morgane  | C8      |
-- | Philippe | Cls     |
-- | Philippe | 807     |
-- | Amelie   | Touran  |
-- | Alex     | NULL    |
-- | Valentin | NULL    |
-- | NULL     | Octavia |
-- | NULL     | Passat  |
-- | NULL     | Scenic  |
-- +----------+---------+
-- 10 rows in set (0.00 sec)


