
CREATE TABLE `menu_children_unicesar` (
  `id` int(21) NOT NULL,
  `key` varchar(255) NOT NULL,
  `parentKey` int(21) NOT NULL,
  `label` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `icon` varchar(255) NOT NULL,
  `status` varchar(25) NOT NULL DEFAULT 'Active'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

INSERT INTO `menu_children_unicesar` (`id`, `key`, `parentKey`, `label`, `url`, `icon`, `status`) VALUES
(1, 'ds-usuarios', 2, 'Usuarios', '/dashboard/AdminUsuarios/Usuarios', '', 'Active'),
(2, 'ds-roles', 2, 'Roles', '/dashboard/AdminUsuarios/Roles', '', 'Active');
