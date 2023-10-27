const servicesInfo = {
    "info": [
        {
            "title": "Mantenimiento y armado de PC",
            "description": "Armado de pc y reciclado de hardware",
            "icons": ["fa-solid fa-computer", "fa-solid fa-screwdriver-wrench"]
        },
        {
            "title": "Clases de internet avanzado",
            "description": "Imparto clases particulares a adultos mayores para contribuir con la alfabetización digital",
            "icons": ["fa-solid fa-chalkboard-user", "fa-solid fa-book"]
        },
        {
            "title": "Optimización tecnológica",
            "description": "Automatización en procesos de trabajo para ahorrar tiempos de ejecución de tareas",
            "icons": ["fa-solid fa-rocket", "fa-solid fa-hand-holding-dollar"]
        },
    ]
}

const services = document.querySelector('.services');

const databaseServices = servicesInfo.info

function addCardServicesInfo() {
    databaseServices.forEach(item => {
        createCardServicesInfo(item.title, item.description, item.icons)
    })
}

function createCardServicesInfo(title, description, icons) {
    const div = document.createElement("div")
    div.setAttribute("class", "section__box mw-500 relative p-05 m-0-auto")

    const createDivWithClass = (className) => {
        const newDiv = document.createElement("div");
        newDiv.className = className;
        return newDiv;
    };

    const divLeftTop = createDivWithClass("bg-principal-color absolute w-50px h-50px top-0 left-0 border-radius-5");
    const divLeftTopOffset = createDivWithClass("bg-black absolute w-100 h-100 topOffset leftOffset border-radius-5");
    divLeftTop.appendChild(divLeftTopOffset);

    const divRightBottom = createDivWithClass("bg-principal-color absolute w-50px h-50px zindex-1 right-0 bottom-0 border-radius-5");
    const divRightBottomOffset = createDivWithClass("bg-black absolute w-100 h-100 bottomOffset rightOffset border-radius-5");
    divRightBottom.appendChild(divRightBottomOffset);

    const divContainer = document.createElement("div")
    divContainer.setAttribute("class", "relative zindex-1 d-flex flex-column p-1 align-center")
    const h2 = document.createElement("h2")
    h2.setAttribute("class", "text-center")
    const h2Text = document.createTextNode(`${title}`)
    h2.appendChild(h2Text)

    const p = document.createElement("p")
    p.setAttribute("class", "section__description text-center")
    const pText = document.createTextNode(`${description}`)
    p.appendChild(pText)

    const divIcons = document.createElement("div")
    divIcons.setAttribute("class", "section__icons d-flex gap-05")

    divContainer.append(h2, divIcons, p)

    for (let i = 0; i < icons.length; i++) {
        const icon = document.createElement("i")
        icon.setAttribute("class", `${icons[i]} fa-2xl`)
        divIcons.appendChild(icon)
    }

    div.append(divLeftTop, divRightBottom, divContainer)
    services.appendChild(div)
}

addCardServicesInfo()