CREATE TABLE `unicesar_autorizaciones` (
  `id` int(11) NOT NULL,
  `c` char(2) NOT NULL,
  `a` char(2) NOT NULL,
  `u` char(2) NOT NULL,
  `d` char(2) NOT NULL,
  `opcion` varchar(45) NOT NULL,
  `rol` varchar(25) NOT NULL,
  `maj` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

INSERT INTO `unicesar_autorizaciones` (`id`, `c`, `a`, `u`, `d`, `opcion`, `rol`, `maj`) VALUES
(1, 'S', 'S', 'S', 'S', '1', '1', '2023-04-20 21:03:41'),
(2, 'S', 'S', 'S', 'S', '2', '1', '2023-04-20 21:03:41');

/*
INSERT INTO `unicesar_autorizaciones` (`id`, `c`, `a`, `u`, `d`, `opcion`, `rol`, `maj`) VALUES
(1, 'S', 'S', 'S', 'S', '1', '1', '2023-04-20 21:03:41'),
(2, 'S', 'S', 'S', 'S', '2', '1', '2023-04-20 21:03:41'),
(3, 'S', 'S', 'S', 'S', '3', '1', '2023-04-20 21:03:41'),
(4, 'S', 'S', 'S', 'S', '4', '1', '2023-04-20 21:03:41'),
(5, 'S', 'S', 'S', 'S', '5', '1', '2023-04-20 21:03:41'),
(6, 'S', 'S', 'S', 'S', '6', '1', '2023-04-20 21:03:41'),
(7, 'S', 'S', 'S', 'S', '7', '1', '2023-04-20 21:03:41'),
(8, 'S', 'S', 'S', 'S', '8', '1', '2023-04-20 21:03:41'),
(9, 'S', 'S', 'S', 'S', '9', '1', '2023-04-20 21:03:41'),
(10, 'S', 'S', 'S', 'S', '10', '1', '2023-04-20 21:03:41');
*/
