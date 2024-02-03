function createCardPortfolioInfo(title,date, description, languages, thumbnail, github, webpage) {
    const div = document.createElement("div")
    div.setAttribute("class", "section__box relative d-grid align-end border-radius-5 gap-05 bg-dark-gray opacityEffect")

    const chevronTopLeft = createSVG("chevron-top-left")
    const chevronTopRight = createSVG("chevron-top-right")

    const h2 = document.createElement("h2")
    h2.setAttribute("class", "text-center m-0 section__title")
    const h2Text = document.createTextNode(title)
    h2.appendChild(h2Text)

    const pDate = document.createElement("p")
    pDate.setAttribute("class", "section__date text-center")
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
    img.setAttribute("alt", title)
    img.setAttribute("class", "h-100 w-100 object-fit-cover object-pos-left")
    const divGradient = document.createElement("div")
    divGradient.setAttribute("class", "gradientTransparentGray d-flex justify-center align-end h-50px absolute bottom-0 gap-05 w-100")
    aContainer.append(img, divGradient)

    const p = document.createElement("p")
    p.setAttribute("class", "section__description text-center m-0")
    const pText = document.createTextNode(description)
    p.appendChild(pText)

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
    div.append(aContainer,h2,pDate,p,aGitHub,aWebPage)
    portfolio.appendChild(div)
}