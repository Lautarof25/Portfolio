let calendlyAssetsPromise

const loadCalendlyAssets = () => {
    if (window.Calendly) return Promise.resolve()

    if (!calendlyAssetsPromise) {
        const stylesheet = document.createElement("link")
        stylesheet.href = "https://assets.calendly.com/assets/external/widget.css"
        stylesheet.rel = "stylesheet"
        stylesheet.dataset.calendlyWidget = ""
        document.head.appendChild(stylesheet)

        const script = document.createElement("script")
        script.src = "https://assets.calendly.com/assets/external/widget.js"
        script.async = true
        script.dataset.calendlyWidget = ""
        calendlyAssetsPromise = new Promise((resolve, reject) => {
            script.addEventListener("load", () => {
                if (window.Calendly) {
                    resolve()
                } else {
                    reject(new Error("Calendly no inicializó su widget."))
                }
            }, { once: true })
            script.addEventListener("error", () => {
                script.remove()
                stylesheet.remove()
                calendlyAssetsPromise = null
                reject(new Error("No se pudo cargar el widget de Calendly."))
            }, { once: true })
        })
        document.body.appendChild(script)
    }

    return calendlyAssetsPromise
}

const createCardServicesInfo = (title, description,details, icons, bookingUrl) =>{
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

    if (bookingUrl) {
        const bookingLink = document.createElement("a")
        bookingLink.href = bookingUrl
        bookingLink.target = "_blank"
        bookingLink.rel = "noopener noreferrer"
        bookingLink.className = "section__button p-1 border-radius-5 text-center hidden calendly-booking-link"
        bookingLink.textContent = "Programe una reunión conmigo"
        bookingLink.addEventListener("click", async (event) => {
            event.preventDefault()
            event.stopPropagation()

            try {
                await loadCalendlyAssets()
                window.Calendly.initPopupWidget({ url: bookingUrl })
            } catch (error) {
                console.error("No se pudo abrir el calendario de Calendly.", error)
                window.open(bookingUrl, "_blank", "noopener,noreferrer")
            }
        })
        div.appendChild(bookingLink)
    }

    services.appendChild(div)
}