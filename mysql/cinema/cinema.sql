-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 06, 2023 at 02:41 PM
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
-- Database: `cinema`
--

-- --------------------------------------------------------

--
-- Table structure for table `acteur`
--

DROP TABLE IF EXISTS `acteur`;
CREATE TABLE IF NOT EXISTS `acteur` (
  `id_acteur` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `prenom` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `date_naissance` date NOT NULL,
  `date_insertion` datetime NOT NULL,
  PRIMARY KEY (`id_acteur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `film`
--

DROP TABLE IF EXISTS `film`;
CREATE TABLE IF NOT EXISTS `film` (
  `id_film` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `duree` int NOT NULL,
  `date_sortie` date NOT NULL,
  `realisateur` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `pays` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `genre` enum('Action, Aventure, Comédie, Drame, Fantastique, Guerre, Historique, Musical, Policier, Romance, Science-Fiction, Thriller, Western') COLLATE utf8mb4_general_ci NOT NULL,
  `note` int NOT NULL,
  `resume` text COLLATE utf8mb4_general_ci NOT NULL,
  `date_insertion` datetime NOT NULL,
  PRIMARY KEY (`id_film`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `film_acteur`
--

DROP TABLE IF EXISTS `film_acteur`;
CREATE TABLE IF NOT EXISTS `film_acteur` (
  `id_film_acteur` int NOT NULL AUTO_INCREMENT,
  `id_film` int DEFAULT NULL,
  `id_acteur` int DEFAULT NULL,
  `date_insertion` datetime NOT NULL,
  `date_modification` datetime NOT NULL,
  PRIMARY KEY (`id_film_acteur`),
  KEY `acteur` (`id_acteur`),
  KEY `film` (`id_film`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `film_realisateur`
--

DROP TABLE IF EXISTS `film_realisateur`;
CREATE TABLE IF NOT EXISTS `film_realisateur` (
  `id_film_realisateur` int NOT NULL AUTO_INCREMENT,
  `id_film` int DEFAULT NULL,
  `id_realisateur` int DEFAULT NULL,
  `date_insertion` datetime NOT NULL,
  `date_modification` datetime NOT NULL,
  PRIMARY KEY (`id_film_realisateur`),
  KEY `realisateur` (`id_realisateur`),
  KEY `film2` (`id_film`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `realisateur`
--

DROP TABLE IF EXISTS `realisateur`;
CREATE TABLE IF NOT EXISTS `realisateur` (
  `id_realisateur` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `prenom` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `date_naissance` date NOT NULL,
  `date_insertion` datetime NOT NULL,
  `date_modification` datetime NOT NULL,
  PRIMARY KEY (`id_realisateur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `film_acteur`
--
ALTER TABLE `film_acteur`
  ADD CONSTRAINT `acteur` FOREIGN KEY (`id_acteur`) REFERENCES `acteur` (`id_acteur`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `film` FOREIGN KEY (`id_film`) REFERENCES `film` (`id_film`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `film_realisateur`
--
ALTER TABLE `film_realisateur`
  ADD CONSTRAINT `film2` FOREIGN KEY (`id_film`) REFERENCES `film` (`id_film`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `realisateur` FOREIGN KEY (`id_realisateur`) REFERENCES `realisateur` (`id_realisateur`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
