function addCardServicesInfo() {
    databaseServices.forEach(item => {
        createCardServicesInfo(item.title, item.description, item.icons)
    })
}

function createCardServicesInfo(title, description, icons) {
    const div = document.createElement("div")
    div.setAttribute("class", "section__box relative p-05 d-grid bg-dark-gray border-radius-5")

    const chevronBottomLeft = createSVG("chevron-bottom-left")
    const chevronTopRight = createSVG("chevron-top-right")

    const h2 = document.createElement("h2")
    h2.setAttribute("class", "text-center")
    const h2Text = document.createTextNode(title)
    h2.appendChild(h2Text)

    const p = document.createElement("p")
    p.setAttribute("class", "section__description text-center")
    const pText = document.createTextNode(description)
    p.appendChild(pText)

    const divIcons = document.createElement("div")
    divIcons.setAttribute("class", "section__icons d-flex justify-center gap-05")

    for (let i = 0; i < icons.length; i++) {
        const icon = document.createElement("img")
        icon.setAttribute("src", `./src/img/icons/${icons[i]}.svg`)
        divIcons.appendChild(icon)
    }
    
    div.appendChild(chevronTopRight)
    div.appendChild(chevronBottomLeft)
    div.appendChild(h2)
    div.appendChild(divIcons)
    div.appendChild(p)
    services.appendChild(div)
}

addCardServicesInfo()