
CREATE TABLE `unicesar_permisos_rol` (
  `id` int(11) NOT NULL,
  `opcion` varchar(45) NOT NULL,
  `maj` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

INSERT INTO `unicesar_permisos_rol` (`id`, `opcion`, `maj`) VALUES
(1, 'c', '2023-04-22 18:01:42'),
(2, 'a', '2023-04-22 18:01:42'),
(3, 'u', '2023-04-22 18:02:00'),
(4, 'd', '2023-04-22 18:02:00');
