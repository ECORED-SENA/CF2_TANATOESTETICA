export default {
  global: {
    componenteFormativo: 'Bioseguridad y tanatoestética',
    descripcionCurso:
      'El presente componente de formación permite comprender la importancia de la bioseguridad en el proceso de tanatoestética debido al riesgo biológico de los procesos de descomposición que se pueden presentar en algunos casos.<br><br>Este acercamiento se realizará mediante el abordaje de las normas de bioseguridad acorde con los lineamientos gubernamentales e institucionales que tienen como propósito controlar las infecciones y tomar las precauciones universales en el manejo de los cuerpos y los equipos que son utilizados en este procedimiento. Bienvenido.',
    imagenBannerPrincipal: require('@/assets/curso/banner-img.svg'),
    fondoBannerPrincipal: require('@/assets/curso/banner-bg.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Cambios post mortem',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Descomposición en la tanatopraxia-tanatoestética',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Químicos en tanatopraxia',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Naturaleza y propósito del embalsamamiento',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Laboratorio de tanatopraxia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo:
              'Insumos y elementos usados en tanatopraxia y tanatoestética',
            hash: 't_5_1',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Normas de bioseguridad',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Legiscomex. (s.f.). Tipos de carga, regularizado. <br> <small>Apreciado Aprendiz, para la utilización del recurso de Legiscomex que se encuentra en el Sistema de Bibliotecas, es necesario el ingreso con sus datos de acceso (número de identificación en los campos de usuario y contraseña). Es importante que, ingrese primero a la biblioteca y posteriormente acceda con el enlace del recurso de Tipos de Carga, para que el sistema lo direccione al espacio correcto. </small>',
      link:
        'https://login.bdigital.sena.edu.co/login?url=https://www.legiscomex.com/Documentos/TIPOSDECARGA',
    },
    {
      referencia:
        'De la Cruz, D. y Holmes, R. (2018). Turning art into science. Tuesday Evening Publications.',
    },
    {
      referencia:
        'Díaz, G. (2018). Guía para las empresas con exposición de riesgo biológico. Ministerio del Trabajo. ',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/59676/GUIA+RIESGO+BIOL%C3%93GICO+EMPRESAS.pdf/d37bb562-af8e-a51b-106e-60c7784f645b',
    },
    {
      referencia:
        'Decreto 351 del 2014. [Ministerio de Salud y Protección Social]. Por el cual se reglamenta la gestión integral de los residuos generados en la atención en salud y otras actividades. Febrero 19 de 2014.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56755',
    },
    {
      referencia:
        'ICONTEC. (2017). Servicios funerarios. Requisitos (NTC 5840).',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/pdfview/viewer.aspx?locale=es-ES&Q=AF60935720F13C6466C0297B7F80FF16&Req=',
    },
    {
      referencia:
        'ICONTEC. (2017). Servicios funerarios. Términos y definiciones (NTC 6212).',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/pdfview/viewer.aspx?locale=es-ES&Q=6002A697B3F03F6282B108144F0748A3&Req=',
    },
    {
      referencia:
        'Ley 9 de 1979. Por la cual se dictan medidas sanitarias. Enero 24 de 1979. DO. Nº 35.308.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0009_1979.html ',
    },
    {
      referencia:
        'Ley 1562 de 2012. Por la cual se modifica el sistema de riesgos laborales en materia de salud ocupacional. Julio 11 de 2012.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Ley-1562-de-2012.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social, Ministerio de Ambiente y Desarrollo Sostenible y Ministerio de Transporte. (2015). Proyecto de manual para la gestión integral de residuos generados en la atención de salud y otras actividades.',
      link:
        'https://www.minambiente.gov.co/images/Atencion_y_particpacion_al_ciudadano/Consulta_Publica/V_22_Manual_Gesti%C3%B3n_Integral_16_12_14_CP.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Bioseguridad',
      significado:
        'según ICONTEC (2017), es un conjunto de medidas preventivas que tienen como objetivo minimizar y controlar factores de riesgo que puedan afectar la seguridad, la salud humana y el ambiente. ',
    },
    {
      termino: 'Residuos hospitalarios y similares',
      significado:
        'son los elementos, insumos, materiales o instrumentos que tienen suficientes patógenos como paa causar una enfermedad.',
    },
    {
      termino: 'Servicios funerarios',
      significado:
        'según ICONTEC (2017), es un conjunto de actividades organizadas para la realización de rituales fúnebres. Pueden constar de servicios básicos (tales como preparación del cadáver, restos humanos, restos óseos o cenizas; obtención de licencias de inhumación o cremación; traslados, suministros de carroza fúnebre para el servicio; ataúd, urna, sala de velación y trámites civiles y eclesiásticos), servicios complementarios (tales como arreglos florales, avisos de murales y prensa, transporte de acompañantes, acompañamientos musicales) y destino final (inhumación o cremación).',
    },
    {
      termino: 'Unidad de almacenamiento',
      significado:
        'son sitios de depósito cerrados y de carácter temporal para almacenar los residuos generados.',
    },
  ],
  complementario: [
    {
      texto:
        'Ley 9 de 1979. Por la cual se dictan medidas sanitarias. Enero 24 de 1979. DO. Nº 35.308.',
      tipo: 'Web',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0009_1979.html',
    },
    {
      texto:
        'Ley 1562 de 2012. Por la cual se modifica el sistema de riesgos laborales en materia de salud ocupacional. Julio 11 de 2012.',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Ley-1562-de-2012.pdf',
    },
    {
      texto:
        'Decreto 351 del 2014. [Ministerio de Salud y Protección Social]. Por el cual se reglamenta la gestión integral de los residuos generados en la atención en salud y otras actividades. Febrero 19 de 2014.',
      tipo: 'Decreto',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56755',
    },
    {
      texto:
        'Ministerio de Salud y Protección Social, Ministerio de Ambiente y Desarrollo Sostenible y Ministerio de Transporte. (2015). Proyecto de manual para la gestión integral de residuos generados en la atención de salud y otras actividades.',
      tipo: 'Texto digital',
      link:
        'https://www.minambiente.gov.co/images/Atencion_y_particpacion_al_ciudadano/Consulta_Publica/V_22_Manual_Gesti%C3%B3n_Integral_16_12_14_CP.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lina María Restrepo Zapata',
        cargo: 'Experta temática',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'John Alejandro Carmona Escobar',
        cargo: 'Experto temática',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Jhacesiz Mary Hincapié Atehortúa',
        cargo:
          'Instructora (EPC) – Líder desarrollo curricular servicios personales',
        centro: 'Centro de Servicios de Salud – Regional Antioquia',
      },
      {
        nombre: 'Adriana Maria Bustamante Cataño',
        cargo: 'Profesional de diseño y producción curricular',
        centro: 'Centro de Servicios de Salud – Regional Antioquia',
      },
      {
        nombre: 'Cristian Metaute Medina',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica ',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Eulises Orduz Amezquita',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lizeth Karina Manchego',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Emilsen Alfonso Bautista',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
