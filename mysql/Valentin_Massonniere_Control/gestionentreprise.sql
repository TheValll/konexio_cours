-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 07, 2023 at 03:09 PM
-- Server version: 8.2.0
-- PHP Version: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gestionentreprise`
--

-- --------------------------------------------------------

--
-- Table structure for table `departement`
--

DROP TABLE IF EXISTS `departement`;
CREATE TABLE IF NOT EXISTS `departement` (
  `id_departement` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  PRIMARY KEY (`id_departement`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf32;

--
-- Dumping data for table `departement`
--

INSERT INTO `departement` (`id_departement`, `nom`) VALUES
(1, 'Ressources Humaines'),
(2, 'Informatique'),
(3, 'Finance'),
(4, 'Marketing'),
(5, 'Production'),
(6, 'Direction');

-- --------------------------------------------------------

--
-- Table structure for table `employe`
--

DROP TABLE IF EXISTS `employe`;
CREATE TABLE IF NOT EXISTS `employe` (
  `id_employe` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(150) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `sexe` enum('M','F') NOT NULL,
  `date_embauche` datetime NOT NULL,
  `salaire` int NOT NULL,
  `id_departement` int NOT NULL,
  PRIMARY KEY (`id_employe`),
  KEY `id_departement` (`id_departement`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf32;

--
-- Dumping data for table `employe`
--

INSERT INTO `employe` (`id_employe`, `nom`, `prenom`, `sexe`, `date_embauche`, `salaire`, `id_departement`) VALUES
(1, 'Dupont', 'Jean', 'M', '2023-01-01 00:00:00', 50000, 1),
(2, 'Martin', 'Sophie', 'F', '2023-02-15 00:00:00', 55000, 2),
(3, 'Tremblay', 'Pierre', 'M', '2023-03-10 00:00:00', 60000, 3),
(4, 'Lavoie', 'Isabelle', 'F', '2023-04-22 00:00:00', 52000, 4),
(5, 'Leblanc', 'François', 'M', '2023-05-05 00:00:00', 58000, 5),
(6, 'Gagnon', 'Marie', 'F', '2023-06-20 00:00:00', 53000, 1),
(7, 'Roy', 'Patrick', 'M', '2023-07-12 00:00:00', 57000, 2),
(8, 'Lefevre', 'Julie', 'F', '2023-08-25 00:00:00', 62000, 3),
(9, 'Bouchard', 'Michel', 'M', '2023-09-30 00:00:00', 54000, 4),
(10, 'Morin', 'Catherine', 'F', '2023-10-15 00:00:00', 59000, 5),
(11, 'Lachance', 'David', 'M', '2023-11-05 00:00:00', 51000, 1),
(12, 'Pelletier', 'Nathalie', 'F', '2023-12-18 00:00:00', 56000, 2),
(13, 'Girard', 'Robert', 'M', '2024-01-02 00:00:00', 61000, 3),
(14, 'Beaulieu', 'Carole', 'F', '2024-02-14 00:00:00', 53000, 4),
(15, 'Fortin', 'Paul', 'M', '2024-03-28 00:00:00', 58000, 5),
(16, 'Levesque', 'Isabel', 'F', '2024-04-10 00:00:00', 59000, 1),
(17, 'Champagne', 'Marc', 'M', '2024-05-22 00:00:00', 54000, 2),
(18, 'Couture', 'Martine', 'F', '2024-06-05 00:00:00', 57000, 3),
(19, 'Bergeron', 'Louis', 'M', '2024-07-18 00:00:00', 62000, 4),
(20, 'Bilodeau', 'Sylvie', 'F', '2024-08-30 00:00:00', 51000, 5),
(21, 'Lacroix', 'Julien', 'M', '1999-06-11 00:00:00', 82000, 6);

-- --------------------------------------------------------

--
-- Table structure for table `projet`
--

DROP TABLE IF EXISTS `projet`;
CREATE TABLE IF NOT EXISTS `projet` (
  `id_projet` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `cout` int NOT NULL,
  `id_chef_projet` int DEFAULT NULL,
  PRIMARY KEY (`id_projet`),
  KEY `projet_ibfk_1` (`id_chef_projet`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf32;

--
-- Dumping data for table `projet`
--

INSERT INTO `projet` (`id_projet`, `nom`, `date_debut`, `date_fin`, `cout`, `id_chef_projet`) VALUES
(49, 'Projet Alpha', '2023-01-10', '2023-06-30', 100000, 7),
(50, 'Projet Beta', '2023-02-20', '2023-08-15', 120000, 4),
(51, 'Projet Gamma', '2023-03-05', '2023-09-30', 80000, 3),
(52, 'Projet Delta', '2023-04-15', '2023-11-20', 150000, 18),
(53, 'Projet Epsilon', '2023-05-01', '2023-12-31', 90000, 5),
(54, 'Projet Zeta', '2023-06-15', '2024-03-15', 110000, 17),
(55, 'Projet Eta', '2023-07-01', '2024-04-30', 95000, 7),
(56, 'Projet Theta', '2023-08-10', '2024-06-10', 130000, 8),
(57, 'Projet Iota', '2023-09-25', '2024-08-25', 120000, 9),
(58, 'Projet Kappa', '2023-10-10', '2024-10-10', 85000, 16),
(59, 'Projet Lambda', '2023-11-22', '2024-12-22', 160000, 11),
(60, 'Projet Mu', '2023-12-05', '2025-01-05', 140000, 2);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `employe`
--
ALTER TABLE `employe`
  ADD CONSTRAINT `employe_ibfk_1` FOREIGN KEY (`id_departement`) REFERENCES `departement` (`id_departement`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `projet`
--
ALTER TABLE `projet`
  ADD CONSTRAINT `projet_ibfk_1` FOREIGN KEY (`id_chef_projet`) REFERENCES `employe` (`id_employe`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
