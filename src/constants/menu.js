const MENU_ITEMS = [{
    key: 'programas',
    label: 'Estadísticas por Programas',
    isTitle: false,
    children: [{
        key: 'graduados',
        label: 'Graduados',
        isTitle: false,
        icon: 'uil uil-graduation-hat',
        badge: {
          variant: 'success',
          text: '5'
        },
        parentKey: 'programas',
        children: [{
            key: 'ds-doctorados',
            label: 'Doctorados',
            url: '/estadisticas_programas/graduados/doctorados',
            parentKey: 'graduados'
          },
          {
            key: 'ds-maestrias',
            label: 'Maestrias',
            url: '/estadisticas_programas/graduados/maestrias',
            parentKey: 'graduados'
          },
          {
            key: 'ds-especializaciones',
            label: 'Especializaciones',
            url: '/estadisticas_programas/graduados/especializaciones',
            parentKey: 'graduados',
          },
          {
            key: 'ds-pregrado',
            label: 'Pregrado',
            url: '/estadisticas_programas/graduados/pregrado',
            parentKey: 'graduados'
          },
          {
            key: 'ds-tecnologos',
            label: 'Tecnologos',
            url: '/estadisticas_programas/graduados/tecnologos',
            parentKey: 'graduados'
          },
        ],
      },
      {
        key: 'matriculados',
        label: 'Matriculados',
        isTitle: false,
        icon: 'uil uil-user-check',
        badge: {
          variant: 'success',
          text: '5'
        },
        parentKey: 'programas',
        children: [{
            key: 'ds-doctorados',
            label: 'Doctorados',
            url: '/estadisticas_programas/matriculados/doctorados',
            parentKey: 'matriculados',
          },
          {
            key: 'ds-maestrias',
            label: 'Maestrias',
            url: 'estadisticas_programas/matriculados/maestrias',
            parentKey: 'matriculados',
          },
          {
            key: 'ds-especializaciones',
            label: 'Especializaciones',
            url: '/estadisticas_programas/matriculados/especializaciones',
            parentKey: 'matriculados',
          },
          {
            key: 'ds-pregrado',
            label: 'Pregrado',
            url: '/estadisticas_programas/matriculados/pregrado',
            parentKey: 'matriculados'
          },
          {
            key: 'ds-tecnologos',
            label: 'Tecnologos',
            url: '/estadisticas_programas/matriculados/tecnologos',
            parentKey: 'matriculados',
          },
        ],
      },
      {
        key: 'admitidos',
        label: 'Admitidos',
        isTitle: false,
        icon: 'uil uil-user-square',
        badge: {
          variant: 'success',
          text: '1'
        },
        parentKey: 'programas',
        children: [
          {
            key: 'ds-pregrado',
            label: 'Pregrado',
            url: '/estadisticas_programas/admitidos/pregrado',
            parentKey: 'admitidos'
          },
        ],
      },
      {
        key: 'inscritos',
        label: 'Inscritos',
        isTitle: false,
        icon: 'uil uil-book-reader',
        badge: {
          variant: 'success',
          text: '1'
        },
        parentKey: 'programas',
        children: [
          {
            key: 'ds-pregrado',
            label: 'Pregrado',
            url: '/estadisticas_programas/inscritos/pregrado',
            parentKey: 'inscritos'
          },
        ],
      },
    ],
  },
  {
    key: 'estadisticas_fechas',
    label: 'Estadísticas por Fechas',
    isTitle: false,
    children: [{
        key: 'graduados',
        label: 'Graduados',
        isTitle: false,
        icon: 'uil uil-graduation-hat',
        badge: {
          variant: 'success',
          text: '1'
        },
        parentKey: 'estadisticas_fechas',
        children: [{
          key: 'ds-graduados',
          label: 'Consultar todo los Programas',
          url: '/estadisticas_fechas/graduados',
          parentKey: 'graduados'
        } ],
      },
      {
        key: 'matriculados',
        label: 'Matriculados',
        isTitle: false,
        icon: 'uil uil-user-check',
        badge: {
          variant: 'success',
          text: '1'
        },
        parentKey: 'estadisticas_fechas',
        children: [{
          key: 'ds-matriculados',
          label: 'Consultar todo los Programas',
          url: '/estadisticas_fechas/matriculados',
          parentKey: 'matriculados'
        } ],
      },
      {
        key: 'admitidos',
        label: 'Admitidos',
        isTitle: false,
        icon: 'uil uil-user-square',
        badge: {
          variant: 'success',
          text: '1'
        },
        parentKey: 'estadisticas_fechas',
        children: [{
          key: 'ds-admitidos',
          label: 'Consultar todo los Programas',
          url: '/estadisticas_fechas/admitidos',
          parentKey: 'admitidos'
        }],
      },
      {
        key: 'inscritos',
        label: 'Inscritos',
        isTitle: false,
        icon: 'uil uil-book-reader',
        badge: {
          variant: 'success',
          text: '1'
        },
        parentKey: 'estadisticas_fechas',
        children: [{
          key: 'ds-inscritos',
          label: 'Consultar todo los Programas',
          url: '/estadisticas_fechas/inscritos',
          parentKey: 'inscritos'
        } ],
      },
    ],
  },
];

export default MENU_ITEMS;
