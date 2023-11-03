const servicesInfo = {
    "info": [
        {
            "title": "Mantenimiento y armado de PC",
            "description": "Armado de pc y reciclado de hardware",
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

const databaseServices = servicesInfo.info

function addCardServicesInfo() {
    databaseServices.forEach(item => {
        createCardServicesInfo(item.title, item.description, item.icons)
    })
}

function createCardServicesInfo(title, description, icons) {
    const div = document.createElement("div")
    div.setAttribute("class", "section__box mw-500 relative p-05 m-0-auto")

    const chevronBottomLeft = createSVG("chevron-bottom-left")
    const chevronTopRight = createSVG("chevron-top-right")

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
        const icon = document.createElement("img")
        icon.setAttribute("src", `./src/img/icons/${icons[i]}.svg`)
        divIcons.appendChild(icon)
    }

    div.append(chevronTopRight, chevronBottomLeft, divContainer)
    services.appendChild(div)
}

addCardServicesInfo()