function addCardPortfolioInfo() {
    databasePortfolio.forEach(item => {
        createCardPortfolioInfo(item.title, item.description, item.languages, item.thumbnail, item.github, item.webpage, item.webpage)
    })
}

function createCardPortfolioInfo(title, description, languages, thumbnail, github, webpage) {
    const div = document.createElement("div")
    div.setAttribute("class", "section__box relative d-grid place-center gap-05 bg-dark-gray")

    const chevronBottomRight = createSVG("chevron-bottom-right")
    const chevronBottomLeft = createSVG("chevron-bottom-left")
    const chevronTopRight = createSVG("chevron-top-right")
    const chevronTopLeft = createSVG("chevron-top-left")

    const h2 = document.createElement("h2")
    h2.setAttribute("class", "text-center m-0")
    const h2Text = document.createTextNode(`${title}`)
    h2.appendChild(h2Text)
    const divImg = document.createElement("a")
    divImg.setAttribute("href", webpage)
    divImg.setAttribute("target", "_blank")
    divImg.setAttribute("class", "relative w-250px")
    const img = document.createElement("img")
    img.setAttribute("src", `./src/img/portfolio/${thumbnail[0]}`)
    img.setAttribute("loading", "lazy")
    img.setAttribute("alt", `${title}`)
    img.setAttribute("class", "h-250px w-250px border-radius-5 object-cover")
    const divGradient = document.createElement("div")
    divGradient.setAttribute("class", "gradientTransparent d-flex justify-center align-end h-50px zindex-5 absolute bottom-0 gap-05 w-100")
    divImg.append(img, divGradient)

    const p = document.createElement("p")
    p.setAttribute("class", "section__description text-center m-0")
    const pText = document.createTextNode(`${description}`)
    p.appendChild(pText)

    for (let i = 0; i < languages.length; i++) {
        const icon = document.createElement("img")
        icon.setAttribute("src", `./src/img/icons/${languages[i]}.svg`)
        icon.setAttribute("class", `icon-language`)
        divGradient.appendChild(icon)
    }

    const aGitHub = document.createElement("a")
    const gitHubText = document.createTextNode("GitHub")
    aGitHub.appendChild(gitHubText)
    aGitHub.setAttribute("class", "section__button relative border-radius-5 text-center w-250px")
    aGitHub.setAttribute("href", `${github}`)
    aGitHub.setAttribute("target", `_blank`)
    const aWebPage = document.createElement("a")
    const webPageText = document.createTextNode("WebPage")
    aWebPage.appendChild(webPageText)
    aWebPage.setAttribute("class", "section__button relative border-radius-5 text-center w-250px")
    aWebPage.setAttribute("href", `${webpage}`)
    aWebPage.setAttribute("target", `_blank`)

    div.append(chevronTopLeft, chevronTopRight, chevronBottomRight, chevronBottomLeft, divImg, h2, p, aGitHub, aWebPage)
    portfolio.appendChild(div)
}

addCardPortfolioInfo()