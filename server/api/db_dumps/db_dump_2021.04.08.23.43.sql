-- --------------------------------------------------------
-- Хост:                         127.0.0.1
-- Версия сервера:               5.7.32 - MySQL Community Server (GPL)
-- Операционная система:         Linux
-- HeidiSQL Версия:              11.1.0.6116
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Дамп структуры базы данных starit_server
CREATE DATABASE IF NOT EXISTS `starit_server` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `starit_server`;

-- Дамп структуры для таблица starit_server.business
CREATE TABLE IF NOT EXISTS `business` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '0',
  `logo` varchar(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Дамп данных таблицы starit_server.business: ~3 rows (приблизительно)
/*!40000 ALTER TABLE `business` DISABLE KEYS */;
REPLACE INTO `business` (`id`, `name`, `logo`) VALUES
	(1, 'Silpo', 'silpo_logo.png'),
	(2, 'ATB', 'atb_logo.png'),
	(3, 'Continental Hotel', 'continental_hotel.png');
/*!40000 ALTER TABLE `business` ENABLE KEYS */;

-- Дамп структуры для таблица starit_server.business-admin
CREATE TABLE IF NOT EXISTS `business-admin` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL DEFAULT '0',
  `business_id` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `business-admin_business_id_relation` (`business_id`),
  KEY `business-admin_user_id_relation` (`user_id`),
  CONSTRAINT `business-admin_business_id_relation` FOREIGN KEY (`business_id`) REFERENCES `business` (`id`),
  CONSTRAINT `business-admin_user_id_relation` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Дамп данных таблицы starit_server.business-admin: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `business-admin` DISABLE KEYS */;
REPLACE INTO `business-admin` (`id`, `user_id`, `business_id`) VALUES
	(1, 1, 3);
/*!40000 ALTER TABLE `business-admin` ENABLE KEYS */;

-- Дамп структуры для таблица starit_server.fbo
CREATE TABLE IF NOT EXISTS `fbo` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `business_id` int(10) unsigned NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '0',
  `address` varchar(255) NOT NULL DEFAULT '0',
  `gps` json NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fbo_business_id_relation` (`business_id`),
  CONSTRAINT `fbo_business_id_relation` FOREIGN KEY (`business_id`) REFERENCES `business` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Дамп данных таблицы starit_server.fbo: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `fbo` DISABLE KEYS */;
REPLACE INTO `fbo` (`id`, `business_id`, `name`, `address`, `gps`) VALUES
	(2, 3, 'Room 101', 'New York', '{"latitude": "48.8583701", "longitude": "2.2944813"}');
/*!40000 ALTER TABLE `fbo` ENABLE KEYS */;

-- Дамп структуры для таблица starit_server.user
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '0',
  `email` varchar(255) NOT NULL DEFAULT '0',
  `password` varchar(255) NOT NULL DEFAULT '0',
  `last_visited` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_admin` tinyint(3) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Дамп данных таблицы starit_server.user: ~1 rows (приблизительно)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
REPLACE INTO `user` (`id`, `name`, `email`, `password`, `last_visited`, `is_admin`) VALUES
	(1, 'Winston Churchkhella', 'winston@continental.com', 'php_test', '2021-04-08 20:29:55', 1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
