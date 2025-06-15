const sortByDate = (a, b) => {
    const dateA = new Date(a.date || `${a.year}-01-01`)
    const dateB = new Date(b.date || `${b.year}-01-01`)

    return dateB - dateA
}

const aboutInfo = {
    "info": [
        {
            "description": "Soy técnico en mantenimiento y armado de PC certificado del IAC.",
            "descriptionHidden": "Estudié y me certifiqué en el Instituto Argentino de Computación.",
            "icons": ["computer-solid", "screwdriver-wrench-solid"]
        },
        {
            "description": "Estudio programación desde mediados del 2020",
            "descriptionHidden": "Inicié mi camino en la programación en la universidad de Hurlingham",
            "icons": ["pencil-solid", "code-solid"]
        },
        {
            "description": "Tengo conocimientos en HTML, CSS, JS y algunos frameworks (Bootstrap y Tailwind)",
            "descriptionHidden": "Estudié de manera autodidacta en sitios web, cursos online, youtube, foros, etc",
            "icons": ["html5", "css3-alt", "square-js", "bootstrap"]
        },
        {
            "description": "También conozco Python y Java, y estoy estudiando React y NodeJs",
            "descriptionHidden": "Hice un curso de Python en la UnaHur, estudié Java en un bootcamp autoguiado",
            "icons": ["python", "java", "react","node"]
        },
        {
            "description": "Usando herramientas de planificación e IA para potenciar el trabajo y proyectos",
            "descriptionHidden": "Combinando Notion y google docs con herramientas de inteligencia artificial",
            "icons": ["pen-to-square-solid", "brain-solid", "comment-dots-solid"]
        },
        {
            "description": "Me interesa también la parte de testing QA y bases de datos.",
            "descriptionHidden": "Hice cursos referidos a testing manual y bases de datos en Tecno3F",
            "icons": ["bug-solid", "database-solid"]
        },
        {
            "description": "Conocimientos sólidos en herramientas ofimáticas, diseño gráfico y web.",
            "descriptionHidden": "Google docs, sheet, slides, photophea y balsamiq",
            "icons": ["file-excel-solid", "palette-solid", "globe-solid"]
        },
        {
            "description": "Trabajar colaborativamente, aprendizaje constante y conocer distintas metodologías de trabajo",
            "descriptionHidden": "Usar herramientas para potenciar el trabajo colaborativo y aprender de los demás",
            "icons": ["users-solid", "hand-holding-hand-solid"]
        },
    ]
}

const certificatesInfo = {
    "info": [
        {
            "title": "JavaScript Essentials 2",
            "institution": "Cisco",
            "thumbnail": "79d73eeb-043b-48ea-93e1-2d990f3b47a9",
            "hours": 50,
            "year": "2025",
            "category": "Prog.",
            "link": "#",
        },
        {
            "title": " Bootcamp de IA Generativa de AWS",
            "institution": "AWS Entrena Argentina",
            "thumbnail": "303fc892-c01c-4d7a-b032-04118434ce30",
            "hours": 10,
            "year": "2024",
            "category": "Prog.",
            "link": "https://ucarecdn.com/303fc892-c01c-4d7a-b032-04118434ce30/-/preview/1000x775/",
        },
        // {
        //     "title": "Desarrollo web (Javascript/Node.js)",
        //     "institution": "Codo a Codo",
        //     "thumbnail": "2347edd6-7084-4398-999a-2349e73fde69",
        //     "hours": 198,
        //     "year": "2024",
        //     "category": "Prog.",
        //     "link": "https://ucarecdn.com/2347edd6-7084-4398-999a-2349e73fde69/2024-desarrolloWeb-Node%20(1).jpg",
        // },
        {
            "title": "Introduction to MS Excel",
            "institution": "SimpliLearn",
            "thumbnail": "75560815-78f1-4eb0-902c-50be339990c5",
            "hours": 7,
            "year": "2024",
            "category": "H. Skill",
            "link": "https://simpli-web.app.link/e/rXDjr7mYWRb",
        },
        {
            "title": "Full Stack Java",
            "institution": "Codo a codo",
            "thumbnail": "c60d4a44-af79-48a8-940e-657f4b394cf7",
            "hours": 208,
            "year": "2023",
            "category": "Prog.",
            "link": "https://drive.google.com/file/d/1eigAF5HYFDfpVh2W4FM8V1zd2NmEdR6L/view",
        },
        {
            "title": "Programación desde cero",
            "institution": "Egg cooperación",
            "thumbnail": "91702206-8504-46e6-94a8-d647d2e00835",
            "hours": 81,
            "year": "2022",
            "category": "Prog.",
            "link": "https://drive.google.com/file/d/1D6yhtmH0NVoHxQaPeVlRZw6vM41AYkbP/view",
        },
        {
            "title": "Test English",
            "institution": "Platzi",
            "thumbnail": "4d8a24e8-d6a9-4fa6-969b-ae8f638ea1a6",
            "hours": 0.5,
            "year": "2024",
            "category": "S. Skill",
            "link": "https://platzi.com/ruta-compartida/english/g1714097724-430b0f3c-0829-4d41-b91e-0e1ee7a3d736/",
        },
        {
            "title": "JavaScript Algorithms and Data Structures",
            "institution": "FreeCodeCamp",
            "thumbnail": "79d73eeb-043b-48ea-93e1-2d990f3b47a9",
            "hours": 150,
            "year": "2025",
            "category": "Prog.",
            "link": "#",
        },
        {
            "title": "Python básico",
            "institution": "Universidad de Hurlingham",
            "thumbnail": "b8f026f1-7fdb-47b1-b81c-bb9265b650a5",
            "hours": 60,
            "year": "2021",
            "category": "Prog.",
            "link": "https://drive.google.com/file/d/1AuYWDRpXjdCUyRwDyiM_pdSVqXVnA2K_/view?usp=sharing",
        },
        {
            "title": "Python Core",
            "institution": "SoloLearn",
            "thumbnail": "ad060eb5-0c30-4db1-9359-805814aa5467",
            "hours": 32,
            "year": "2022",
            "category": "Prog.",
            "link": "https://www.sololearn.com/certificates/CT-AVDTLOPO",
        },
        {
            "title": "JavaScript",
            "institution": "SoloLearn",
            "thumbnail": "33bb019f-6b74-4318-bed0-d9e416f662c5",
            "hours": 32,
            "year": "2022",
            "category": "Prog.",
            "link": "https://www.sololearn.com/certificates/CT-LMKX9OKE",
        },
        {
            "title": "JavaScript Essentials 1",
            "institution": "Cisco",
            "thumbnail": "ea933e57-8c6a-4a01-ba28-70a4b519a7ec",
            "hours": 40,
            "year": "2023",
            "category": "Prog.",
            "link": "https://www.credly.com/badges/85c38784-390e-4e55-8dcc-94e447fd32b0/linked_in?t=s0151l",
        },
        {
            "title": "Armado y reparación de PC",
            "institution": "Instituto Argentino de computación",
            "thumbnail": "438f3a56-a437-4b2d-9b60-d89e9c33eaee",
            "hours": 40,
            "year": "2017",
            "category": "Tec. Sup.",
            "link": "https://certificados.iacvilladevoto.com.ar/?codigo=35174222",
        },
        {
            "title": "Typing speed test",
            "institution": "Ratatype",
            "thumbnail": "4993d985-0441-41e8-9322-f5005292fa1c",
            "hours": 0.05,
            "year": "2023",
            "category": "H. Skill",
            "link": "https://www.ratatype.com/u5476932/certificate/es/",
        },
        {
            "title": "Prompt Engineer",
            "institution": "SoloLearn",
            "thumbnail": "b9120f58-ff81-4ccd-a115-8d3688b45b41",
            "hours": 3,
            "year": "2025",
            "category": "H. Skill",
            "link": "https://www.sololearn.com/certificates/CC-UU0VPAX3",
        },
        {
            "title": "EF Standard English Test",
            "institution": "EF Set",
            "thumbnail": "ff6cd6ea-35a2-40b1-b0ad-1ab33e74d715",
            "hours": 1,
            "year": "2023",
            "category": "S. Skill",
            "link": "https://www.efset.org/cert/KDPqio",
        },
        {
            "title": "Responsive web design",
            "institution": "FreeCodeCamp",
            "thumbnail": "f731e29b-89ee-4956-a06e-02763f234753",
            "hours": 300,
            "year": "2022",
            "category": "Web dev.",
            "link": "https://freecodecamp.org/certification/lautarof/responsive-web-design",
        },
        {
            "title": "Testing de software Básico",
            "institution": "Academia QA",
            "thumbnail": "c60cae28-12b8-438d-a71a-3320858a90fd",
            "hours": 20,
            "year": "2022",
            "category": "Tec. Sup.",
            "link": "https://academiaqa.com/Certificado/9c6191794bd568b530334858439156d4",
        },
        {
            "title": "Auxiliar de redes",
            "institution": "CFP Hurlingham",
            "thumbnail": "51edfbdc-b422-444f-9cb1-1b22b9665143",
            "hours": 36,
            "year": "2018",
            "category": "Tec. Sup.",
            "link": "https://drive.google.com/file/d/1H7dtdL4Srb_J2-OiNfjHZ_lplxr3-j1N/view?usp=sharing",
        },
        {
            "title": "Diseño web y marketing digital",
            "institution": "ITUOM caseros",
            "thumbnail": "2de24ae3-5a7a-4fc1-9844-a6a9573b7d22",
            "hours": 180,
            "year": "2018",
            "category": "Web dev.",
            "link": "https://drive.google.com/file/d/1AeD8rFoBhPmhIiVIz5L3C6u3aFOQODRl/view?usp=sharing",
        },
        {
            "title": "Introducción al desarrollo web II (revalidación)",
            "institution": "Google Activate",
            "thumbnail": "a8f87612-18de-40c0-b0ab-0ba032e49769",
            "hours": 40,
            "year": "2023",
            "category": "Web dev.",
            "link": "https://skillshop.exceedlms.com/student/award/XtaRh8oHPP9P4yCnGFk78rwo",
        },
        {
            "title": "Auxiliar en administración de pymes",
            "institution": "Centro de formación CTA",
            "thumbnail": "1d165baf-2072-4b35-9f61-a6cb06589528",
            "hours": 250,
            "year": "2018",
            "category": "S. Skill",
            "link": "https://drive.google.com/file/d/1gsyaLra_2dUK7SngLg8hVF1rQ_4TfJd7/view",
        },

    ]
}

certificatesInfo.info.sort(sortByDate)

const projectsInfo = {
    "info": [
        {
            "title": "CV Online",
            "date": "2022-11-06",
            "description": "Cv online dinámico",
            "languages": ["html5", "css3-alt", "square-js"],
            "thumbnail": ["46fd0d08-53a0-4ace-b9e2-52935fc2cce9"],
            "github": "https://github.com/Lautarof25/cv_online",
            "webpage": "https://lautarof25.github.io/cv_online/"
        },
        {
            "title": "Nativos digitales - Slideshow",
            "date": "2020-06-15",
            "description": "La falacia del nativo digital",
            "languages": ["file-powerpoint-solid"],
            "thumbnail": ["35d96722-71c3-4910-9285-1cfdd10d3443"],
            "github": "https://docs.google.com/presentation/d/1g71wzwUaldSan7ulb_25VWRbA06FkVhwqNtKegNnec4/edit?usp=sharing",
            "webpage": "https://docs.google.com/presentation/d/1g71wzwUaldSan7ulb_25VWRbA06FkVhwqNtKegNnec4/edit?usp=sharing"
        },
        {
            "title": "Proyecto Guiado - Guess the Number",
            "date": "2025-06-14",
            "description": "Una presentación sobre cómo desarrollar un juego de adivinanza",
            "languages": ["file-powerpoint-solid"],
            "thumbnail": ["4f84a8e9-f3f9-4dad-9486-49167117ede0"],
            "github": "https://github.com/Lautarof25/SlidesGoogle", 
            "webpage": "https://slidesgoogle.netlify.app/"
        },
        {
            "title": "Dilema de Monty Hall - Sheet",
            "date": "2025-04-04",
            "description": "Una explicación simulada del problema de Monty Hall",
            "languages": ["file-excel-solid"],
            "thumbnail": ["cc9c2289-3e11-4969-993a-2b055f90ff4a"],
            "github": "https://docs.google.com/spreadsheets/d/1T254ek27gyHDzU0C7XLNe-ktjCMkWkP7jD8Q5rZE_uU/edit?gid=0#gid=0",
            "webpage": "https://docs.google.com/spreadsheets/d/1T254ek27gyHDzU0C7XLNe-ktjCMkWkP7jD8Q5rZE_uU/edit?gid=0#gid=0"
        },
        {
            "title": "Conferencia BS AS",
            "date": "2023-05-17",
            "description": "Proyecto integrador Codo a codo - Full stack",
            "languages": ["html5", "bootstrap", "square-js"],
            "thumbnail": ["ed45c97e-6cd6-403d-9723-27f2b94c229d"],
            "github": "https://github.com/Lautarof25/integradorcac2",
            "webpage": "https://lautarof25.github.io/integradorcac2/"
        },
        {
            "title": "IEA!(control de gastos)",
            "date": "2024-12-20",
            "description": "Planilla de ingresos, egresos y ahorros",
            "languages": ["file-excel-solid"],
            "thumbnail": ["6ae42567-46b6-427b-bdda-a6571eb75df6"],
            /* Todo: Agregar readme con github para describir el proyecto */
            "github": "https://docs.google.com/spreadsheets/d/1z9rU4-KahOp0cRNhzQpnamk2wuG6QhSdWHPYoT84ZvA/edit?usp=sharing",
            "webpage": "https://docs.google.com/spreadsheets/d/1z9rU4-KahOp0cRNhzQpnamk2wuG6QhSdWHPYoT84ZvA/edit?usp=sharing"
        },
        // {
        //     "title": "Tienda Cursos Tech",
        //     "date": "2024-12-30",
        //     "description": "Tienda Cursos Tech",
        //     "languages": ["react"],
        //     "thumbnail": ["79d73eeb-043b-48ea-93e1-2d990f3b47a9"],
        //     "github": "https://github.com/Lautarof25/",
        //     "webpage": "https://lautarof25.github.io/"
        // },
        // {
        //     "title": "Tv & Series",
        //     "date": "2024-12-30",
        //     "description": "Catálogo de peliculas y series",
        //     "languages": ["react"],
        //     "thumbnail": ["79d73eeb-043b-48ea-93e1-2d990f3b47a9"],
        //     "github": "https://github.com/Lautarof25/",
        //     "webpage": "https://lautarof25.github.io/"
        // },
        {
            "title": "Armar cubo - Notion",
            "date": "2022-02-06",
            "description": "Tutorial para armar el cubo rubik, en Notion",
            "languages": ["pen-to-square-solid"],
            "thumbnail": ["34f4d94a-2b5d-48e9-933c-400f91afe578"],
            "github": "https://fan-utahraptor-cfe.notion.site/Armar-Cubo-Rubik-3x3-M-todo-f-cil-a71f34e67d784d70988a4021989f5b72",
            "webpage": "https://fan-utahraptor-cfe.notion.site/Armar-Cubo-Rubik-3x3-M-todo-f-cil-a71f34e67d784d70988a4021989f5b72"
        },
        {
            "title": "Duolingo con esteroides - Notion",
            "date": "2024-06-06",
            "description": "Una guía/articulo sobre Duolingo y cómo aprovecharlo!",
            "languages": ["pen-to-square-solid"],
            "thumbnail": ["97556ea0-d48c-452c-99d3-50ea378c1dc3"],
            "github": "https://fan-utahraptor-cfe.notion.site/Duolingo-con-esteroides-8a61ce39f11544de831b8e00765a3c56",
            "webpage": "https://fan-utahraptor-cfe.notion.site/Duolingo-con-esteroides-8a61ce39f11544de831b8e00765a3c56"
        },
        {
            "title": "Calculadora Python",
            "date": "2021-12-12",
            "description": "Una simple calculadora creada con Python",
            "languages": ["python"],
            "thumbnail": ["452e0b60-c82e-407c-b716-38fa3ad7c6b3"],
            "github": "https://github.com/Lautarof25/practicas_python",
            "webpage": "https://onlinegdb.com/qZjq7lwwj"
        },
        // {
        //     "title": "Build your PC",
        //     "date": "2024-12-30",
        //     "description": "A webapp to build your best PC",
        //     "languages": ["react"],
        //     "thumbnail": ["79d73eeb-043b-48ea-93e1-2d990f3b47a9"],
        //     "github": "#",
        //     "webpage": "#"
        // },
        // {
        //     "title": "Slider blog",
        //     "date": "2024-12-30",
        //     "description": "A slider blog concept",
        //     "languages": ["react"],
        //     "thumbnail": ["79d73eeb-043b-48ea-93e1-2d990f3b47a9"],
        //     "github": "#",
        //     "webpage": "#"
        // },
        // {
        //     "title": "English Test",
        //     "date": "2024-12-30",
        //     "description": "English test level",
        //     "languages": ["react"],
        //     "thumbnail": ["79d73eeb-043b-48ea-93e1-2d990f3b47a9"],
        //     "github": "#",
        //     "webpage": "#"
        // },
        {
            "title": "WineStore",
            "date": "2023-05-14",
            "description": "Una vineria con carrito de compras",
            "languages": ["html5", "bootstrap", "square-js"],
            "thumbnail": ["64010ed8-5574-4686-ae1a-9ac829d9c87b"],
            "github": "https://github.com/Lautarof25/Vinoteca",
            "webpage": "https://lautarof25.github.io/Vinoteca/"
        },
        {
            "title": "Guess The Number",
            "date": "2023-06-03",
            "description": "Un juego para usar la lógica",
            "languages": ["html5", "bootstrap", "square-js"],
            "thumbnail": ["f2afcce7-0ffd-44ae-a28b-e117198f7a14"],
            "github": "https://github.com/Lautarof25/guessTheNumber",
            "webpage": "https://lautarof25.github.io/guessTheNumber/"
        },
        {
            "title": "QA testing",
            "date": "2022-12-12",
            "description": "Proyecto final de testing manual",
            "languages": ["bug-solid", "magnifying-glass-solid"],
            "thumbnail": ["4993a6e3-e0cb-4c2e-a446-40672b83fefc"],
            "github": "https://github.com/Lautarof25/TestingQaCourse",
            "webpage": "https://docs.google.com/document/d/1gT0I7ybXtWPM4TDxHybNK0OPhNw1uGB1FgIXvJ8UWxg/edit?usp=sharing"
        },
        {
            "title": "FreeCode Camp portfolio",
            "date": "2022-06-06",
            "description": "Portafolio en freeCodeCamp",
            "languages": ["html5", "css3-alt"],
            "thumbnail": ["36f2fbc0-fefe-41b9-9ebe-130394a79b18"],
            "github": "https://codepen.io/Lautadev/full/vYWvJvr",
            "webpage": "https://codepen.io/Lautadev/full/vYWvJvr"
        },
        {
            "title": "SQL introducción",
            "date": "2022-12-12",
            "description": "Proyecto final de SQL",
            "languages": ["database-solid", "code-solid"],
            "thumbnail": ["efe313a3-e135-4e11-8033-c1de68ee1117"],
            "github": "https://github.com/Lautarof25/sql_proyecto",
            "webpage": "https://docs.google.com/document/d/1cm_Kl6JF4r-TfspA-vYy8WxB77lZBctBUTDmYYZG3PQ/edit?usp=sharing"
        },
    ]
}

projectsInfo.info.sort(sortByDate)

const servicesInfo = {
    "info": [
        {
            "title": "Mantenimiento y armado de PC",
            "description": "Armado de pc, mantenimiento y reciclado de hardware",
            "details": ["Presupuesto y armado de PC a medida","Mantenimiento lógico y físico","Backup de datos","Soporte técnico remoto","Soluciones informáticas generales"],
            "icons": ["computer-solid", "screwdriver-wrench-solid"]
        },
        {
            "title": "Clases de internet avanzado",
            "description": "Imparto clases particulares a adultos mayores para contribuir con la alfabetización digital",
            "details": ["Clases de internet para aprovechar el mundo digital","Correcta utilización de programas y aplicaciones de escritorio y celular","Usos más frecuentes para la vida diaria"],
            "icons": ["chalkboard-user-solid", "book-solid"]
        },
        {
            "title": "Optimización tecnológica",
            "description": "Automatización en procesos de trabajo para ahorrar tiempos de ejecución de tareas",
            "details": ["Creación de planillas a medida","Creación de mini programas para maximizar tiempos","Asesoramiento para aprovechar tecnologías digitales al alcance"],
            "icons": ["rocket-solid", "hand-holding-hand-solid"]
        },
        {
            "title": "Creación de aplicaciones web",
            "description": "Desarrollo de aplicaciones web estáticas y dinámicas",
            "details": ["Creación de páginas para aumentar la visibilidad digital"],
            "icons": ["globe-solid", "code-solid"]
        },
    ]
}