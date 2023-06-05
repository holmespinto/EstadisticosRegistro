
CREATE TABLE `menu_usuarios_unicesar` (
  `id` int(21) NOT NULL,
  `idMenu` int(21) NOT NULL,
  `idChildren` int(21) NOT NULL,
  `idEmpresa` int(21) NOT NULL,
  `idTipo` int(11) NOT NULL,
  `maj` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

INSERT INTO `menu_usuarios_unicesar` (`id`, `idMenu`, `idChildren`, `idEmpresa`, `idTipo`, `maj`) VALUES
(1, 2, 1, 1, 1, '2023-04-22 19:20:53'),
(2, 2, 2, 1, 1, '2023-04-22 19:20:59');

/*
INSERT INTO `menu_usuarios_unicesar` (`id`, `idMenu`, `idChildren`, `idEmpresa`, `idTipo`, `maj`) VALUES
(1, 2, 1, 1, 1, '2023-04-22 19:20:53'),
(2, 2, 2, 1, 1, '2023-04-22 19:20:59'),
(1, 3, 3, 1, 1, '2023-04-22 19:20:53'),
(1, 3, 4, 1, 1, '2023-04-22 19:20:53'),
(1, 3, 5, 1, 1, '2023-04-22 19:20:53'),
(1, 3, 6, 1, 1, '2023-04-22 19:20:53'),
(1, 3, 7, 1, 1, '2023-04-22 19:20:53'),
(1, 4, 8, 1, 1, '2023-04-22 19:20:53'),
(1, 5, 9, 1, 1, '2023-04-22 19:20:53'),
(1, 6, 10, 1, 1, '2023-04-22 19:20:53');
*/

