-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 31-08-2022 a las 06:04:42
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tc3000`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `img_id`, `cuerpo`) VALUES
(1, 'Más marcas', 'Se asoma una nueva marca a la categoría', '', '                        Con el éxito que viene teniendo la categoría año tras año, nuevas marcas quieren incorporarse\r\n                    a la misma.\r\nLa nueva marca que quiere desembarcar en TC 3000 se trata ni más ni menos que de \"Chevrolet\". La comisión directiva lo estuvo analizando y ya se está terminando de cerrar\r\n                    todo para que el año que viene el Turismo Competición 3000 tenga 9 marcas y porque no muchas\r\nmás a largo plazo.\r\nSin dudas la categoría no tiene techo y va por más.'),
(2, '¿Nueva Motorización?', 'Equipos piden cambios a futuro', 'yjliqkzvceg3stfqmgsd', '                                                                                                                        En este 2022 la categoría cumple ya 10 años usando motores v6 fabricados por Oreste Berta.\r\nTanto dueños de equipos y la Comisión deportiva se han juntado para charlar sobre temas a mejorar y el que más peso tuvo fue el de la motorización de los autos para los año venideros.\r\nLos equipos plantearon que el motor v6 ya se está quedando obsoleto y los costos para cada carrera son muy altos, es por esto que se trataron distintas alternativas y la que pica en punta para el reemplazo del motor actual es el Radical V8 fabricado en Brasil.\r\nDe ser así y concretar este cambio de motorización la categoría tendrá autos con más potencia y los equipos podrán trabajar mejor para los suyos.\r\n'),
(3, 'Alianza Estratégica entre TC.3000 Y Radio 15', 'El Turismo Competición 3000 generó una alianza estratégica con Radio 15 para expandir la difusión de todas sus carreras.', '', 'Durante cada carrera, jornada semanal y en su programación, se llevarán a cabo distintas columnas informativas, con el objetivo de conectar de manera directa y rápida a los apasionados del TC.3000 con cada uno de los oyentes.'),
(4, 'Se asoma una nueva estrella', 'El joven que demuestra su potencial en su temporada debut', '', 'Brian Burini estuvo muy cerca de llevarse todas las miradas este fin de semana: terminó en la segunda posición de la carrera Sprint y, de ese modo, se subió a un podio en la categoría por tercera vez en su pimer temporada (1° puesto en Monza y 3° en Australia).'),
(6, 'Cumpleaños ', 'Burini llega a los 30', 'mlvopa7pg6pzqz6ttdsy', '                                                                        la categoria saluda a su piloto y le desea exitos en su vida');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'luciano', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'camila', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
