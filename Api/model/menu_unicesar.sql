-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 05-06-2023 a las 09:53:23
-- Versión del servidor: 10.5.19-MariaDB-cll-lve
-- Versión de PHP: 8.1.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `compucel_api`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `menu_electric`
--

CREATE TABLE `menu_unicesar` (
  `id` int(21) NOT NULL,
  `key` varchar(255) NOT NULL,
  `label` varchar(255) NOT NULL,
  `isTitle` tinyint(1) NOT NULL DEFAULT 0,
  `icon` varchar(255) NOT NULL,
  `status` varchar(25) NOT NULL DEFAULT 'Active'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `menu_electric`
--

INSERT INTO `menu_electric` (`id`, `key`, `label`, `isTitle`, `icon`, `status`) VALUES
(1, 'navigation', 'Navigatión', 1, '', 'Active'),
(2, 'AdminUsuarios', 'Admin de Usuarios', 0, 'dripicons-user', 'Active');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `menu_electric`
--
ALTER TABLE `menu_electric`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `menu_electric`
--
ALTER TABLE `menu_electric`
  MODIFY `id` int(21) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
