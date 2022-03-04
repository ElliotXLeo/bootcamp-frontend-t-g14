'use strict';
const documentReady = () => {

  const perfil = [
    'Elliot Garamendi',
    'Elliot Garamendi Desarrollador de tus sueños',
    'Estudiante de Ingeniería de Software perteneciente a los primeros puestos. Apasionado del autoaprendizaje con el sueño de crecer en el Desarrollo Web Frontend con la biblioteca React. Asimismo, amo compartir los conocimientos adquiridos día a día mediante la docencia.',
    'https://1drv.ms/u/s!As5U-bd3F-a6gYsmbbG-Dybk88biRQ?e=Rifl4V',
    'https://i.postimg.cc/bvJLLgZd/perfil-elliotgaramendi.jpg'
  ];

  // const experiencia = {
  //   company: 'SENATI',
  //   position: 'Instructor',
  //   period: 'mayo 2017, diciembre 2017',
  //   activities: [
  //     'Instrucción del curso: Calidad y Monitoreo Aire, Ruido y Emisiones Atmosféricas.',
  //     'Desarrollo de plantilla de cálculos en Excel para agilizar el procesamiento de información.'
  //   ]
  // };

  const experiencias = [
    {
      id: 0,
      company: 'SENATI',
      position: 'Instructor del Centro de Tecnologías Ambientales',
      period: 'mayo 2017, diciembre 2017',
      activities: [
        'Instrucción del curso: Calidad y Monitoreo Aire, Ruido y Emisiones Atmosféricas.',
        'Desarrollo de plantilla de cálculos en Excel para agilizar el procesamiento de información.'
      ],
      main: 0
    },
    {
      id: 1,
      company: 'Gestión Integral de Proyectos',
      position: 'Técnico Instructor de Monitoreos Ambientales',
      period: 'febrero 2017, marzo 2020',
      activities: [
        'Instructor de Monitoreo en diplomas de especialización: Medio Ambiente & Seguridad',
        'y Salud Ocupacional, Sistemas Integrados de Gestión y Supervisor en Medio Ambiente.'
      ],
      main: 0
    },
    {
      id: 2,
      company: 'Canvia',
      position: 'Practicante Pre Profesional de Sistemas',
      period: 'marzo 2020, diciembre 2020',
      activities: [
        'Desarrollo de admin’s con React y conexión con API’s para el control de los bot’s de RPA.',
        'Desarrollo de flujos automatizados con Power Automate, bajo el marco de trabajo Scrum.'
      ],
      main: 1
    },
    {
      id: 3,
      company: 'Tata Consultancy Services',
      position: 'Trainee de Sistemas',
      period: 'diciembre 2020, marzo 2021',
      activities: [
        'Testing de código en GeneXus, AS/400, HTML, CSS, JavaScript, Java, VB, SQL.',
        'Desarrollo de casos de prueba y ejecución de pruebas funcionales.'
      ],
      main: 1
    },
    {
      id: 4,
      company: 'Stefanini It Solutions',
      position: 'Desarrollador GeneXus Junior',
      period: 'abril 2021, agosto 2021',
      activities: [
        'Desarrollo de Software Bancario en GeneXus y AS/400.',
        'Mantenimiento de Software Bancario en GeneXus, AS/400 y Visual Basic 6.0.'
      ],
      main: 0
    },
    {
      id: 5,
      company: 'Idat',
      position: 'Docente',
      period: 'junio 2021, enero 2022',
      activities: [
        'Curso: Diseño y Desarrollo Web: HTML, CSS, JS, Bootstrap, jQuery, PHP y MySQL.',
        'Desarrollo de proyectos y materiales para el aprendizaje teórico y práctico de los alumnos.'
      ],
      main: 1
    },
    {
      id: 6,
      company: 'DRIVEN',
      position: 'Frontend Developer Junior',
      period: 'septiembre 2021, presente',
      activities: [
        'Desarrollo de aplicaciones e-commerce con VTEX IO y React bajo el marco de trabajo Scrum.',
        'Maquetación web de diseños del Figma en React esencialmente con CSS.'
      ],
      main: 1
    },
    {
      id: 7,
      company: 'Mandü',
      position: 'Software Engineer Trainee',
      period: 'octubre 2021, presente',
      activities: [
        'Mantenimiento web: Actualización de diseño, optimización y adición de funcionalidades.',
        'Maquetación web de diseños del Figma en Laravel.'
      ],
      main: 1
    },
    {
      id: 8,
      company: 'Tecsup',
      position: 'Docente Frontend',
      period: 'enero 2022, presente',
      activities: [
        'Bootcamp: Desarrollo Frontend: git, Lógica P., HTML, CSS, JS, B, Sass, Node, React, Testing.',
        'Desarrollo de proyectos y materiales para el aprendizaje teórico y práctico de los alumnos.'
      ],
      main: 1
    }
  ];

  // Start header
  const headerNavMenu = document.getElementById('headerNavMenu');
  const headerNavLinkItems = [...document.querySelectorAll('.header-nav__link-item')];

  const headerScroll = () => {
    const header = document.getElementById('header');
    const headerNavMenuIcon = document.querySelector('.header-nav__menu-icon');
    header.classList.toggle('header--scroll', window.scrollY > 0);
    headerNavMenuIcon.classList.toggle('header-nav__menu-icon--scroll', window.scrollY > 0);

    const headerNavLink = [...document.querySelectorAll('.header-nav__link')];
    headerNavLink.map((element) => {
      element.classList.toggle('header-nav__link--scroll', window.scrollY > 0);
    });
  };

  const toggleMenu = () => {
    const headerNavLinkList = document.getElementById('headerNavLinkList');
    headerNavLinkList.classList.toggle('header-nav__link-list--left-0');
  };

  window.addEventListener('scroll', headerScroll);
  headerNavMenu.addEventListener('click', toggleMenu);
  headerNavLinkItems.map((element) => {
    element.addEventListener('click', toggleMenu);
  });
  // End header

  // Start perfil
  const getInfoPerfil = () => {
    const perfilInfoTitle = document.getElementById('perfilInfoTitle');
    const perfilInfoDescription = document.getElementById('perfilInfoDescription');
    const perfilInfoLinkCv = document.getElementById('perfilInfoLinkCv');
    const perfilImage = document.getElementById('perfilImage');

    perfilInfoTitle.innerHTML = perfil[1];
    perfilInfoDescription.innerHTML = perfil[2];
    perfilInfoLinkCv.href = perfil[3];
    perfilImage.src = perfil[4];
    perfilImage.alt = perfil[0];
  }
  getInfoPerfil();
  // End perfil

  // Start experiencia
  const getExperiencias = () => {
    const experienciaExperiencias = document.getElementById('experienciaExperiencias');
    [...experiencias].reverse().forEach((element) => {
      if (element.main === 1) {
        experienciaExperiencias.innerHTML += `
        <section class="experiencia__experience">
          <h4 class="experiencia__date">${element.period}</h4>
          <h3 class="experiencia__company">${element.company}</h3>
          <h4 class="experiencia__role">${element.position}</h4>
          <ul class="experiencia__activities">
            <li class="experiencia__activity">${element.activities[0]}</li>
            <li class="experiencia__activity">${element.activities[1]}</li>
          </ul>
        </section>
      `;
      }
    });

  };
  getExperiencias();
  // End experiencia
};

document.addEventListener('DOMContentLoaded', documentReady);
