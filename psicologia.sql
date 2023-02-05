-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 05-02-2023 a las 03:36:37
-- Versión del servidor: 5.7.40
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `psicologia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesionales`
--

DROP TABLE IF EXISTS `profesionales`;
CREATE TABLE IF NOT EXISTS `profesionales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) NOT NULL,
  `apellido` varchar(250) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `universidad` varchar(250) NOT NULL,
  `matricula` varchar(8) NOT NULL,
  `imagen` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `profesionales`
--

INSERT INTO `profesionales` (`id`, `nombre`, `apellido`, `titulo`, `universidad`, `matricula`, `imagen`) VALUES
(26, 'Claudia Fabiana', 'Flores', 'Licenciada en Psicología', 'Universidad de Buenos Aires', 'MN34247', 'fjqlkfi1emlzko38n9su'),
(27, 'Dario', 'Bernal', 'Doctor en Psicología', 'Universidad de Buenos Aires', 'MN32421', 'mzwuusdacaiiyllyb2kt'),
(25, 'Ana', 'Maria', 'Licenciada en Psicología', 'Universidad de Buenos Aires', 'MN23214', 'icuyeaogpkngw0e3vao1'),
(28, 'Felipe', 'Tejero', 'Profesor de Psicología', 'Universidad de Buenos Aires', 'MN23493', 'n5rrfdhehcoalywgpbak');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_pacientes` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id_pacientes`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_pacientes`, `usuario`, `password`) VALUES
(1, 'nano', '827ccb0eea8a706c4c34a16891f84e7b'),
(2, 'mariano', '827ccb0eea8a706c4c34a16891f84e7b'),
(3, 'Castro', '202cb962ac59075b964b07152d234b70');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
