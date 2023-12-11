-- 1. Liste des employés avec les détails de leur département
SELECT e.prenom, e.nom, e.sexe, e.date_embauche, e.salaire, d.nom
FROM employe e
INNER JOIN departement d
ON d.id_departement = e.id_departement ;
-- +-----------+-----------+------+---------------------+---------+---------------------+
-- | prenom    | nom       | sexe | date_embauche       | salaire | nom                 |
-- +-----------+-----------+------+---------------------+---------+---------------------+
-- | Jean      | Dupont    | M    | 2023-01-01 00:00:00 |   50000 | Ressources Humaines |
-- | Marie     | Gagnon    | F    | 2023-06-20 00:00:00 |   53000 | Ressources Humaines |
-- | David     | Lachance  | M    | 2023-11-05 00:00:00 |   51000 | Ressources Humaines |
-- | Isabel    | Levesque  | F    | 2024-04-10 00:00:00 |   59000 | Ressources Humaines |
-- | Sophie    | Martin    | F    | 2023-02-15 00:00:00 |   55000 | Informatique        |
-- | Patrick   | Roy       | M    | 2023-07-12 00:00:00 |   57000 | Informatique        |
-- | Nathalie  | Pelletier | F    | 2023-12-18 00:00:00 |   56000 | Informatique        |
-- | Marc      | Champagne | M    | 2024-05-22 00:00:00 |   54000 | Informatique        |
-- | Pierre    | Tremblay  | M    | 2023-03-10 00:00:00 |   60000 | Finance             |
-- | Julie     | Lefevre   | F    | 2023-08-25 00:00:00 |   62000 | Finance             |
-- | Robert    | Girard    | M    | 2024-01-02 00:00:00 |   61000 | Finance             |
-- | Martine   | Couture   | F    | 2024-06-05 00:00:00 |   57000 | Finance             |
-- | Isabelle  | Lavoie    | F    | 2023-04-22 00:00:00 |   52000 | Marketing           |
-- | Michel    | Bouchard  | M    | 2023-09-30 00:00:00 |   54000 | Marketing           |
-- | Carole    | Beaulieu  | F    | 2024-02-14 00:00:00 |   53000 | Marketing           |
-- | Louis     | Bergeron  | M    | 2024-07-18 00:00:00 |   62000 | Marketing           |
-- | François  | Leblanc   | M    | 2023-05-05 00:00:00 |   58000 | Production          |
-- | Catherine | Morin     | F    | 2023-10-15 00:00:00 |   59000 | Production          |
-- | Paul      | Fortin    | M    | 2024-03-28 00:00:00 |   58000 | Production          |
-- | Sylvie    | Bilodeau  | F    | 2024-08-30 00:00:00 |   51000 | Production          |
-- | Julien    | Lacroix   | M    | 1999-06-11 00:00:00 |   82000 | Direction           |
-- +-----------+-----------+------+---------------------+---------+---------------------+

-- 2. Liste des projets avec les détails du chef de projet
SELECT p.nom, p.date_debut, p.date_fin, p.cout, e.nom
FROM projet p
INNER JOIN employe e
ON p.id_chef_projet = e.id_employe;
-- +----------------+------------+------------+--------+-----------+
-- | Projet Alpha   | 2023-01-10 | 2023-06-30 | 100000 | Roy       |
-- | Projet Beta    | 2023-02-20 | 2023-08-15 | 120000 | Lavoie    |
-- | Projet Gamma   | 2023-03-05 | 2023-09-30 |  80000 | Tremblay  |
-- | Projet Delta   | 2023-04-15 | 2023-11-20 | 150000 | Couture   |
-- | Projet Epsilon | 2023-05-01 | 2023-12-31 |  90000 | Leblanc   |
-- | Projet Zeta    | 2023-06-15 | 2024-03-15 | 110000 | Champagne |
-- | Projet Eta     | 2023-07-01 | 2024-04-30 |  95000 | Roy       |
-- | Projet Theta   | 2023-08-10 | 2024-06-10 | 130000 | Lefevre   |
-- | Projet Iota    | 2023-09-25 | 2024-08-25 | 120000 | Bouchard  |
-- | Projet Kappa   | 2023-10-10 | 2024-10-10 |  85000 | Levesque  |
-- | Projet Lambda  | 2023-11-22 | 2024-12-22 | 160000 | Lachance  |
-- | Projet Mu      | 2023-12-05 | 2025-01-05 | 140000 | Martin    |
-- +----------------+------------+------------+--------+-----------+

-- 3. Liste des employés avec les détails de leur projet actuel (s'il y en a)
SELECT e.prenom, e.nom, e.sexe, e.date_embauche, e.salaire, p.nom
FROM employe e
LEFT JOIN projet p
ON p.id_chef_projet = e.id_employe;
-- +-----------+-----------+------+---------------------+---------+----------------+
-- | prenom    | nom       | sexe | date_embauche       | salaire | nom            |
-- +-----------+-----------+------+---------------------+---------+----------------+
-- | Jean      | Dupont    | M    | 2023-01-01 00:00:00 |   50000 | NULL           |
-- | Sophie    | Martin    | F    | 2023-02-15 00:00:00 |   55000 | Projet Mu      |
-- | Pierre    | Tremblay  | M    | 2023-03-10 00:00:00 |   60000 | Projet Gamma   |
-- | Isabelle  | Lavoie    | F    | 2023-04-22 00:00:00 |   52000 | Projet Beta    |
-- | François  | Leblanc   | M    | 2023-05-05 00:00:00 |   58000 | Projet Epsilon |
-- | Marie     | Gagnon    | F    | 2023-06-20 00:00:00 |   53000 | NULL           |
-- | Patrick   | Roy       | M    | 2023-07-12 00:00:00 |   57000 | Projet Alpha   |
-- | Patrick   | Roy       | M    | 2023-07-12 00:00:00 |   57000 | Projet Eta     |
-- | Julie     | Lefevre   | F    | 2023-08-25 00:00:00 |   62000 | Projet Theta   |
-- | Michel    | Bouchard  | M    | 2023-09-30 00:00:00 |   54000 | Projet Iota    |
-- | Catherine | Morin     | F    | 2023-10-15 00:00:00 |   59000 | NULL           |
-- | David     | Lachance  | M    | 2023-11-05 00:00:00 |   51000 | Projet Lambda  |
-- | Nathalie  | Pelletier | F    | 2023-12-18 00:00:00 |   56000 | NULL           |
-- | Robert    | Girard    | M    | 2024-01-02 00:00:00 |   61000 | NULL           |
-- | Carole    | Beaulieu  | F    | 2024-02-14 00:00:00 |   53000 | NULL           |
-- | Paul      | Fortin    | M    | 2024-03-28 00:00:00 |   58000 | NULL           |
-- | Isabel    | Levesque  | F    | 2024-04-10 00:00:00 |   59000 | Projet Kappa   |
-- | Marc      | Champagne | M    | 2024-05-22 00:00:00 |   54000 | Projet Zeta    |
-- | Martine   | Couture   | F    | 2024-06-05 00:00:00 |   57000 | Projet Delta   |
-- | Louis     | Bergeron  | M    | 2024-07-18 00:00:00 |   62000 | NULL           |
-- | Sylvie    | Bilodeau  | F    | 2024-08-30 00:00:00 |   51000 | NULL           |
-- | Julien    | Lacroix   | M    | 1999-06-11 00:00:00 |   82000 | NULL           |
-- +-----------+-----------+------+---------------------+---------+----------------+

-- 4. Nombre d'employés par département
SELECT d.nom, COUNT(*)
FROM departement d
INNER JOIN employe e
ON e.id_departement = d.id_departement
GROUP BY d.nom;
-- +---------------------+----------+
-- | nom                 | COUNT(*) |
-- +---------------------+----------+
-- | Ressources Humaines |        4 |
-- | Informatique        |        4 |
-- | Finance             |        4 |
-- | Marketing           |        4 |
-- | Production          |        4 |
-- | Direction           |        1 |
-- +---------------------+----------+

-- 5. Liste des employés ayant travaillé sur un projet en 2023
SELECT DISTINCT e.prenom, e.nom, e.sexe, e.date_embauche, e.salaire
FROM employe e
INNER JOIN projet p
ON p.id_chef_projet = e.id_employe
WHERE p.date_debut LIKE '2023%' OR p.date_fin LIKE '2023%';
-- +----------+-----------+------+---------------------+---------+
-- | prenom   | nom       | sexe | date_embauche       | salaire |
-- +----------+-----------+------+---------------------+---------+
-- | Patrick  | Roy       | M    | 2023-07-12 00:00:00 |   57000 |
-- | Isabelle | Lavoie    | F    | 2023-04-22 00:00:00 |   52000 |
-- | Pierre   | Tremblay  | M    | 2023-03-10 00:00:00 |   60000 |
-- | Martine  | Couture   | F    | 2024-06-05 00:00:00 |   57000 |
-- | François | Leblanc   | M    | 2023-05-05 00:00:00 |   58000 |
-- | Marc     | Champagne | M    | 2024-05-22 00:00:00 |   54000 |
-- | Julie    | Lefevre   | F    | 2023-08-25 00:00:00 |   62000 |
-- | Michel   | Bouchard  | M    | 2023-09-30 00:00:00 |   54000 |
-- | Isabel   | Levesque  | F    | 2024-04-10 00:00:00 |   59000 |
-- | David    | Lachance  | M    | 2023-11-05 00:00:00 |   51000 |
-- | Sophie   | Martin    | F    | 2023-02-15 00:00:00 |   55000 |
-- +----------+-----------+------+---------------------+---------+

-- 6. Salaire moyen par département arrondi à 2 chiffres après la virgule
SELECT d.nom, ROUND(AVG(e.salaire),2)
FROM departement d
INNER JOIN employe e
ON e.id_departement = d.id_departement
GROUP BY d.nom;
-- +---------------------+-------------------------+
-- | nom                 | ROUND(AVG(e.salaire),2) |
-- +---------------------+-------------------------+
-- | Ressources Humaines |                53250.00 |
-- | Informatique        |                55500.00 |
-- | Finance             |                60000.00 |
-- | Marketing           |                55250.00 |
-- | Production          |                56500.00 |
-- | Direction           |                82000.00 |
-- +---------------------+-------------------------+

-- 7. Liste des projets avec les détails du chef de projet et le nombre total de jours de
-- travail sur le projet
SELECT p.nom, p.date_debut, p.date_fin, p.cout, e.prenom, e.nom, e.sexe, e.date_embauche, e.salaire, DATEDIFF(p.date_fin, p.date_debut)
FROM projet p
INNER JOIN employe e
ON p.id_chef_projet = e.id_employe;
-- +----------------+------------+------------+--------+----------+-----------+------+---------------------+---------+------------------------------------+
-- | nom            | date_debut | date_fin   | cout   | prenom   | nom       | sexe | date_embauche       | salaire | DATEDIFF(p.date_fin, p.date_debut) |
-- +----------------+------------+------------+--------+----------+-----------+------+---------------------+---------+------------------------------------+
-- | Projet Alpha   | 2023-01-10 | 2023-06-30 | 100000 | Patrick  | Roy       | M    | 2023-07-12 00:00:00 |   57000 |                                171 |
-- | Projet Beta    | 2023-02-20 | 2023-08-15 | 120000 | Isabelle | Lavoie    | F    | 2023-04-22 00:00:00 |   52000 |                                176 |
-- | Projet Gamma   | 2023-03-05 | 2023-09-30 |  80000 | Pierre   | Tremblay  | M    | 2023-03-10 00:00:00 |   60000 |                                209 |
-- | Projet Delta   | 2023-04-15 | 2023-11-20 | 150000 | Martine  | Couture   | F    | 2024-06-05 00:00:00 |   57000 |                                219 |
-- | Projet Epsilon | 2023-05-01 | 2023-12-31 |  90000 | François | Leblanc   | M    | 2023-05-05 00:00:00 |   58000 |                                244 |
-- | Projet Zeta    | 2023-06-15 | 2024-03-15 | 110000 | Marc     | Champagne | M    | 2024-05-22 00:00:00 |   54000 |                                274 |
-- | Projet Eta     | 2023-07-01 | 2024-04-30 |  95000 | Patrick  | Roy       | M    | 2023-07-12 00:00:00 |   57000 |                                304 |
-- | Projet Theta   | 2023-08-10 | 2024-06-10 | 130000 | Julie    | Lefevre   | F    | 2023-08-25 00:00:00 |   62000 |                                305 |
-- | Projet Iota    | 2023-09-25 | 2024-08-25 | 120000 | Michel   | Bouchard  | M    | 2023-09-30 00:00:00 |   54000 |                                335 |
-- | Projet Kappa   | 2023-10-10 | 2024-10-10 |  85000 | Isabel   | Levesque  | F    | 2024-04-10 00:00:00 |   59000 |                                366 |
-- | Projet Lambda  | 2023-11-22 | 2024-12-22 | 160000 | David    | Lachance  | M    | 2023-11-05 00:00:00 |   51000 |                                396 |
-- | Projet Mu      | 2023-12-05 | 2025-01-05 | 140000 | Sophie   | Martin    | F    | 2023-02-15 00:00:00 |   55000 |                                397 |
-- +----------------+------------+------------+--------+----------+-----------+------+---------------------+---------+------------------------------------+

-- 8. Liste des employés masculins avec les détails de leur projet actuel (s'il y en a)
SELECT e.prenom, e.nom, e.sexe, e.date_embauche, e.salaire, p.nom
FROM employe e
LEFT JOIN projet p
ON p.id_chef_projet = e.id_employe
WHERE e.sexe = "M";
-- +----------+-----------+------+---------------------+---------+----------------+
-- | prenom   | nom       | sexe | date_embauche       | salaire | nom            |
-- +----------+-----------+------+---------------------+---------+----------------+
-- | Jean     | Dupont    | M    | 2023-01-01 00:00:00 |   50000 | NULL           |
-- | Pierre   | Tremblay  | M    | 2023-03-10 00:00:00 |   60000 | Projet Gamma   |
-- | François | Leblanc   | M    | 2023-05-05 00:00:00 |   58000 | Projet Epsilon |
-- | Patrick  | Roy       | M    | 2023-07-12 00:00:00 |   57000 | Projet Alpha   |
-- | Patrick  | Roy       | M    | 2023-07-12 00:00:00 |   57000 | Projet Eta     |
-- | Michel   | Bouchard  | M    | 2023-09-30 00:00:00 |   54000 | Projet Iota    |
-- | David    | Lachance  | M    | 2023-11-05 00:00:00 |   51000 | Projet Lambda  |
-- | Robert   | Girard    | M    | 2024-01-02 00:00:00 |   61000 | NULL           |
-- | Paul     | Fortin    | M    | 2024-03-28 00:00:00 |   58000 | NULL           |
-- | Marc     | Champagne | M    | 2024-05-22 00:00:00 |   54000 | Projet Zeta    |
-- | Louis    | Bergeron  | M    | 2024-07-18 00:00:00 |   62000 | NULL           |
-- | Julien   | Lacroix   | M    | 1999-06-11 00:00:00 |   82000 | NULL           |
-- +----------+-----------+------+---------------------+---------+----------------+