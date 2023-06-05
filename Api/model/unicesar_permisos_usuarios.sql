

CREATE TABLE `unicesar_permisos_usuarios` (
  `id` int(11) NOT NULL,
  `Tipo` varchar(25) NOT NULL,
  `maj` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;



INSERT INTO `unicesar_permisos_usuarios` (`id`, `Tipo`, `maj`) VALUES
(1, 'Administrador', '2023-04-20 16:11:55'),
(2, 'Consulta', '2023-04-20 16:11:55');
