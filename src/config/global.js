export default {
  global: {
    componenteFormativo: 'Seguridad en la red',
    descripcionCurso:
      'Este componente formativo aborda aspectos generales y claves sobre la gestión de la seguridad de redes informáticas y la información que en ellas circula. Mediante el estudio responsable de todos los temas, el aprendiz se afianzará en seguridad, ataques, clasificación de <i>software</i>, políticas de seguridad y normativa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: '¿Qué es la seguridad de la red?',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Causas de la inseguridad',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clasificación de los ataques',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: '<i>Software</i> malicioso',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Clasificación de <i>malware</i>',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Ciclo de vida de un virus',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Servicios de seguridad y mecanismos de seguridad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Seguridad en servicios de red',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Seguridad perimetral',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Políticas de seguridad',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '6. Políticas de seguridad',
      referencia: 'ISOTools. (s.f.). <i>La norma ISO 27001</i>.',
      tipo: 'Informe - guía',
      link:
        'https://www.isotools.org/pdfs-pro/iso-27001-sistema-gestion-seguridad-informacion.pdf',
    },
    {
      tema: '6. Políticas de seguridad',
      referencia:
        'Procem Consultores. (2018, diciembre 3). <i>ISO 27001 - Seguridad de la Información</i>.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=BNdPQU32p2Y',
    },
  ],
  glosario: [
    {
      termino: 'Agente',
      significado:
        '<i>software</i> programado para realizar una función específica.',
    },
    {
      termino: '<i>Cracking</i>',
      significado:
        'acceso no autorizado y/o vandalismo contra los sistemas informáticos.',
    },
    {
      termino: 'Dirección IP',
      significado:
        'representado por 32 bits que identifican a un equipo en una red. Se representa en notación decimal o binaria punteada.',
    },
    {
      termino: 'Dispositivo',
      significado:
        'pieza de un equipo informático que realiza una función específica.',
    },
    {
      termino: '<i>Hardware</i>',
      significado:
        'dispositivo, equipo, aparato. Parte física o tangible del ordenador.',
    },
    {
      termino: '<i>Host</i>',
      significado:
        'dispositivo que participa directamente en la comunicación de la red.',
    },
    {
      termino: 'SNMP',
      significado:
        'es un protocolo de la capa de aplicación que facilita el intercambio de información de administración entre dispositivos de red.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ariganello, E. (2020). <i>Redes cisco - Guía de estudio para la certificación CCNA 200-301</i>. (1ª Ed.). RAMA.',
    },
    {
      referencia:
        'Beekman, G. (2005). <i>Introducción a la informática</i> (traductor Díaz Martín, José Manuel). Pearson educación.',
    },
    {
      referencia:
        'Carpentier, J. F. (2016). <i>La seguridad informática en la PYME: Situación actual y mejores prácticas</i>. Ediciones Eni. ',
    },
    {
      referencia:
        'Dordoigne, J. (2020). <i>Redes informáticas: nociones fundamentales (protocolos, arquitecturas, redes inalámbricas, virtualización, seguridad, IPv6...)</i>. Cornellà De Llobregat, Ediciones Eni. ',
    },
    {
      referencia: 'MinTIC. (2021). <i>Hackear</i>.',
      link: 'https://www.mintic.gov.co/portal/inicio/5307:Hackear',
    },
    {
      referencia:
        'Soriano, M. (2014). <i>Seguridad en redes y seguridad de la información</i>.',
      link:
        'https://www.academia.edu/40156122/Seguridad_en_redes_y_seguridad_de_la_informaci%C3%B3n',
    },
    {
      referencia:
        'Valdivia, C. (2017). <i>Informática Industrial</i> 1.ª edición. Ediciones Paraninfo, S.A. ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jorge Eliécer Loaiza Muñoz',
          cargo: 'Instructor',
          centro:
            'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
        },
        {
          nombre: 'Carlos Mauricio Tovar Artunduaga',
          cargo: 'Instructor',
          centro:
            'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
        },
        {
          nombre: 'Cinthia Rocío Trejos Chacón',
          cargo: 'Experta Temática',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Fabián Leonardo Correa Díaz',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Centro de Diseño y Metrología',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e Ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
