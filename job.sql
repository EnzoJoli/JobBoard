-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 16, 2021 at 01:29 PM
-- Server version: 10.3.22-MariaDB
-- PHP Version: 7.3.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `job`
--

-- --------------------------------------------------------

--
-- Table structure for table `advertisements`
--

CREATE TABLE `advertisements` (
  `Id` int(11) NOT NULL,
  `Descriptif` text NOT NULL,
  `Contrat` varchar(100) NOT NULL,
  `Lieu` varchar(100) NOT NULL,
  `Date` datetime(6) NOT NULL,
  `Remuneration` float NOT NULL,
  `Entreprise` varchar(1000) NOT NULL,
  `Titre` varchar(100) NOT NULL,
  `Image` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `advertisements`
--

INSERT INTO `advertisements` (`Id`, `Descriptif`, `Contrat`, `Lieu`, `Date`, `Remuneration`, `Entreprise`, `Titre`, `Image`) VALUES
(1, 'Notre Structure\r\n\r\nEngel & Völkers est le leader européen de l’immobilier de prestige, spécialisé dans la vente et la location d’immobilier résidentiel et commercial de prestige, de yachts et d’avions privés.\r\n\r\nNos 820 agences et nos 82 bureaux commerciaux dans 33 pays offrent aux particuliers et institutionnels une gamme de services professionnels de qualité.\r\n\r\nPrésent en France depuis bientôt 5 ans, Engel & Völkers compte aujourd’hui plus de 250 Conseillères et Conseillers à Paris qui accompagnent la mise en vente de plusieurs centaines de biens par an, dont de nombreux biens d’exception, ainsi que les projets d’achats de plusieurs milliers d’acquéreurs.', 'Temps plein, Apprentissage, Contrat pro', 'Paris (75)', '2021-10-11 00:00:00.000000', 419, 'Engel & Völkers', 'ALTERNANCE - Data Analyst H/F', 'https://photo.superimmo.com/photos/shops/02/76/27689/sp_large_pad_engel___volkers.png'),
(2, 'Bobochic est une entreprise française, leader dans le domaine du meuble. Créé en 2015, l’univers insolite et décalé de la marque renverse les codes habituels du mobilier. Bobochic est avant-gardiste tout en étant authentique. D’abord connu et reconnu pour ses iconiques canapés au style scandinave, le champ d’expertise de la marque s’étend pour conquérir presque toutes les pièces de la maison, de la cuisine au jardin. Un univers dynamique, inspiré par toutes les formes d’art et des dernières tendances pour combler les attentes d’une communauté grandissante.', 'Temps plein, Apprentissage', 'Paris 15e (75)', '2021-06-11 00:00:00.000000', 500, 'Bobochic', 'Assistant Webmarketing H/F', 'https://p.ventesprivees-fr.com/bobochic.png'),
(3, 'Amazon recherche un(e) Préparateur de Commande H/F motivé(e) pour son entrepôt de Senlis (60), près de Creil.\r\n\r\nClique sur \"Postuler\" pour déposer ta candidature : c\'est simple et rapide !\r\n\r\nPas de CV ni d\'expérience exigés : ta motivation suffit et l\'envie de rejoindre l\'entreprise. Réponse très rapide assurée !\r\n\r\nAide-nous à livrer des sourires !\r\n\r\nLes avantages pour toi :\r\n\r\nChez Amazon, le recrutement est rapide : nous nous engageons à te rappeler dans les meilleurs délais\r\n\r\nLa rémunération commence à 10,88€ brut de l\'heure\r\n\r\nPas d\'expérience en logistique ? Quel que soit ton parcours, nous te formons dès ton arrivée chez Amazon : seule la motivation compte\r\n\r\nNous avons tous types d\'horaires d\'équipe à proposer selon ta disponibilité : matin, après-midi, nuit, week-end, à temps plein ou temps partiel', 'CDD', 'Saint-Denis (93)', '2022-02-23 00:00:00.000000', 875, 'Amazon', 'Préparateur de Commande H/F ', 'https://i2-prod.dublinlive.ie/incoming/article15384961.ece/ALTERNATES/s615/0_Amazon-logo.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `Nom` varchar(100) NOT NULL,
  `Prenom` varchar(100) NOT NULL,
  `Age` int(11) DEFAULT NULL,
  `sexe` varchar(100) DEFAULT NULL,
  `Diplome` varchar(100) DEFAULT NULL,
  `competence` varchar(100) DEFAULT NULL,
  `Experience` varchar(100) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `ID` int(11) NOT NULL,
  `IsRecruiting` bit(2) NOT NULL DEFAULT b'0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `utilisateur`
--

INSERT INTO `utilisateur` (`Nom`, `Prenom`, `Age`, `sexe`, `Diplome`, `competence`, `Experience`, `email`, `Password`, `ID`, `IsRecruiting`) VALUES
('beanos', 'beannos', 20, 'beanos', 'beanos', 'beanos', 'beanos', 'beanos@gmail.com', 'beanos', 1, b'00'),
('Enzo', 'Jolivet', NULL, NULL, NULL, NULL, NULL, 'ejo@qweqwewerwer.cop', 'beanose', 4, b'00'),
('enow', 'bewanos', NULL, NULL, NULL, NULL, NULL, 'wqewe@koli.com', 'undefined', 5, b'00'),
('enow', 'bewanos', NULL, NULL, NULL, NULL, NULL, 'wqewe@koli.com', 'undefined', 6, b'00'),
('enow', 'bewanos', NULL, NULL, NULL, NULL, NULL, 'wqewe@koli.com', 'qweqweqweqwe', 7, b'00'),
('test', 'test', NULL, NULL, NULL, NULL, NULL, 'test@gmail.com', 'test', 8, b'01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `advertisements`
--
ALTER TABLE `advertisements`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `advertisements`
--
ALTER TABLE `advertisements`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
