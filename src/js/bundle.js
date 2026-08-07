
/* --- dom.js --- */
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
// Semantic containers
const body = $("body")
const header = $("header")
const nav = $("nav")
const about = $('.about')
const section = $("section")
const aside = $("aside")
const sectionTitlePage = $(".titlePage")
const main = $("main")
const home = $('.home')
const services = $('.services')
const projects = $('.projects')
const certificates = $('.certificates')
const footer = $("footer")
const allExceptShareButton = $$('body > *:not(.share-buttons)')
const allExceptAside = $$('body > *:not(aside)')
// Form
const name = $("#name")
const email = $("#email")
const message = $("#message")
// Navigation arrows
const buttonsNavigation = $$('.titlePage button')
const buttonUp = $('[aria-label="Previous page"]')
const buttonDown = $('[aria-label="Next page"]')
// Menu Bar
const toggleMenu = $("#toggle-menu")
const navIcons = $$(".nav img")
const faBars = $('[viewBox="0 0 448 512"]')
const links = $$('.nav a[href="#"]')
const headerLogo = $('.header__logo')
const chevronBottomRight = $('header svg.chevron-bottom-right')
const hideMenuDesktop = $("#hideMenuDesktop")
// Components 
const bgDisabled = $(".bgDisabled")
const titlePage = $('.titlePage h2')
const colorPicker = $('.color-picker')
const logo = $("#logo")
const demoMode = $('.demoMode')
const footerIcons = $$(".footer a")
const shareButtons = $$(".share-button")
const share = $(".share")
const containerShareButtons = $(".share-buttons")
const closeButton = $(".closeButton")
const radios = $$('[type="radio"]')
const allLinks = $$("a")
const allButtons = $$("button")
const freeColor = $("#freeColor")

let words = ['Lautaro', 'Exequiel', 'Fernández']
let index = 0
let currentLetter = 0
let direction = 1
const speedWriting = 250
let speedChangeWords = 1000

let activeWriteWords = true

// Cachear elemento una sola vez fuera de la función
const nameChangeElement = $('.nameChange')

function writeDeleteWords() {
    if (!nameChangeElement || !activeWriteWords) return
    
    let currentWord = words[index]
    if (direction === 1) {
        nameChangeElement.textContent = currentWord.substring(0, currentLetter)
        currentLetter++
        if (currentLetter > currentWord.length) {
            direction = -1
            setTimeout(writeDeleteWords, speedChangeWords)
        } else {
            setTimeout(writeDeleteWords, speedWriting)
        }
    } else {
        nameChangeElement.textContent = currentWord.substring(0, currentLetter)
        currentLetter--
        if (currentLetter === 0) {
            direction = 1
            index = (index + 1) % words.length
            setTimeout(writeDeleteWords, speedChangeWords)
        } else {
            setTimeout(writeDeleteWords, speedWriting / 2)
        }
    }
}

writeDeleteWords()

const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (currentIdPage() === "home") {
            activeWriteWords = true
            writeDeleteWords()
        } else {
            activeWriteWords = false
            speedChangeWords = 2000
        }
        if (currentIdPage() === "contact")
            automaticForm()
    }
})

observer.observe(home, { attributes: true })

document.getElementById("downloadCV").addEventListener("click", async (e) => {
    e.preventDefault();
    const res = await fetch(e.target.href);
    const blob = await res.blob();
    const now = new Date();
    const fecha = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}_${String(now.getHours()).padStart(2, "0")}-${String(now.getMinutes()).padStart(2, "0")}`;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `cv_fernandez_lautaro_${fecha}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
});

console.log('%c¡Bienvenidos a mi Portafolio!😊', 'background: #222; color: #ff5b02; font-size: 24px; padding: 4px; border-radius: 5px;');


/* --- menu.js --- */
const hideMenu = () => {
    allExceptAside.forEach(e => {
        e.addEventListener('click', function () {
            if (aside.classList.contains("show-aside")) {
                aside.classList.remove("show-aside")
                allExceptAside.forEach(element => {
                    element.classList.remove("blur-effect")
                })
                bgDisable(0)
            }
        })
    })
}

const bgDisable = (mode) => {
    mode === 1 ? bgDisabled.classList.remove("hidden") : bgDisabled.classList.add("hidden")
}

hideMenu()

const showMenu = () => {
    toggleMenu.addEventListener("click", function () {
        bgDisable(1)
        aside.classList.toggle("show-aside")
        aside.style.zIndex = "20"
        document.querySelector("#hideMenuDesktop").classList.remove("left-0")
        allExceptAside.forEach(element => {
            element.classList.toggle("blur-effect")
        })
    })
}

showMenu()

const hideMenuAfterClick = () => {
    links.forEach(link => {
        link.addEventListener("click", function () {
            if (window.innerWidth <= 576) {
                aside.classList.remove("show-aside")
                allExceptShareButton.forEach(element => {
                    element.classList.remove("blur-effect")
                })
            }
            allExceptAside.forEach(element => {
                element.classList.remove("blur-effect")
            })
            bgDisable(0)
        })
    })
}
hideMenuAfterClick()

const hideMenuDestktopAction = () => {
    hideMenuDesktop.addEventListener("click", () => {
        if (window.innerWidth >= 576) {
            body.classList.toggle("removePaddingLeft")
            aside.classList.toggle("hideMenuDesktop")
            document.querySelector("#hideMenuDesktop").classList.toggle("left-0")
            colorPicker.classList.toggle("color-picker-margin")
        }
    })
}
hideMenuDestktopAction()

/* --- cardsInfo.js --- */
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
            "icons": ["python", "java", "react", "node"]
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
            "title": "Landings page - Emprendedores",
            "date": "2026-08-01",
            "description": "Iniciativa para emprendedores, con el objetivo de ayudar a los que recién comienzan",
            "languages": ["html5", "css3-alt", "square-js"],
            "thumbnail": ["35d96722-71c3-4910-9285-1cfdd10d3443"],
            "github": "https://github.com/Lautarof25/Landings-Emprendedores",
            "webpage": "https://github.com/Lautarof25/Landings-Emprendedores"
        },
        {
            "title": "Proyecto Guiado - Guess the Number",
            "date": "2025-06-14",
            "description": "Una presentación sobre cómo desarrollar un juego de adivinanza",
            "languages": ["file-powerpoint-solid"],
            "thumbnail": ["4f84a8e9-f3f9-4dad-9486-49167117ede0"],
            "github": "https://github.com/Lautarof25/SlidesGoogle",
            "webpage": "https://slidesgoogle.netlify.app/"
        },/*
        {
            "title": "Quiz App - Sin terminar",
            "date": "2025-04-15",
            "description": "Una aplicación de preguntas y respuestas, hecha con IA",
            "languages": ["square-js", "html5", "css3-alt"],
            "thumbnail": ["093388c0-3477-4ee4-9e84-f14f401faf44"],
            "github": "https://q-a-app-lf25.web.app/", 
            "webpage": "https://q-a-app-lf25.web.app/"
        },*/
        ,
        {
            "title": "Desarrollo web con IA - Canva",
            "date": "2026-03-23",
            "description": "Diapositivas sobre cómo desarrollar webs con IA",
            "languages": ["file-powerpoint-solid"],
            "thumbnail": ["327b893e-1438-4e49-a671-f921de48f786"],
            "github": "https://www.canva.com/design/DAHEVSLNBdU/Af7xBzvGSmiIv1PTDtVb9w/edit?utm_content=DAHEVSLNBdU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            "webpage": "https://www.canva.com/design/DAHEVSLNBdU/Af7xBzvGSmiIv1PTDtVb9w/edit?utm_content=DAHEVSLNBdU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
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
            "details": ["Presupuesto y armado de PC a medida", "Mantenimiento lógico y físico", "Backup de datos", "Soporte técnico remoto", "Soluciones informáticas generales"],
            "icons": ["computer-solid", "screwdriver-wrench-solid"]
        },
        {
            "title": "Clases de internet avanzado",
            "description": "Imparto clases particulares a adultos mayores para contribuir con la alfabetización digital",
            "details": ["Clases de internet para aprovechar el mundo digital", "Correcta utilización de programas y aplicaciones de escritorio y celular", "Usos más frecuentes para la vida diaria"],
            "icons": ["chalkboard-user-solid", "book-solid"]
        },
        {
            "title": "Optimización tecnológica",
            "description": "Automatización en procesos de trabajo para ahorrar tiempos de ejecución de tareas",
            "details": ["Creación de planillas a medida", "Creación de mini programas para maximizar tiempos", "Asesoramiento para aprovechar tecnologías digitales al alcance"],
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

/* --- chevronCorner.js --- */
const createSVG = (className) =>{
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    svg.setAttribute("class", className)
    svg.setAttribute("viewBox", "0 0 20 20")

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
    path.setAttribute("d", "M13.25 10 6.109 2.58a.697.697 0 0 1 0-.979.68.68 0 0 1 .969 0l7.83 7.908a.697.697 0 0 1 0 .979l-7.83 7.908a.68.68 0 0 1-.969 0 .697.697 0 0 1 0-.979L13.25 10z")

    svg.appendChild(path)

    return svg
}

/* --- titlePage.js --- */
// Optimizado: cachear elemento link-active para evitar querySelector repetido
let cachedActiveLinkForTitle = document.querySelector(".link-active")

function changeTitlePage(){
    links.forEach((e=>{
        e.addEventListener("click",(function(){
            changeTitle()
        }))
    }))
}

function changeTitle(){
    // Actualizar cache solo si el elemento cambió
    if (!cachedActiveLinkForTitle || !cachedActiveLinkForTitle.classList.contains('link-active')) {
        cachedActiveLinkForTitle = document.querySelector(".link-active")
    }
    if (cachedActiveLinkForTitle && titlePage) {
        titlePage.textContent = cachedActiveLinkForTitle.textContent
    }
}

changeTitlePage();

/* --- about.js --- */
const createCardAboutInfo = (description,descriptionHidden, icons) =>{
  const div = document.createElement("div")
  div.className = "section__box relative d-grid p-05 gap-1 bg-dark-gray border-radius-5 drop-shadow opacityEffect"

  const chevronTopLeft = createSVG("chevron-top-left")
  const chevronBottomRight = createSVG("chevron-bottom-right")

  const p = document.createElement("p");
  p.setAttribute("class", "section__description text-center")
  p.textContent = description;
  const p2 = document.createElement("p");
  p2.setAttribute("class", "section__description text-center hidden")
  p2.textContent = descriptionHidden;
  const divIcons = document.createElement("div")
  divIcons.setAttribute("class", "section__icons d-flex justify-center gap-05")

  for (let j = 0; j < icons.length; j++) {
    const icon = document.createElement("img")
    icon.setAttribute("src", `./src/img/icons/${icons[j]}.svg`)
    icon.setAttribute("alt", `${icons[j]}`)
    icon.setAttribute("loading", "lazy")
    divIcons.appendChild(icon)
  }

  div.appendChild(chevronTopLeft)
  div.appendChild(chevronBottomRight)
  div.append(p,p2,divIcons)

  about.appendChild(div)
}

/* --- projects.js --- */
const createCardProjectInfo = (title,date, description, languages, thumbnail, github, webpage) =>{
    const div = document.createElement("div")
    div.setAttribute("class", "section__box relative drop-shadow d-grid align-end border-radius-5 gap-05 bg-dark-gray opacityEffect")

    const chevronTopLeft = createSVG("chevron-top-left")
    const chevronTopRight = createSVG("chevron-top-right")

    const h2 = document.createElement("h2")
    h2.setAttribute("class", "text-center m-0 section__title")
    const h2Text = document.createTextNode(title)
    h2.appendChild(h2Text)

    const p = document.createElement("p")
    p.setAttribute("class", "section__description text-center")
    const pText = document.createTextNode(description)
    p.appendChild(pText)

    const pDate = document.createElement("p")
    pDate.setAttribute("class", "section__date text-center m-0")
    const pDateText = document.createTextNode(date)
    pDate.appendChild(pDateText)

    const aContainer = document.createElement("a")
    aContainer.setAttribute("href", webpage)
    aContainer.setAttribute("target", "_blank")
    aContainer.setAttribute("class", "relative w-100 section__box__img")
    const img = document.createElement("img")
    img.setAttribute("src", `https://ucarecdn.com/${thumbnail}/-/scale_crop/531x250/-/format/auto/-/quality/smart/`)
    img.setAttribute("alt", title)
    img.setAttribute("loading", "lazy")
    img.setAttribute("decoding", "async")
    img.setAttribute("width", "531")
    img.setAttribute("height", "250")
    img.setAttribute("class", "h-100 w-100 object-fit-cover object-pos-left")
    const divGradient = document.createElement("div")
    divGradient.setAttribute("class", "gradientTransparentGray d-flex justify-center align-end h-50px absolute bottom-0 gap-05 w-100")
    aContainer.append(img, divGradient)

    for (let i = 0; i < languages.length; i++) {
        const icon = document.createElement("img")
        icon.setAttribute("src", `./src/img/icons/${languages[i]}.svg`)
        icon.setAttribute("class", `icon-language`)
        icon.setAttribute("loading", `lazy`)
        icon.setAttribute("alt", `${languages[i]}`)
        divGradient.appendChild(icon)
    }

    const aGitHub = document.createElement("a")
    const gitHubText = document.createTextNode("Repo")
    aGitHub.appendChild(gitHubText)
    aGitHub.setAttribute("class", "section__button relative border-radius-5 text-center w-100")
    aGitHub.setAttribute("href", github)
    aGitHub.setAttribute("target", `_blank`)
    const aWebPage = document.createElement("a")
    const webPageText = document.createTextNode("WebPage")
    aWebPage.appendChild(webPageText)
    aWebPage.setAttribute("class", "section__button relative border-radius-5 text-center w-100")
    aWebPage.setAttribute("href", webpage)
    aWebPage.setAttribute("target", `_blank`)

    div.appendChild(chevronTopLeft)
    div.appendChild(chevronTopRight)
    div.append(aContainer,h2,p,pDate,aGitHub,aWebPage)
    projects.appendChild(div)
}

/* --- certificates.js --- */
const createCardCertificatesInfo = (title, description, thumbnail,category, hours, year, link) =>{
  const div = document.createElement("div")
  div.setAttribute("class", "section__box pt-1 drop-shadow relative d-grid bg-dark-gray text-center opacityEffect")

  const chevronTopLeft = createSVG("chevron-top-left")
  const chevronTopRight = createSVG("chevron-top-right")

  const h3 = document.createElement("h3")
  h3.setAttribute("class", "m-0")
  const h3Text = document.createTextNode(title)
  h3.appendChild(h3Text)
  const p = document.createElement("p")
  const pText = document.createTextNode(description)
  p.appendChild(pText)
  p.setAttribute("class", "mt-0")


  const pCategory = document.createElement("p")
  const pCategoryText = document.createTextNode(`Categoría: ${category}`)
  pCategory.appendChild(pCategoryText)
  pCategory.setAttribute("class", "m-0")

  const pHours = document.createElement("p")
  const pHoursText = document.createTextNode(`Horas: ${hours}`)
  pHours.appendChild(pHoursText)
  pHours.setAttribute("class", "m-0")
  const pYear = document.createElement("p")
  const pYearText = document.createTextNode(`Año: ${year}`)
  pYear.appendChild(pYearText)
  pYear.setAttribute("class", "m-0")

  const aLink = document.createElement("a")
  const aLinkText = document.createTextNode("Link")
  aLink.appendChild(aLinkText)
  aLink.setAttribute("href", link)
  aLink.setAttribute("target", "_blank")
  aLink.setAttribute("class", "section__button w-100 text-center m-0-auto")
  const aLinkImg = document.createElement("a")
  aLinkImg.setAttribute("href", link)
  aLinkImg.setAttribute("target", "_blanket")
  aLinkImg.setAttribute("class", "p-0")
  const img = document.createElement("img")
  img.setAttribute("src", `https://ucarecdn.com/${thumbnail}/-/scale_crop/500x250/-/format/auto/-/quality/smart/`)
  img.setAttribute("loading", "lazy")
  img.setAttribute("decoding", "async")
  img.setAttribute("alt", title)
  img.setAttribute("width", "500")
  img.setAttribute("height", "250")
  img.setAttribute("class", "w-100 pt-1 object-fit-cover object-pos-center-top border-radius-top-5 d-block")
  aLinkImg.appendChild(img)

  div.append(chevronTopLeft,chevronTopRight)
  div.append(h3,p,pHours,pYear,pCategory,aLinkImg,aLink)
  certificates.appendChild(div)
}

/* --- services.js --- */
const createCardServicesInfo = (title, description,details, icons) =>{
    const div = document.createElement("div")
    div.setAttribute("class", "section__box relative p-05 d-grid bg-dark-gray border-radius-5 drop-shadow hoverCard")

    const chevronTopRight = createSVG("chevron-top-right")
    const chevronBottomLeft = createSVG("chevron-bottom-left")

    const h2 = document.createElement("h2")
    h2.setAttribute("class", "text-center")
    const h2Text = document.createTextNode(title)
    h2.appendChild(h2Text)

    const ul = document.createElement("ul")
    ul.setAttribute("class", "serviceUl hidden")
    details.forEach(detail => {
        const li = document.createElement("li")
        const liText = document.createTextNode(detail)
        li.appendChild(liText)
        ul.appendChild(li)  
    })

    const p = document.createElement("p")
    p.setAttribute("class", "section__description text-center")
    const pText = document.createTextNode(description)
    p.appendChild(pText)

    const divIcons = document.createElement("div")
    divIcons.setAttribute("class", "section__icons d-flex justify-center gap-05")

    icons.forEach(i => {
        const icon = document.createElement("img")
        icon.setAttribute("loading", `lazy`)
        icon.setAttribute("src", `./src/img/icons/${i}.svg`)
        icon.setAttribute("alt", i)
        divIcons.appendChild(icon)
    })
    
    div.appendChild(chevronTopRight)
    div.appendChild(chevronBottomLeft)
    div.append(h2, divIcons,p,ul)
    services.appendChild(div)
}

/* --- filterCheckboxes.js --- */
function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

const addCheckbox = (section,item) => {
    const sectionItem = section + item
    const input = document.createElement("input")
    const label = document.createElement("label")
    input.setAttribute("type", "checkbox")
    input.setAttribute("name", sectionItem)
    input.setAttribute("value", sectionItem)
    input.setAttribute("id", sectionItem)
    // if(item !== "2024")
        input.checked = true
    label.setAttribute("for", sectionItem)
    const labelText = document.createTextNode(item)
    label.appendChild(labelText)
    label.setAttribute("for", sectionItem)
    let inputFilter
    if(isNumber(item)){
        inputFilter = document.querySelector(`.${section} .yearCheckboxes`)
        input.setAttribute("class",section+"Year")
    }
    else {
        inputFilter = document.querySelector(`.${section} .categoryCheckboxes`)
        input.setAttribute("class",section+"Category")
    }
    inputFilter.append(input, label)
}

const dates = new Set()
const years = new Set()
const categoriesCertificates = new Set()

const getDates = ()=> {
    projectsInfo.info.forEach(item => {
        dates.add(item.date.slice(0, 4))
    })
    certificatesInfo.info.forEach(item => {
        years.add(item.year)
    })
}

const getCategories = ()=> {
    certificatesInfo.info.forEach(item => {
        categoriesCertificates.add(item.category)
    })
}

getDates()

getCategories()

const addDates = () => {
    dates.forEach(date => {
        addCheckbox("projects", date)
    })
    
    years.forEach(year => {
        addCheckbox("certificates", year)
    })
}

const addCategories = () => {    
    categoriesCertificates.forEach(category => {
        addCheckbox("certificates", category)
    })
}

addDates()
addCategories()

const checkboxesProjectsYears = $$('.projects .yearCheckboxes input[type="checkbox"]')
const checkboxesCertificatesYears = $$('.certificates .yearCheckboxes input[type="checkbox"]')
const checkboxesCertificatesCategories = $$('.certificates .categoryCheckboxes input[type="checkbox"]')
let checkboxesProjectsYearsChecked = []
let checkboxesCertificatesYearsChecked = []
let checkboxesCertificatesCategoriesChecked = []

const getCheckedDefault = () => {
    checkboxesProjectsYears.forEach(checkbox => {
        if (checkbox.checked) {
            checkboxesProjectsYearsChecked.push(checkbox.value.slice(-4))
        }
    })
    checkboxesCertificatesYears.forEach(checkbox => {
        if (checkbox.checked) {
            checkboxesCertificatesYearsChecked.push(checkbox.value.slice(-4))
        }
    })
    checkboxesCertificatesCategories.forEach(checkbox => {
        if (checkbox.checked) {
            checkboxesCertificatesCategoriesChecked.push(checkbox.id.slice(12,15))
        }
    })
}

getCheckedDefault()

const getCheckedYearUpdated = (element, array) => {
    element.forEach(ckb => {
        ckb.addEventListener('change', () => {
            let arrayDefault = [...array]
            if (ckb.checked) {
                arrayDefault.push(ckb.value.slice(-4))
            } else {
                arrayDefault = arrayDefault.filter(function (i) {
                    return i !== ckb.value.slice(-4)
                })
            }
            arrayDefault.sort((a, b) => b - a)
            
            array.length = 0
            array.push(...arrayDefault)
        })
    })
}

const getCheckedCategoriesUpdated = (element, array) => {
    element.forEach(ckb => {
        ckb.addEventListener('change', () => {
            let arrayDefault = [...array]
            if (ckb.checked) {
                arrayDefault.push(ckb.value.slice(12,15))
            } else {
                arrayDefault = arrayDefault.filter(function (i) {
                    return i !== ckb.value.slice(12,15)
                })
            }
            
            array.length = 0
            array.push(...arrayDefault)
        })
    })
}

getCheckedYearUpdated(checkboxesProjectsYears, checkboxesProjectsYearsChecked)
getCheckedYearUpdated(checkboxesCertificatesYears, checkboxesCertificatesYearsChecked)
getCheckedCategoriesUpdated(checkboxesCertificatesCategories, checkboxesCertificatesCategoriesChecked)

const filterCards = (checkboxes,section,data) =>{
    checkboxes.forEach(chk => {
        chk.addEventListener('change', () => {
            removeElements()
            // Function externa : DynamicsCards.js
            addCardInfo(section, data)
        })
    })
}

filterCards(checkboxesCertificatesYears,"certificates",certificatesInfo.info)
filterCards(checkboxesCertificatesCategories,"certificates",certificatesInfo.info)
filterCards(checkboxesProjectsYears,"projects",projectsInfo.info)

const removeElements = () => {
    const currentPage = currentIdPage() // Cachear para evitar llamar dos veces
    const sectionBoxes = $$(`.${currentPage} .section__box`)

    // Usar remove() que es más moderno y eficiente que removeChild
    sectionBoxes.forEach(function (sectionBox) {
        sectionBox.remove()
    })
}

/* --- dynamicCards.js --- */
const addCardInfo = (type, database) => {
    const container = getContainerByType(type);
    
    // Cachear elementos empty una sola vez para evitar múltiples querySelector
    let projectsEmpty = null
    let certificatesEmpty = null
    if (type === 'projects') projectsEmpty = projects.querySelector('.empty')
    if (type === 'certificates') certificatesEmpty = certificates.querySelector('.empty')

    database.forEach(item => {
        switch (type) {
            case 'about':
                createCardAboutInfo(item.description, item.descriptionHidden, item.icons)
                break
            case 'projects':
                if(checkboxesProjectsYearsChecked.includes(item.date.slice(0,4))){
                    createCardProjectInfo(item.title, item.date, item.description, item.languages, item.thumbnail, item.github, item.webpage)
                    if (projectsEmpty) projectsEmpty.classList.add('hidden')
                }
                break
            case 'certificates':
                if(checkboxesCertificatesYearsChecked.includes(item.year) && checkboxesCertificatesCategoriesChecked.includes(item.category.substring(0,3))){
                    createCardCertificatesInfo(item.title, item.institution, item.thumbnail,item.category, item.hours, item.year, item.link)
                    if (certificatesEmpty) certificatesEmpty.classList.add('hidden')
                }
                break
            case 'services':
                createCardServicesInfo(item.title, item.description,item.details, item.icons)
                break
        }
    })
    
    // Actualizar empty solo una vez después del loop
    if (type === 'projects' && projectsEmpty) {
        if (checkboxesProjectsYearsChecked.length === 0) {
            projectsEmpty.classList.remove('hidden')
        }
    }
    if (type === 'certificates' && certificatesEmpty) {
        if (checkboxesCertificatesYearsChecked.length === 0) {
            certificatesEmpty.classList.remove('hidden')
        }
    }
}

const getContainerByType = (type) => {
    switch (type) {
        case 'about':
            return about
        case 'projects':
            return projects
        case 'certificates':
            return certificates
        case 'services':
            return services
        default:
            throw new Error(`Unknown card type: ${type}`)
    }
}
addCardInfo('about', aboutInfo.info)
addCardInfo('projects', projectsInfo.info)
addCardInfo('certificates', certificatesInfo.info)
addCardInfo('services', servicesInfo.info)

/* --- linksSelector.js --- */
function activeLinkSelector(){links.forEach((i=>{i.addEventListener("click",(function(){removeAllClassesLinkActive(),addClassLinkActive(i)}))}))}function addClassLinkActive(i){i.classList.add("link-active")}function removeAllClassesLinkActive(){links.forEach((i=>i.classList.remove("link-active")))}activeLinkSelector();

/* --- form.js --- */
function waitFor(time) {
    return new Promise(resolve => setTimeout(resolve, time))
}

async function fillForm() {

    const name = "Lautaro Fernández"
    const email = "Fernandez.Lautaro@hotmail.com"
    const message = "👋​ Hi Lautaro, I really like your website!😍"

    clearFormPlaceholders()

    await fillInput("name", name, true)
    await waitFor(1000)

    await fillInput("email", email, true)
    await waitFor(1000)

    await fillInput("message", message, true)

}

async function fillInput(inputId, text, gradualTyping = false) {
    const inputElement = $(`#${inputId}`)
    inputElement.placeholder = ""

    if (gradualTyping) {
        for (let i = 0; i < text.length; i++) {
            inputElement.placeholder += text[i]
            await waitFor(100)
        }
    } else {
        inputElement.value = text
    }
}

const clearFormPlaceholders = () =>{
    const inputIds = ["name", "email", "message"]
    inputIds.forEach(id => {
        const inputElement = $(`#${id}`)
        inputElement.placeholder = ""
    })
}

const automaticForm = () =>{
    // Solo ejecutar si el formulario está vacío
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    if (nameInput && emailInput && messageInput) {
        const isFormEmpty = !nameInput.value && !emailInput.value && !messageInput.value;
        
        if (isFormEmpty) {
            setTimeout(() => {
                fillForm()
            }, 500)
        }
    }
}

const handleAutomaticForm = () =>{
    if (currentIdPage() === "contact") {
        automaticForm()
    }
}

/* --- showPage.js --- */
const linksArray = []

const getLinksId = () => {
    links.forEach(link => {
        linksArray.push(link.id)
    })
}
getLinksId()

const hidePage = (link) =>{ $(`.${link}`).classList.add('hidden') }

const hidePages = () =>{
    linksArray.forEach(link => {
        hidePage(link)
    })
}

const showPage = (link)=>{
    $(`.${link}`).classList.remove('hidden')
    // External function : cardsEffect.js
    cardsScale()
    // External function : titlePage.js
    changeTitle()
}

const changePage = () => {
    links.forEach(link => {
        link.addEventListener('click',function(){
            // Resetear scroll inmediatamente antes de cambiar
            main.scrollTop = 0
            hidePages()
            showPage(link.id)
            // Asegurar scroll en 0 después de mostrar la página
            requestAnimationFrame(() => {
                main.scrollTop = 0
            })
        })
    })
}
changePage()

/* --- navigation.js --- */
buttonDown.addEventListener('click', () => navigatePage(1))
buttonUp.addEventListener('click', () => navigatePage(-1))

const navigatePage = (direction) =>{
    // Resetear scroll inmediatamente ANTES de cambiar de página
    main.scrollTop = 0
    
    // External function : showPage.js
    hidePages()
    const index = direction === 1 ? nextPage() : prevPage()
    const currentId = linksArray[index]
    if(direction == 1){
        $(`.${currentId}`).classList.remove("downEffect","centerEffect")
        $(`.${currentId}`).classList.add("upEffect")
    }   
    else if(direction == -1){
        $(`.${currentId}`).classList.remove("upEffect","centerEffect")
        $(`.${currentId}`).classList.add("downEffect") 
    }
    direction = 0
    // External function : titlePage.js
    showPage(currentId)
    // External function : linksSelector.js
    removeAllClassesLinkActive()
    document.getElementById(currentId).classList.add('link-active')
    // External function : titlePage.js
    changeTitle()
    
    // Asegurar que el scroll esté en 0 después de mostrar la página
    requestAnimationFrame(() => {
        main.scrollTop = 0
    })
    
    cardsScale()
    
    // Keep focus on main element for keyboard navigation
    setTimeout(() => {
        main.focus()
    }, 200)
}

const nextPage = () => currentIndexPage() !== links.length-1 ? currentIndexPage() + 1 : 0

const prevPage = () =>currentIndexPage() !== 0 ? currentIndexPage() - 1 : links.length-1

const currentIndexPage = () =>linksArray.indexOf(currentIdPage())

const currentIdPage = () =>document.querySelector(".link-active").id

const scrollToTop = () => {
    // Scroll inmediato sin animación para evitar que la nueva página aparezca desde abajo
    main.scrollTop = 0
    // Usar requestAnimationFrame para asegurar que se ejecute después del render
    requestAnimationFrame(() => {
        main.scrollTop = 0
    })
}

/* --- demoMode.js --- */
let timer = 0
const idleTime = 15
let modeDemoActivity = false
let idleInterval = null // Guardar referencia para poder limpiarlo

const idleTimer = () =>{
    // Limpiar intervalo anterior si existe
    if (idleInterval) {
        clearInterval(idleInterval)
    }
    // Display the next page after a certain time of being idle
    idleInterval = setInterval(() => {
        timer++
        if (timer === idleTime) {
            resetTimerAndShowNextPage()
            modeDemoActivity = true
        }
    }, 1000)
}

idleTimer()

// TODO: create an event handler to handle when the page is in the background

const resetTimerAndShowNextPage = () =>{
    resetTimer()
    navigatePage(1)
    showDemoMode()
}

const resetTimerAndHideDemoMode = () =>{
    resetTimer()
    hideDemoModePopUp(1)
    hideCursor(0)
    modeDemoActivity = false
}

const hideCursor = (mode) => {
    mode === 0 ? body.classList.remove('hide-cursor') : body.classList.add('hide-cursor');
}

const hideDemoModePopUp = (mode) =>{
   mode === 0 ? demoMode.classList.remove('hidden') : demoMode.classList.add('hidden');
}

const showDemoMode = () =>{
    hideDemoModePopUp(0)
    hideCursor(1)
    main.scrollTo(0,0)
    // modalServices.js
    closeAllCards()
    modeDemoOn()
    setCheckboxValue(true)
}

const resetTimer = () => {
    timer = 0
}

const modeDemoOn = () => {
    const currentHeightPage = main.scrollHeight;
    const scrollDuration = idleTime * 1000; // Convert to milliseconds
    const startTime = Date.now();
    const startPosition = main.scrollTop;
    
    const easeInOutQuad = (t) => {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    };

    const smoothScroll = () => {
        if (!modeDemoActivity) return;
        
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / scrollDuration, 1);
        
        // Apply easing function
        const easedProgress = easeInOutQuad(progress);
        
        // Calculate new scroll position
        const newPosition = startPosition + (currentHeightPage - startPosition) * easedProgress;
        
        main.scrollTo({
            top: newPosition,
            left: 0,
            behavior: "auto" // Using auto for smoother animation
        });
        
        if (progress < 1) {
            requestAnimationFrame(smoothScroll);
        }
    };
    
    requestAnimationFrame(smoothScroll);
}

// Optimizado: agregar throttle a eventos que se disparan muy frecuentemente
let resetTimerTimeout = null
const throttledResetTimer = () => {
    if (resetTimerTimeout) return
    resetTimerTimeout = setTimeout(() => {
        resetTimerAndHideDemoMode()
        resetTimerTimeout = null
    }, 100) // Throttle de 100ms
}

addEventListener("mousemove", throttledResetTimer, {passive: true})
addEventListener("wheel", resetTimerAndHideDemoMode, {passive: true})
addEventListener("touchmove", throttledResetTimer, {passive: true})
addEventListener("click", resetTimerAndHideDemoMode, {passive: true})
addEventListener("keydown", (event) => {
    // Check if user is typing in a form input, textarea, or contenteditable element
    const target = event.target;
    const isTyping = target.tagName === 'INPUT' || 
                     target.tagName === 'TEXTAREA' || 
                     target.tagName === 'SELECT' ||
                     target.contentEditable === 'true' ||
                     target.isContentEditable;
    
    // If user is typing, reset timer to prevent demo mode
    if (isTyping) {
        resetTimerAndHideDemoMode();
        return;
    }
    
    resetTimerAndHideDemoMode();
})

// Add specific form activity detection
const setupFormActivityDetection = () => {
    const formInputs = document.querySelectorAll('input, textarea, select');
    
    formInputs.forEach(input => {
        // Reset timer on input events
        input.addEventListener('input', resetTimerAndHideDemoMode);
        input.addEventListener('focus', resetTimerAndHideDemoMode);
        input.addEventListener('blur', resetTimerAndHideDemoMode);
        
        // Reset timer on paste events
        input.addEventListener('paste', resetTimerAndHideDemoMode);
        
        // Reset timer on composition events (for IME input methods)
        input.addEventListener('compositionstart', resetTimerAndHideDemoMode);
        input.addEventListener('compositionend', resetTimerAndHideDemoMode);
    });
};

// Setup form detection when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupFormActivityDetection);
} else {
    setupFormActivityDetection();
}

/* --- shareButtons.js --- */
let countClicks = 0
const clickHandler = () =>{
  countClicks++
  if (countClicks === 10) {
    allExceptShareButton.forEach((element) => {
      addBlurEffect(element,1)
    })
    openPopUp(1)

    // Eliminar el event listener después de alcanzar la condición
    document.removeEventListener('click', clickHandler)
  }
}

document.addEventListener('click', clickHandler)

const removeBlurAndClosePopUp = () => {
  closeButton.addEventListener('click', () => {
    allExceptShareButton.forEach(element => {
      element.classList.remove('blur-effect')
    })
    openPopUp(0)
    bgDisable(0)
  })
}

const addBlurEffect = (element,mode) => {
  mode === 1 ? element.classList.add("blur-effect") 
             : element.classList.remove("blur-effect")
}

const openPopUp = (mode) => {
  mode === 1 ? containerShareButtons.classList.remove("hidden") 
             : containerShareButtons.classList.add("hidden")
  bgDisable(1)
}

removeBlurAndClosePopUp()

const shareSocials = () => {
  shareButtons.forEach(button => {
    button.addEventListener('click', function () {
      const shareURL = 'https://lautarof25.github.io/Portfolio/'
  
      function shareOnFacebook() {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + shareURL)
      }
  
      function shareOnTwitter() {
        window.open('https://twitter.com/intent/tweet?url=' + shareURL)
      }
  
      function shareOnLinkedIn() {
        window.open('https://www.linkedin.com/shareArticle?url=' + shareURL)
      }
  
      function shareOnWhatsApp() {
        window.open('https://api.whatsapp.com/send?text=' + shareURL)
      }
  
      // Call the specific share function based on the clicked button
      switch (true) {
        case button.classList.contains('facebook'):
          shareOnFacebook()
          break
        case button.classList.contains('twitter'):
          shareOnTwitter()
          break
        case button.classList.contains('linkedin'):
          shareOnLinkedIn()
          break
        case button.classList.contains('whatsapp'):
          shareOnWhatsApp()
          break
      }
    })
  })
}
shareSocials()

const clickShareButton = () => {
  share.addEventListener('click', () => {
    allExceptShareButton.forEach((element) => {
      addBlurEffect(element,1)
    })
    openPopUp(1)
  })
}

clickShareButton()

/* --- scrollNavigation.js --- */
let topPageScrollCount = 0
let endPageScrollCount = 0
let startY
let lastScrollTime = 0
const SCROLL_THROTTLE_MS = 16 // ~60fps, muy sutil

const handleScroll = (event) => {
    // Throttle muy sutil: solo limita frecuencia sin cambiar lógica
    const now = performance.now()
    if (now - lastScrollTime < SCROLL_THROTTLE_MS) return
    lastScrollTime = now
    
    // Cachear propiedades del scroll para evitar múltiples accesos
    const scrollTop = main.scrollTop
    const clientHeight = main.clientHeight
    const scrollHeight = main.scrollHeight
    
    const isScrollDown = event.deltaY > 0
    const scrollPosition = scrollTop + clientHeight + 2;
    const scrollPositionTop = scrollTop;
    const isAtTheEndOfMain = scrollPosition >= scrollHeight
    
    if(isAtTheEndOfMain){
        isScrollDown ? endPageScrollCount++ : endPageScrollCount--
        if(endPageScrollCount > 5){
            navigatePage(1)    
            endPageScrollCount = 0
            topPageScrollCount = 0
        }
    }
    if(scrollPositionTop === 0){
        isScrollDown ? topPageScrollCount-- : topPageScrollCount++
        if(topPageScrollCount > 5){
            navigatePage(-1)    
            topPageScrollCount = 0
            endPageScrollCount = 0
        }
    }
}

const handleTouchStart = (event) => {
    startY = event.touches[0].clientY
}

const handleTouchMove = (event) => {
    const currentY = event.touches[0].clientY
    startY > currentY ? endPageScrollCount++ : topPageScrollCount++

    // Cachear propiedades para evitar múltiples accesos
    const scrollTop = main.scrollTop
    const clientHeight = main.clientHeight
    const scrollHeight = main.scrollHeight
    const scrollPosition = scrollTop + clientHeight + 1;
    const scrollPositionTop = scrollTop;
    const isAtTheEnd = scrollPosition >= scrollHeight

    if (isAtTheEnd) {
        startY > currentY ? endPageScrollCount++ : endPageScrollCount--
        if (endPageScrollCount > 8) {
            endPageScrollCount = 0
            topPageScrollCount = 0
            navigatePage(1)
        }
    }

    if (scrollPositionTop === 0) {
        startY > currentY ? topPageScrollCount-- : topPageScrollCount++
        if(topPageScrollCount > 8){
            topPageScrollCount = 0
            endPageScrollCount = 0
            navigatePage(-1)
        }
    }
}

// Keyboard navigation

const scrollKeyboard = (event) =>{
    // Check if user is typing in a form input, textarea, or contenteditable element
    const target = event.target;
    const isTyping = target.tagName === 'INPUT' || 
                     target.tagName === 'TEXTAREA' || 
                     target.tagName === 'SELECT' ||
                     target.contentEditable === 'true' ||
                     target.isContentEditable;
    
    // If user is typing, don't handle navigation
    if (isTyping) {
        return;
    }
    
    const ctrlKey = event.ctrlKey || event.metaKey;
    
    // Navigation with Ctrl + arrows (existing functionality)
    if (ctrlKey && event.key === 'ArrowDown') {
        navigatePage(1)
    }
    if (ctrlKey && event.key === 'ArrowUp') {
        navigatePage(-1)
    }
    
    // Direct navigation with arrow keys (faster than scroll simulation)
    if (event.key === 'ArrowDown') {
        const scrollPosition = main.scrollTop + main.clientHeight + 2;
        const totalHeight = main.scrollHeight;
        const isAtTheEndOfMain = scrollPosition >= totalHeight
        
        if (isAtTheEndOfMain) {
            endPageScrollCount += 3; // Increment faster for keyboard
            if (endPageScrollCount > 2) { // Lower threshold for keyboard
                navigatePage(1)
                endPageScrollCount = 0
                topPageScrollCount = 0
            }
        } else {
            // If not at the end, just scroll down normally
            const scrollEvent = new WheelEvent('wheel', {
                deltaY: 100,
                bubbles: true
            });
            main.dispatchEvent(scrollEvent);
        }
    }
    
    if (event.key === 'ArrowUp') {
        const scrollPositionTop = main.scrollTop;
        
        if (scrollPositionTop === 0) {
            topPageScrollCount += 3; // Increment faster for keyboard
            if (topPageScrollCount > 2) { // Lower threshold for keyboard
                navigatePage(-1)
                topPageScrollCount = 0
                endPageScrollCount = 0
            }
        } else {
            // If not at the top, just scroll up normally
            const scrollEvent = new WheelEvent('wheel', {
                deltaY: -100,
                bubbles: true
            });
            main.dispatchEvent(scrollEvent);
        }
    }
}

// Add event listeners
document.addEventListener('keydown', scrollKeyboard,{passive: true})
main.addEventListener("wheel", handleScroll,{passive: true})
document.addEventListener("touchstart", handleTouchStart,{passive: true})
document.addEventListener("touchmove", handleTouchMove,{passive: true})

// Ensure main element can receive focus and handle keyboard events
main.setAttribute('tabindex', '0')

// Only set focus on main when no form element is focused
const shouldFocusMain = () => {
    const activeElement = document.activeElement;
    const isFormElement = activeElement.tagName === 'INPUT' || 
                         activeElement.tagName === 'TEXTAREA' || 
                         activeElement.tagName === 'SELECT' ||
                         activeElement.contentEditable === 'true' ||
                         activeElement.isContentEditable;
    
    return !isFormElement;
};

main.addEventListener('focus', () => {
    // Focus is already handled by tabindex
})

main.addEventListener('blur', (event) => {
    // Only refocus main if the new focus target is not a form element
    // and if we're not switching to another form element
    setTimeout(() => {
        if (shouldFocusMain()) {
            main.focus();
        }
    }, 10);
})

// Set initial focus on main element when page loads
document.addEventListener('DOMContentLoaded', () => {
    main.focus()
})

// Also set focus when window gains focus, but only if no form is focused
window.addEventListener('focus', () => {
    if (shouldFocusMain()) {
        main.focus()
    }
})

/* --- colorPicker.js --- */
const handleRadioChange = (radio) => {
  if (radio.value === "default-color") {
    body.style.setProperty("--principal-color", "#ff5b02")
    body.style.cursor = `url("./src/img/cursor.cur") 4 12, auto`
    document.querySelector("link[rel~='icon']").href = "./src/img/iconweb.ico"
  } else {
    body.style.setProperty("--principal-color", radio.value)
    body.style.cursor = `url("./src/img/cursor${radio.value}.cur") 4 12, auto`
    document.querySelector("link[rel~='icon']").href = `./src/img/${radio.value}.ico`
  }
}

const handleCustomizeColor = () => {
  // Si no existe el color libre (freeColor) porque se redujeron las opciones, salir.
  if (!freeColor) return
  freeColor.addEventListener("input", () => {
    body.style.setProperty("--principal-color", `${freeColor.value}`)
    body.style.cursor = "default"
  })
}

handleCustomizeColor()

const hoverColorPicker = () => {
  colorPicker.addEventListener("mouseover", function () {
    colorPicker.style.bottom = "-80px"
  })
  colorPicker.addEventListener("mouseout", function () {
    colorPicker.style.bottom = "-155px"
  })
}

hoverColorPicker()

const handleColorAndHover = () => {
  radios.forEach(radio => {
    radio.addEventListener("change", () => {
      handleRadioChange(radio)
    })
    radio.addEventListener("focus", () => {
      colorPicker.style.bottom = "-80px"
    })
    radio.addEventListener("focusout", () => {
      colorPicker.style.bottom = "-155px"
    })
  })
}
handleColorAndHover()

/* --- backgroundSound.js --- */
document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("audio")
    audio.volume = 0.2
    audio.load()

    const playButton = document.querySelector(".sound")

    playButton.addEventListener("click", function() {
      if (audio.paused) {
          audio.play()
          playButton.textContent = "►"
      } else {
          audio.pause()
        playButton.textContent = "||"
      }
  })
})

/* --- cardsEffect.js --- */
const cardsScale = () =>{
    if(currentIdPage() !== "home" && currentIdPage() !== "contact"){
        const boxesCard = $$(`main .${currentIdPage()} .section__box`)
        setTimeout(() => {
            boxesCard.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add("scale","box-shadow")
                    setTimeout(() => {
                        card.classList.remove("scale","box-shadow")
                    }, 500)
                }, 100 * index)
            });
        }, 1500);
    }
}

/* --- modalServices.js --- */
const cardsService = $$(".services .section__box")
const closeCardService = $(".closeCardService")

const closeAllCards = () => {
    // Optimizado: solo procesar cards que están abiertas
    cardsService.forEach(card => {
        if (card.classList.contains("modalUp")) {
            closeModal(card)
        }
    })
    currentOpenCard = null
}

const closeModal = (card) => {
    // Solo cerrar si la card está realmente abierta
    if (!card.classList.contains("modalUp")) return
    
    closeCardServiceClick(1)
    card.children[5].classList.add("hidden")
    card.classList.remove("modalUp", "opacityEffect")
    card.classList.add("hoverCard")
    bodyOpacityEffect(0)
}

const showModal = (card) => {
    card.classList.add("modalUp", "opacityEffect")
    closeCardServiceClick(0)
    card.children[5].classList.remove("hidden")
    card.classList.remove("hoverCard")
    bodyOpacityEffect(1)
    card.style.cursor = "default"
}

const closeCardServiceClick = (mode) => {
    mode === 1 ? closeCardService.classList.add("hidden")
        : closeCardService.classList.remove("hidden")
}

const bodyOpacityEffect = (mode) => {
    mode === 1 ? body.classList.add("opacityBody")
        : body.classList.remove("opacityBody")
}

// Optimizado: usar un solo listener en document con delegación en lugar de múltiples listeners
let currentOpenCard = null

const openCloseCards = () => {
    cardsService.forEach(card => {
        card.addEventListener('click', function (event) {
            // Solo cerrar todas si hay una card abierta diferente
            if (currentOpenCard && currentOpenCard !== card) {
                closeAllCards()
            }
            showModal(card)
            currentOpenCard = card
            main.scrollTo(0, 0)
            event.stopPropagation()
        })
    })
    
    // Un solo listener en document para cerrar cards al hacer click fuera
    document.addEventListener('click', function (event) {
        // Verificar si el click fue fuera de cualquier card de servicio
        const clickedCard = event.target.closest('.services .section__box')
        if (!clickedCard && currentOpenCard) {
            closeAllCards()
            currentOpenCard = null
        }
    })
}

openCloseCards()

/* --- cardsSlider.js --- */
const cards = $$(".about .section__box")
const radioContainer = $("#radioContainer")
const leftButton = $("#leftButton")
const rightButton = $("#rightButton")

const addRadio = (index) => {
  const label = document.createElement("label")
  const input = document.createElement("input")
  input.setAttribute("type", "radio")
  input.setAttribute("name", "options")
  input.setAttribute("id", `radio${index}`)
  index === 0 ? (input.checked = true) : null
  label.appendChild(input)
  radioContainer.appendChild(label)
}

const checkFirstCheckbox = () => {
  cards.forEach((card, index) => {
    if (index !== 0) {
      card.style.display = "none"
    }
    addRadio(index)
  })
}

checkFirstCheckbox()

const dynamicRadios = $$("input[name='options']")

const checkChecked = () => {
  for (let i = 0; i < dynamicRadios.length; i++) {
    if (dynamicRadios[i].checked) {
      return i
    }
  }
  return 0 
}

const sliderActions = () => {
  leftButton.addEventListener("click", () => {
    const currentIndex = checkChecked()
    const newIndex = currentIndex === 0 ? dynamicRadios.length - 1 : currentIndex - 1
    dynamicRadios[newIndex].checked = true
    toggleCards(newIndex,"leftEffect")
  })

  rightButton.addEventListener("click", () => {
    const currentIndex = checkChecked()
    const newIndex = currentIndex === dynamicRadios.length - 1 ? 0 : currentIndex + 1
    dynamicRadios[newIndex].checked = true
    toggleCards(newIndex,"rightEffect")
  })

  dynamicRadios.forEach((radio, index) => {
    radio.addEventListener("click", () => {
      dynamicRadios[index].checked = true
      toggleCards(index,"opacityEffect")
    })
  })
}

sliderActions()

const toggleCards = (index,effect) => {
  cards.forEach((card, i) => {
    card.style.display = i === index ? "grid" : "none"
    card.classList.remove("rightEffect","leftEffect","opacityEffect")
    card.classList.add(effect)
  })
}

// Cachear elemento para evitar querySelector repetido
const containerButtons = document.querySelector(".container__buttons")

const showAllCards = (activate) => {
  if(activate){
    cards.forEach(card => {
      card.style.display = "block"
    })
    if (containerButtons) containerButtons.style.display = "none"
    about.classList.add("grid-template-auto")
  }else {
    cards.forEach((card,i)=> {
      if(i !== 0)
        card.style.display = "none"
    })
    if (containerButtons) containerButtons.style.display = "grid"
    about.classList.remove("grid-template-auto")
  }
}

const grillAboutCheckbox = $("#grillAboutCheckbox")

const cardsShowActions = () => {
  grillAboutCheckbox.addEventListener("change", ()=>{
    if(grillAboutCheckbox.checked){
      showAllCards(true)
    }else {
      showAllCards(false)
    }
  })
}

const setCheckboxValue = (value) => {
  grillAboutCheckbox.checked = value;

  const changeEvent = new Event("change")
  grillAboutCheckbox.dispatchEvent(changeEvent)
}

cardsShowActions()

setCheckboxValue(true)
