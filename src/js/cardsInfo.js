const sortByDate = (a, b) => {
    const dateA = new Date(a.date || `${a.year}-01-01`);
    const dateB = new Date(b.date || `${b.year}-01-01`);

    return dateB - dateA;
};

const aboutInfo = {
    "info": [
        {
            "description": "Soy técnico en mantenimiento y armado de PC certificado del IAC.",
            "descriptionHidden": "Estudié y me certifiqué en el Instituto Argentino de Computación.",
            "icons": ["computer-solid", "screwdriver-wrench-solid"]
        },
        {
            "description": "Estudio programación desde mediados del 2020",
            "descriptionHidden": "Inicié mi camino en la programación en la UnaHur(universidad de Hurlingham)",
            "icons": ["pencil-solid", "code-solid"]
        },
        {
            "description": "Tengo conocimientos en HTML, CSS, JS y algunos frameworks (Bootstrap y Tailwind)",
            "descriptionHidden": "Estudié de manera autodidacta en sitios web, youtube, foros, etc",
            "icons": ["html5", "css3-alt", "square-js", "bootstrap"]
        },
        {
            "description": "También conozco Python y Java, y estoy estudiando ReactJS, Spring, PHP, entre otros.",
            "descriptionHidden": "Hice un curso de Python en la UnaHur, estudié Java en un bootcamp autoguiado",
            "icons": ["python", "java", "react", "php"]
        },
        {
            "description": "Usando herramientas de planificación e inteligencia artificial para potenciar el trabajo y proyectos",
            "descriptionHidden": "Combinando Notion y google docs con herramientas de inteligencia artificial",
            "icons": ["pen-to-square-solid", "brain-solid", "comment-dots-solid"]
        },
        {
            "description": "Me interesa también la parte de testing QA y bases de datos.",
            "descriptionHidden": "Hice cursos referidos a testing manual y bases de datos en Tecno3f",
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

const portfolioInfo = {
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
            "title": "Calculadora Python",
            "date": "2022-11-01",
            "description": "Una simple calculadora creada con Python",
            "languages": ["python"],
            "thumbnail": ["452e0b60-c82e-407c-b716-38fa3ad7c6b3"],
            "github": "https://github.com/Lautarof25/practicas_python",
            "webpage": "https://onlinegdb.com/qZjq7lwwj"
        },
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
    ]
}

portfolioInfo.info.sort(sortByDate)

const certificatesInfo = {
    "info": [
        {
            "title": "Cisco",
            "description": "Cisco Certified Network Associate (CCNA1)",
            "thumbnail": "79d73eeb-043b-48ea-93e1-2d990f3b47a9",
            "hours": 0,
            "year": 2024,
            "link": "https://www.credly.com/badges/85c38784-390e-4e55-8dcc-94e447fd32b0/linked_in?t=s0151l",
        },
        {
            "title": "Cisco",
            "description": "IT Essentials: PC Hardware and Software",
            "thumbnail": "79d73eeb-043b-48ea-93e1-2d990f3b47a9",
            "hours": 0,
            "year": 2024,
            "link": "https://www.credly.com/badges/85c38784-390e-4e55-8dcc-94e447fd32b0/linked_in?t=s0151l",
        },
        {
            "title": "Cisco",
            "description": "JavaScript Essentially 1",
            "thumbnail": "ea933e57-8c6a-4a01-ba28-70a4b519a7ec",
            "hours": 40,
            "year": 2023,
            "link": "https://www.credly.com/badges/85c38784-390e-4e55-8dcc-94e447fd32b0/linked_in?t=s0151l",
        },
        {
            "title": "Instituto Argentino de computación",
            "description": "Armado y reparación de PC",
            "thumbnail": "438f3a56-a437-4b2d-9b60-d89e9c33eaee",
            "hours": 40,
            "year": 2017,
            "link": "https://drive.google.com/file/d/1LjbhEMNkH1O7B5Fn5ZqXB4uEaxvMn23c/view",
        },
        {
            "title": "Ratatype",
            "description": "Typing speed test",
            "thumbnail": "4993d985-0441-41e8-9322-f5005292fa1c",
            "hours": 0.05,
            "year": 2023,
            "link": "https://www.ratatype.com/u5476932/certificate/es/",
        },
        {
            "title": "EF Set",
            "description": "EF Standard English Test",
            "thumbnail": "ff6cd6ea-35a2-40b1-b0ad-1ab33e74d715",
            "hours": 1,
            "year": 2023,
            "link": "https://www.efset.org/cert/KDPqio",
        },
        {
            "title": "FreeCodeCamp",
            "description": "Responsive web design",
            "thumbnail": "f731e29b-89ee-4956-a06e-02763f234753",
            "hours": 300,
            "year": 2022,
            "link": "https://freecodecamp.org/certification/lautarof/responsive-web-design",
        },
        {
            "title": "Academia QA",
            "description": "Testing de software Básico",
            "thumbnail": "c60cae28-12b8-438d-a71a-3320858a90fd",
            "hours": 20,
            "year": 2022,
            "link": "https://academiaqa.com/Certificado/9ea932d7a7265fedc49ddb5ae172cdf7/?swcfpc=1",
        },
        {
            "title": "CFP Hurlingham",
            "description": "Instalación, supervisión y administración de redes",
            "thumbnail": "3fcec928-307c-493f-ba21-0e032109f8e2",
            "hours": 32,
            "year": 2018,
            "link": "https://drive.google.com/file/d/1H7dtdL4Srb_J2-OiNfjHZ_lplxr3-j1N/view",
        },
        {
            "title": "Centro de formación CTA",
            "description": "Auxiliar en administración de pymes",
            "thumbnail": "1d165baf-2072-4b35-9f61-a6cb06589528",
            "hours": 250,
            "year": 2018,
            "link": "https://drive.google.com/file/d/1gsyaLra_2dUK7SngLg8hVF1rQ_4TfJd7/view",
        },

    ]
}

certificatesInfo.info.sort(sortByDate)

const servicesInfo = {
    "info": [
        {
            "title": "Mantenimiento y armado de PC",
            "description": "Armado de pc, mantenimiento y reciclado de hardware",
            "icons": ["computer-solid", "screwdriver-wrench-solid"]
        },
        {
            "title": "Clases de internet avanzado",
            "description": "Imparto clases particulares a adultos mayores para contribuir con la alfabetización digital",
            "icons": ["chalkboard-user-solid", "book-solid"]
        },
        {
            "title": "Optimización tecnológica",
            "description": "Automatización en procesos de trabajo para ahorrar tiempos de ejecución de tareas",
            "icons": ["rocket-solid", "hand-holding-hand-solid"]
        },
    ]
}